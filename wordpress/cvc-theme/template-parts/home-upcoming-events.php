<?php
/**
 * Homepage upcoming events (matches Next.js UpcomingEvents).
 *
 * @package CVC_Theme
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$events = cvc_get_upcoming_event_cards();
?>
<div id="upcoming-events" class="cvc-hero-events">
	<div class="cvc-container cvc-hero-events__inner">
		<div class="cvc-hero-events__header">
			<h2 class="cvc-hero-events__title"><?php esc_html_e( 'Upcoming Events', 'cvc-theme' ); ?></h2>
			<p class="cvc-hero-events__subtitle">
				<?php esc_html_e( 'Every event funds veteran care — come out and make a difference.', 'cvc-theme' ); ?>
			</p>
		</div>

		<div class="cvc-hero-events__grid">
			<?php foreach ( $events as $event ) : ?>
				<?php
				$accent = isset( $event['accent'] ) ? $event['accent'] : 'olive';
				?>
				<a
					class="cvc-hero-event-card cvc-hero-event-card--<?php echo esc_attr( $accent ); ?>"
					href="<?php echo esc_url( $event['url'] ); ?>"
					<?php echo ! empty( $event['external'] ) ? ' target="_blank" rel="noopener noreferrer"' : ''; ?>
				>
					<div class="cvc-hero-event-card__media">
						<img
							src="<?php echo esc_url( cvc_img( $event['image'] ) ); ?>"
							alt="<?php echo esc_attr( $event['title'] ); ?>"
							loading="lazy"
						/>
						<div class="cvc-hero-event-card__overlay">
							<p class="cvc-hero-event-card__date"><?php echo esc_html( $event['date_label'] ); ?></p>
							<h3 class="cvc-hero-event-card__title"><?php echo esc_html( $event['title'] ); ?></h3>
						</div>
					</div>
					<span class="cvc-hero-event-card__cta">
						<span><?php esc_html_e( 'Learn More', 'cvc-theme' ); ?></span>
						<span class="cvc-hero-event-card__cta-icon" aria-hidden="true">
							<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14M13 6l6 6-6 6"/></svg>
						</span>
					</span>
				</a>
			<?php endforeach; ?>
		</div>

		<p class="cvc-hero-events__more">
			<a href="<?php echo esc_url( cvc_page_url( 'events' ) ); ?>#upcoming">
				<?php esc_html_e( 'View all events', 'cvc-theme' ); ?>
			</a>
		</p>
	</div>
</div>
