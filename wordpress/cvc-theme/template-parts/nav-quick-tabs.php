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
			$url    = ! empty( $tab['url'] ) ? $tab['url'] : cvc_page_url( $tab['slug'] );
			$active = ! empty( $tab['slug'] ) && $current_slug === $tab['slug'];
			?>
			<a
				class="cvc-nav-tabs__link cvc-nav-tabs__link--<?php echo esc_attr( $tab['tone'] ?? 'red' ); ?><?php echo $active ? ' is-active' : ''; ?>"
				href="<?php echo esc_url( $url ); ?>"
				<?php echo $active ? ' aria-current="page"' : ''; ?>
			>
				<span class="cvc-nav-tabs__icon-wrap" aria-hidden="true">
					<?php echo cvc_nav_quick_tab_icon( $tab['icon'] ?? 'application' ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
				</span>
				<span class="cvc-nav-tabs__copy">
					<span class="cvc-nav-tabs__title">
						<span class="cvc-nav-tabs__label cvc-nav-tabs__label--short"><?php echo esc_html( $tab['short'] ?? $tab['label'] ); ?></span>
						<span class="cvc-nav-tabs__label cvc-nav-tabs__label--full"><?php echo esc_html( $tab['label'] ); ?></span>
					</span>
					<?php if ( ! empty( $tab['subtitle'] ) ) : ?>
						<span class="cvc-nav-tabs__subtitle"><?php echo esc_html( $tab['subtitle'] ); ?></span>
					<?php endif; ?>
				</span>
				<?php echo cvc_nav_quick_tab_chevron(); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
			</a>
		<?php endforeach; ?>
	</div>
</nav>
