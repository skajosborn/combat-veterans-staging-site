<?php
/**
 * Header template.
 *
 * @package CVC_Theme
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$logo_url = cvc_img( 'CVClogo.png' );
if ( has_custom_logo() ) {
	$logo_id  = get_theme_mod( 'custom_logo' );
	$logo_url = wp_get_attachment_image_url( $logo_id, 'full' );
}
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?> class="dark">
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<header class="cvc-nav" role="banner">
	<div class="cvc-nav__inner">
		<a class="cvc-nav__brand" href="<?php echo esc_url( home_url( '/' ) ); ?>">
			<img src="<?php echo esc_url( $logo_url ); ?>" alt="<?php echo esc_attr( get_bloginfo( 'name' ) ); ?>" width="40" height="40" />
			<div class="cvc-nav__brand-text">
				<strong><?php esc_html_e( 'Combat Veterans', 'cvc-theme' ); ?></strong>
				<span><?php esc_html_e( 'to Careers', 'cvc-theme' ); ?></span>
			</div>
		</a>

		<div class="cvc-nav__desktop">
			<?php cvc_render_primary_nav_menu(); ?>
			<button type="button" class="cvc-theme-toggle" id="cvc-theme-toggle" aria-label="<?php esc_attr_e( 'Toggle light/dark theme', 'cvc-theme' ); ?>">
				<?php esc_html_e( 'Theme', 'cvc-theme' ); ?>
			</button>
		</div>

		<div class="cvc-nav__mobile-tools">
			<button type="button" class="cvc-theme-toggle cvc-theme-toggle--mobile" id="cvc-theme-toggle-mobile" aria-label="<?php esc_attr_e( 'Toggle theme', 'cvc-theme' ); ?>">
				<?php esc_html_e( 'Theme', 'cvc-theme' ); ?>
			</button>
			<button type="button" class="cvc-nav__mobile-toggle" id="cvc-nav-toggle" aria-expanded="false" aria-controls="cvc-nav-mobile">
				<svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
				</svg>
			</button>
		</div>
	</div>

	<div class="cvc-nav__mobile-panel" id="cvc-nav-mobile">
		<?php cvc_render_primary_nav_menu(); ?>
	</div>
</header>

<div class="cvc-site">
