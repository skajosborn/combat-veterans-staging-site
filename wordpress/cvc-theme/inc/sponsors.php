<?php
/**
 * Sponsor logos from theme assets (images/Sponsers).
 *
 * @package CVC_Theme
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

require_once get_template_directory() . '/inc/sponsor-data.php';

/**
 * @return array<int, array{name:string,src:string,website:?string}>
 */
function cvc_get_sponsor_logos() {
	$dir = get_template_directory() . '/assets/images/images/Sponsers';
	if ( ! is_dir( $dir ) ) {
		return array();
	}

	$out = array();
	foreach ( cvc_get_sponsor_sections() as $section ) {
		foreach ( $section['files'] as $file ) {
			$path = $dir . '/' . $file;
			if ( ! is_file( $path ) ) {
				continue;
			}
			$name = preg_replace( '/\.[^.]+$/', '', $file );
			$name = str_replace( array( '-', '_' ), ' ', $name );
			$out[] = array(
				'name'    => ucwords( $name ),
				'src'     => 'images/Sponsers/' . $file,
				'website' => null,
			);
		}
	}

	return $out;
}

/**
 * Sponsors grouped by section (matches Next.js sponsors page).
 *
 * @return array<int, array{id:string,title:string,sponsors:array}>
 */
function cvc_get_sponsors_by_section() {
	$dir = get_template_directory() . '/assets/images/images/Sponsers';
	$sections = array();

	foreach ( cvc_get_sponsor_sections() as $section ) {
		$sponsors = array();
		if ( is_dir( $dir ) ) {
			foreach ( $section['files'] as $file ) {
				$path = $dir . '/' . $file;
				if ( ! is_file( $path ) ) {
					continue;
				}
				$name = preg_replace( '/\.[^.]+$/', '', $file );
				$name = str_replace( array( '-', '_' ), ' ', $name );
				$sponsors[] = array(
					'name'    => ucwords( $name ),
					'src'     => 'images/Sponsers/' . $file,
					'website' => null,
				);
			}
		}
		if ( $sponsors ) {
			$sections[] = array(
				'id'       => $section['id'],
				'title'    => $section['title'],
				'sponsors' => $sponsors,
			);
		}
	}

	return $sections;
}

/**
 * @deprecated Use cvc_get_sponsors_by_section().
 * @return array{standard: array, veteran_owned: array}
 */
function cvc_get_sponsors_grouped() {
	$standard      = array();
	$veteran_owned = array();

	foreach ( cvc_get_sponsors_by_section() as $section ) {
		if ( 'veteran_owned' === $section['id'] ) {
			$veteran_owned = $section['sponsors'];
		} else {
			$standard = array_merge( $standard, $section['sponsors'] );
		}
	}

	return array(
		'standard'      => $standard,
		'veteran_owned' => $veteran_owned,
	);
}
