<?php
/**
 * Homepage hero (matches Next.js Hero.tsx layout).
 *
 * @package CVC_Theme
 */

$hero_img = cvc_img_exists( 'flagman.png' ) ? 'flagman.png' : 'flagbg.png';
$quick_links = cvc_get_quick_links();
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
		<div class="cvc-hero__grid">
			<div class="cvc-hero-hub" id="cvc-hero-hub">
				<div class="cvc-hero-hub__logo-wrap">
					<img
						class="cvc-hero-hub__logo"
						src="<?php echo esc_url( cvc_img( 'CVClogo.png' ) ); ?>"
						alt="<?php echo esc_attr( get_bloginfo( 'name' ) ); ?>"
					/>

					<nav
						class="cvc-hero-hub__panel cvc-hero-hub__panel--desktop"
						aria-label="<?php esc_attr_e( 'Quick links', 'cvc-theme' ); ?>"
					>
						<p class="cvc-hero-hub__panel-label"><?php esc_html_e( 'Explore', 'cvc-theme' ); ?></p>
						<ul class="cvc-hero-hub__links">
							<?php foreach ( $quick_links as $link ) : ?>
								<li>
									<a
										class="cvc-hero-hub__link<?php echo ! empty( $link['accent'] ) ? ' cvc-hero-hub__link--accent' : ''; ?>"
										href="<?php echo esc_url( cvc_page_url( $link['slug'] ) ); ?>"
									>
										<?php echo esc_html( $link['label'] ); ?>
									</a>
								</li>
							<?php endforeach; ?>
						</ul>
					</nav>
				</div>

				<div class="cvc-hero-hub__mobile">
					<button
						type="button"
						class="cvc-hero-hub__toggle"
						id="cvc-hero-quick-toggle"
						aria-expanded="false"
						aria-controls="cvc-hero-quick-menu"
					>
						<?php esc_html_e( 'Quick links', 'cvc-theme' ); ?>
						<span class="cvc-hero-hub__chevron" aria-hidden="true"></span>
					</button>
					<nav
						id="cvc-hero-quick-menu"
						class="cvc-hero-hub__panel cvc-hero-hub__panel--mobile"
						aria-label="<?php esc_attr_e( 'Quick links', 'cvc-theme' ); ?>"
						hidden
					>
						<ul class="cvc-hero-hub__links">
							<?php foreach ( $quick_links as $link ) : ?>
								<li>
									<a
										class="cvc-hero-hub__link<?php echo ! empty( $link['accent'] ) ? ' cvc-hero-hub__link--accent' : ''; ?>"
										href="<?php echo esc_url( cvc_page_url( $link['slug'] ) ); ?>"
									>
										<?php echo esc_html( $link['label'] ); ?>
									</a>
								</li>
							<?php endforeach; ?>
						</ul>
					</nav>
				</div>
			</div>

			<div class="cvc-hero-copy">
				<div class="cvc-hero-copy__headlines" aria-label="<?php esc_attr_e( "WHAT'S NEXT? SERVICE TO SUCCESS", 'cvc-theme' ); ?>">
					<p class="cvc-hero-copy__line cvc-hero-copy__line--1" data-typewriter-line="1" aria-hidden="true">
						<span class="js-typewriter-segment" data-text="<?php echo esc_attr( __( "WHAT'S ", 'cvc-theme' ) ); ?>"></span><span class="cvc-hero-copy__accent js-typewriter-segment" data-text="<?php echo esc_attr( __( 'NEXT?', 'cvc-theme' ) ); ?>"></span>
					</p>
					<p class="cvc-hero-copy__line cvc-hero-copy__line--2" data-typewriter-line="2" aria-hidden="true">
						<span class="js-typewriter-segment" data-text="<?php echo esc_attr( __( 'SERVICE TO', 'cvc-theme' ) ); ?>"></span>
					</p>
					<p class="cvc-hero-copy__line cvc-hero-copy__line--3 cvc-hero-copy__line--accent" data-typewriter-line="3" aria-hidden="true">
						<span class="js-typewriter-segment" data-text="<?php echo esc_attr( __( 'SUCCESS', 'cvc-theme' ) ); ?>"></span>
					</p>
					<span class="cvc-typewriter-cursor" aria-hidden="true" hidden>|</span>
				</div>

				<p class="cvc-hero-copy__lead">
					<?php esc_html_e( 'As you step from one chapter to the next, we stand beside you—providing 360° of support and guidance to help you find your footing and discover the next stage of your journey.', 'cvc-theme' ); ?>
				</p>

				<div class="cvc-hero-copy__actions">
					<a class="cvc-btn cvc-btn--hero-primary" href="<?php echo esc_url( cvc_page_url( 'veteran-application' ) ); ?>">
						<?php esc_html_e( 'Start Your Transition', 'cvc-theme' ); ?>
					</a>
					<a class="cvc-btn cvc-btn--hero-secondary" href="<?php echo esc_url( cvc_home_url( 'programs' ) ); ?>">
						<?php esc_html_e( 'Learn More', 'cvc-theme' ); ?>
					</a>
				</div>
			</div>
		</div>
	</div>
</section>
