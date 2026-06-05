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
 * Social profile links (matches lib/siteContact.ts).
 *
 * @return array<int, array{label: string, href: string}>
 */
function cvc_social_links() {
	return array(
		array(
			'label' => 'Facebook',
			'href'  => 'https://www.facebook.com/combatveteranstocareers',
		),
		array(
			'label' => 'X (Twitter)',
			'href'  => 'https://twitter.com/CVCToCareers',
		),
		array(
			'label' => 'LinkedIn',
			'href'  => 'https://www.linkedin.com/company/combat-veterans-to-careers',
		),
		array(
			'label' => 'YouTube',
			'href'  => 'https://www.youtube.com/@combatvets2careers',
		),
		array(
			'label' => 'Instagram',
			'href'  => 'https://www.instagram.com/combatveteranstocareers',
		),
	);
}

/**
 * Inline SVG icon for a social network label.
 */
function cvc_social_icon_svg( $label ) {
	$class = 'cvc-nav-utility__social-icon';

	switch ( $label ) {
		case 'Facebook':
			return '<svg class="' . esc_attr( $class ) . '" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07c0 4.99 3.66 9.13 8.44 9.88v-6.99H7.9v-2.89h2.54V9.41c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.89h-2.34v6.99C18.34 21.2 22 17.06 22 12.07z"/></svg>';
		case 'X (Twitter)':
			return '<svg class="' . esc_attr( $class ) . '" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>';
		case 'LinkedIn':
			return '<svg class="' . esc_attr( $class ) . '" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.062 2.062 0 114.126 0 2.062 2.062 0 01-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>';
		case 'YouTube':
			return '<svg class="' . esc_attr( $class ) . '" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>';
		case 'Instagram':
			return '<svg class="' . esc_attr( $class ) . '" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>';
		default:
			return '';
	}
}

/**
 * Check theme image exists on disk.
 */
function cvc_img_exists( $path ) {
	$path = ltrim( (string) $path, '/' );
	return is_readable( get_template_directory() . '/assets/images/' . $path );
}
