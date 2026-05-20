<?php
/**
 * Single post template.
 *
 * @package CVC_Theme
 */

get_header();
?>

<main class="cvc-section">
	<div class="cvc-container">
		<?php
		while ( have_posts() ) :
			the_post();
			?>
			<article <?php post_class( 'cvc-card' ); ?>>
				<header class="cvc-page-header">
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
					<p class="cvc-section-title__subtitle" style="text-align:left;">
						<time datetime="<?php echo esc_attr( get_the_date( 'c' ) ); ?>"><?php echo esc_html( get_the_date() ); ?></time>
					</p>
				</header>
				<?php if ( has_post_thumbnail() ) : ?>
					<div style="margin-bottom:1.5rem;"><?php the_post_thumbnail( 'large' ); ?></div>
				<?php endif; ?>
				<div class="cvc-content entry-content">
					<?php the_content(); ?>
				</div>
			</article>
			<?php
		endwhile;
		?>
	</div>
</main>

<?php
get_footer();
