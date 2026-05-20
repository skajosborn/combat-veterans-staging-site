# Combat Veterans to Careers — WordPress theme

Standalone theme matching the **Next.js site design** (colors, navigation, section titles, hero, contact strip). Install on your WordPress site **without** replacing the live site until you choose to activate it.

## Install on WordPress

### Option A — Upload zip

```bash
cd wordpress/cvc-theme
chmod +x scripts/*.sh
./scripts/copy-theme-assets.sh   # syncs ALL images from ../../public → assets/images/
./scripts/package-theme.sh       # creates ../cvc-theme.zip (~72MB with full assets)
```

1. WordPress admin → **Appearance → Themes → Add New → Upload Theme**
2. Choose **`wordpress/cvc-theme.zip`**
3. **Activate** when ready (use a staging site first if possible)

### Option B — Local Docker (recommended)

`wordpress/docker-compose.yml` mounts **`cvc-theme/`** into the container automatically.

**Do not upload `cvc-theme.zip` in wp-admin on Docker** — the folder is already live from your repo. Uploading tries to replace files and used to fail when the mount was read-only.

After `docker compose up -d`:

```bash
docker compose run --rm wpcli theme activate cvc-theme
docker compose run --rm wpcli eval 'cvc_run_theme_setup();'
```

Or in wp-admin: **Appearance → Themes → Activate**, then **Appearance → Themes → Run CVC setup** if pages are missing.

## After activation

On activation the theme automatically:

- Creates pages (Application, About, Events, Sponsors, Donate, Operation Field Trip, etc.)
- Sets **Home** as the static front page
- Builds the **CVC Primary** menu with working permalinks
- Sets permalink structure to `/%postname%/`

If links 404 after import, open **Settings → Permalinks** and click **Save Changes**.

1. **Appearance → Customize → Site Identity** — optional custom logo (default: bundled `CVClogo.png`).
2. Replace placeholder contact phone in `template-parts/contact-strip.php` if needed.
3. Your **imported plugins** (forms, events, etc.) keep working; this theme only changes layout/styles.

## Files

| File | Purpose |
|------|--------|
| `style.css` | Theme header (required by WordPress) |
| `functions.php` | Enqueues CSS/JS, menus, theme support |
| `front-page.php` | Homepage hero + programs + contact |
| `page.php` / `single.php` | Inner pages and posts |
| `assets/css/main.css` | Design tokens & components |
| `assets/js/theme.js` | Mobile nav + light/dark toggle |

## Child theme (recommended for production)

For safe updates, create a **child theme** that only overrides templates you change. This parent theme can stay read-only.

## Does this affect the live site?

Uploading or activating a theme on **production** changes appearance for visitors **only when you click Activate**. Uploading the zip alone does not change the live site until activation. Test on **localhost:8080** Docker first.
