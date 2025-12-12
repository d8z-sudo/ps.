#!/usr/bin/env bash
set -euo pipefail

echo "== env =="
node -v
npm -v

echo "== deps =="
npx next -v

echo "== docker =="
if command -v docker >/dev/null 2>&1; then
  docker compose ps || true
else
  echo "docker not found"
fi

echo "== build =="
npm run build

echo "== done =="
