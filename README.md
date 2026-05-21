# Silphium Website

Public website for [Silphium](https://silphium.bio) — an early-stage biotech startup developing an investigational, non-hormonal male contraceptive platform.

## Local development

```bash
git clone https://github.com/programmeratlarge/Silphium_website.git
cd Silphium_website
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Pre-push checks

```bash
npm run lint
npm test
npm run build
```

## Stack

- [Next.js](https://nextjs.org) (App Router)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Vercel](https://vercel.com) (hosting)

## Deployment

| Environment | Trigger | Approval required |
|-------------|---------|-------------------|
| Preview | Push to any branch | No |
| Production | Manual `workflow_dispatch` | Yes — GitHub `production` environment |

See `.github/workflows/` for CI/CD configuration.

### One-time GitHub setup

1. **Vercel project** — link the repo in the Vercel dashboard and note the Org ID and Project ID.

2. **GitHub repository secrets** — add under *Settings → Secrets and variables → Actions*:

   | Secret | Where to get it |
   |--------|----------------|
   | `VERCEL_TOKEN` | Vercel → Account → Tokens |
   | `VERCEL_ORG_ID` | Vercel → Team/Org settings |
   | `VERCEL_PROJECT_ID` | Vercel → Project settings |

3. **GitHub environments** — create under *Settings → Environments*:
   - `development` — no restrictions required.
   - `production` — add at least one required reviewer to gate production deploys.

4. **Disable Vercel's native Git integration** (optional but recommended) to avoid duplicate deployments when using GitHub Actions for deploys.

## Environment variables

Copy `.env.example` to `.env.local` and fill in values for local development.  
Production secrets live in GitHub Actions secrets and Vercel project settings — never in source code.

## Important

This is an **investigational, preclinical** technology. No Silphium product is approved, available for sale, or currently being offered for clinical use. All website content must reflect this accurately.
