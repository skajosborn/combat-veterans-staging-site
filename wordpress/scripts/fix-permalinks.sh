#!/usr/bin/env bash
# Fix pretty permalinks (404 on /about/, etc.) after Docker import or fresh install.
set -euo pipefail

cd "$(dirname "$0")/.."

docker compose up -d wordpress

docker compose run --rm wpcli option update permalink_structure '/%postname%/'
docker compose run --rm wpcli rewrite flush

# Also write .htaccess when WP-CLI cannot (optional backup for non-Docker hosts).
docker compose exec -T wordpress bash -c 'cat > /var/www/html/.htaccess' <<'EOF'
# BEGIN WordPress
<IfModule mod_rewrite.c>
RewriteEngine On
RewriteRule .* - [E=HTTP_AUTHORIZATION:%{HTTP:Authorization}]
RewriteBase /
RewriteRule ^index\.php$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.php [L]
</IfModule>
# END WordPress
EOF

echo "Permalinks fixed. Test: http://localhost:8080/about/"
