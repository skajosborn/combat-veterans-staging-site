<?php
/**
 * Default page template.
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
				'title' => get_the_title(),
				'tag'   => 'h1',
				'size'  => 'page',
				'align' => 'left',
			)
		);
		?>
		<div class="cvc-content entry-content">
			<?php the_content(); ?>
		</div>
	</article>
	<?php
endwhile;

cvc_page_close();
get_footer();
