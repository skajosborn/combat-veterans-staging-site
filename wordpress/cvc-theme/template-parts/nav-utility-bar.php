<?php
/**
 * Thin utility bar above main navigation (matches Next.js NavUtilityBar).
 *
 * @package CVC_Theme
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
?>
<div class="cvc-nav-utility">
	<div class="cvc-nav-utility__inner">
		<a class="cvc-nav-utility__phone" href="<?php echo esc_url( cvc_phone_href() ); ?>">
			<svg class="cvc-nav-utility__phone-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
				<path stroke-linecap="round" stroke-linejoin="round" d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
			</svg>
			<?php echo esc_html( cvc_phone_display() ); ?>
		</a>
		<div class="cvc-nav-utility__social">
			<?php foreach ( cvc_social_links() as $link ) : ?>
				<a
					class="cvc-nav-utility__social-link"
					href="<?php echo esc_url( $link['href'] ); ?>"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="<?php echo esc_attr( $link['label'] ); ?>"
				>
					<?php echo cvc_social_icon_svg( $link['label'] ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
				</a>
			<?php endforeach; ?>
		</div>
	</div>
</div>
