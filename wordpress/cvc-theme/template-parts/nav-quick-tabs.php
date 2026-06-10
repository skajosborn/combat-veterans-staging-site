<?php
/**
 * Three quick-link tabs below the main navbar.
 *
 * @package CVC_Theme
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$current_slug = is_page() ? get_post_field( 'post_name', get_queried_object_id() ) : '';
?>
<nav class="cvc-nav-tabs" aria-label="<?php esc_attr_e( 'Quick program links', 'cvc-theme' ); ?>">
	<div class="cvc-nav-tabs__inner">
		<?php foreach ( cvc_get_nav_quick_tabs() as $tab ) : ?>
			<?php
			$url    = cvc_page_url( $tab['slug'] );
			$active = $current_slug === $tab['slug'];
			?>
			<a
				class="cvc-nav-tabs__link<?php echo $active ? ' is-active' : ''; ?>"
				href="<?php echo esc_url( $url ); ?>"
				<?php echo $active ? ' aria-current="page"' : ''; ?>
			>
				<span class="cvc-nav-tabs__label cvc-nav-tabs__label--short"><?php echo esc_html( $tab['short'] ?? $tab['label'] ); ?></span>
				<span class="cvc-nav-tabs__label cvc-nav-tabs__label--full"><?php echo esc_html( $tab['label'] ); ?></span>
			</a>
		<?php endforeach; ?>
	</div>
</nav>
