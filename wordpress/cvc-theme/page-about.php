<?php
/**
 * About page.
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
			'title'    => __( 'Our Mission', 'cvc-theme' ),
			'tag'      => 'h1',
			'size'     => 'page',
			'subtitle' => '<div class="cvc-prose">' .
				'<p>' . esc_html__( 'Combat Veterans to Careers exists to ensure that no veteran has to face the transition to civilian life alone. Through 360° of support, we connect veterans to career development, community resources, healing-centered programs, and the guidance they need to rebuild stability and rediscover purpose.', 'cvc-theme' ) . '</p>' .
				'<p>' . esc_html__( 'A cornerstone of our mission is Operation Field Trip, a powerful program that helps veterans and first responders struggling with PTSD, anxiety, depression, and trauma-related challenges access medically assisted ketamine therapy paired with integrative counseling and support.', 'cvc-theme' ) . '</p>' .
				( cvc_img_exists( '360-of-Support.png' ) ? '<p><img class="cvc-img-rounded" src="' . esc_url( cvc_img( '360-of-Support.png' ) ) . '" alt="' . esc_attr__( '360 degrees of support', 'cvc-theme' ) . '" /></p>' : '' ) .
				'</div>',
		)
	);
	?>

	<div class="cvc-about-grid">
		<div class="cvc-about-grid__photo">
			<?php if ( cvc_img_exists( 'DavidFlagNew.png' ) ) : ?>
				<img src="<?php echo esc_url( cvc_img( 'DavidFlagNew.png' ) ); ?>" alt="<?php esc_attr_e( 'David Booth', 'cvc-theme' ); ?>" />
			<?php endif; ?>
		</div>
		<div class="cvc-about-grid__bio">
			<?php
			cvc_section_title(
				array(
					'title' => __( 'David Booth', 'cvc-theme' ),
					'tag'   => 'h2',
					'size'  => 'subsection',
					'align' => 'left',
				)
			);
			?>
			<p class="cvc-tile__meta cvc-tile__meta--role"><?php esc_html_e( 'Founder, Combat Veterans to Careers', 'cvc-theme' ); ?></p>
			<?php
			if ( ! cvc_the_editor_content_if_any() ) {
				cvc_render_paragraphs( cvc_get_about_david_paragraphs() );
			}
			?>
		</div>
	</div>
</article>

<?php
cvc_page_close();
get_footer();
