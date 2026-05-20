# Local WordPress (Docker) for Combat Veterans to Careers

Run your **existing WordPress site** locally using the **All-in-One WP Migration** export from Downloads, then iterate on integrating this repo’s **Next.js design** with that content/backend.

## Will this affect the live website?

**No — not by default.** This stack is isolated on your Mac:

| What it uses | Where it lives |
|--------------|----------------|
| WordPress + database | Docker volumes on your computer only (`wordpress_db_data`, `wordpress_wp_data`) |
| URL | **http://localhost:8080** only — not your public domain |
| Backup file | A **copy/link** of the `.wpress` export in `wordpress/backups/` — restoring it updates **local** Docker only |
| Network | No FTP, SSH, or production database credentials in `docker-compose.yml` |

The **live site** at `combatveteranstocareers.org` is unchanged unless **you** separately log into production hosting, deploy there, or use a migration tool to push **to** the live server.

**Safe locally:** import backup, edit themes/plugins, test plugins, break things — then `docker compose down -v` to wipe local data.

**Would affect live (avoid unless intentional):**

- Restoring or exporting via All-in-One WP Migration **to** the production URL
- Deploying this Docker volume or database to your web host
- Changing DNS, hosting, or production `wp-config.php`
- Logging into live **wp-admin** and saving settings (that’s the real site, not Docker)

The **Next.js app** in the parent folder (`npm run dev` on port 3000) is also local unless you deploy it to Vercel/hosting.

## What you need

- [Docker Desktop](https://www.docker.com/products/docker-desktop/) (running)
- Backup file (already in Downloads):  
  `combatveteranstocareers-org-20260512-142216-m2xd7hzb2zgb.wpress` (~4.9 GB)

## Quick start

```bash
cd wordpress
cp .env.example .env
# Edit .env if your .wpress path differs

# 1) Copy backup into ./backups (for the plugin “Backups” list)
chmod +x scripts/*.sh
./scripts/copy-backup.sh

# 2) Start MySQL + WordPress
docker compose up -d

# 3) Open http://localhost:8080 and finish the *first-time* WordPress install
#    (any admin email/password — you will replace the site on import)

# 4) Install migration plugin (or use Plugins → Add New manually)
./scripts/setup-plugins.sh
```

## Import the .wpress backup

1. Log in: **http://localhost:8080/wp-admin**
2. Go to **All-in-One WP Migration → Backups**  
   You should see `combatveteranstocareers.wpress` (from `./backups/`).
3. Click **Restore** on that backup.

**Large file note:** The free All-in-One WP Migration plugin often caps import size (e.g. 512 MB). A **~5 GB** backup usually requires the **[Unlimited Extension](https://servmask.com/products/unlimited-extension)** (paid) or importing on a host that already supports large uploads. Docker is configured with high PHP limits so the environment is ready once the plugin allows the size.

If restore changes the site URL to production, use **Settings → General** and set:

- WordPress Address: `http://localhost:8080`
- Site Address: `http://localhost:8080`

Or use WP-CLI after import:

```bash
docker compose run --rm wpcli option update siteurl 'http://localhost:8080'
docker compose run --rm wpcli option update home 'http://localhost:8080'
```

## Useful commands

| Task | Command |
|------|---------|
| Start | `docker compose up -d` |
| Stop | `docker compose down` |
| Logs | `docker compose logs -f wordpress` |
| WP-CLI | `docker compose run --rm wpcli <command>` |
| Reset everything | `docker compose down -v` (deletes DB + WP files) |

## Using this with the Next.js site in this repo

This folder restores **WordPress** (themes, plugins, pages, media, forms, etc.). The **Next.js app** in the parent directory is the new front-end design.

Typical paths forward:

1. **Headless WordPress** — WordPress as CMS; Next.js fetches content via REST API or WPGraphQL.
2. **Custom WordPress theme** — Rebuild the Next layout as a PHP theme (more work, one stack).
3. **Hybrid** — Keep WP for forms/blog/events; link or embed from Next.

For now, get WordPress running locally with the backup, then map which pages/plugins you still need (events, donations, veteran application, etc.).

## CVC WordPress theme (Next.js design)

A separate installable theme lives in **`cvc-theme/`** (zip: **`cvc-theme.zip`**).

```bash
cd wordpress/cvc-theme
./scripts/copy-theme-assets.sh   # all 161+ images from Next.js public/
./scripts/package-theme.sh
```

With Docker running, the theme folder is **mounted live** at `wp-content/themes/cvc-theme`. Activate **Combat Veterans to Careers** in wp-admin (or `wpcli theme activate cvc-theme`), then visit **http://localhost:8080**. See **`cvc-theme/README.md`** for details. Activating on production only changes the live site when you click **Activate** there.

## Troubleshooting

- **Links 404** (`/about/`, `/veteran-application/`, etc.): Apache rewrite rules were missing from `.htaccess`. Run:
  ```bash
  ./scripts/fix-permalinks.sh
  ```
  Or restart after pulling: `docker compose up -d` (includes `config/wordpress-permalinks.conf`).
- **Port in use:** Change `WP_PORT=8081` in `.env` and restart.
- **Permission errors on backups:** `chmod -R 777 backups` (local dev only).
- **Import timeout:** Increase Docker Desktop memory (Settings → Resources).
- **Plugin not in Backups list:** Re-run `./scripts/copy-backup.sh` and confirm the file is under `wordpress/backups/`.
