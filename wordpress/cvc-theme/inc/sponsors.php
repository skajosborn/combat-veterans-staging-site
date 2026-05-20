<?php
/**
 * Sponsor logos from theme assets (images/Sponsers).
 *
 * @package CVC_Theme
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * @return array<int, array{name:string,src:string,website:?string}>
 */
function cvc_get_sponsor_logos() {
	$dir = get_template_directory() . '/assets/images/images/Sponsers';
	if ( ! is_dir( $dir ) ) {
		return array();
	}

	$files = glob( $dir . '/*.{jpg,jpeg,png,gif,webp}', GLOB_BRACE );
	if ( ! $files ) {
		return array();
	}

	$out = array();
	foreach ( $files as $file ) {
		$base = basename( $file );
		$name = preg_replace( '/\.[^.]+$/', '', $base );
		$name = str_replace( array( '-', '_' ), ' ', $name );
		$out[] = array(
			'name'    => ucwords( $name ),
			'src'     => 'images/Sponsers/' . $base,
			'website' => null,
		);
	}

	usort(
		$out,
		static function ( $a, $b ) {
			return strcasecmp( $a['name'], $b['name'] );
		}
	);

	return $out;
}

/**
 * Standard vs veteran-owned sponsor groups (matches Next.js sponsors page).
 *
 * @return array{standard: array, veteran_owned: array}
 */
function cvc_get_sponsors_grouped() {
	$standard       = array();
	$veteran_owned  = array();

	foreach ( cvc_get_sponsor_logos() as $sponsor ) {
		$file = basename( $sponsor['src'] );
		if ( preg_match( '/^v\d/i', $file ) ) {
			$veteran_owned[] = $sponsor;
		} else {
			$standard[] = $sponsor;
		}
	}

	return array(
		'standard'      => $standard,
		'veteran_owned' => $veteran_owned,
	);
}
