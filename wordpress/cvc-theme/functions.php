<?php
/**
 * Combat Veterans to Careers theme functions.
 *
 * @package CVC_Theme
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

define( 'CVC_THEME_VERSION', '1.0.0' );

require get_template_directory() . '/inc/helpers.php';
require get_template_directory() . '/inc/theme-data.php';
require get_template_directory() . '/inc/sponsors.php';
require get_template_directory() . '/inc/setup.php';
require get_template_directory() . '/inc/template-tags.php';
require get_template_directory() . '/inc/page-content.php';

/**
 * Theme setup.
 */
function cvc_theme_setup() {
	load_theme_textdomain( 'cvc-theme', get_template_directory() . '/languages' );

	add_theme_support( 'title-tag' );
	add_theme_support( 'post-thumbnails' );
	add_theme_support( 'html5', array( 'search-form', 'comment-form', 'comment-list', 'gallery', 'caption', 'style', 'script' ) );
	add_theme_support( 'custom-logo', array(
		'height'      => 120,
		'width'       => 120,
		'flex-height' => true,
		'flex-width'  => true,
	) );
	add_theme_support( 'responsive-embeds' );
	add_theme_support( 'align-wide' );

	register_nav_menus(
		array(
			'primary' => __( 'Primary Menu', 'cvc-theme' ),
			'footer'  => __( 'Footer Menu', 'cvc-theme' ),
		)
	);
}
add_action( 'after_setup_theme', 'cvc_theme_setup' );

/**
 * Enqueue styles and scripts.
 */
function cvc_theme_assets() {
	$uri = get_template_directory_uri();
	$dir = get_template_directory();

	wp_enqueue_style(
		'cvc-google-fonts',
		'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap',
		array(),
		null
	);

	wp_enqueue_style(
		'cvc-theme-main',
		$uri . '/assets/css/main.css',
		array( 'cvc-google-fonts' ),
		filemtime( $dir . '/assets/css/main.css' )
	);

	wp_enqueue_script(
		'cvc-theme',
		$uri . '/assets/js/theme.js',
		array(),
		filemtime( $dir . '/assets/js/theme.js' ),
		true
	);
}
add_action( 'wp_enqueue_scripts', 'cvc_theme_assets' );

/**
 * Body classes.
 */
function cvc_theme_body_classes( $classes ) {
	$classes[] = 'cvc-theme';
	return $classes;
}
add_filter( 'body_class', 'cvc_theme_body_classes' );

/**
 * Content width for embeds.
 */
function cvc_theme_content_width() {
	$GLOBALS['content_width'] = 1280;
}
add_action( 'after_setup_theme', 'cvc_theme_content_width', 0 );

/**
 * Strip legacy items from primary nav (Vision, Donate — donate is a separate button).
 */
function cvc_filter_primary_nav_menu_objects( $items, $args ) {
	$is_primary = is_object( $args )
		&& ! empty( $args->theme_location )
		&& 'primary' === $args->theme_location;

	if ( ! $is_primary ) {
		return $items;
	}

	foreach ( $items as $key => $item ) {
		$title = strtolower( trim( (string) $item->title ) );
		$url   = (string) $item->url;

		if ( ! cvc_show_vision() && false !== strpos( $url, '#vision' ) ) {
			unset( $items[ $key ] );
			continue;
		}

		if ( 'donate' === $title || false !== strpos( $url, '/donate' ) ) {
			unset( $items[ $key ] );
		}
	}

	return array_values( $items );
}
add_filter( 'wp_nav_menu_objects', 'cvc_filter_primary_nav_menu_objects', 10, 2 );
