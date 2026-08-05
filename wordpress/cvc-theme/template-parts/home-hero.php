<?php
/**
 * Homepage hero (matches Next.js Hero.tsx layout).
 *
 * @package CVC_Theme
 */

$hero_img = cvc_img_exists( 'herobg2.png' )
	? 'herobg2.png'
	: ( cvc_img_exists( 'darkhero.png' )
		? 'darkhero.png'
		: ( cvc_img_exists( 'flagman.png' ) ? 'flagman.png' : 'flagbg.png' ) );

$feature_cards = array(
	array(
		'title'       => __( 'Veteran Application', 'cvc-theme' ),
		'description' => __( 'Begin your journey. Complete the application and let us help you take the next step forward.', 'cvc-theme' ),
		'cta'         => __( 'Apply Today', 'cvc-theme' ),
		'url'         => cvc_page_url( 'veteran-application' ),
		'image'       => cvc_img_exists( 'Derek 1.png' ) ? 'Derek 1.png' : 'CVClogo.png',
		'icon'        => 'icons/application.png',
		'tint'        => 'green',
		'external'    => false,
	),
	array(
		'title'       => __( 'Operation Field Trip', 'cvc-theme' ),
		'description' => __( 'Adventure. Connection. Healing. Explore outdoor experiences and care built for combat veterans.', 'cvc-theme' ),
		'cta'         => __( 'Learn More', 'cvc-theme' ),
		'url'         => cvc_page_url( 'operation-field-trip' ),
		'image'       => cvc_img_exists( 'WN-1.jpg' ) ? 'WN-1.jpg' : 'OFT-Heading.png',
		'icon'        => 'icons/helicopter.png',
		'tint'        => 'blue',
		'external'    => false,
	),
);

$event_slides = cvc_get_upcoming_event_cards();
?>
<section id="home" class="cvc-hero cvc-hero--home">
	<div class="cvc-hero__photo">
		<div
			class="cvc-hero__bg"
			style="background-image:url('<?php echo esc_url( cvc_img( $hero_img ) ); ?>')"
			role="img"
			aria-label="<?php esc_attr_e( 'Combat veteran overlooking mountains at sunrise', 'cvc-theme' ); ?>"
		></div>
		<div class="cvc-hero__shade" aria-hidden="true"></div>

		<div class="cvc-container cvc-hero__inner">
			<div class="cvc-hero__main">
				<div class="cvc-hero-copy">
					<div class="cvc-hero-copy__headlines" aria-label="<?php esc_attr_e( "WHAT'S NEXT? SERVICE TO SUCCESS", 'cvc-theme' ); ?>">
						<p class="cvc-hero-copy__line cvc-hero-copy__line--1" data-typewriter-line="1" aria-hidden="true">
							<span class="js-typewriter-segment" data-text="<?php echo esc_attr( __( "WHAT'S ", 'cvc-theme' ) ); ?>"></span><span class="js-typewriter-segment" data-text="<?php echo esc_attr( __( 'NEXT?', 'cvc-theme' ) ); ?>"></span>
						</p>
						<p class="cvc-hero-copy__line cvc-hero-copy__line--2 cvc-hero-copy__line--accent" data-typewriter-line="2" aria-hidden="true">
							<span class="js-typewriter-segment" data-text="<?php echo esc_attr( __( 'SERVICE TO ', 'cvc-theme' ) ); ?>"></span><span class="js-typewriter-segment" data-text="<?php echo esc_attr( __( 'SUCCESS', 'cvc-theme' ) ); ?>"></span>
						</p>
						<span class="cvc-typewriter-cursor" aria-hidden="true" hidden>|</span>
					</div>

					<div class="cvc-hero-copy__star" aria-hidden="true">
						<span class="cvc-hero-copy__star-icon">★</span>
					</div>

					<p class="cvc-hero-copy__lead">
						<?php esc_html_e( 'Helping combat veterans transition from military service to meaningful careers.', 'cvc-theme' ); ?>
					</p>

					<div class="cvc-hero-copy__actions">
						<a class="cvc-btn cvc-btn--hero-primary" href="<?php echo esc_url( cvc_page_url( 'veteran-application' ) ); ?>">
							<span><?php esc_html_e( 'Start Your Journey', 'cvc-theme' ); ?></span>
							<span class="cvc-btn__hero-icon" aria-hidden="true">
								<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14M13 6l6 6-6 6"/></svg>
							</span>
						</a>
						<a class="cvc-btn cvc-btn--hero-secondary" href="<?php echo esc_url( cvc_home_url( 'mission' ) ); ?>">
							<span><?php esc_html_e( 'Watch Our Story', 'cvc-theme' ); ?></span>
							<span class="cvc-btn__hero-icon" aria-hidden="true">
								<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
							</span>
						</a>
					</div>
				</div>
			</div>
		</div>

		<div class="cvc-hero-features">
			<div class="cvc-container cvc-hero-features__grid">
				<?php foreach ( $feature_cards as $card ) : ?>
					<?php
					$tint = isset( $card['tint'] ) ? $card['tint'] : 'green';
					?>
					<a
						class="cvc-hero-feature-card cvc-hero-feature-card--<?php echo esc_attr( $tint ); ?>"
						href="<?php echo esc_url( $card['url'] ); ?>"
						<?php echo ! empty( $card['external'] ) ? ' target="_blank" rel="noopener noreferrer"' : ''; ?>
					>
						<span
							class="cvc-hero-feature-card__bg"
							style="background-image:url('<?php echo esc_url( cvc_img( $card['image'] ) ); ?>')"
							aria-hidden="true"
						></span>
						<span class="cvc-hero-feature-card__shade" aria-hidden="true"></span>
						<span class="cvc-hero-feature-card__icon" aria-hidden="true">
							<img src="<?php echo esc_url( cvc_img( $card['icon'] ) ); ?>" alt="" width="24" height="24" />
						</span>
						<span class="cvc-hero-feature-card__body">
							<span class="cvc-hero-feature-card__title"><?php echo esc_html( $card['title'] ); ?></span>
							<span class="cvc-hero-feature-card__desc"><?php echo esc_html( $card['description'] ); ?></span>
							<span class="cvc-hero-feature-card__cta">
								<?php echo esc_html( $card['cta'] ); ?>
								<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14M13 6l6 6-6 6"/></svg>
							</span>
						</span>
					</a>
				<?php endforeach; ?>

				<a
					class="cvc-hero-feature-card cvc-hero-feature-card--red cvc-hero-feature-card--carousel"
					href="<?php echo esc_url( cvc_page_url( 'events' ) ); ?>#upcoming"
					data-cvc-events-carousel
					aria-label="<?php esc_attr_e( 'Upcoming events', 'cvc-theme' ); ?>"
				>
					<span class="cvc-hero-feature-card__slides" aria-hidden="true">
						<?php foreach ( $event_slides as $i => $slide ) : ?>
							<span
								class="cvc-hero-feature-card__slide<?php echo 0 === (int) $i ? ' is-active' : ''; ?>"
								style="background-image:url('<?php echo esc_url( cvc_img( $slide['image'] ) ); ?>')"
								data-slide-index="<?php echo esc_attr( (string) $i ); ?>"
							></span>
						<?php endforeach; ?>
					</span>
					<span class="cvc-hero-feature-card__shade" aria-hidden="true"></span>
					<span class="cvc-hero-feature-card__icon" aria-hidden="true">
						<img src="<?php echo esc_url( cvc_img( 'icons/calendar.png' ) ); ?>" alt="" width="24" height="24" />
					</span>
					<span class="cvc-hero-feature-card__body">
						<span class="cvc-hero-feature-card__eyebrow"><?php esc_html_e( 'Upcoming Events', 'cvc-theme' ); ?></span>
						<span class="cvc-hero-feature-card__copy" aria-live="polite">
							<?php foreach ( $event_slides as $i => $slide ) : ?>
								<?php
								$title_display = preg_replace( '/^\d{4}\s+/', '', $slide['title'] );
								$desc          = $slide['date_label'];
								if ( ! empty( $slide['location'] ) ) {
									$desc .= ' · ' . $slide['location'];
								}
								?>
								<span class="cvc-hero-feature-card__copy-slide<?php echo 0 === (int) $i ? ' is-active' : ''; ?>" data-slide-index="<?php echo esc_attr( (string) $i ); ?>">
									<span class="cvc-hero-feature-card__title"><?php echo esc_html( $title_display ); ?></span>
									<span class="cvc-hero-feature-card__desc"><?php echo esc_html( $desc ); ?></span>
								</span>
							<?php endforeach; ?>
						</span>
						<span class="cvc-hero-feature-card__footer">
							<span class="cvc-hero-feature-card__cta">
								<?php esc_html_e( 'View Calendar', 'cvc-theme' ); ?>
								<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14M13 6l6 6-6 6"/></svg>
							</span>
							<span class="cvc-hero-feature-card__dots" aria-hidden="true">
								<?php foreach ( $event_slides as $i => $slide ) : ?>
									<span class="cvc-hero-feature-card__dot<?php echo 0 === (int) $i ? ' is-active' : ''; ?>" data-slide-index="<?php echo esc_attr( (string) $i ); ?>"></span>
								<?php endforeach; ?>
							</span>
						</span>
					</span>
				</a>
			</div>
		</div>
	</div>

	<?php get_template_part( 'template-parts/home', 'upcoming-events' ); ?>

	<div class="cvc-hero-stats" aria-label="<?php esc_attr_e( 'Combat Veterans to Careers impact statistics', 'cvc-theme' ); ?>">
		<ul class="cvc-container cvc-hero-stats__list">
			<li class="cvc-hero-stats__item">
				<span class="cvc-hero-stats__icon" aria-hidden="true">
					<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path stroke-linecap="round" stroke-linejoin="round" d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path stroke-linecap="round" stroke-linejoin="round" d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>
				</span>
				<span class="cvc-hero-stats__text">
					<span class="cvc-hero-stats__value">1,500+</span>
					<span class="cvc-hero-stats__label"><?php esc_html_e( 'Veterans Served', 'cvc-theme' ); ?></span>
				</span>
			</li>
			<li class="cvc-hero-stats__item">
				<span class="cvc-hero-stats__icon" aria-hidden="true">
					<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path stroke-linecap="round" stroke-linejoin="round" d="M3 3v18h18"/><path stroke-linecap="round" stroke-linejoin="round" d="m19 9-5 5-4-4-3 3"/></svg>
				</span>
				<span class="cvc-hero-stats__text">
					<span class="cvc-hero-stats__value">92%</span>
					<span class="cvc-hero-stats__label"><?php esc_html_e( 'Employment Success', 'cvc-theme' ); ?></span>
				</span>
			</li>
			<li class="cvc-hero-stats__item">
				<span class="cvc-hero-stats__icon" aria-hidden="true">
					<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path stroke-linecap="round" stroke-linejoin="round" d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path stroke-linecap="round" stroke-linejoin="round" d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08c.82.82 2.13.85 3 .07l2.07-1.9a2.74 2.74 0 0 1 3.51-.2c1.14.96 1.2 2.67.14 3.72L12 19"/></svg>
				</span>
				<span class="cvc-hero-stats__text">
					<span class="cvc-hero-stats__value">360°</span>
					<span class="cvc-hero-stats__label"><?php esc_html_e( 'Support Model', 'cvc-theme' ); ?></span>
				</span>
			</li>
			<li class="cvc-hero-stats__item">
				<span class="cvc-hero-stats__icon" aria-hidden="true">
					<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path stroke-linecap="round" stroke-linejoin="round" d="m12 3 2.4 4.86 5.36.78-3.88 3.78.92 5.34L12 15.77l-4.8 2.52.92-5.34-3.88-3.78 5.36-.78L12 3z"/></svg>
				</span>
				<span class="cvc-hero-stats__text">
					<span class="cvc-hero-stats__value">100%</span>
					<span class="cvc-hero-stats__label"><?php esc_html_e( 'Mission Driven', 'cvc-theme' ); ?></span>
				</span>
			</li>
		</ul>
	</div>
</section>
