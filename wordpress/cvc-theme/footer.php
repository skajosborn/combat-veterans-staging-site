<?php
/**
 * Footer template.
 *
 * @package CVC_Theme
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
?>

</div><!-- .cvc-site -->

<footer class="cvc-footer">
	<div class="cvc-container">
		<?php
		wp_nav_menu(
			array(
				'theme_location' => 'footer',
				'container'      => false,
				'menu_class'     => 'menu',
				'depth'          => 1,
				'fallback_cb'    => false,
			)
		);
		?>
		<p>
			&copy; <?php echo esc_html( gmdate( 'Y' ) ); ?>
			<a href="<?php echo esc_url( home_url( '/' ) ); ?>"><?php bloginfo( 'name' ); ?></a>
		</p>
	</div>
</footer>

<?php wp_footer(); ?>
</body>
</html>
