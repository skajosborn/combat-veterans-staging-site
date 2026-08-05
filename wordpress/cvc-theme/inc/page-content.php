<?php
/**
 * Default page copy (mirrors Next.js app when WP editor content is empty).
 *
 * @package CVC_Theme
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * True when the current page has editor content (e.g. from import).
 */
function cvc_has_post_content() {
	global $post;
	if ( ! $post || 'page' !== $post->post_type ) {
		return false;
	}
	return (bool) trim( $post->post_content );
}

/**
 * Output editor content if present; returns whether anything was printed.
 */
function cvc_the_editor_content_if_any() {
	if ( ! cvc_has_post_content() ) {
		return false;
	}
	while ( have_posts() ) :
		the_post();
		echo '<div class="cvc-prose entry-content">';
		the_content();
		echo '</div>';
	endwhile;
	rewind_posts();
	return true;
}

/**
 * @param string[] $paragraphs
 */
function cvc_render_paragraphs( $paragraphs ) {
	echo '<div class="cvc-prose">';
	foreach ( $paragraphs as $paragraph ) {
		echo '<p>' . esc_html( $paragraph ) . '</p>';
	}
	echo '</div>';
}

/**
 * @param string $src
 * @param string $title
 */
function cvc_render_video( $src, $title ) {
	?>
	<div class="cvc-video">
		<iframe
			src="<?php echo esc_url( $src ); ?>"
			title="<?php echo esc_attr( $title ); ?>"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			referrerpolicy="strict-origin-when-cross-origin"
			allowfullscreen
			loading="lazy"
		></iframe>
	</div>
	<?php
}

/**
 * Events list (matches lib/events.ts).
 *
 * @return array<int, array<string, string>>
 */
function cvc_get_events() {
	return array(
		array(
			'slug'        => '2026-save-a-veteran-reverse-raffle',
			'title'       => __( '2026 Save A Veteran Reverse Raffle', 'cvc-theme' ),
			'image'       => 'Reverse-Raffle-Flyer-2026.jpg',
			'teaser'      => __( 'Grand Prize: $10,000 cash. Only 300 tickets sold. $120 ticket includes heavy hors d\'oeuvres, entertainment for two, and a chance to win.', 'cvc-theme' ),
			'month'       => __( 'April', 'cvc-theme' ),
			'date_label'  => __( 'April 13, 2026 · 6-9 PM', 'cvc-theme' ),
			'external'    => 'https://combatveteranstocareers.org/2026-reverse-raffle/',
			'embed'       => '',
		),
		array(
			'slug'       => '7th-annual-battle-buddy-golf-tournament',
			'title'      => __( '7th Annual Battle Buddy Golf Tournament', 'cvc-theme' ),
			'teaser'     => __( 'A signature CVC community event bringing supporters together for veteran-focused impact.', 'cvc-theme' ),
			'month'      => __( 'February', 'cvc-theme' ),
			'date_label' => __( 'Date to be announced', 'cvc-theme' ),
			'embed'      => 'https://www.youtube.com/embed/4FLzvQxT9-8',
		),
		array(
			'slug'       => '3rd-annual-battle-buddy-clay-shoot',
			'title'      => __( '3rd Annual Battle Buddy Clay Shoot', 'cvc-theme' ),
			'teaser'     => __( 'An action-focused annual gathering that supports programs for veterans and their families.', 'cvc-theme' ),
			'month'      => __( 'March', 'cvc-theme' ),
			'date_label' => __( 'Date to be announced', 'cvc-theme' ),
			'embed'      => 'https://www.youtube.com/embed/sMGX71mjLWs',
		),
		array(
			'slug'       => 'restoring-hope-fashion-show',
			'title'      => __( 'Restoring Hope Fashion Show', 'cvc-theme' ),
			'teaser'     => __( 'A mission-driven event spotlighting community support and restoration for veterans.', 'cvc-theme' ),
			'month'      => __( 'April', 'cvc-theme' ),
			'date_label' => __( 'Date to be announced', 'cvc-theme' ),
			'embed'      => 'https://www.youtube.com/embed/c5FIJzgGJTc',
		),
		array(
			'slug'       => 'harley-motorcycle-raffle',
			'title'      => __( 'Harley Motorcycle Raffle', 'cvc-theme' ),
			'teaser'     => __( 'A high-energy fundraiser to generate direct support for CVC veteran initiatives.', 'cvc-theme' ),
			'month'      => __( 'May', 'cvc-theme' ),
			'date_label' => __( 'Date to be announced', 'cvc-theme' ),
			'embed'      => 'https://www.youtube.com/embed/Dk4y7DIaRT8',
		),
		array(
			'slug'       => 'outdoor-adventure-raffle',
			'title'      => __( 'Outdoor Adventure Raffle', 'cvc-theme' ),
			'teaser'     => __( 'A community raffle experience designed to fuel long-term veteran transition services.', 'cvc-theme' ),
			'month'      => __( 'June', 'cvc-theme' ),
			'date_label' => __( 'Date to be announced', 'cvc-theme' ),
			'embed'      => 'https://www.youtube.com/embed/shWz0nhKLnE',
		),
	);
}

function cvc_get_mission_paragraphs() {
	return array(
		__( 'Combat Veterans to Careers (CVC) was founded in The Villages in May 2012 with the commitment to serve our nation\'s combat veterans and their families. Since our inception, we\'ve assisted more than 955 veteran families in the area of education, employment, housing and wellness.', 'cvc-theme' ),
		__( 'CVC has partnered with local residents, clubs, businesses, colleges and VA offices to bring combat veterans and their families "home" to a community that embraces them and provides education, understanding and meaningful employment to minimize hardships.', 'cvc-theme' ),
		__( 'In addition to counseling, housing, career and educational opportunities, we provide veterans with opportunities to deliver services beyond themselves. This is essential to successfully reconnecting with others in the community, and is a large part of why many veterans were led to serve their country in the first place.', 'cvc-theme' ),
		__( 'Accessing care and benefits through the VA, utilizing earned education benefits, training for civilian careers, securing affordable housing and developing a quality resume package are just a few of the ways we continue to help our veterans transition back into civilian life.', 'cvc-theme' ),
	);
}

function cvc_get_about_david_paragraphs() {
	return array(
		__( 'David Booth is the driving force behind Combat Veterans to Careers. A retired U.S. Army Master Sergeant with 20 years of honorable service, David dedicated his military career to leading soldiers in some of the most demanding environments imaginable. His service was marked by courage, commitment, and sacrifice — including surviving an IED explosion that ultimately ended his military career.', 'cvc-theme' ),
		__( 'Rather than allowing that moment to define him, David chose to let it redirect him.', 'cvc-theme' ),
		__( 'After transitioning from active duty, David experienced firsthand the invisible battles many veterans face — the challenges of reintegration, the weight of trauma, and the search for renewed purpose. That experience ignited a mission: to ensure no combat veteran has to navigate civilian life alone.', 'cvc-theme' ),
		__( 'Through Combat Veterans to Careers, David has built a community-centered organization focused on restoration, resilience, and real-world support. The organization provides transitional assistance, mentorship, healing programs, and access to innovative therapies for veterans struggling with PTSD, depression, anxiety, and the lasting effects of combat.', 'cvc-theme' ),
		__( 'David\'s leadership blends battlefield experience with compassionate service. Whether coordinating life-changing programs, hosting community events, or sitting one-on-one with a veteran in crisis, he remains deeply committed to helping others rebuild their lives with dignity and strength.', 'cvc-theme' ),
		__( 'For David, this work is more than a nonprofit — it is a continuation of his oath to serve.', 'cvc-theme' ),
	);
}

function cvc_get_application_intro_paragraphs() {
	return array(
		__( 'The transition from military service to civilian life can be challenging, especially for combat veterans who have served in Iraq and Afghanistan. Combat Veterans to Careers (CVC) is dedicated to helping these heroes and their families in Central Florida prepare for successful careers in the civilian workforce.', 'cvc-theme' ),
		__( 'If you are interested in learning more about our programs and services, please complete an application. We work with veterans who served post-9/11 in Iraq or Afghanistan, require verification of service, and ensure all information is kept confidential.', 'cvc-theme' ),
	);
}

function cvc_application_form_url() {
	$url = apply_filters( 'cvc_application_form_url', 'https://combatveteranstocareers.org/veteran-application/' );
	return esc_url( $url );
}

/**
 * Featured homepage upcoming event cards (matches lib/upcomingEvents.ts).
 *
 * @return array<int, array{title:string,date_label:string,location?:string,image:string,url:string,external?:bool}>
 */
function cvc_get_upcoming_event_cards() {
	return array(
		array(
			'title'      => __( '2027 Gun Raffle', 'cvc-theme' ),
			'date_label' => __( 'Every Friday in 2027', 'cvc-theme' ),
			'image'      => 'events/gun-raffle-2027.jpg',
			'url'        => 'https://combatveteranstocareers.org/gun_raffle_2027/',
			'external'   => true,
			'accent'     => 'olive',
		),
		array(
			'title'      => __( '2027 Battle Buddy Clay Shoot', 'cvc-theme' ),
			'date_label' => __( 'January 9, 2027', 'cvc-theme' ),
			'location'   => __( 'Blackjack Sporting Clays, Sumterville', 'cvc-theme' ),
			'image'      => 'events/clay-shoot-2027.jpg',
			'url'        => 'https://combatveteranstocareers.org/battle-buddy-clay-shoot',
			'external'   => true,
			'accent'     => 'navy',
		),
		array(
			'title'      => __( '2027 Fashion Show', 'cvc-theme' ),
			'date_label' => __( 'January 28, 2027', 'cvc-theme' ),
			'location'   => __( '6:00 – 9:00 pm • Restoring Hope Clothing Boutique, Wildwood', 'cvc-theme' ),
			'image'      => 'events/fashion-show-2027.jpg',
			'url'        => 'https://combatveteranstocareers.org/fashionshow',
			'external'   => true,
			'accent'     => 'burgundy',
		),
	);
}

/**
 * Featured event slides for events page carousel.
 *
 * @return array<int, array{src:string,title:string,alt:string,link:string}>
 */
function cvc_get_featured_event_slides() {
	return array(
		array(
			'src'   => 'Reverse-Raffle-Flyer-2026.jpg',
			'title' => __( 'Reverse Raffle Flyer 2026', 'cvc-theme' ),
			'alt'   => __( 'Reverse Raffle Flyer 2026', 'cvc-theme' ),
			'link'  => cvc_page_url( 'events' ) . '#2026-save-a-veteran-reverse-raffle',
		),
		array(
			'src'   => 'voices-of-valor.png',
			'title' => __( 'Voices of Valor: Live Music Writers Round', 'cvc-theme' ),
			'alt'   => __( 'Voices of Valor event', 'cvc-theme' ),
			'link'  => cvc_page_url( 'events' ),
		),
	);
}
