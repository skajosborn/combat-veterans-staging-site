<?php
/**
 * Veteran application page.
 *
 * @package CVC_Theme
 */

get_header();
cvc_page_open();

while ( have_posts() ) :
	the_post();
	?>
	<article <?php post_class( 'cvc-card cvc-page-article' ); ?>>
		<?php
		cvc_section_title(
			array(
				'title'    => get_the_title() ?: __( 'Application', 'cvc-theme' ),
				'tag'      => 'h1',
				'size'     => 'page',
				'subtitle' => '<p class="cvc-quote-lead">' . esc_html__( 'In War, There Are No Unwounded Soldiers.', 'cvc-theme' ) . '</p>',
			)
		);
		?>

		<?php if ( cvc_has_post_content() ) : ?>
			<div class="cvc-content entry-content cvc-prose">
				<?php the_content(); ?>
			</div>
		<?php else : ?>
			<?php cvc_render_paragraphs( cvc_get_application_intro_paragraphs() ); ?>
			<div class="cvc-card cvc-card--inner cvc-card--cta">
				<p class="cvc-prose"><?php esc_html_e( 'The full interactive application form is available on our main website. You can also add a form plugin shortcode in the WordPress page editor for this page.', 'cvc-theme' ); ?></p>
				<a class="cvc-btn cvc-btn--primary" href="<?php echo cvc_application_form_url(); ?>" target="_blank" rel="noopener noreferrer">
					<?php esc_html_e( 'Open Veteran Application Form', 'cvc-theme' ); ?>
				</a>
			</div>
		<?php endif; ?>
	</article>
	<?php
endwhile;

cvc_page_close();
get_footer();
