<?php
/**
 * Main template (blog index fallback).
 *
 * @package CVC_Theme
 */

get_header();
?>

<main class="cvc-section">
	<div class="cvc-container">
		<?php
		if ( have_posts() ) :
			cvc_section_title(
				array(
					'title' => get_the_archive_title() ?: __( 'News', 'cvc-theme' ),
					'tag'   => 'h1',
					'size'  => 'page',
				)
			);

			echo '<div class="cvc-grid">';

			while ( have_posts() ) :
				the_post();
				?>
				<article <?php post_class( 'cvc-tile' ); ?>>
					<?php if ( has_post_thumbnail() ) : ?>
						<a href="<?php the_permalink(); ?>"><?php the_post_thumbnail( 'medium_large' ); ?></a>
					<?php endif; ?>
					<div class="cvc-tile__body">
						<h2 class="cvc-tile__title">
							<a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
						</h2>
						<p class="cvc-tile__text"><?php echo esc_html( get_the_excerpt() ); ?></p>
						<a class="cvc-btn cvc-btn--blue" href="<?php the_permalink(); ?>"><?php esc_html_e( 'Read more', 'cvc-theme' ); ?></a>
					</div>
				</article>
				<?php
			endwhile;

			echo '</div>';

			the_posts_pagination();
		else :
			?>
			<p><?php esc_html_e( 'No posts found.', 'cvc-theme' ); ?></p>
			<?php
		endif;
		?>
	</div>
</main>

<?php
get_footer();
