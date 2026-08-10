# Push Steps — Cheat Sheet

Every promotion is a **ref push**. The commit tested on staging is the exact same SHA
that reaches production. No cherry-pick, no squash, no duplicate commit.

```
origin = santhosh-sri/goeffortless          (personal — staging)
office = Agrya-Finlabs/effortless-website   (company  — production)
```

> Production branch on office is **`master`**, not `main`.

---

## The 8 steps

### 1. Start from the shared tip

```bash
git checkout main
git pull origin main
```

### 2. Feature branch → push to personal

```bash
git checkout -b feature/new-feature

git add .
git commit -m "feat: ..."

git push -u origin feature/new-feature
```

### 3. PR on the **personal** repo

`feature/new-feature` → `main`. Review, merge.

### 4. QA on personal Vercel

Personal Vercel auto-deploys `main`. Do full QA / UAT here.

```bash
git checkout main
git pull origin main
```

Confirm the Vercel deployment SHA matches:

```bash
git rev-parse --short HEAD
```

### 5. Promote the exact tested commit → office staging

```bash
./scripts/promote.sh
```

or, unguarded:

```bash
git push office main:staging
# alias: git promote
```

Verify the SHAs are now identical:

```bash
git fetch office
git rev-parse origin/main office/staging     # two identical SHAs
```

### 6. Office QA on `staging`

### 7. PR on the **office** repo

`staging` → `master`. Merge with **"Create a merge commit"**.

> Never "Squash and merge" or "Rebase and merge" — both mint a new SHA and
> permanently break hash identity between the repos.

### 8. Sync back — MANDATORY

The PR merge created a merge commit that exists **only** on `office/master`.
Pull it back so both repos realign:

```bash
git syncback
```

which is:

```bash
git fetch office
git push origin office/master:main
git fetch origin
```

Confirm all three are aligned:

```bash
git sync-status
# personal main : 7b3ced0
# office staging: 7b3ced0
# office master : 7b3ced0
```

**Skip step 8 and everything drifts** — personal `main` falls behind, your next
feature branches off a stale base, and the repos diverge again.

---

## Quick reference

| Goal | Command |
|---|---|
| Push feature branch | `git push -u origin feature/x` |
| Promote tested commit to office staging | `./scripts/promote.sh` or `git promote` |
| Pull office merge commit back | `git syncback` |
| Check all three refs align | `git sync-status` |
| Hotfix straight from production | `git checkout -b hotfix/x office/master` |

## Release tags

After step 8:

```bash
git fetch office
git tag -a v1.4.0 office/master -m "Release v1.4.0"
git push origin v1.4.0
git push office v1.4.0
```

## Never do these

```bash
git push --force office master        # destroys the shared ancestry
git push office main:main             # orphan branch, deploys nowhere — prod is master
git cherry-pick <sha>                 # duplicate commit, different hash
git push office feature/x:master      # skips staging and QA entirely
```

## If a push is rejected as non-fast-forward

Do **not** force. Someone advanced the branch — reconcile first:

```bash
git fetch --all
git log --oneline origin/main..office/master     # what office has that you don't
git syncback                                      # usually this is all it needs
```

## Rollback

Fastest: Vercel dashboard → company project → Deployments → last good one →
**Promote to Production**. Then fix git:

```bash
git fetch office
git checkout -B rollback office/master
git revert -m 1 <bad_merge_sha>
git push office rollback:staging
# PR staging → master, merge, then:
git syncback
```

Pre-unification state is pinned by the tags `pre-unify-office` and
`pre-unify-personal` on their respective remotes.
