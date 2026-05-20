<?php
/**
 * Contact section (matches Next.js Contact component styling).
 *
 * @package CVC_Theme
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$bg = cvc_img_exists( 'flagwithsoldiers.png' )
	? cvc_img( 'flagwithsoldiers.png' )
	: cvc_img( 'flagbg.png' );
?>
<section id="contact" class="cvc-contact" style="background-image:url('<?php echo esc_url( $bg ); ?>')">
	<div class="cvc-contact__shade" aria-hidden="true"></div>
	<div class="cvc-container cvc-contact__inner">
		<div class="cvc-grid cvc-grid--2">
			<div>
				<?php
				cvc_section_title(
					array(
						'title'    => __( 'Ready to Take the Next Step?', 'cvc-theme' ),
						'tag'      => 'h2',
						'size'     => 'display',
						'align'    => 'left',
						'subtitle' => '<p class="cvc-contact__subtitle">' . esc_html__( "We're here to support you every step of the way.", 'cvc-theme' ) . '</p>',
					)
				);
				?>
				<div class="cvc-contact__item">
					<h3><?php esc_html_e( 'Combat Veterans to Careers', 'cvc-theme' ); ?></h3>
					<p>400 E Gulf Atlantic Highway</p>
					<p>Wildwood, FL 34785</p>
				</div>
				<div class="cvc-contact__item">
					<h3><?php esc_html_e( 'Email', 'cvc-theme' ); ?></h3>
					<p><a href="mailto:CombatVeteranstoCareers@gmail.com">CombatVeteranstoCareers@gmail.com</a></p>
				</div>
				<div class="cvc-contact__item">
					<h3><?php esc_html_e( 'Phone', 'cvc-theme' ); ?></h3>
					<p><a href="tel:+13525551234">(352) 555-1234</a></p>
				</div>
			</div>
			<div class="cvc-card" style="background:var(--cvc-glass-panel, rgb(30 36 57 / 0.92));">
				<h3 style="margin-top:0;color:#a8b892;"><?php esc_html_e( 'Get in touch', 'cvc-theme' ); ?></h3>
				<p style="color:var(--cvc-fg-muted);">
					<?php esc_html_e( 'Add a Contact Form 7 or WPForms shortcode in this template, or use your existing form plugin from the imported site.', 'cvc-theme' ); ?>
				</p>
			</div>
		</div>
	</div>
</section>
