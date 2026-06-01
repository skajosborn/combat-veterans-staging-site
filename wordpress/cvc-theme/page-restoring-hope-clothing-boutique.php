<?php
/**
 * Restoring Hope Clothing Boutique page.
 *
 * @package CVC_Theme
 */

get_header();
cvc_page_open();
?>

<article class="cvc-card cvc-page-article">
	<?php
	cvc_section_title(
		array(
			'title'    => __( 'Restoring Hope Clothing Boutique', 'cvc-theme' ),
			'tag'      => 'h1',
			'size'     => 'page',
			'subtitle' => '<p>' . esc_html__( 'Curated apparel and accessories — shop with purpose for veteran programs.', 'cvc-theme' ) . '</p>',
		)
	);

	if ( ! cvc_the_editor_content_if_any() ) :
		cvc_render_paragraphs(
			array(
				__( 'Our clothing boutique offers curated apparel and accessories. Proceeds support veteran transition, wellness, and career programs.', 'cvc-theme' ),
				__( 'Contact us for hours, special events, and how to support Restoring Hope through donations or volunteering.', 'cvc-theme' ),
			)
		);
		?>
		<div class="cvc-hero__actions">
			<a class="cvc-btn cvc-btn--primary" href="<?php echo esc_url( cvc_home_url( 'contact' ) ); ?>"><?php esc_html_e( 'Contact Us', 'cvc-theme' ); ?></a>
			<a class="cvc-btn cvc-btn--outline" href="<?php echo esc_url( cvc_page_url( 'donate' ) ); ?>"><?php esc_html_e( 'Donate', 'cvc-theme' ); ?></a>
		</div>
	<?php endif; ?>
</article>

<?php
cvc_page_close();
get_footer();
