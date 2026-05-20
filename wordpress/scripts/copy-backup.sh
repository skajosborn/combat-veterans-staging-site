#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

if [[ -f .env ]]; then
  # shellcheck disable=SC1091
  source .env
fi

SOURCE="${WPRESS_SOURCE:-/Users/saraosborn/Downloads/combatveteranstocareers-org-20260512-142216-m2xd7hzb2zgb.wpress}"
DEST="$ROOT/backups/combatveteranstocareers.wpress"

if [[ ! -f "$SOURCE" ]]; then
  echo "Backup not found: $SOURCE"
  echo "Set WPRESS_SOURCE in wordpress/.env to your .wpress file path."
  exit 1
fi

mkdir -p "$ROOT/backups"

if [[ -e "$DEST" ]]; then
  rm -f "$DEST"
fi

if [[ "${WPRESS_COPY_MODE:-link}" == "copy" ]]; then
  echo "Copying backup (~5GB). This may take several minutes..."
  cp -f "$SOURCE" "$DEST"
else
  echo "Linking backup (no duplicate disk use)..."
  ln -sf "$SOURCE" "$DEST"
fi

echo "Done: $DEST"
echo "Start WordPress, install All-in-One WP Migration, then restore from Backups."
