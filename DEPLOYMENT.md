# Deployment guide

This repository contains **two deployable products** that share design and content patterns:

| Product | Path | Host |
|---------|------|------|
| **Next.js site** | Repository root (`app/`, `components/`, …) | [Vercel](https://vercel.com), Netlify, or any Node host |
| **WordPress theme** | `wordpress/cvc-theme/` | Any WordPress install (production, staging, or Docker) |

They are deployed **independently**. Connecting this repo to Vercel does **not** update WordPress, and uploading the theme does **not** update the Next.js app.

---

## Next.js → Vercel (recommended)

### One-time setup

1. Push this repository to GitHub.
2. In [Vercel](https://vercel.com/new), import the repo.
3. Use the defaults:
   - **Framework:** Next.js
   - **Build command:** `npm run build`
   - **Output:** Next.js default
   - **Install command:** `npm ci`
4. Add environment variables from `.env.local` (e.g. `RESEND_API_KEY` if used).
5. Deploy.

### Ongoing deploys

Every push to your production branch triggers a Vercel deployment automatically. Pull requests get preview URLs.

### Verify locally before pushing

```bash
npm ci
npm run build
npm start   # optional smoke test at http://localhost:3000
```

GitHub Actions runs the same build on every push/PR (see `.github/workflows/ci.yml`).

---

## WordPress theme → production site

### Build the installable zip

From the repo root:

```bash
chmod +x wordpress/cvc-theme/scripts/*.sh
./wordpress/cvc-theme/scripts/copy-theme-assets.sh   # sync images from public/
./wordpress/cvc-theme/scripts/package-theme.sh       # creates wordpress/cvc-theme.zip
```

Upload **`wordpress/cvc-theme.zip`** via **Appearance → Themes → Add New → Upload Theme**, then **Activate** on staging first.

### Other install methods

| Method | When to use |
|--------|-------------|
| **Zip upload** | Shared hosting, no SSH |
| **SFTP / SSH** | Copy `wordpress/cvc-theme/` into `wp-content/themes/` |
| **Docker mount** | Local dev (`wordpress/docker-compose.yml` mounts the folder live) |

See `wordpress/cvc-theme/README.md` for activation, permalinks, and the one-time **CVC setup** step.

### GitHub Release artifact

Publishing a [GitHub Release](https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository) runs `.github/workflows/release.yml`, which:

1. Builds the Next.js app (sanity check)
2. Syncs theme assets and packages `cvc-theme.zip`
3. Attaches the zip to the release

You can also run that workflow manually (**Actions → Release → Run workflow**) and download the zip from the workflow artifacts.

---

## Local WordPress (Docker)

```bash
npm run wordpress:up          # starts MySQL + WordPress on :8080
# Theme is mounted from wordpress/cvc-theme/ — edit files and refresh; no zip needed
```

If Docker was started from a **different clone**, ensure the compose volume points at this repo’s `wordpress/cvc-theme/` folder.

---

## Quick reference

| Goal | Command / action |
|------|------------------|
| Preview Next.js locally | `npm run dev` |
| Test production Next.js build | `npm run build && npm start` |
| Package WP theme | `./wordpress/cvc-theme/scripts/copy-theme-assets.sh && ./wordpress/cvc-theme/scripts/package-theme.sh` |
| CI build check | Push branch or open PR |
| Download theme zip from CI | GitHub Release or manual **Release** workflow run |
