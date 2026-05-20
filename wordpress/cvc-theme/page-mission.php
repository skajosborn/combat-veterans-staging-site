<?php
/**
 * Mission page.
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
			'title' => __( 'Our Mission', 'cvc-theme' ),
			'tag'   => 'h1',
			'size'  => 'page',
		)
	);

	if ( ! cvc_the_editor_content_if_any() ) :
		cvc_render_paragraphs( cvc_get_mission_paragraphs() );
		?>
		<div class="cvc-card cvc-card--inner">
			<?php
			cvc_section_title(
				array(
					'title' => __( 'Our Mission Video', 'cvc-theme' ),
					'tag'   => 'h2',
					'size'  => 'subsection',
					'align' => 'left',
				)
			);
			cvc_render_video( 'https://www.youtube.com/embed/4npHQY_Rer0', __( 'Our Mission Video', 'cvc-theme' ) );
			?>
		</div>
	<?php endif; ?>
</article>

<?php
cvc_page_close();
get_footer();
