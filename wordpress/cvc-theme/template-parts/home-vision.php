<?php
/**
 * Homepage vision section (disabled when cvc_show_vision() is false — see inc/theme-data.php).
 *
 * @package CVC_Theme
 */
?>
<section id="vision" class="cvc-section">
	<div class="cvc-container">
		<?php
		cvc_section_title(
			array(
				'title'    => __( 'Our Vision', 'cvc-theme' ),
				'subtitle' => '<p>' . esc_html__( 'A 1,000-acre veteran support campus where healing, stability, and career development happen in one connected environment.', 'cvc-theme' ) . '</p>',
			)
		);
		?>
		<div class="cvc-grid cvc-grid--3">
			<?php foreach ( cvc_get_vision_pillars() as $pillar ) : ?>
				<article class="cvc-tile cvc-tile--media">
					<?php if ( cvc_img_exists( $pillar['image'] ) ) : ?>
						<div class="cvc-tile__media cvc-tile__media--contain">
							<img src="<?php echo esc_url( cvc_img( $pillar['image'] ) ); ?>" alt="" loading="lazy" />
						</div>
					<?php endif; ?>
					<div class="cvc-tile__body">
						<h3 class="cvc-tile__title"><?php echo esc_html( $pillar['title'] ); ?></h3>
						<p class="cvc-tile__text"><?php echo esc_html( $pillar['description'] ); ?></p>
					</div>
				</article>
			<?php endforeach; ?>
		</div>
		<p class="cvc-section-cta">
			<a class="cvc-btn cvc-btn--primary" href="<?php echo esc_url( cvc_page_url( 'future-goal' ) ); ?>">
				<?php esc_html_e( 'Learn More About the Campus Vision', 'cvc-theme' ); ?>
			</a>
		</p>
	</div>
</section>
