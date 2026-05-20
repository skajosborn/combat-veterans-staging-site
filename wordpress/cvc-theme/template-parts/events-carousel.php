<?php
/**
 * Featured event flyers carousel.
 *
 * @package CVC_Theme
 */

$slides = cvc_get_featured_event_slides();
$slides = array_filter(
	$slides,
	static function ( $slide ) {
		return cvc_img_exists( $slide['src'] );
	}
);

if ( ! $slides ) {
	return;
}
?>
<div class="cvc-card cvc-card--inner cvc-carousel" data-cvc-carousel>
	<?php
	cvc_section_title(
		array(
			'title' => __( 'Featured Flyers', 'cvc-theme' ),
			'tag'   => 'h2',
			'size'  => 'subsection',
			'align' => 'left',
		)
	);
	?>
	<div class="cvc-carousel__viewport">
		<?php foreach ( array_values( $slides ) as $i => $slide ) : ?>
			<div class="cvc-carousel__slide<?php echo 0 === $i ? ' is-active' : ''; ?>" data-cvc-carousel-slide>
				<a href="<?php echo esc_url( $slide['link'] ); ?>">
					<img src="<?php echo esc_url( cvc_img( $slide['src'] ) ); ?>" alt="<?php echo esc_attr( $slide['alt'] ); ?>" />
				</a>
			</div>
		<?php endforeach; ?>
	</div>
	<?php if ( count( $slides ) > 1 ) : ?>
		<div class="cvc-carousel__controls">
			<button type="button" class="cvc-carousel__btn" data-cvc-carousel-prev aria-label="<?php esc_attr_e( 'Previous slide', 'cvc-theme' ); ?>">‹</button>
			<button type="button" class="cvc-carousel__btn" data-cvc-carousel-next aria-label="<?php esc_attr_e( 'Next slide', 'cvc-theme' ); ?>">›</button>
		</div>
	<?php endif; ?>
</div>
