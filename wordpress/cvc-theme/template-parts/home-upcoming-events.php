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
				$month = isset( $event['date_parts']['month'] ) ? $event['date_parts']['month'] : '';
				$day   = isset( $event['date_parts']['day'] ) ? $event['date_parts']['day'] : '';
				$year  = isset( $event['date_parts']['year'] ) ? $event['date_parts']['year'] : '';
				$title_display = preg_replace( '/^\d{4}\s+/', '', $event['title'] );
				?>
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
						<div class="cvc-hero-event-card__shade" aria-hidden="true"></div>
						<div class="cvc-hero-event-card__meta">
							<div class="cvc-hero-event-card__datebox" aria-label="<?php echo esc_attr( $event['date_label'] ); ?>">
								<span class="cvc-hero-event-card__datebox-month"><?php echo esc_html( $month ); ?></span>
								<span class="cvc-hero-event-card__datebox-day"><?php echo esc_html( $day ); ?></span>
								<span class="cvc-hero-event-card__datebox-year"><?php echo esc_html( $year ); ?></span>
							</div>
							<div class="cvc-hero-event-card__copy">
								<h3 class="cvc-hero-event-card__title"><?php echo esc_html( $title_display ); ?></h3>
								<?php if ( ! empty( $event['location'] ) ) : ?>
									<p class="cvc-hero-event-card__location">
										<span class="cvc-hero-event-card__pin" aria-hidden="true">
											<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
										</span>
										<span><?php echo esc_html( $event['location'] ); ?></span>
									</p>
								<?php endif; ?>
							</div>
						</div>
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
