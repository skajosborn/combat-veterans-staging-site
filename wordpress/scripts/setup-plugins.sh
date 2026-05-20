#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

echo "Waiting for WordPress..."
until docker compose exec -T wordpress test -f /var/www/html/wp-config.php 2>/dev/null; do
  sleep 2
done

echo "Installing All-in-One WP Migration..."
docker compose run --rm wpcli plugin install all-in-one-wp-migration --activate

echo "Plugin installed. Open WP Admin → All-in-One WP Migration → Import or Backups."
