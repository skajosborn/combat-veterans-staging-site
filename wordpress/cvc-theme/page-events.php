<?php
/**
 * Events page.
 *
 * @package CVC_Theme
 */

get_header();
cvc_page_open();

$events          = cvc_get_events();
$calendar_months = array( 'February', 'March', 'April', 'May', 'June' );
?>

<article class="cvc-card cvc-page-article">
	<?php
	cvc_section_title(
		array(
			'title'    => __( 'Events', 'cvc-theme' ),
			'tag'      => 'h1',
			'size'     => 'page',
			'subtitle' => '<p>' . esc_html__( 'Explore recent and upcoming events and veteran-focused activities.', 'cvc-theme' ) . '</p>',
		)
	);

	if ( ! cvc_the_editor_content_if_any() ) :
		get_template_part( 'template-parts/events', 'carousel' );
		?>

		<div class="cvc-card cvc-card--inner" id="upcoming">
			<?php
			cvc_section_title(
				array(
					'title' => __( 'Event Timeline', 'cvc-theme' ),
					'tag'   => 'h2',
					'size'  => 'subsection',
					'align' => 'left',
				)
			);
			?>
			<div class="cvc-timeline">
				<?php foreach ( $events as $event ) : ?>
					<article class="cvc-timeline__item" id="<?php echo esc_attr( $event['slug'] ); ?>">
						<p class="cvc-timeline__date"><?php echo esc_html( $event['month'] . ' — ' . $event['date_label'] ); ?></p>
						<h3 class="cvc-timeline__title"><?php echo esc_html( $event['title'] ); ?></h3>
						<p class="cvc-timeline__teaser"><?php echo esc_html( $event['teaser'] ); ?></p>
						<?php if ( ! empty( $event['external'] ) ) : ?>
							<a class="cvc-link-arrow" href="<?php echo esc_url( $event['external'] ); ?>" target="_blank" rel="noopener noreferrer"><?php esc_html_e( 'View event details', 'cvc-theme' ); ?></a>
						<?php endif; ?>
					</article>
				<?php endforeach; ?>
			</div>
		</div>

		<div class="cvc-card cvc-card--inner">
			<?php
			cvc_section_title(
				array(
					'title' => __( 'Event Calendar', 'cvc-theme' ),
					'tag'   => 'h2',
					'size'  => 'subsection',
					'align' => 'left',
				)
			);
			?>
			<div class="cvc-grid cvc-grid--3">
				<?php foreach ( $calendar_months as $month ) : ?>
					<div class="cvc-card cvc-card--inner cvc-card--flat">
						<h3 class="cvc-tile__title"><?php echo esc_html( $month ); ?></h3>
						<ul class="cvc-list cvc-list--compact">
							<?php
							$month_events = array_filter(
								$events,
								static function ( $e ) use ( $month ) {
									return $e['month'] === $month;
								}
							);
							if ( ! $month_events ) :
								?>
								<li class="cvc-list__muted"><?php esc_html_e( 'No event posted yet.', 'cvc-theme' ); ?></li>
							<?php else : ?>
								<?php foreach ( $month_events as $event ) : ?>
									<li><a href="#<?php echo esc_attr( $event['slug'] ); ?>"><?php echo esc_html( $event['title'] ); ?></a></li>
								<?php endforeach; ?>
							<?php endif; ?>
						</ul>
					</div>
				<?php endforeach; ?>
			</div>
		</div>

		<div id="event-gallery">
		<?php foreach ( $events as $event ) : ?>
			<?php if ( empty( $event['embed'] ) && empty( $event['image'] ) ) { continue; } ?>
			<div class="cvc-card cvc-card--inner" id="event-<?php echo esc_attr( $event['slug'] ); ?>">
				<?php
				cvc_section_title(
					array(
						'title' => $event['title'],
						'tag'   => 'h2',
						'size'  => 'subsection',
						'align' => 'left',
					)
				);
				if ( ! empty( $event['embed'] ) ) {
					cvc_render_video( $event['embed'], $event['title'] );
				} elseif ( ! empty( $event['image'] ) && cvc_img_exists( $event['image'] ) ) {
					echo '<p><img class="cvc-img-wide" src="' . esc_url( cvc_img( $event['image'] ) ) . '" alt="' . esc_attr( $event['title'] ) . '" /></p>';
				}
				?>
			</div>
		<?php endforeach; ?>
		</div>

	<?php endif; ?>
</article>

<?php
cvc_page_close();
get_footer();
