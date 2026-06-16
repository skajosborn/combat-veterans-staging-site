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
<section id="contact" class="cvc-contact">
	<div
		class="cvc-contact__bg"
		style="background-image:url('<?php echo esc_url( $bg ); ?>')"
		role="img"
		aria-label="<?php esc_attr_e( 'American flag with soldiers raising the flag', 'cvc-theme' ); ?>"
	></div>
	<div class="cvc-contact__shade" aria-hidden="true"></div>
	<div class="cvc-container cvc-contact__inner">
		<div class="cvc-contact__layout">
			<div class="cvc-contact__header">
				<?php
				cvc_section_title(
					array(
						'title'    => __( 'Ready to Take the Next Step?', 'cvc-theme' ),
						'tag'      => 'h2',
						'size'     => 'display',
						'align'    => 'left',
						'class'    => 'cvc-contact__title',
						'subtitle' => '<p class="cvc-contact__subtitle">' . esc_html__( "We're here to support you every step of the way.", 'cvc-theme' ) . '</p>',
					)
				);
				?>
			</div>
			<div class="cvc-contact__cta-col">
				<div class="cvc-contact__cta-wrap">
					<a class="cvc-contact__cta-btn" href="<?php echo esc_url( cvc_page_url( 'veteran-application' ) ); ?>">
						<span class="cvc-contact__cta-btn-title"><?php esc_html_e( 'Start Your Transition Today', 'cvc-theme' ); ?></span>
						<span class="cvc-contact__cta-btn-sub"><?php esc_html_e( 'Apply for Veteran Support →', 'cvc-theme' ); ?></span>
					</a>
					<p class="cvc-contact__cta-note">
						<?php esc_html_e( 'Confidential. Veteran-led. No one fights alone.', 'cvc-theme' ); ?>
					</p>
				</div>
			</div>
			<div class="cvc-contact__details">
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
					<h3><?php esc_html_e( 'Office', 'cvc-theme' ); ?></h3>
					<p><a href="<?php echo esc_url( cvc_phone_href() ); ?>"><?php echo esc_html( cvc_phone_display() ); ?></a></p>
				</div>
			</div>
		</div>
	</div>
</section>
