<?php
/**
 * Theme helpers.
 *
 * @package CVC_Theme
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Theme image URL (mirrors Next.js /public paths).
 *
 * @param string $path e.g. '/skills.jpg' or 'images/Sponsers/foo.jpg'.
 */
function cvc_img( $path ) {
	$path = ltrim( (string) $path, '/' );
	return get_template_directory_uri() . '/assets/images/' . $path;
}

/**
 * Permalink for a page by slug, with optional anchor.
 */
function cvc_page_url( $slug, $anchor = '' ) {
	$page = get_page_by_path( $slug );
	$url  = $page ? get_permalink( $page ) : home_url( '/' . trim( $slug, '/' ) . '/' );

	if ( $anchor ) {
		$url .= '#' . ltrim( $anchor, '#' );
	}

	return $url;
}

/**
 * Homepage section anchor.
 */
function cvc_home_url( $anchor ) {
	return home_url( '/#' . ltrim( $anchor, '#' ) );
}

/** Contact details (matches lib/siteContact.ts). */
function cvc_phone_display() {
	return '352-775-4008';
}

function cvc_phone_href() {
	return 'tel:+13527754008';
}

/**
 * Check theme image exists on disk.
 */
function cvc_img_exists( $path ) {
	$path = ltrim( (string) $path, '/' );
	return is_readable( get_template_directory() . '/assets/images/' . $path );
}
