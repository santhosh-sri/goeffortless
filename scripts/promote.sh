#!/usr/bin/env bash
# Promote the exact QA-tested commit from personal main to office staging.
#
# Pushes a ref, never content: the commit that lands on office/staging is the
# same SHA that was deployed to and tested on the personal Vercel staging site.
# No cherry-pick, no rebase, no duplicate commit.
set -euo pipefail

git fetch origin --quiet
git fetch office --quiet

if [ -n "$(git status --porcelain)" ]; then
  echo "✗ Working tree is dirty. Commit or stash first."; exit 1
fi

LOCAL=$(git rev-parse HEAD)
REMOTE=$(git rev-parse origin/main)
if [ "$LOCAL" != "$REMOTE" ]; then
  echo "✗ HEAD ($(git rev-parse --short HEAD)) != origin/main ($(git rev-parse --short origin/main))."
  echo "  Only the commit deployed to staging Vercel may be promoted."; exit 1
fi

if ! git merge-base --is-ancestor office/staging HEAD; then
  echo "✗ Not a fast-forward over office/staging. Investigate before promoting."; exit 1
fi

if [ "$LOCAL" = "$(git rev-parse office/staging)" ]; then
  echo "✓ office/staging is already at $(git rev-parse --short HEAD). Nothing to promote."; exit 0
fi

echo "Promoting $(git rev-parse --short HEAD) — $(git log -1 --format=%s)"
echo
git log --oneline office/staging..HEAD
echo
read -rp "QA/UAT signed off on personal Vercel? [y/N] " ok
[ "$ok" = "y" ] || { echo "Aborted."; exit 1; }

git push office HEAD:staging
echo "✓ office/staging now at $(git rev-parse --short HEAD). Open PR: staging → master"
