<?php
/**
 * Sponsors page.
 *
 * @package CVC_Theme
 */

get_header();
cvc_page_open();

$grouped = cvc_get_sponsors_grouped();
?>

<article class="cvc-card cvc-page-article">
	<?php
	cvc_section_title(
		array(
			'title'    => __( 'Sponsors', 'cvc-theme' ),
			'tag'      => 'h1',
			'size'     => 'page',
			'subtitle' => '<p>' . esc_html__( 'We are grateful for the businesses, organizations, and community partners who stand with Combat Veterans to Careers.', 'cvc-theme' ) . '</p>',
		)
	);

	if ( ! cvc_the_editor_content_if_any() ) :
		if ( $grouped['standard'] ) :
			cvc_section_title(
				array(
					'title' => __( 'Community & Corporate Sponsors', 'cvc-theme' ),
					'tag'   => 'h2',
					'size'  => 'subsection',
					'align' => 'left',
				)
			);
			?>
			<div class="cvc-sponsors-grid">
				<?php foreach ( $grouped['standard'] as $sponsor ) : ?>
					<div class="cvc-sponsor">
						<img src="<?php echo esc_url( cvc_img( $sponsor['src'] ) ); ?>" alt="<?php echo esc_attr( $sponsor['name'] ); ?>" loading="lazy" />
					</div>
				<?php endforeach; ?>
			</div>
			<?php
		endif;

		if ( $grouped['veteran_owned'] ) :
			cvc_section_title(
				array(
					'title' => __( 'Veteran Owned Sponsors', 'cvc-theme' ),
					'tag'   => 'h2',
					'size'  => 'subsection',
					'align' => 'left',
				)
			);
			?>
			<div class="cvc-sponsors-grid">
				<?php foreach ( $grouped['veteran_owned'] as $sponsor ) : ?>
					<div class="cvc-sponsor">
						<img src="<?php echo esc_url( cvc_img( $sponsor['src'] ) ); ?>" alt="<?php echo esc_attr( $sponsor['name'] ); ?>" loading="lazy" />
					</div>
				<?php endforeach; ?>
			</div>
			<?php
		endif;

		if ( ! $grouped['standard'] && ! $grouped['veteran_owned'] ) :
			?>
			<p><?php esc_html_e( 'Sponsor logos not found. Run scripts/copy-theme-assets.sh from the theme folder.', 'cvc-theme' ); ?></p>
			<?php
		endif;
	endif;
	?>
</article>

<?php
cvc_page_close();
get_footer();
