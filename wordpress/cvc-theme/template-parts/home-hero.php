<?php
/**
 * Homepage hero (matches Next.js Hero.tsx layout).
 *
 * @package CVC_Theme
 */

$hero_img = cvc_img_exists( 'flagman.png' )
	? 'flagman.png'
	: 'flagbg.png';
?>
<section id="home" class="cvc-hero cvc-hero--home">
	<div
		class="cvc-hero__bg"
		style="background-image:url('<?php echo esc_url( cvc_img( $hero_img ) ); ?>')"
		role="img"
		aria-label="<?php esc_attr_e( 'Combat veteran with flag background', 'cvc-theme' ); ?>"
	></div>
	<div class="cvc-hero__shade" aria-hidden="true"></div>

	<div class="cvc-container cvc-hero__inner">
		<div class="cvc-hero__main">
			<div class="cvc-hero__grid">
				<div class="cvc-hero-hub">
					<div class="cvc-hero-hub__logo-wrap">
						<img
							class="cvc-hero-hub__logo"
							src="<?php echo esc_url( cvc_img( 'CVClogo.png' ) ); ?>"
							alt="<?php echo esc_attr( get_bloginfo( 'name' ) ); ?>"
						/>
					</div>
				</div>

				<div class="cvc-hero-copy">
					<div class="cvc-hero-copy__headlines" aria-label="<?php esc_attr_e( "WHAT'S NEXT? SERVICE TO SUCCESS", 'cvc-theme' ); ?>">
						<p class="cvc-hero-copy__line cvc-hero-copy__line--1" data-typewriter-line="1" aria-hidden="true">
							<span class="js-typewriter-segment" data-text="<?php echo esc_attr( __( "WHAT'S ", 'cvc-theme' ) ); ?>"></span><span class="cvc-hero-copy__accent js-typewriter-segment" data-text="<?php echo esc_attr( __( 'NEXT?', 'cvc-theme' ) ); ?>"></span>
						</p>
						<p class="cvc-hero-copy__line cvc-hero-copy__line--2" data-typewriter-line="2" aria-hidden="true">
							<span class="js-typewriter-segment" data-text="<?php echo esc_attr( __( 'SERVICE TO ', 'cvc-theme' ) ); ?>"></span><span class="cvc-hero-copy__accent js-typewriter-segment" data-text="<?php echo esc_attr( __( 'SUCCESS', 'cvc-theme' ) ); ?>"></span>
						</p>
						<span class="cvc-typewriter-cursor" aria-hidden="true" hidden>|</span>
					</div>

					<p class="cvc-hero-copy__lead">
						<?php
						echo wp_kses(
							__( 'As you step from one chapter to the next, we stand beside you—providing <strong>360°</strong> of support and guidance to help you find your footing and discover the next stage of your journey.', 'cvc-theme' ),
							array( 'strong' => array() )
						);
						?>
					</p>

					<div class="cvc-hero-copy__actions">
						<a class="cvc-btn cvc-btn--hero-primary" href="<?php echo esc_url( cvc_page_url( 'veteran-application' ) ); ?>">
							<span><?php esc_html_e( 'Start Your Transition', 'cvc-theme' ); ?></span>
							<span class="cvc-btn__hero-icon" aria-hidden="true">
								<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14M13 6l6 6-6 6"/></svg>
							</span>
						</a>
						<a class="cvc-btn cvc-btn--hero-secondary" href="<?php echo esc_url( cvc_home_url( 'programs' ) ); ?>">
							<span><?php esc_html_e( 'Learn More', 'cvc-theme' ); ?></span>
							<span class="cvc-btn__hero-icon" aria-hidden="true">
								<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14M13 6l6 6-6 6"/></svg>
							</span>
						</a>
					</div>
				</div>
			</div>
		</div>

		<div class="cvc-hero-pillars">
			<div class="cvc-hero-pillars__grid">
				<?php foreach ( cvc_get_hero_pillars() as $pillar ) : ?>
					<div class="cvc-hero-pillars__item">
						<div class="cvc-hero-pillars__icon" aria-hidden="true">
							<?php echo cvc_hero_pillar_icon( $pillar['icon'] ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
						</div>
						<div class="cvc-hero-pillars__text">
							<p class="cvc-hero-pillars__title"><?php echo esc_html( $pillar['title'] ); ?></p>
							<p class="cvc-hero-pillars__desc"><?php echo esc_html( $pillar['description'] ); ?></p>
						</div>
					</div>
				<?php endforeach; ?>
			</div>
		</div>
	</div>
</section>
