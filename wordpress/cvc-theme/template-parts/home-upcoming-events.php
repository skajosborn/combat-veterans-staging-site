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
				<a
					class="cvc-hero-event-card"
					href="<?php echo esc_url( $event['url'] ); ?>"
					<?php echo ! empty( $event['external'] ) ? ' target="_blank" rel="noopener noreferrer"' : ''; ?>
				>
					<div class="cvc-hero-event-card__media">
						<img
							src="<?php echo esc_url( cvc_img( $event['image'] ) ); ?>"
							alt="<?php echo esc_attr( $event['title'] ); ?>"
							loading="lazy"
						/>
					</div>
					<div class="cvc-hero-event-card__body">
						<p class="cvc-hero-event-card__date"><?php echo esc_html( $event['date_label'] ); ?></p>
						<h3 class="cvc-hero-event-card__title"><?php echo esc_html( $event['title'] ); ?></h3>
						<?php if ( ! empty( $event['location'] ) ) : ?>
							<p class="cvc-hero-event-card__location"><?php echo esc_html( $event['location'] ); ?></p>
						<?php endif; ?>
					</div>
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
