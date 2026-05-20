<?php
/**
 * What's Next page.
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
				'title'    => __( "What's Next", 'cvc-theme' ),
				'tag'      => 'h1',
				'size'     => 'page',
				'subtitle' => '<div class="cvc-prose"><p>' . esc_html__( 'Service members are forward thinking, always focused on "What\'s Next"—next promotion, next duty station, next deployment. CVC\'s veteran-centered wellness plan continues that forward thinking: my next career, education, what\'s next for my family, my next veteran therapy adventure.', 'cvc-theme' ) . '</p><p>' . esc_html__( 'Every day 22 veterans lose their battle to post traumatic stress on American soil. When everyone works together to help those in need, suicide is preventable. Every American citizen has a valuable role to play in preventing service member, veteran, and military family suicide.', 'cvc-theme' ) . '</p></div>',
			)
	);

	if ( ! cvc_the_editor_content_if_any() ) :
		?>

		<div class="cvc-card cvc-card--inner">
			<?php
			cvc_section_title(
				array(
					'title' => __( 'The "What\'s Next" Program Focuses On', 'cvc-theme' ),
					'tag'   => 'h2',
					'size'  => 'subsection',
					'align' => 'left',
				)
			);
			?>
			<ul class="cvc-list">
				<li><?php esc_html_e( 'Restoring physical and mental functioning', 'cvc-theme' ); ?></li>
				<li><?php esc_html_e( 'Facilitating home & community reintegration', 'cvc-theme' ); ?></li>
				<li><?php esc_html_e( 'Improving family interaction', 'cvc-theme' ); ?></li>
				<li><?php esc_html_e( 'Promoting quality of life for veterans, service members, and their supporters', 'cvc-theme' ); ?></li>
			</ul>
			<?php
			cvc_render_paragraphs(
				array(
					__( 'CVC\'s "What\'s Next" Therapeutic Recreation Program is another way we connect, lead, and inspire our veterans. Our activities give veterans a chance to enjoy the outdoors, refocus their passion, and share an adventure with great Americans and other veterans and their families.', 'cvc-theme' ),
					__( 'The program assists in improving function and ability with individualized, holistic interventions incorporating veterans\' interests, family, community, and lifestyle—enhancing physical and cognitive abilities, social skills, creative expression, and spiritual expression.', 'cvc-theme' ),
				)
			);
			?>
		</div>

		<div class="cvc-grid cvc-grid--2 cvc-whats-next-grid">
			<?php
			foreach ( array( 'WN-1.jpg', 'WN-2.jpg', 'WN-3.jpg', 'WN-4.jpg', 'WN-5.jpg' ) as $img ) :
				if ( ! cvc_img_exists( $img ) ) {
					continue;
				}
				?>
				<figure class="cvc-tile cvc-tile--media">
					<div class="cvc-tile__media">
						<img src="<?php echo esc_url( cvc_img( $img ) ); ?>" alt="" loading="lazy" />
					</div>
				</figure>
			<?php endforeach; ?>
		</div>

		<div class="cvc-card cvc-card--inner cvc-card--cta cvc-card--cta-center">
			<p class="cvc-cta-lead"><?php esc_html_e( 'Help Support Combat Veterans to Careers "What\'s Next" Therapeutic Recreation Program. Be "What\'s Next" in a Veteran\'s life!', 'cvc-theme' ); ?></p>
			<a class="cvc-btn cvc-btn--primary" href="<?php echo esc_url( cvc_page_url( 'donate' ) ); ?>">
				<?php esc_html_e( "Donate to What's Next", 'cvc-theme' ); ?>
			</a>
		</div>
	<?php endif; ?>
</article>

<?php
cvc_page_close();
get_footer();
