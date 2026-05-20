<?php
/**
 * Future goal / campus vision page.
 *
 * @package CVC_Theme
 */

get_header();
cvc_page_open();
?>

<article class="cvc-card cvc-page-article cvc-page-article--flush">
	<?php if ( cvc_img_exists( 'CVC-compound.png' ) ) : ?>
		<div class="cvc-page-banner">
			<img src="<?php echo esc_url( cvc_img( 'CVC-compound.png' ) ); ?>" alt="<?php esc_attr_e( 'Future CVC campus', 'cvc-theme' ); ?>" />
			<div class="cvc-page-banner__overlay">
				<p class="cvc-page-banner__eyebrow"><?php esc_html_e( 'Future of CVC', 'cvc-theme' ); ?></p>
				<h1 class="cvc-page-banner__title"><?php esc_html_e( 'The 1,000-Acre CVC Veteran Campus Vision', 'cvc-theme' ); ?></h1>
			</div>
		</div>
	<?php else : ?>
		<?php
		cvc_section_title(
			array(
				'title' => __( 'The 1,000-Acre CVC Veteran Campus Vision', 'cvc-theme' ),
				'tag'   => 'h1',
				'size'  => 'page',
			)
		);
		?>
	<?php endif; ?>

	<div class="cvc-page-article__body">
		<?php if ( ! cvc_the_editor_content_if_any() ) : ?>
			<div class="cvc-card cvc-card--inner">
				<p class="cvc-prose"><?php esc_html_e( 'Combat Veterans to Careers is working toward building a full-scale 1,000-acre veteran support campus where healing, stability, and career development happen in one connected environment.', 'cvc-theme' ); ?></p>
			</div>

			<div class="cvc-callout cvc-callout--danger">
				<?php
				cvc_section_title(
					array(
						'title' => __( 'Why This Matters Right Now', 'cvc-theme' ),
						'tag'   => 'h2',
						'size'  => 'subsection',
						'align' => 'left',
					)
				);
				?>
				<p><?php esc_html_e( 'Veteran suicide remains a national emergency. With dozens of attempts occurring daily, this campus is designed to provide immediate intervention, sustained counseling, and a path toward renewed purpose before crisis becomes tragedy.', 'cvc-theme' ); ?></p>
				<p><strong><?php esc_html_e( "CVC's mission: intervene early, support consistently, and save lives.", 'cvc-theme' ); ?></strong></p>
			</div>

			<?php
			cvc_section_title(
				array(
					'title' => __( 'Planned Campus Components', 'cvc-theme' ),
					'tag'   => 'h2',
					'size'  => 'subsection',
					'align' => 'left',
				)
			);
			?>
			<div class="cvc-grid cvc-grid--3">
				<?php foreach ( cvc_get_vision_pillars() as $pillar ) : ?>
					<article class="cvc-tile cvc-tile--media">
						<?php if ( cvc_img_exists( $pillar['image'] ) ) : ?>
							<div class="cvc-tile__media cvc-tile__media--contain">
								<img src="<?php echo esc_url( cvc_img( $pillar['image'] ) ); ?>" alt="" loading="lazy" />
							</div>
						<?php endif; ?>
						<div class="cvc-tile__body">
							<h3 class="cvc-tile__title"><?php echo esc_html( $pillar['title'] ); ?></h3>
							<p class="cvc-tile__text"><?php echo esc_html( $pillar['description'] ); ?></p>
						</div>
					</article>
				<?php endforeach; ?>
			</div>

			<div class="cvc-card cvc-card--inner">
				<?php
				cvc_section_title(
					array(
						'title' => __( 'Help Build This Future', 'cvc-theme' ),
						'tag'   => 'h2',
						'size'  => 'subsection',
						'align' => 'left',
					)
				);
				?>
				<p class="cvc-prose"><?php esc_html_e( 'This vision is funded by donors, sponsors, partners, and community support. Every contribution helps create a campus where veterans can heal, train, work, and rebuild.', 'cvc-theme' ); ?></p>
				<div class="cvc-hero__actions">
					<a class="cvc-btn cvc-btn--primary" href="<?php echo esc_url( cvc_page_url( 'donate' ) ); ?>"><?php esc_html_e( 'Support the Future Campus', 'cvc-theme' ); ?></a>
					<a class="cvc-btn cvc-btn--outline" href="<?php echo esc_url( cvc_home_url( 'contact' ) ); ?>"><?php esc_html_e( 'Partner With CVC', 'cvc-theme' ); ?></a>
				</div>
			</div>
		<?php endif; ?>
	</div>
</article>

<?php
cvc_page_close();
get_footer();
