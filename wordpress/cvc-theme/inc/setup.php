<?php
/**
 * Create pages and menus on theme activation.
 *
 * @package CVC_Theme
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Run full theme setup (idempotent).
 */
function cvc_run_theme_setup() {
	cvc_create_default_pages();
	cvc_create_primary_menu( true );
	if ( get_option( 'permalink_structure' ) !== '/%postname%/' ) {
		update_option( 'permalink_structure', '/%postname%/' );
	}
	flush_rewrite_rules();
}

/**
 * Create pages by slug if missing.
 */
function cvc_create_default_pages() {
	foreach ( cvc_get_default_pages() as $slug => $title ) {
		$existing = get_page_by_path( $slug );
		if ( $existing ) {
			continue;
		}

		wp_insert_post(
			array(
				'post_title'   => $title,
				'post_name'    => $slug,
				'post_status'  => 'publish',
				'post_type'    => 'page',
				'post_content' => '',
			)
		);
	}

	$home = get_page_by_path( 'home' );
	if ( ! $home ) {
		$home_id = wp_insert_post(
			array(
				'post_title'  => __( 'Home', 'cvc-theme' ),
				'post_name'   => 'home',
				'post_status' => 'publish',
				'post_type'   => 'page',
			)
		);
	} else {
		$home_id = $home->ID;
	}

	if ( $home_id && ! is_wp_error( $home_id ) ) {
		update_option( 'show_on_front', 'page' );
		update_option( 'page_on_front', (int) $home_id );
	}
}

/**
 * Build primary menu from cvc_get_nav_items().
 *
 * @param bool $force Rebuild menu items even if menu already exists.
 */
function cvc_create_primary_menu( $force = false ) {
	$menu_name = 'CVC Primary';
	$menu      = wp_get_nav_menu_object( $menu_name );

	if ( ! $menu ) {
		$menu_id = wp_create_nav_menu( $menu_name );
	} else {
		$menu_id = $menu->term_id;
	}

	if ( is_wp_error( $menu_id ) || ! $menu_id ) {
		return;
	}

	$locations = get_theme_mod( 'nav_menu_locations', array() );
	if ( empty( $locations['primary'] ) || (int) $locations['primary'] !== (int) $menu_id ) {
		$locations['primary'] = (int) $menu_id;
		set_theme_mod( 'nav_menu_locations', $locations );
	}

	$existing = wp_get_nav_menu_items( $menu_id );
	if ( ! $force && $existing && count( $existing ) >= count( cvc_get_nav_items() ) ) {
		return;
	}

	if ( $existing ) {
		foreach ( $existing as $item ) {
			wp_delete_post( $item->ID, true );
		}
	}

	$order = 0;
	foreach ( cvc_get_nav_items() as $item ) {
		++$order;
		$url = cvc_nav_item_url( $item );

		if ( ! empty( $item['slug'] ) ) {
			$page = get_page_by_path( $item['slug'] );
			if ( $page ) {
				wp_update_nav_menu_item(
					$menu_id,
					0,
					array(
						'menu-item-title'     => $item['label'],
						'menu-item-object'    => 'page',
						'menu-item-object-id' => $page->ID,
						'menu-item-type'      => 'post_type',
						'menu-item-status'    => 'publish',
						'menu-item-position'  => $order,
					)
				);
				continue;
			}
		}

		wp_update_nav_menu_item(
			$menu_id,
			0,
			array(
				'menu-item-title'    => $item['label'],
				'menu-item-url'      => $url,
				'menu-item-type'     => 'custom',
				'menu-item-status'   => 'publish',
				'menu-item-position' => $order,
			)
		);
	}
}

add_action( 'after_switch_theme', 'cvc_run_theme_setup' );

/**
 * Admin: one-click setup if pages missing.
 */
function cvc_admin_setup_notice() {
	if ( ! current_user_can( 'manage_options' ) ) {
		return;
	}
	if ( get_page_by_path( 'about' ) ) {
		return;
	}
	?>
	<div class="notice notice-info">
		<p>
			<strong><?php esc_html_e( 'CVC Theme:', 'cvc-theme' ); ?></strong>
			<?php esc_html_e( 'Click to create pages and navigation links.', 'cvc-theme' ); ?>
			<a class="button button-primary" href="<?php echo esc_url( wp_nonce_url( admin_url( 'themes.php?cvc_setup=1' ), 'cvc_setup' ) ); ?>">
				<?php esc_html_e( 'Run CVC setup', 'cvc-theme' ); ?>
			</a>
		</p>
	</div>
	<?php
}
add_action( 'admin_notices', 'cvc_admin_setup_notice' );

function cvc_admin_handle_setup() {
	if ( ! is_admin() || ! current_user_can( 'manage_options' ) ) {
		return;
	}
	if ( empty( $_GET['cvc_setup'] ) ) {
		return;
	}
	check_admin_referer( 'cvc_setup' );
	cvc_run_theme_setup();
	wp_safe_redirect( admin_url( 'themes.php?cvc_setup_done=1' ) );
	exit;
}
add_action( 'admin_init', 'cvc_admin_handle_setup' );
