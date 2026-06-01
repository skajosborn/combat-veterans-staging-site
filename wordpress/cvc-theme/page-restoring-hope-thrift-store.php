<?php
/**
 * Restoring Hope Thrift Store page.
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
			'title'    => __( 'Restoring Hope Thrift Store', 'cvc-theme' ),
			'tag'      => 'h1',
			'size'     => 'page',
			'subtitle' => '<p>' . esc_html__( 'Donation-driven shopping that funds veteran programs and community connection.', 'cvc-theme' ) . '</p>',
		)
	);

	if ( ! cvc_the_editor_content_if_any() ) :
		if ( cvc_img_exists( 'thriftstores.png' ) ) :
			?>
			<p><img class="cvc-img-wide" src="<?php echo esc_url( cvc_img( 'thriftstores.png' ) ); ?>" alt="" /></p>
		<?php endif; ?>
		<?php
		cvc_render_paragraphs(
			array(
				__( 'Our thrift store accepts gently used clothing, household goods, and furniture. Sales directly support education, housing, wellness, and career transition programs for combat veterans and their families.', 'cvc-theme' ),
				__( 'Contact us to learn about drop-off locations, pickup options, and volunteer opportunities.', 'cvc-theme' ),
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
