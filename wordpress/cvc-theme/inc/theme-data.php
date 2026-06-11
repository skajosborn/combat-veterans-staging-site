<?php
/**
 * Static content matching the Next.js site.
 *
 * @package CVC_Theme
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Show homepage Vision section (#vision) and navbar link.
 * Set filter to true or change default below to re-enable.
 * Files template-parts/home-vision.php and page-future-goal.php are always kept.
 */
function cvc_show_vision() {
	return (bool) apply_filters( 'cvc_show_vision', false );
}

/**
 * Pages to create on theme setup (slug => title).
 */
function cvc_get_default_pages() {
	return array(
		'veteran-application'  => __( 'Veteran Application', 'cvc-theme' ),
		'about'                => __( 'About', 'cvc-theme' ),
		'events'               => __( 'Events', 'cvc-theme' ),
		'sponsors'             => __( 'Sponsors', 'cvc-theme' ),
		'donate'               => __( 'Donate', 'cvc-theme' ),
		'get-involved'         => __( 'Get Involved', 'cvc-theme' ),
		'donate-your-car'      => __( 'Donate Your Car', 'cvc-theme' ),
		'donate-your-laptop'   => __( 'Donate Your Laptop', 'cvc-theme' ),
		'volunteer'            => __( 'Volunteer', 'cvc-theme' ),
		'planned-giving'       => __( 'Planned Giving', 'cvc-theme' ),
		'support-a-veteran'    => __( 'Support a Veteran', 'cvc-theme' ),
		'become-a-partner'     => __( 'Become a Partner', 'cvc-theme' ),
		'future-goal'          => __( 'Our Vision', 'cvc-theme' ),
		'operation-field-trip' => __( 'Operation Field Trip', 'cvc-theme' ),
		'whats-next'           => __( "What's Next", 'cvc-theme' ),
		'save-a-veteran'       => __( 'Save a Veteran', 'cvc-theme' ),
		'battle-buddy'         => __( 'Battle Buddy', 'cvc-theme' ),
		'mission'              => __( 'Mission', 'cvc-theme' ),
		'staff'                => __( 'Staff', 'cvc-theme' ),
		'board-members'        => __( 'Board Members', 'cvc-theme' ),
		'thrift-store'                        => __( 'Thrift Store', 'cvc-theme' ),
		'restoring-hope-thrift-store'         => __( 'Restoring Hope Thrift Store', 'cvc-theme' ),
		'restoring-hope-clothing-boutique'    => __( 'Restoring Hope Clothing Boutique', 'cvc-theme' ),
	);
}

/**
 * Bump when primary nav structure changes (triggers menu rebuild).
 */
define( 'CVC_NAV_MENU_VERSION', 17 );

/**
 * Primary nav (label, url callback key or raw path).
 */
function cvc_get_about_nav_children() {
	return array(
		array( 'label' => __( 'Veterans Path', 'cvc-theme' ), 'slug' => 'whats-next' ),
		array( 'label' => __( 'History', 'cvc-theme' ), 'slug' => 'about', 'hash' => 'history' ),
		array( 'label' => __( 'Mission', 'cvc-theme' ), 'slug' => 'mission' ),
		array(
			'label'    => __( 'Get Involved', 'cvc-theme' ),
			'children' => cvc_get_get_involved_nav_children(),
		),
		array(
			'label'    => __( 'Our Team', 'cvc-theme' ),
			'children' => cvc_get_our_team_nav_children(),
		),
		array( 'label' => __( 'Financials', 'cvc-theme' ), 'slug' => 'financials' ),
		array( 'label' => __( 'News Blog', 'cvc-theme' ), 'slug' => 'news-blog' ),
	);
}

function cvc_get_get_involved_nav_children() {
	return array(
		array(
			'label' => __( 'Donate', 'cvc-theme' ),
			'url'   => 'https://combatveteranstocareers.org/donate/',
		),
		array(
			'label' => __( 'Donate Your Car', 'cvc-theme' ),
			'url'   => 'https://combatveteranstocareers.org/car-donation/',
		),
		array(
			'label' => __( 'Donate Your Laptop', 'cvc-theme' ),
			'url'   => 'https://combatveteranstocareers.org/laptop-donation/',
		),
		array(
			'label' => __( 'Volunteer', 'cvc-theme' ),
			'url'   => 'https://combatveteranstocareers.org/volunteer/',
		),
		array(
			'label' => __( 'Planned Giving', 'cvc-theme' ),
			'url'   => 'https://combatveteranstocareers.plannedgiving.org/index.php?r=1',
		),
		array(
			'label' => __( 'Support a Veteran', 'cvc-theme' ),
			'url'   => 'https://combatveteranstocareers.org/support-a-veteran/',
		),
		array(
			'label' => __( 'Become a Partner', 'cvc-theme' ),
			'url'   => 'https://combatveteranstocareers.org/become-a-partner/',
		),
	);
}

function cvc_get_our_team_nav_children() {
	return array(
		array( 'label' => __( 'CVC Staff', 'cvc-theme' ), 'slug' => 'staff' ),
		array( 'label' => __( 'Board Members', 'cvc-theme' ), 'slug' => 'board-members' ),
	);
}

function cvc_get_events_nav_children() {
	return array(
		array(
			'label' => __( 'Upcoming Events', 'cvc-theme' ),
			'slug'  => 'events',
			'hash'  => 'upcoming',
		),
		array(
			'label' => __( 'Event Gallery', 'cvc-theme' ),
			'slug'  => 'events',
			'hash'  => 'event-gallery',
		),
	);
}

function cvc_get_our_programs_nav_children() {
	return array(
		array( 'label' => __( 'Operation Field Trip', 'cvc-theme' ), 'slug' => 'operation-field-trip' ),
		array( 'label' => __( 'Save a Veteran', 'cvc-theme' ), 'slug' => 'save-a-veteran' ),
		array( 'label' => __( "What's Next?", 'cvc-theme' ), 'slug' => 'whats-next' ),
		array( 'label' => __( 'Battle Buddy', 'cvc-theme' ), 'slug' => 'battle-buddy' ),
	);
}

function cvc_get_nav_quick_tabs() {
	return array(
		array(
			'label'    => __( 'Veteran Application', 'cvc-theme' ),
			'short'    => __( 'Veteran App', 'cvc-theme' ),
			'subtitle' => __( 'Start your next chapter', 'cvc-theme' ),
			'slug'     => 'veteran-application',
			'tone'     => 'red',
			'icon'     => 'application',
		),
		array(
			'label'    => __( 'Operation Field Trip', 'cvc-theme' ),
			'short'    => __( 'Field Trip', 'cvc-theme' ),
			'subtitle' => __( 'Upcoming events & details', 'cvc-theme' ),
			'slug'     => 'operation-field-trip',
			'tone'     => 'red',
			'icon'     => 'calendar',
		),
		array(
			'label'    => __( "What's Next?", 'cvc-theme' ),
			'short'    => __( "What's Next", 'cvc-theme' ),
			'subtitle' => __( 'Guidance for your future', 'cvc-theme' ),
			'slug'     => 'whats-next',
			'tone'     => 'red',
			'icon'     => 'compass',
		),
	);
}

function cvc_get_nav_items() {
	return array(
		array(
			'stack'    => array( 'OUR', 'PROGRAMS' ),
			'anchor'   => 'programs',
			'children' => cvc_get_our_programs_nav_children(),
		),
		array(
			'label'    => __( 'ABOUT', 'cvc-theme' ),
			'children' => cvc_get_about_nav_children(),
		),
		array(
			'label'    => __( 'EVENTS', 'cvc-theme' ),
			'children' => cvc_get_events_nav_children(),
		),
		array( 'label' => __( 'SPONSORS', 'cvc-theme' ), 'slug' => 'sponsors' ),
		array( 'label' => __( 'CONTACT', 'cvc-theme' ), 'anchor' => 'contact' ),
		array(
			'label'    => __( 'THRIFT STORES', 'cvc-theme' ),
			'children' => array(
				array(
					'label' => __( 'Restoring Hope Thrift Store', 'cvc-theme' ),
					'url'   => 'https://restoringhopethrift.org/',
				),
				array(
					'label' => __( 'Restoring Hope Clothing Boutique', 'cvc-theme' ),
					'url'   => 'https://restoringhopethrift.org/',
				),
			),
		),
	);
}

/**
 * Hero / quick links.
 */
function cvc_get_quick_links() {
	return array(
		array( 'label' => __( 'Application', 'cvc-theme' ), 'slug' => 'veteran-application' ),
		array( 'label' => __( 'Operation Field Trip', 'cvc-theme' ), 'slug' => 'operation-field-trip' ),
		array( 'label' => __( "What's Next", 'cvc-theme' ), 'slug' => 'whats-next' ),
		array( 'label' => __( 'About', 'cvc-theme' ), 'slug' => 'about' ),
		array( 'label' => __( 'Events', 'cvc-theme' ), 'slug' => 'events' ),
		array( 'label' => __( 'Thrift Store', 'cvc-theme' ), 'slug' => 'restoring-hope-thrift-store' ),
		array( 'label' => __( 'Sponsors', 'cvc-theme' ), 'slug' => 'sponsors' ),
		array( 'label' => __( 'Donate', 'cvc-theme' ), 'slug' => 'donate', 'accent' => true ),
	);
}

function cvc_get_programs() {
	return array(
		array(
			'title'       => __( 'Career Transition Program', 'cvc-theme' ),
			'description' => __( 'Comprehensive 12-week program designed to help veterans identify their strengths and transition into civilian careers.', 'cvc-theme' ),
			'image'       => 'skills.jpg',
		),
		array(
			'title'       => __( 'Skills Assessment', 'cvc-theme' ),
			'description' => __( 'Professional evaluation of military skills and their translation to civilian job markets.', 'cvc-theme' ),
			'image'       => 'skills2.jpg',
		),
		array(
			'title'       => __( 'Mentorship Network', 'cvc-theme' ),
			'description' => __( 'Connect with successful veterans who have made the transition and can guide your journey.', 'cvc-theme' ),
			'image'       => 'skills3.jpg',
		),
		array(
			'title'       => __( 'Job Placement', 'cvc-theme' ),
			'description' => __( 'Direct connections with employers who value the skills and dedication of combat veterans.', 'cvc-theme' ),
			'image'       => 'skills4.jpg',
		),
		array(
			'title'       => __( 'Resume Building', 'cvc-theme' ),
			'description' => __( 'Expert assistance in crafting resumes that highlight military experience in civilian terms.', 'cvc-theme' ),
			'image'       => 'skills5.jpg',
		),
		array(
			'title'       => __( 'Interview Prep', 'cvc-theme' ),
			'description' => __( 'Mock interviews and coaching to help you confidently present your value to employers.', 'cvc-theme' ),
			'image'       => 'skills6.jpg',
		),
	);
}

function cvc_get_hero_pillars() {
	return array(
		array(
			'title'       => __( 'Personalized Support', 'cvc-theme' ),
			'description' => __( 'Guidance every step of the way.', 'cvc-theme' ),
			'icon'        => 'user',
		),
		array(
			'title'       => __( 'Career Navigation', 'cvc-theme' ),
			'description' => __( 'Find your path. Build your future.', 'cvc-theme' ),
			'icon'        => 'compass',
		),
		array(
			'title'       => __( 'Community', 'cvc-theme' ),
			'description' => __( 'Connect with those who understand.', 'cvc-theme' ),
			'icon'        => 'group',
		),
		array(
			'title'       => __( 'Proven Impact', 'cvc-theme' ),
			'description' => __( 'Empowering veterans to succeed.', 'cvc-theme' ),
			'icon'        => 'graph',
		),
	);
}

function cvc_get_vision_pillars() {
	return array(
		array(
			'title'       => __( 'Learning Center & Career Counseling', 'cvc-theme' ),
			'description' => __( 'Training and career guidance where veterans learn trades, earn certifications, and choose civilian career paths.', 'cvc-theme' ),
			'image'       => 'learning-center.png',
		),
		array(
			'title'       => __( 'Medical Treatment Center & Ketamine Clinic', 'cvc-theme' ),
			'description' => __( 'Integrated medical care and trauma-focused treatment for PTSD, depression, and severe stress.', 'cvc-theme' ),
			'image'       => 'medicaltreatmentandKC.png',
		),
		array(
			'title'       => __( 'Suicide Prevention & Mental Health Counseling', 'cvc-theme' ),
			'description' => __( 'Urgent and ongoing behavioral health support for the veteran suicide crisis.', 'cvc-theme' ),
			'image'       => 'suicideprevention.png',
		),
		array(
			'title'       => __( 'Hotel & Restaurant', 'cvc-theme' ),
			'description' => __( 'Transitional housing and on-site amenities for stability during treatment and job preparation.', 'cvc-theme' ),
			'image'       => 'restaurantandhotel.png',
		),
		array(
			'title'       => __( 'Thrift Stores', 'cvc-theme' ),
			'description' => __( 'Donation-driven stores that fund veteran programs.', 'cvc-theme' ),
			'image'       => 'thriftstores.png',
		),
		array(
			'title'       => __( 'Main Office', 'cvc-theme' ),
			'description' => __( 'Central hub for veterans and families to get connected to CVC services.', 'cvc-theme' ),
			'image'       => 'mainoffice.png',
		),
	);
}

function cvc_get_success_stories() {
	return array(
		array(
			'name'  => 'Marcus Johnson',
			'rank'  => __( 'Former Army Sergeant', 'cvc-theme' ),
			'role'  => __( 'Software Engineer at TechCorp', 'cvc-theme' ),
			'quote' => __( 'The foundation helped me discover a new purpose. My military leadership skills translated perfectly into tech.', 'cvc-theme' ),
			'image' => 'army.png',
		),
		array(
			'name'  => 'Miles Martinez',
			'rank'  => __( 'Former Marine Captain', 'cvc-theme' ),
			'role'  => __( 'Operations Director at Logistics Plus', 'cvc-theme' ),
			'quote' => __( 'The mentorship program showed me how valuable my skills really are.', 'cvc-theme' ),
			'image' => 'army2.png',
		),
		array(
			'name'  => 'James Wilson',
			'rank'  => __( 'Former Navy SEAL', 'cvc-theme' ),
			'role'  => __( 'Project Manager at Global Solutions', 'cvc-theme' ),
			'quote' => __( 'I went from uncertain to employed in 90 days.', 'cvc-theme' ),
			'image' => 'navy.png',
		),
	);
}

/**
 * Resolve nav item to URL.
 */
function cvc_nav_item_url( $item ) {
	if ( ! empty( $item['url'] ) ) {
		return (string) $item['url'];
	}
	if ( ! empty( $item['anchor'] ) && empty( $item['slug'] ) ) {
		return cvc_home_url( $item['anchor'] );
	}
	if ( ! empty( $item['slug'] ) ) {
		$url = cvc_page_url( $item['slug'] );
		if ( ! empty( $item['hash'] ) ) {
			$url .= '#' . ltrim( (string) $item['hash'], '#' );
		}
		return $url;
	}
	return home_url( '/' );
}
