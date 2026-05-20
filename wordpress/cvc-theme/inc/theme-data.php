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
		'future-goal'          => __( 'Our Vision', 'cvc-theme' ),
		'operation-field-trip' => __( 'Operation Field Trip', 'cvc-theme' ),
		'whats-next'           => __( "What's Next", 'cvc-theme' ),
		'mission'              => __( 'Mission', 'cvc-theme' ),
		'thrift-store'         => __( 'Thrift Store', 'cvc-theme' ),
	);
}

/**
 * Primary nav (label, url callback key or raw path).
 */
function cvc_get_nav_items() {
	$items = array(
		array( 'label' => __( 'Application', 'cvc-theme' ), 'slug' => 'veteran-application' ),
		array( 'label' => __( 'Programs', 'cvc-theme' ), 'anchor' => 'programs' ),
		array( 'label' => __( 'Vision', 'cvc-theme' ), 'anchor' => 'vision' ),
		array( 'label' => __( 'About', 'cvc-theme' ), 'slug' => 'about' ),
		array( 'label' => __( 'Events', 'cvc-theme' ), 'slug' => 'events' ),
		array( 'label' => __( 'Sponsors', 'cvc-theme' ), 'slug' => 'sponsors' ),
		array( 'label' => __( 'Contact', 'cvc-theme' ), 'anchor' => 'contact' ),
		array( 'label' => __( 'Donate', 'cvc-theme' ), 'slug' => 'donate' ),
	);

	if ( ! cvc_show_vision() ) {
		$items = array_values(
			array_filter(
				$items,
				static function ( $item ) {
					return empty( $item['anchor'] ) || 'vision' !== $item['anchor'];
				}
			)
		);
	}

	return $items;
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
		array( 'label' => __( 'Thrift Store', 'cvc-theme' ), 'slug' => 'thrift-store' ),
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
	if ( ! empty( $item['anchor'] ) ) {
		return cvc_home_url( $item['anchor'] );
	}
	if ( ! empty( $item['slug'] ) ) {
		return cvc_page_url( $item['slug'] );
	}
	return home_url( '/' );
}
