<?php
/**
 * Front page template.
 *
 * @package CVC_Theme
 */

get_header();
?>

<?php get_template_part( 'template-parts/home', 'hero' ); ?>
<?php get_template_part( 'template-parts/home', 'programs' ); ?>
<?php
// Vision block: set cvc_show_vision filter to true to restore (see inc/theme-data.php).
if ( cvc_show_vision() ) {
	get_template_part( 'template-parts/home', 'vision' );
}
?>
<?php get_template_part( 'template-parts/home', 'success' ); ?>
<?php get_template_part( 'template-parts/contact', 'strip' ); ?>

<?php
get_footer();
