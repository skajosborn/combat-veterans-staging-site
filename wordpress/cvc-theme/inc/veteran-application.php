<?php
/**
 * Veteran application form (React bundle + REST submission).
 *
 * @package CVC_Theme
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Whether the current request is the veteran application page.
 */
function cvc_is_veteran_application_page() {
	return is_page_template( 'page-veteran-application.php' ) || is_page( 'veteran-application' );
}

/**
 * Enqueue the veteran application React bundle on its page only.
 */
function cvc_enqueue_veteran_application_assets() {
	if ( ! cvc_is_veteran_application_page() ) {
		return;
	}

	$uri = get_template_directory_uri();
	$dir = get_template_directory();

	$css = $dir . '/assets/css/veteran-application.css';
	$js  = $dir . '/assets/js/veteran-application.js';

	if ( ! file_exists( $css ) || ! file_exists( $js ) ) {
		return;
	}

	wp_enqueue_style(
		'cvc-veteran-application',
		$uri . '/assets/css/veteran-application.css',
		array( 'cvc-theme-main' ),
		filemtime( $css )
	);

	wp_enqueue_script(
		'cvc-veteran-application',
		$uri . '/assets/js/veteran-application.js',
		array(),
		filemtime( $js ),
		true
	);

	wp_localize_script(
		'cvc-veteran-application',
		'cvcVeteranApplication',
		array(
			'submitUrl'         => esc_url_raw( admin_url( 'admin-ajax.php' ) ),
			'ajaxAction'        => 'cvc_veteran_application',
			'missionUrl'        => esc_url_raw( cvc_page_url( 'mission' ) ),
			'successStoriesUrl' => esc_url_raw( cvc_page_url( 'success-stories' ) ),
			'nonce'             => wp_create_nonce( 'cvc_veteran_application' ),
		)
	);
}
add_action( 'wp_enqueue_scripts', 'cvc_enqueue_veteran_application_assets', 20 );

/**
 * Build plain-text body from submitted fields (mirrors Next.js API route).
 *
 * @param array<string, mixed> $params POST fields.
 * @param array<string, mixed> $files  Uploaded files.
 */
function cvc_veteran_application_build_body( $params, $files ) {
	$lines = array();
	$keys  = array_unique( array_merge( array_keys( $params ), array_keys( $files ) ) );
	sort( $keys );

	foreach ( $keys as $key ) {
		if ( isset( $files[ $key ] ) && is_array( $files[ $key ] ) && ! empty( $files[ $key ]['name'] ) ) {
			$size = isset( $files[ $key ]['size'] ) ? (int) $files[ $key ]['size'] : 0;
			if ( $size > 0 ) {
				$lines[] = sprintf(
					'%s: [attached: %s, %d bytes]',
					$key,
					$files[ $key ]['name'],
					$size
				);
			}
			continue;
		}

		if ( ! isset( $params[ $key ] ) ) {
			continue;
		}

		$value = $params[ $key ];
		if ( is_array( $value ) ) {
			$strings = array_values( array_filter( array_map( 'strval', $value ), 'strlen' ) );
			if ( 1 === count( $strings ) ) {
				$lines[] = $key . ': ' . $strings[0];
			} elseif ( count( $strings ) > 1 ) {
				$lines[] = $key . ': ' . implode( ', ', $strings );
			}
		} elseif ( is_string( $value ) && '' !== $value ) {
			$lines[] = $key . ': ' . $value;
		}
	}

	return implode( "\n", $lines );
}

/**
 * Send veteran application email via Resend.
 *
 * @param array<string, mixed> $params POST fields.
 * @param array<string, mixed> $files  Uploaded files.
 * @return array{ok:bool,error?:string,id?:string|null}
 */
function cvc_send_veteran_application_email( $params, $files ) {
	$api_key = defined( 'CVC_RESEND_API_KEY' ) ? CVC_RESEND_API_KEY : getenv( 'RESEND_API_KEY' );
	$from    = defined( 'CVC_RESEND_FROM_EMAIL' ) ? CVC_RESEND_FROM_EMAIL : getenv( 'RESEND_FROM_EMAIL' );

	if ( ! $api_key || ! $from ) {
		return array(
			'ok'    => false,
			'error' => 'Email is not configured. Set CVC_RESEND_API_KEY and CVC_RESEND_FROM_EMAIL in wp-config.php (or RESEND_API_KEY / RESEND_FROM_EMAIL in the environment).',
		);
	}

	$max_total = 24 * 1024 * 1024;
	$total     = 0;
	$attachments = array();

	foreach ( $files as $key => $file ) {
		if ( ! is_array( $file ) || empty( $file['tmp_name'] ) || ! is_uploaded_file( $file['tmp_name'] ) ) {
			continue;
		}
		$size = (int) ( $file['size'] ?? 0 );
		if ( $size <= 0 ) {
			continue;
		}
		$total += $size;
		$name       = isset( $file['name'] ) ? (string) $file['name'] : 'upload';
		$safe_base  = preg_replace( '/[^\w.\-]+/', '_', $name ) ?: 'upload';
		$content    = file_get_contents( $file['tmp_name'] ); // phpcs:ignore WordPress.WP.AlternativeFunctions.file_get_contents_file_get_contents
		if ( false === $content ) {
			continue;
		}
		$attachments[] = array(
			'filename' => $key . '-' . $safe_base,
			'content'  => base64_encode( $content ), // phpcs:ignore WordPress.PHP.DiscouragedPHPFunctions.obfuscation_base64_encode
		);
	}

	if ( $total > $max_total ) {
		return array(
			'ok'    => false,
			'error' => 'Total file size must be 24MB or less.',
		);
	}

	$veteran_name = isset( $params['veteranName'] ) ? trim( (string) $params['veteranName'] ) : 'Unknown';
	$applicant    = isset( $params['emailAddress'] ) ? trim( (string) $params['emailAddress'] ) : '';
	$notify_to    = defined( 'CVC_VETERAN_APPLICATION_NOTIFY_TO' )
		? CVC_VETERAN_APPLICATION_NOTIFY_TO
		: ( getenv( 'VETERAN_APPLICATION_NOTIFY_TO' ) ?: 'sara@combatveteranstocareers.org' );

	$payload = array(
		'from'    => $from,
		'to'      => array( $notify_to ),
		'subject' => 'Veteran application: ' . $veteran_name,
		'text'    => cvc_veteran_application_build_body( $params, $files ),
	);

	if ( $applicant && false !== strpos( $applicant, '@' ) ) {
		$payload['reply_to'] = $applicant;
	}

	if ( $attachments ) {
		$payload['attachments'] = $attachments;
	}

	$response = wp_remote_post(
		'https://api.resend.com/emails',
		array(
			'headers' => array(
				'Authorization' => 'Bearer ' . $api_key,
				'Content-Type'  => 'application/json',
			),
			'body'    => wp_json_encode( $payload ),
			'timeout' => 60,
		)
	);

	if ( is_wp_error( $response ) ) {
		return array(
			'ok'    => false,
			'error' => 'Could not send application. Please try again later.',
		);
	}

	$code = (int) wp_remote_retrieve_response_code( $response );
	$body = json_decode( (string) wp_remote_retrieve_body( $response ), true );

	if ( $code < 200 || $code >= 300 ) {
		$message = is_array( $body ) && ! empty( $body['message'] ) ? (string) $body['message'] : 'Could not send application. Please try again later.';
		return array(
			'ok'    => false,
			'error' => $message,
		);
	}

	return array(
		'ok' => true,
		'id' => is_array( $body ) && isset( $body['id'] ) ? $body['id'] : null,
	);
}

/**
 * AJAX handler for veteran application submissions.
 */
function cvc_ajax_veteran_application() {
	check_ajax_referer( 'cvc_veteran_application', 'nonce' );

	// phpcs:ignore WordPress.Security.NonceVerification.Missing
	$params = wp_unslash( $_POST );
	// phpcs:ignore WordPress.Security.NonceVerification.Missing
	$files = $_FILES;

	unset( $params['action'], $params['nonce'] );

	$result = cvc_send_veteran_application_email( $params, $files );

	if ( empty( $result['ok'] ) ) {
		wp_send_json(
			array( 'error' => $result['error'] ?? 'Submission failed.' ),
			empty( $result['error'] ) || false !== strpos( (string) $result['error'], 'configured' ) ? 503 : 400
		);
	}

	wp_send_json(
		array(
			'ok' => true,
			'id' => $result['id'] ?? null,
		)
	);
}
add_action( 'wp_ajax_nopriv_cvc_veteran_application', 'cvc_ajax_veteran_application' );
add_action( 'wp_ajax_cvc_veteran_application', 'cvc_ajax_veteran_application' );
