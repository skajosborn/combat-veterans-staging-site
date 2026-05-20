#!/usr/bin/env bash
# Copy ALL images from the Next.js public folder into the WordPress theme.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
PUBLIC="$(cd "$ROOT/../../public" && pwd)"
DEST="$ROOT/assets/images"

if [[ ! -d "$PUBLIC" ]]; then
  echo "Missing Next.js public folder: $PUBLIC"
  exit 1
fi

mkdir -p "$DEST"
echo "Syncing images from public/ → theme assets/images/ (may take a minute)..."
rsync -a --delete \
  --include='*/' \
  --include='*.jpg' --include='*.jpeg' --include='*.png' --include='*.gif' --include='*.webp' --include='*.svg' \
  --exclude='*' \
  "$PUBLIC/" "$DEST/"

count=$(find "$DEST" -type f \( -iname '*.jpg' -o -iname '*.png' -o -iname '*.jpeg' -o -iname '*.webp' -o -iname '*.gif' \) | wc -l | tr -d ' ')
echo "Done. $count image files in $DEST"
