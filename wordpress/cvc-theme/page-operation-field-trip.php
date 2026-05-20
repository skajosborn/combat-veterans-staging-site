<?php
/**
 * Operation Field Trip page.
 *
 * @package CVC_Theme
 */

get_header();
cvc_page_open();
?>

<article class="cvc-card cvc-page-article cvc-page-article--flush">
	<?php if ( cvc_img_exists( 'OFT-Heading.png' ) ) : ?>
		<div class="cvc-page-hero-img">
			<img src="<?php echo esc_url( cvc_img( 'OFT-Heading.png' ) ); ?>" alt="<?php esc_attr_e( 'Operation Field Trip', 'cvc-theme' ); ?>" />
		</div>
	<?php endif; ?>

	<div class="cvc-page-article__body">
		<?php if ( ! cvc_the_editor_content_if_any() ) : ?>
			<div class="cvc-card cvc-card--inner">
				<?php
				cvc_section_title(
					array(
						'title' => __( 'What Is Operation Field Trip?', 'cvc-theme' ),
						'tag'   => 'h2',
						'size'  => 'subsection',
						'align' => 'left',
					)
				);
				?>
				<p class="cvc-prose"><?php esc_html_e( 'Operation Field Trip is a healing mission—by veterans, for veterans and first responders. In partnership with Take A Knee Foundation, we provide medically assisted ketamine therapy combined with integrative counseling to support those battling PTSD, depression, and anxiety.', 'cvc-theme' ); ?></p>
			</div>

			<div class="cvc-card cvc-card--inner">
				<?php
				cvc_section_title(
					array(
						'title' => __( 'Why Ketamine-Assisted Therapy?', 'cvc-theme' ),
						'tag'   => 'h2',
						'size'  => 'subsection',
						'align' => 'left',
					)
				);
				?>
				<p class="cvc-prose"><?php esc_html_e( "Ketamine therapy, when paired with guided integration support, has shown rapid and lasting relief for individuals suffering from trauma-related mental health conditions. For many, it's a lifeline when nothing else has worked.", 'cvc-theme' ); ?></p>
			</div>

			<div class="cvc-about-grid">
				<div class="cvc-about-grid__photo cvc-about-grid__photo--contain">
					<?php if ( cvc_img_exists( 'OFT-bear.png' ) ) : ?>
						<img class="cvc-img-bear" src="<?php echo esc_url( cvc_img( 'OFT-bear.png' ) ); ?>" alt="" />
					<?php endif; ?>
				</div>
				<div class="cvc-prose">
					<?php
					cvc_section_title(
						array(
							'title' => __( 'Comfort Matters Too', 'cvc-theme' ),
							'tag'   => 'h2',
							'size'  => 'subsection',
							'align' => 'left',
						)
					);
					?>
					<p><?php esc_html_e( 'Healing is not only clinical care; it is also connection, safety, and trust. This symbol represents the supportive environment Operation Field Trip builds around every veteran and first responder on their path forward.', 'cvc-theme' ); ?></p>
				</div>
			</div>

			<div class="cvc-card cvc-card--inner">
				<?php
				cvc_section_title(
					array(
						'title' => __( 'The Cost of Healing', 'cvc-theme' ),
						'tag'   => 'h2',
						'size'  => 'subsection',
						'align' => 'left',
					)
				);
				?>
				<div class="cvc-price-grid">
					<div class="cvc-price-card">
						<p class="cvc-price-card__amount">$625</p>
						<p class="cvc-price-card__note"><?php esc_html_e( 'Approximate cost per treatment including therapy integration', 'cvc-theme' ); ?></p>
					</div>
					<div class="cvc-price-card">
						<p class="cvc-price-card__amount">$3,750</p>
						<p class="cvc-price-card__note"><?php esc_html_e( 'Recommended 6-treatment care series per participant', 'cvc-theme' ); ?></p>
					</div>
				</div>
				<p class="cvc-prose"><?php esc_html_e( "Your support helps fund this life-changing care for those who've served and sacrificed.", 'cvc-theme' ); ?></p>
			</div>

			<div class="cvc-page-split">
				<div class="cvc-card cvc-card--inner">
					<?php
					cvc_section_title(
						array(
							'title' => __( 'How You Can Help', 'cvc-theme' ),
							'tag'   => 'h2',
							'size'  => 'subsection',
							'align' => 'left',
						)
					);
					?>
					<ul class="cvc-list">
						<li><?php esc_html_e( 'Sponsor a veteran or first responder', 'cvc-theme' ); ?></li>
						<li><?php esc_html_e( 'Share this mission with your community', 'cvc-theme' ); ?></li>
						<li><?php esc_html_e( 'Donate to support treatment scholarships', 'cvc-theme' ); ?></li>
					</ul>
					<p class="cvc-prose"><?php esc_html_e( 'When making a donation, please input "Operation Field Trip" in the "Transaction Reason" form box.', 'cvc-theme' ); ?></p>
				</div>
				<div class="cvc-card cvc-card--inner cvc-card--cta">
					<?php
					cvc_section_title(
						array(
							'title' => __( 'Support a Veteran Today', 'cvc-theme' ),
							'tag'   => 'h3',
							'size'  => 'subsection',
							'align' => 'left',
						)
					);
					?>
					<p class="cvc-prose"><?php esc_html_e( 'Your contribution helps deliver life-changing care when it matters most.', 'cvc-theme' ); ?></p>
					<a class="cvc-btn cvc-btn--primary" href="<?php echo esc_url( cvc_page_url( 'donate' ) ); ?>">
						<?php esc_html_e( 'Donate to Operation Field Trip', 'cvc-theme' ); ?>
					</a>
				</div>
			</div>

			<div class="cvc-card cvc-card--inner">
				<?php
				cvc_section_title(
					array(
						'title' => __( 'Watch: Operation Field Trip', 'cvc-theme' ),
						'tag'   => 'h2',
						'size'  => 'subsection',
						'align' => 'left',
					)
				);
				cvc_render_video( 'https://www.youtube.com/embed/VtgOp2A6BAM', __( 'Operation Field Trip Video', 'cvc-theme' ) );
				?>
			</div>
		<?php endif; ?>
	</div>
</article>

<?php
cvc_page_close();
get_footer();
