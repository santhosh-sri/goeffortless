# Git Workflow — Personal (staging) → Office (production)

This project lives in two GitHub repositories that share **one history**. Commits are
promoted between them **by pushing a ref**, so the commit tested on staging is the
exact same SHA that reaches production. Never cherry-pick, never squash, never rebase
a shared branch.

## Repositories

| | Repo | Branch | Deploys to |
|---|---|---|---|
| `origin` | `santhosh-sri/goeffortless` | `main` | Personal Vercel — **staging / UAT** |
| `office` | `Agrya-Finlabs/effortless-website` | `staging` | office review |
| `office` | `Agrya-Finlabs/effortless-website` | `master` | Company Vercel — **PRODUCTION** |

> Production is `master`, **not** `main`. The office repo has no `main` branch.
> Pushing to `office main` would create an orphan branch that deploys nowhere.

**Invariant:** when a release is settled, `origin/main`, `office/staging` and
`office/master` are all the same commit. Check any time with `git sync-status`.

## One-time setup

```bash
git remote add office https://github.com/Agrya-Finlabs/effortless-website.git
git fetch --all

git config --global alias.promote  '!git push office main:staging'
git config --global alias.syncback '!git fetch office && git push origin office/master:main && git fetch origin'
git config --global alias.sync-status '!f(){ git fetch --all -q; echo "personal main : $(git rev-parse --short origin/main)"; echo "office staging: $(git rev-parse --short office/staging)"; echo "office master : $(git rev-parse --short office/master)"; }; f'
git config --global pull.ff only

chmod +x scripts/promote.sh
```

HTTPS remotes are used because SSH auth is not configured on this machine. To move to
SSH, add `~/.ssh/id_rsa.pub` to GitHub → Settings → SSH keys, verify with
`ssh -T git@github.com`, then `git remote set-url`.

## Daily workflow

```bash
# 1 — start from the shared tip
git checkout main && git pull origin main

# 2 — feature branch
git checkout -b feature/new-feature
git add . && git commit -m "feat: ..."
git push -u origin feature/new-feature

# 3 — PR on the personal repo: feature/new-feature → main. Review, merge.

# 4 — personal Vercel auto-deploys main. Full QA / UAT here.
git checkout main && git pull origin main

# 5 — promote the EXACT tested commit
./scripts/promote.sh          # or: git promote

# 6 — office QA on staging.

# 7 — PR on the office repo: staging → master.
#     Merge with "Create a merge commit" — NEVER squash or rebase.

# 8 — MANDATORY: pull the merge commit back so both repos realign
git syncback
```

### Step 8 is the one people skip

A GitHub PR merge creates a merge commit that exists **only** on `office/master`.
Skip the sync-back and personal `main` falls behind, the next feature branches off a
stale base, and the repos drift apart. `git syncback` after every office merge.

## Flow

```
 developer
     │  git checkout -b feature/x
     ▼
┌──────────────────────── PERSONAL REPO (origin) ────────────────────────┐
│  feature/x ──PR──► main ──────────────────────────────────────────┐    │
│                     │                                             │    │
│                     ▼  auto-deploy                                │    │
│              Personal Vercel  ──►  QA / UAT ✅                    │    │
└───────────────────────────────────────────────────────────────────┼────┘
                      │                                             │
                      │  ./scripts/promote.sh                       │
                      │  (same SHA — no new commit)                 │
                      ▼                                             │
┌──────────────────── OFFICE REPO (office) ──────────────────────┐  │
│   staging  ──►  office QA / review ✅                          │  │
│      │                                                         │  │
│      │  PR: staging → master  (merge commit, never squash)     │  │
│      ▼                                                         │  │
│   master  ──►  Company Vercel  ──►  PRODUCTION 🚀              │  │
└──────┬─────────────────────────────────────────────────────────┘  │
       │                                                            │
       └── git syncback ────────────────────────────────────────────┘
                     repos realign, hashes identical
```

## Release

1. Freeze `origin/main` — no new merges once QA starts.
2. Confirm the staging Vercel deployment SHA matches `git rev-parse origin/main`.
3. Tag the RC: `git tag -a v1.4.0-rc.1 origin/main -m "RC for v1.4.0" && git push origin v1.4.0-rc.1`
4. `./scripts/promote.sh`
5. Office QA signs off on `staging`.
6. PR `staging → master`, merge commit.
7. `git syncback`
8. Tag the release on **both** remotes:
   ```bash
   git fetch office
   git tag -a v1.4.0 office/master -m "Release v1.4.0"
   git push origin v1.4.0 && git push office v1.4.0
   ```

## Rollback

**Tier 1 — fastest, no git (< 1 min).** Vercel dashboard → company project →
Deployments → last good deployment → **Promote to Production**. Use this first during
an incident, then fix git with Tier 2.

**Tier 2 — revert.** Never force-push a shared branch.

```bash
git fetch office
git checkout -B rollback office/master
git revert -m 1 <bad_merge_sha>          # -m 1 for a merge commit; omit for a plain commit
git push office rollback:staging
# PR staging → master, merge, then:
git syncback
```

**Tier 3 — hotfix.** Branch from production, not staging:

```bash
git fetch office
git checkout -b hotfix/critical office/master
# ...fix, commit...
git push origin hotfix/critical          # preview + review on the personal repo
git push office hotfix/critical:staging  # then PR staging → master
git syncback
```

**Escape hatch.** Tags `pre-unify-office` and `pre-unify-personal` pin both repository
tips as they were before the histories were unified (2026-08-10). Any pre-unification
state is recoverable from them.

## Rules

- Promote by **pushing a ref** — never copy files, cherry-pick, or re-commit.
- Only ever promote `origin/main`, never an unpushed local branch. `promote.sh` enforces this.
- **Disable "Squash and merge" and "Rebase and merge"** on the office repo
  (Settings → General → Pull Requests). Both mint new hashes and break the invariant.
  Leave only "Create a merge commit".
- Protect `office/master`: require PR, require the Vercel check, block force-push and deletion.
- `git syncback` after every office merge.
- Freeze `main` during QA — every push to it redeploys the site being tested.
- Tag every production release on both remotes.

## Pitfalls

| Pitfall | Why it bites | Avoidance |
|---|---|---|
| Squash/rebase merge on the office PR | New SHA on `master`; repos diverge permanently | Disable both merge methods in repo settings |
| Forgetting `git syncback` | Personal `main` falls behind; next feature branches off a stale base | Last step of every release |
| Assuming office prod is `main` | Creates an orphan branch that deploys nowhere while you believe you shipped | Production is `master`; use explicit refspecs |
| Force-pushing to realign | Destroys the shared ancestry the whole scheme rests on | Revert forward (Tier 2) |
| Promoting a dirty or unpushed tree | Office receives a commit that was never on staging Vercel | Use `promote.sh` |
| Pushing to `main` mid-QA | Silently moves the thing being tested | Freeze `main` during QA |
| SSH remote URLs | `Permission denied (publickey)` — key not registered on GitHub | Use HTTPS, or register the key first |
