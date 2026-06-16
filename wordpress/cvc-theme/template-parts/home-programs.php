<?php
/** @package CVC_Theme */ ?>
<section id="programs" class="cvc-section cvc-section--elevated">
	<div class="cvc-container">
		<?php
		cvc_section_title(
			array(
				'title'    => __( 'Our Programs', 'cvc-theme' ),
				'subtitle' => '<p>' . esc_html__( 'Comprehensive support designed specifically for combat veterans ready to build their next chapter.', 'cvc-theme' ) . '</p>',
			)
		);
		?>
		<div class="cvc-grid cvc-grid--3">
			<?php foreach ( cvc_get_programs() as $program ) : ?>
				<?php
				$tag  = ! empty( $program['url'] ) ? 'a' : 'article';
				$attr = ! empty( $program['url'] )
					? ' href="' . esc_url( $program['url'] ) . '"'
					: '';
				$class = 'cvc-tile cvc-tile--media' . ( ! empty( $program['url'] ) ? ' cvc-tile--link' : '' );
				?>
				<<?php echo esc_html( $tag ); ?> class="<?php echo esc_attr( $class ); ?>"<?php echo $attr; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>>
					<?php if ( cvc_img_exists( $program['image'] ) ) : ?>
						<div class="cvc-tile__media">
							<img src="<?php echo esc_url( cvc_img( $program['image'] ) ); ?>" alt="" loading="lazy" />
						</div>
					<?php endif; ?>
					<div class="cvc-tile__body">
						<h3 class="cvc-tile__title"><?php echo esc_html( $program['title'] ); ?></h3>
						<p class="cvc-tile__text"><?php echo esc_html( $program['description'] ); ?></p>
					</div>
				</<?php echo esc_html( $tag ); ?>>
			<?php endforeach; ?>
		</div>
	</div>
</section>
