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

	$expected_count = cvc_count_nav_menu_items();
	$existing       = wp_get_nav_menu_items( $menu_id );
	$menu_version   = (int) get_option( 'cvc_nav_menu_version', 0 );
	if (
		! $force
		&& $menu_version >= CVC_NAV_MENU_VERSION
		&& $existing
		&& count( $existing ) === $expected_count
	) {
		return;
	}

	if ( $existing ) {
		foreach ( $existing as $item ) {
			wp_delete_post( $item->ID, true );
		}
	}

	$order = 0;
	foreach ( cvc_get_nav_items() as $item ) {
		$order = cvc_insert_nav_menu_branch( $menu_id, $item, $order, 0 );
	}

	update_option( 'cvc_nav_menu_version', CVC_NAV_MENU_VERSION );
}

/**
 * Insert a nav branch (item plus optional nested children).
 *
 * @param int   $menu_id   Menu term ID.
 * @param array $item      Nav item (label, slug, anchor, or children).
 * @param int   $order     Position.
 * @param int   $parent_id Parent menu item ID.
 * @return int Next menu position.
 */
function cvc_insert_nav_menu_branch( $menu_id, $item, $order, $parent_id = 0 ) {
	if ( ! empty( $item['children'] ) ) {
		++$order;
		$title = ! empty( $item['stack'] ) && is_array( $item['stack'] )
			? implode( ' ', $item['stack'] )
			: ( $item['label'] ?? '' );

		$args = array(
			'menu-item-title'     => $title,
			'menu-item-status'    => 'publish',
			'menu-item-position'  => $order,
			'menu-item-parent-id' => $parent_id,
		);

		if ( ! empty( $item['slug'] ) ) {
			$page = get_page_by_path( $item['slug'] );
			if ( $page && empty( $item['hash'] ) ) {
				$args['menu-item-object']    = 'page';
				$args['menu-item-object-id'] = $page->ID;
				$args['menu-item-type']      = 'post_type';
			} else {
				$args['menu-item-url']  = cvc_nav_item_url( $item );
				$args['menu-item-type'] = 'custom';
			}
		} elseif ( ! empty( $item['anchor'] ) ) {
			$args['menu-item-url']  = cvc_nav_item_url( $item );
			$args['menu-item-type'] = 'custom';
		} else {
			$args['menu-item-url']  = '#';
			$args['menu-item-type'] = 'custom';
		}

		if ( ! empty( $item['stack'] ) ) {
			$args['menu-item-classes'] = 'cvc-nav__stacked-item';
		}

		$branch_id = wp_update_nav_menu_item( $menu_id, 0, $args );
		if ( is_wp_error( $branch_id ) ) {
			return $order;
		}
		if ( ! empty( $item['stack'] ) ) {
			update_post_meta( (int) $branch_id, '_cvc_nav_stack', $item['stack'] );
		}
		foreach ( $item['children'] as $child ) {
			$order = cvc_insert_nav_menu_branch( $menu_id, $child, $order, (int) $branch_id );
		}
		return $order;
	}

	++$order;
	cvc_insert_nav_menu_item( $menu_id, $item, $order, $parent_id );
	return $order;
}

/**
 * @param int    $menu_id   Menu term ID.
 * @param array  $item      Nav item (label, slug, or anchor).
 * @param int    $order     Position.
 * @param int    $parent_id Parent menu item ID.
 */
function cvc_insert_nav_menu_item( $menu_id, $item, $order, $parent_id = 0 ) {
	$title = ! empty( $item['stack'] ) && is_array( $item['stack'] )
		? implode( ' ', $item['stack'] )
		: ( $item['label'] ?? '' );

	$args = array(
		'menu-item-title'     => $title,
		'menu-item-status'    => 'publish',
		'menu-item-position'  => $order,
		'menu-item-parent-id' => $parent_id,
	);

	if ( ! empty( $item['stack'] ) ) {
		$args['menu-item-classes'] = 'cvc-nav__stacked-item';
	}

	if ( ! empty( $item['slug'] ) ) {
		$page = get_page_by_path( $item['slug'] );
		if ( $page && empty( $item['hash'] ) ) {
			$args['menu-item-object']    = 'page';
			$args['menu-item-object-id'] = $page->ID;
			$args['menu-item-type']      = 'post_type';
			$menu_item_id                = wp_update_nav_menu_item( $menu_id, 0, $args );
			if ( ! is_wp_error( $menu_item_id ) && ! empty( $item['stack'] ) ) {
				update_post_meta( (int) $menu_item_id, '_cvc_nav_stack', $item['stack'] );
			}
			return;
		}
	}

	$args['menu-item-url']  = cvc_nav_item_url( $item );
	$args['menu-item-type'] = 'custom';
	$menu_item_id           = wp_update_nav_menu_item( $menu_id, 0, $args );
	if ( ! is_wp_error( $menu_item_id ) && ! empty( $item['stack'] ) ) {
		update_post_meta( (int) $menu_item_id, '_cvc_nav_stack', $item['stack'] );
	}
}

/**
 * Expected primary menu item count (parents + children).
 */
function cvc_count_nav_menu_branch( $items ) {
	$count = 0;
	foreach ( $items as $item ) {
		++$count;
		if ( ! empty( $item['children'] ) ) {
			$count += cvc_count_nav_menu_branch( $item['children'] );
		}
	}
	return $count;
}

function cvc_count_nav_menu_items() {
	return cvc_count_nav_menu_branch( cvc_get_nav_items() );
}

add_action( 'after_switch_theme', 'cvc_run_theme_setup' );

/**
 * Rebuild primary menu when nav structure version changes.
 */
function cvc_maybe_rebuild_primary_menu() {
	if ( (int) get_option( 'cvc_nav_menu_version', 0 ) >= CVC_NAV_MENU_VERSION ) {
		return;
	}
	cvc_create_primary_menu( true );
}
add_action( 'after_setup_theme', 'cvc_maybe_rebuild_primary_menu', 20 );

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
