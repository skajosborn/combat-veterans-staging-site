<?php
/** @package CVC_Theme */ ?>
<section id="success-stories" class="cvc-section cvc-section--elevated">
	<div class="cvc-container">
		<?php
		cvc_section_title(
			array(
				'title'    => __( 'Meet Some of Our Veterans', 'cvc-theme' ),
				'subtitle' => '<p>' . esc_html__( 'Real veterans. Real careers. Real success.', 'cvc-theme' ) . '</p>',
			)
		);
		?>
		<div class="cvc-grid cvc-grid--3">
			<?php foreach ( cvc_get_success_stories() as $story ) : ?>
				<article class="cvc-tile cvc-tile--media">
					<?php if ( cvc_img_exists( $story['image'] ) ) : ?>
						<div class="cvc-tile__media">
							<img
								src="<?php echo esc_url( cvc_img( $story['image'] ) ); ?>"
								alt=""
								loading="lazy"
								style="object-position: <?php echo esc_attr( $story['image_position'] ?? 'top center' ); ?>;"
							/>
						</div>
					<?php endif; ?>
					<div class="cvc-tile__body">
						<h3 class="cvc-tile__title"><?php echo esc_html( $story['name'] ); ?></h3>
						<p class="cvc-tile__meta"><?php echo esc_html( $story['rank'] ); ?></p>
						<?php if ( ! empty( $story['role'] ) ) : ?>
							<p class="cvc-tile__meta cvc-tile__meta--role"><?php echo esc_html( $story['role'] ); ?></p>
						<?php endif; ?>
						<blockquote class="cvc-tile__quote"><?php echo esc_html( $story['quote'] ); ?></blockquote>
					</div>
				</article>
			<?php endforeach; ?>
		</div>
	</div>
</section>
