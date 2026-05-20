#!/usr/bin/env bash
# Build cvc-theme.zip for WordPress upload (Appearance → Themes → Add New → Upload).
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
OUT="$(cd "$ROOT/.." && pwd)/cvc-theme.zip"

cd "$ROOT/.."
rm -f "$OUT"
zip -r "$OUT" cvc-theme \
  -x "*.DS_Store" \
  -x "cvc-theme/scripts/*"

echo "Created: $OUT"
echo "Upload via WP Admin → Appearance → Themes → Add New → Upload Theme"
