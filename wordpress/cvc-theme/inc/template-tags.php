<?php
/**
 * Template tags and partials.
 *
 * @package CVC_Theme
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Render a section title (matches Next.js SectionTitle — blueprint layout).
 */
function cvc_section_title( $args ) {
	$args = wp_parse_args(
		$args,
		array(
			'title'    => '',
			'tag'      => 'h2',
			'size'     => 'page',
			'align'    => 'center',
			'subtitle' => '',
			'class'    => '',
		)
	);

	if ( empty( $args['title'] ) ) {
		return;
	}

	$allowed_tags = array( 'h1', 'h2', 'h3', 'h4' );
	$tag          = in_array( $args['tag'], $allowed_tags, true ) ? $args['tag'] : 'h2';
	$align_class  = 'left' === $args['align'] ? 'cvc-section-title--left' : 'cvc-section-title--center';
	$size_class   = 'cvc-section-title--' . sanitize_html_class( $args['size'] );

	?>
	<div class="cvc-section-title <?php echo esc_attr( $size_class . ' ' . $align_class . ' ' . $args['class'] ); ?>">
		<div class="cvc-section-title__blueprint-row">
			<span class="cvc-section-title__rule" aria-hidden="true"></span>
			<<?php echo esc_attr( $tag ); ?> class="cvc-section-title__heading">
				<?php echo esc_html( $args['title'] ); ?>
			</<?php echo esc_attr( $tag ); ?>>
			<span class="cvc-section-title__rule" aria-hidden="true"></span>
		</div>
		<div class="cvc-section-title__stars" aria-hidden="true">
			<span class="cvc-star">★</span><span class="cvc-star cvc-star--lg">★</span><span class="cvc-star">★</span>
		</div>
		<?php if ( ! empty( $args['subtitle'] ) ) : ?>
			<div class="cvc-section-title__subtitle">
				<?php echo wp_kses_post( $args['subtitle'] ); ?>
			</div>
		<?php endif; ?>
	</div>
	<?php
}

/**
 * Primary nav fallback when no menu assigned.
 */
function cvc_primary_nav_fallback() {
	echo '<ul class="menu cvc-nav__list">';
	foreach ( cvc_get_nav_items() as $item ) {
		printf(
			'<li><a href="%s">%s</a></li>',
			esc_url( cvc_nav_item_url( $item ) ),
			esc_html( $item['label'] )
		);
	}
	echo '</ul>';
}

/**
 * Render primary navigation (WP menu or theme fallback).
 */
function cvc_render_primary_nav_menu() {
	$menu_items = array();
	if ( has_nav_menu( 'primary' ) ) {
		$locations = get_nav_menu_locations();
		if ( ! empty( $locations['primary'] ) ) {
			$menu_items = wp_get_nav_menu_items( (int) $locations['primary'] );
		}
	}

	echo '<nav class="cvc-nav__menu-wrap" aria-label="' . esc_attr__( 'Main', 'cvc-theme' ) . '">';

	if ( $menu_items && ! is_wp_error( $menu_items ) ) {
		wp_nav_menu(
			array(
				'theme_location' => 'primary',
				'container'      => false,
				'menu_class'     => 'menu',
				'fallback_cb'    => false,
				'depth'          => 1,
			)
		);
	} else {
		cvc_primary_nav_fallback();
	}

	echo '</nav>';
}

/**
 * Inner page wrapper start.
 */
function cvc_page_open() {
	echo '<main class="cvc-page-main"><div class="cvc-container">';
}

function cvc_page_close() {
	echo '</div></main>';
}
