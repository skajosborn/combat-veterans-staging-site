<?php
/**
 * Donate page.
 *
 * @package CVC_Theme
 */

get_header();
cvc_page_open();
?>

<article class="cvc-card cvc-page-article cvc-page-article--flush">
	<div class="cvc-page-article__body">
		<?php if ( ! cvc_the_editor_content_if_any() ) : ?>
			<?php
			cvc_section_title(
				array(
					'title'    => __( 'Stand With Our Veterans', 'cvc-theme' ),
					'tag'      => 'h1',
					'size'     => 'display',
					'subtitle' => '<p class="cvc-eyebrow">' . esc_html__( 'Support Our Mission', 'cvc-theme' ) . '</p><p>' . esc_html__( 'Your gift helps Combat Veterans to Careers provide education, housing, wellness, and employment transition support to combat veterans and their families. Your donation can save a life.', 'cvc-theme' ) . '</p>',
				)
			);
			?>

			<?php if ( cvc_img_exists( 'flag.jpg' ) ) : ?>
				<div class="cvc-page-hero-img cvc-page-hero-img--contain">
					<img src="<?php echo esc_url( cvc_img( 'flag.jpg' ) ); ?>" alt="" />
				</div>
			<?php endif; ?>

			<div class="cvc-page-split">
				<div class="cvc-card cvc-card--inner">
					<?php
					cvc_section_title(
						array(
							'title' => __( 'Make a Difference Today', 'cvc-theme' ),
							'tag'   => 'h2',
							'size'  => 'subsection',
							'align' => 'left',
						)
					);
					?>
					<p class="cvc-prose"><?php esc_html_e( 'Every donation strengthens our ability to serve veterans with practical resources and long-term support.', 'cvc-theme' ); ?></p>
					<div class="cvc-price-grid cvc-price-grid--3">
						<div class="cvc-price-card">
							<p class="cvc-price-card__amount">$50</p>
							<p class="cvc-price-card__note"><?php esc_html_e( 'Covers resume and career prep materials', 'cvc-theme' ); ?></p>
						</div>
						<div class="cvc-price-card">
							<p class="cvc-price-card__amount">$100</p>
							<p class="cvc-price-card__note"><?php esc_html_e( 'Supports transportation and appointment access', 'cvc-theme' ); ?></p>
						</div>
						<div class="cvc-price-card">
							<p class="cvc-price-card__amount">$500</p>
							<p class="cvc-price-card__note"><?php esc_html_e( 'Funds expanded transition and wellness resources', 'cvc-theme' ); ?></p>
						</div>
					</div>
					<div class="cvc-hero__actions">
						<a class="cvc-btn cvc-btn--primary" href="<?php echo esc_url( cvc_home_url( 'contact' ) ); ?>"><?php esc_html_e( 'Donate / Contact Us', 'cvc-theme' ); ?></a>
						<a class="cvc-btn cvc-btn--outline" href="mailto:CombatVeteranstoCareers@gmail.com?subject=<?php echo rawurlencode( 'Donation Inquiry' ); ?>"><?php esc_html_e( 'Email About Donating', 'cvc-theme' ); ?></a>
					</div>
					<p class="cvc-donate-note"><?php esc_html_e( 'Add your GiveWP, PayPal, or other donation form shortcode in the WordPress page editor to enable online giving.', 'cvc-theme' ); ?></p>
				</div>
				<div class="cvc-card cvc-card--inner">
					<h3 class="cvc-tile__title"><?php esc_html_e( 'Why Give?', 'cvc-theme' ); ?></h3>
					<ul class="cvc-list">
						<li><?php esc_html_e( 'Education and career transition support', 'cvc-theme' ); ?></li>
						<li><?php esc_html_e( 'Housing and wellness assistance', 'cvc-theme' ); ?></li>
						<li><?php esc_html_e( 'Community integration for veterans and families', 'cvc-theme' ); ?></li>
						<li><?php esc_html_e( 'Mentorship and long-term guidance', 'cvc-theme' ); ?></li>
					</ul>
					<p class="cvc-prose cvc-prose--small"><?php esc_html_e( 'Thank you for standing with our veterans. For recurring giving, sponsorship opportunities, or in-kind support, contact us using the options on this page.', 'cvc-theme' ); ?></p>
				</div>
			</div>
		<?php endif; ?>
	</div>
</article>

<?php
cvc_page_close();
get_footer();
