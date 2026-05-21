# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Silphium_website** is the public website for **Silphium**, an early-stage biotech startup developing an investigational non-hormonal male contraceptive platform.

In practice, this site is a credibility-building, press-facing, investor/partner-facing, and founder-reviewable web presence. It is **not** a product website, patient recruitment website, or clinical-trial website.

The project focuses on presenting Silphium as a serious, scientifically grounded reproductive health company developing a precision siRNA-based approach intended to temporarily pause sperm production by targeting early spermatogenesis / meiosis.

Repository:

```text
https://github.com/programmeratlarge/Silphium_website
```

Hosting:

```text
Vercel
```

Deployment model:

* Every push to the GitHub repository should automatically deploy to a Vercel **development / preview environment**.
* Production deployment should be available only after the development version has been reviewed and approved.
* Production deployment should be triggered manually through GitHub Actions and protected with a GitHub `production` environment approval gate.

# Silphium Website – Technical Specification

## 1. Overview

**Silphium_website** is a modern web application for an early-stage biotech startup developing an investigational, preclinical, non-hormonal male contraceptive technology.

The primary goals are:

* Explain the company’s mission clearly: expanding reproductive choice through non-hormonal male contraception.
* Present the science accurately and cautiously: siRNA, lipid nanoparticle delivery, early spermatogenesis, and meiosis-focused intervention.
* Make clear that there is no approved product, no active clinical trial, and no consumer availability.
* Provide a polished destination for press, investors, collaborators, and strategic partners.
* Create a maintainable Next.js / Vercel codebase that can be iterated quickly as the company messaging evolves.
* Support automated development deployments on Vercel from GitHub pushes.
* Support manually approved production deployments once the founder approves the development version.

The site should feel like an early-stage biotech company website rather than a consumer wellness product. It should be polished, restrained, credible, and scientifically literate.

---

## 2. Target Runtime Environment

* **OS**: Windows 10/11 primary development environment, but the codebase must be cross-platform.
* **Editor**: Cursor / VS Code-friendly project structure.
* **Runtime**: Node.js 20+; prefer an active LTS version supported by Vercel.
* **Framework**: Next.js with the App Router.
* **Language**: TypeScript.
* **Styling**: Tailwind CSS.
* **Hosting**: Vercel.
* **Repository**: `https://github.com/programmeratlarge/Silphium_website`
* **CI/CD**: GitHub Actions using the Vercel CLI.
* **Package manager**: Use `npm` unless the project has already been initialized with another package manager and lockfile.

**Always use:**

```bash
npm install <package_name>
npm run dev
npm run build
npm run lint
npm test
```

**For CI, prefer:**

```bash
npm ci
npm run build
npm run lint
npm test
```

**Never commit:**

```text
.env
.env.local
.env.production
.vercel/
node_modules/
```

**Important notes:**

* Keep secrets in GitHub Actions secrets and/or Vercel project environment variables.
* Do not put API tokens, contact-form credentials, analytics keys, or Vercel tokens in source code.
* Avoid adding a backend unless the feature requires it. Prefer static pages and serverless functions only where needed, such as a contact form.
* Use Vercel Preview deployments as the development environment.
* Do not configure automatic production deployment on push unless explicitly requested by the user.

---

## 3. Core Concepts

### 3.1 Website positioning

The site should position Silphium as:

> An early-stage biotech company developing an investigational, non-hormonal male contraceptive platform designed to temporarily pause sperm production through precision targeting of early spermatogenesis.

The language must remain cautious. This is a preclinical technology, not an approved medical product.

Acceptable language:

* “developing”
* “investigational”
* “preclinical”
* “designed to”
* “aiming to”
* “building toward”
* “non-hormonal approach”
* “precision reproductive biology”
* “siRNA-based platform”
* “lipid nanoparticle delivery”
* “targeting early sperm development”
* “targeting meiotic initiation”

Avoid language such as:

* “clinically proven”
* “safe and effective” as a standalone claim
* “available now”
* “side-effect free”
* “guaranteed reversible”
* “approved”
* “the future of birth control is here”
* “revolutionary cure”
* “no risk”
* “works in humans”
* “enroll now” unless a real approved trial exists

### 3.2 Scientific narrative

The site should explain the science at three levels:

1. **Plain-language public level**  
   Men have few reversible contraceptive options. Silphium is developing a non-hormonal approach intended to pause sperm production.

2. **Scientifically literate level**  
   Sperm production depends on meiosis. Silphium’s strategy is to intervene early in spermatogenesis by using siRNA to reduce expression of genes involved in meiotic initiation / early spermatocyte differentiation.

3. **Technical biotech level**  
   The company is exploring siRNA delivery using lipid nanoparticles, with development work focused on formulation, knockdown validation, biodistribution, dosing, specificity, safety, and reversibility.

### 3.3 Brand and visual direction

The visual identity should be modern biotech with subtle warmth.

Recommended visual character:

* Clean white / cream backgrounds.
* Deep oxblood, burgundy, or dark red accents.
* Warm orange accents inspired by the pitch decks.
* Charcoal text.
* Soft microscopy or biological texture backgrounds used sparingly.
* Minimal siRNA / LNP / meiosis schematic illustrations.
* Subtle botanical line-art motif inspired by the name “Silphium.”
* High-trust team photography.
* Strong whitespace and editorial typography.

Avoid:

* Overly playful fertility imagery.
* Generic stock-photo-heavy health startup aesthetics.
* Fear-based imagery.
* Sexualized or sensationalized messaging.
* Dense scientific figures copied directly from pitch decks without simplification.
* Using unlicensed press images or third-party logos without approval.

### 3.4 Page concepts

#### Home page

Purpose: communicate the company’s thesis in less than 30 seconds.

Suggested hero headline:

> Developing a new class of non-hormonal male contraception.

Suggested hero subheadline:

> Silphium is advancing a precision, siRNA-based approach designed to temporarily pause sperm production without targeting hormones.

Required hero elements:

* Clear headline.
* Short subheadline.
* Primary CTA: `Read the science`.
* Secondary CTA: `Contact us`.
* Small development-stage disclaimer:

```text
Investigational technology. No approved product. Not currently enrolling clinical trials.
```

Recommended home page flow:

1. Hero.
2. The need: men need more reversible contraceptive options.
3. The scientific premise: sperm production depends on meiosis.
4. Silphium’s approach: siRNA + LNP delivery + testis-focused targets.
5. Development status: preclinical formulation and in vivo validation.
6. Team teaser.
7. Press teaser.
8. Contact / partnership CTA.

#### Science page

Purpose: explain how the technology works without overclaiming.

Suggested title:

> Targeting meiosis with molecular precision.

Required sections:

* **The biological idea**  
  Explain sperm production and meiosis at a high level.
* **The intervention point**  
  Show where Silphium’s approach is designed to act in early spermatogenesis.
* **The modality**  
  Explain siRNA as a way to reduce expression of target genes without gene editing.
* **The delivery strategy**  
  Explain lipid nanoparticle delivery at a conceptual level.
* **Why non-hormonal matters**  
  Explain that the approach is designed to avoid suppressing testosterone or broadly altering hormonal signaling.
* **Why reversibility matters**  
  Explain that the goal is to pause sperm production while preserving the possibility of fertility recovery.
* **What remains to be shown**  
  Clearly state that delivery, efficacy, safety, dosing, and reversibility must still be established through preclinical and clinical development.

Recommended visual:

```text
Stem cells → early spermatocytes → meiosis → sperm
                         ↑
             Silphium investigational intervention point
```

Do not show the science as if it has already succeeded in humans.

#### Development page

Purpose: explain current stage, development plan, and regulatory maturity.

Suggested title:

> Where we are now.

Required message:

> Silphium is currently in preclinical development. The team is optimizing siRNA-LNP formulations, evaluating delivery and biodistribution, and preparing in vivo proof-of-concept studies.

Recommended timeline:

```text
Discovery / Proof of Concept
        ↓
Formulation Optimization
        ↓
In Vivo Biodistribution
        ↓
In Vivo Efficacy
        ↓
IND-Enabling Studies
        ↓
Clinical Trials
        ↓
Regulatory Review
```

Required caveats:

* No approved product.
* No human efficacy data.
* No active clinical trial unless the founder later provides confirmed trial details.
* All dates, milestones, and regulatory pathway descriptions must be treated as forward-looking.

#### Team page

Purpose: establish credibility.

Suggested title:

> Built by reproductive biology and delivery science experts.

Required content:

* Short founder/team intro.
* Team cards with name, role, affiliation, and concise bio.
* Bios should emphasize relevance to Silphium:
  * reproductive biology
  * meiosis / spermatogenesis
  * RNA biology / molecular biology
  * lipid nanoparticle delivery
  * translational development
  * business strategy

Known team names from the pitch materials:

* Jelena Lujic
* Paula E. Cohen
* Christopher A. Alabi
* Militsa Yavorova
* Carmyn Polk

Do not invent titles, degrees, affiliations, publications, awards, or company roles beyond the provided materials. If details are missing, use placeholders or ask the user.

#### Press page

Purpose: give journalists and interested readers a clear landing page.

Suggested title:

> Press and updates.

Required sections:

* Recent press coverage.
* Company boilerplate.
* Media contact.
* Downloadable press kit placeholder.
* Approved plain-language description of the science.
* Optional publication / proof-of-concept section.

Important distinction:

* Separate published proof-of-concept science from Silphium’s product-development roadmap.
* Do not imply that press coverage validates clinical safety or effectiveness.
* Do not use third-party publication logos unless permission is confirmed.

Content model should allow press items to be added easily:

```ts
type PressItem = {
  title: string;
  outlet: string;
  url: string;
  date: string;
  summary?: string;
};
```

#### Contact / Partner page

Purpose: allow inbound press, partnership, investment, and collaboration inquiries.

Suggested title:

> Partner with us.

Inquiry categories:

* Press
* Investor
* Strategic partnership
* Scientific collaboration
* General inquiry

Required contact-form disclaimer:

```text
Silphium does not currently offer a product and is not enrolling clinical trials. Please do not submit personal medical information through this form.
```

Technical notes:

* If a contact form is implemented, use a serverless API route or a vetted form provider.
* Never expose email-provider API keys in frontend code.
* If email delivery is not configured, use a `mailto:` fallback.
* Do not collect protected health information.

#### Legal / footer content

Footer should include:

* Company name: Silphium.
* Development-stage disclaimer.
* Contact link.
* Press link.
* Privacy policy placeholder.
* Copyright.

Footer disclaimer:

```text
Silphium is developing investigational technology. No Silphium product is approved, available for sale, or currently being offered for clinical use.
```

---

## 4. Functional Requirements

### 4.1 Routes and Navigation

Required routes:

```text
/
 /science
 /development
 /team
 /press
 /contact
 /privacy
```

Optional future routes:

```text
/faq
/publications
/careers
/investors
```

Header navigation:

* Science
* Development
* Team
* Press
* Contact

Footer navigation:

* Science
* Development
* Press
* Contact
* Privacy

Navigation behavior:

* Header should be responsive.
* Mobile menu should be accessible and keyboard-navigable.
* Current page should be visually indicated.
* CTA button should link to `/contact`.

### 4.2 Content Management

Initial implementation can store content as TypeScript objects or Markdown/MDX files in the repository.

Recommended content directory:

```text
content/
  site.ts
  team.ts
  press.ts
  milestones.ts
  faq.ts
```

Requirements:

* Content should be easy for a developer to update without editing component logic.
* Do not hard-code repeated content in multiple components.
* Reusable copy such as disclaimers should live in one place.
* Dates should be stored in ISO format where possible.
* Links to press articles should be centralized.

### 4.3 Medical, Regulatory, and Claims Review

This is a high-sensitivity biotech / reproductive health website. The site must avoid overclaiming.

Blocking content issues:

* Claiming human safety or efficacy.
* Claiming the product is approved.
* Claiming there is a clinical trial unless confirmed by the founder.
* Claiming reversibility as established in humans.
* Claiming “no side effects.”
* Giving medical advice.
* Suggesting users should change contraception decisions based on the site.
* Collecting personal medical information through contact forms.
* Presenting animal or in vitro results as human outcomes.

Every production deployment should be reviewed for:

* Scientific accuracy.
* Medical/regulatory claim risk.
* Founder-approved messaging.
* Correct development-stage disclaimers.
* Press-link accuracy.
* Accessibility and responsive layout.

### 4.4 UI/UX Requirements

Main layout principles:

1. **Hero-first clarity**
   * User should understand the company within 5 seconds.

2. **Scientific credibility**
   * Use simple diagrams, not vague marketing visuals.

3. **Development-stage transparency**
   * Disclaimers should be visible but not visually overwhelming.

4. **Low-friction contact**
   * Press and partner inquiries should be easy to initiate.

5. **Readable on mobile**
   * The site must work well on phone screens.

6. **Accessible design**
   * Sufficient contrast.
   * Semantic HTML.
   * Keyboard navigation.
   * Proper alt text.
   * Clear focus states.

Required components:

```text
components/
  Header.tsx
  Footer.tsx
  Hero.tsx
  SectionHeader.tsx
  CTAButton.tsx
  DisclaimerBanner.tsx
  ScienceDiagram.tsx
  Timeline.tsx
  TeamCard.tsx
  PressCard.tsx
  ContactForm.tsx
```

### 4.5 Contact Form

Initial acceptable implementation:

* Static `mailto:` link.

Preferred implementation:

* Next.js serverless route at `/api/contact`.
* Validated form payload.
* Email delivery through approved provider.
* Confirmation state after successful submission.
* Error state if delivery fails.
* Spam mitigation.

Required form fields:

* Name.
* Email.
* Organization, optional.
* Inquiry type.
* Message.
* Consent checkbox confirming no personal medical information is being submitted.

Validation:

* Name required.
* Email required and valid.
* Inquiry type required.
* Message required.
* Message maximum length enforced.
* Consent checkbox required.

Do not store submissions in a database unless explicitly requested.

### 4.6 SEO and Metadata

Required:

* Page titles.
* Meta descriptions.
* Open Graph metadata.
* Social preview image placeholder.
* `robots.txt`.
* `sitemap.xml`.
* Canonical URLs once the production domain is known.

Suggested homepage title:

```text
Silphium | Developing Non-Hormonal Male Contraception
```

Suggested homepage description:

```text
Silphium is an early-stage biotech company developing an investigational, non-hormonal male contraceptive platform designed to temporarily pause sperm production.
```

### 4.7 Analytics

Analytics are optional and should not be added unless the user requests them.

If analytics are added:

* Prefer privacy-preserving analytics.
* Do not track sensitive health information.
* Add cookie / privacy notice if required by the chosen analytics provider and jurisdictions.
* Keep analytics configuration out of component logic.

### 4.8 Outputs / Deliverables

The repository should contain:

* Working Next.js website.
* Typed content configuration.
* Responsive pages.
* Reusable components.
* Tests where useful.
* README with local setup instructions.
* CLAUDE.md with project guidance.
* GitHub Actions workflows for:
  * automatic Vercel development / preview deployment on push
  * manual production deployment
* Vercel deployment documentation.
* `.env.example` listing required environment variables without secret values.

---

## 5. Architecture & Code Organization

### 5.1 Project Structure

Recommended layout:

```text
Silphium_website/
  README.md
  CLAUDE.md
  package.json
  package-lock.json
  next.config.ts
  tsconfig.json
  tailwind.config.ts
  postcss.config.js
  eslint.config.mjs
  .gitignore
  .env.example
  .github/
    workflows/
      vercel-preview.yml
      vercel-production.yml
  app/
    layout.tsx
    page.tsx
    science/
      page.tsx
    development/
      page.tsx
    team/
      page.tsx
    press/
      page.tsx
    contact/
      page.tsx
    privacy/
      page.tsx
    api/
      contact/
        route.ts
  components/
    Header.tsx
    Footer.tsx
    Hero.tsx
    SectionHeader.tsx
    CTAButton.tsx
    DisclaimerBanner.tsx
    ScienceDiagram.tsx
    Timeline.tsx
    TeamCard.tsx
    PressCard.tsx
    ContactForm.tsx
  content/
    site.ts
    team.ts
    press.ts
    milestones.ts
    faq.ts
  lib/
    validation.ts
    contact.ts
    constants.ts
  public/
    images/
    press/
    social/
  styles/
    globals.css
  tests/
    content.test.ts
    validation.test.ts
    contact.test.ts
```

### 5.2 Data Models

Use TypeScript types for structured content.

Suggested types:

```ts
export type SiteDisclaimer = {
  short: string;
  footer: string;
  contact: string;
};

export type TeamMember = {
  name: string;
  role: string;
  affiliation?: string;
  bio: string;
  image?: string;
  links?: {
    label: string;
    url: string;
  }[];
};

export type PressItem = {
  title: string;
  outlet: string;
  url: string;
  date: string;
  summary?: string;
};

export type DevelopmentMilestone = {
  title: string;
  status: "completed" | "current" | "planned" | "future";
  description: string;
};

export type ContactInquiryType =
  | "press"
  | "investor"
  | "partnership"
  | "collaboration"
  | "general";

export type ContactFormData = {
  name: string;
  email: string;
  organization?: string;
  inquiryType: ContactInquiryType;
  message: string;
  noMedicalInfoConfirmed: boolean;
};
```

### 5.3 Modules

Suggested responsibilities:

* `content/site.ts`
  * Company name.
  * Hero copy.
  * Disclaimers.
  * Navigation items.
  * SEO defaults.

* `content/team.ts`
  * Team-member data.
  * No invented titles or unapproved bios.

* `content/press.ts`
  * Press-item list.
  * Press-kit placeholder.
  * Media contact.

* `content/milestones.ts`
  * Development-stage timeline.

* `lib/validation.ts`
  * Contact-form validation.
  * Shared validation helpers.

* `lib/contact.ts`
  * Server-side contact submission handling.
  * Email provider integration if configured.

* `components/*`
  * Presentational components.
  * Components should be typed and reusable.

### 5.4 Design System

Define basic design tokens with Tailwind configuration and CSS variables.

Suggested tokens:

```text
--color-silphium-red
--color-silphium-orange
--color-silphium-cream
--color-silphium-charcoal
--color-silphium-muted
```

Do not overbuild a design system at the start. Keep components simple, composable, and easy to replace.

### 5.5 Images and Assets

Requirements:

* Use optimized images through Next.js where appropriate.
* Keep image filenames descriptive.
* Add alt text for meaningful images.
* Mark decorative images with empty alt text.
* Do not commit large pitch decks, raw presentation files, or unapproved press images to the public repository.
* Do not use third-party logos without permission.
* Keep public-facing assets in `public/images/`.

---

## 6. Non-Functional Requirements

* **Accuracy**
  * Scientific and medical claims must be conservative and founder-reviewable.

* **Performance**
  * Home page should load quickly on mobile.
  * Avoid heavy animation libraries unless needed.
  * Optimize images.
  * Keep JavaScript minimal.

* **Accessibility**
  * Meet WCAG 2.1 AA design intent where feasible.
  * Use semantic HTML.
  * Ensure focus states.
  * Ensure color contrast.
  * Test keyboard navigation.

* **Maintainability**
  * Keep content separate from components.
  * Avoid over-engineering.
  * Prefer simple React components over complex abstractions.
  * Use TypeScript types for content.

* **Security**
  * Never expose secrets to the browser.
  * Validate contact-form input server-side.
  * Do not collect medical details or protected health information.
  * Use environment variables for API keys.

* **Reproducibility**
  * Commit lockfile.
  * Use deterministic CI with `npm ci`.
  * Keep `.env.example` current.

* **Deployment safety**
  * Every push creates a development / preview deployment.
  * Production deployment is manual and approval-gated.
  * Production should not be overwritten automatically by arbitrary pushes.

---

## 7. Vercel, GitHub Actions & Deployment

### 7.1 Vercel Requirements

The website will be hosted on Vercel.

Required Vercel setup:

* Create a Vercel project for this repository.
* Configure the project for a Next.js application.
* Add required environment variables in Vercel if needed.
* Keep production and preview environments separate.
* Use Vercel Preview deployments as the development environment.
* Configure the production domain only after the founder approves the site.

Required GitHub repository:

```text
https://github.com/programmeratlarge/Silphium_website
```

Required GitHub secrets:

```text
VERCEL_TOKEN
VERCEL_ORG_ID
VERCEL_PROJECT_ID
```

Optional future secrets for contact form:

```text
CONTACT_TO_EMAIL
CONTACT_FROM_EMAIL
RESEND_API_KEY
```

Do not commit `.vercel/` to the repository.

### 7.2 Development / Preview Deployment

Requirement:

* Whenever code is pushed to the repository, GitHub Actions should deploy a development / preview version to Vercel.

Recommended workflow file:

```text
.github/workflows/vercel-preview.yml
```

Recommended behavior:

* Trigger on every push.
* Run install, lint, test, and build.
* Pull Vercel preview environment settings.
* Deploy prebuilt output to Vercel Preview.
* Print the preview deployment URL in workflow logs.

Example workflow:

```yaml
name: Deploy Preview to Vercel

on:
  push:
    branches:
      - "**"

permissions:
  contents: read

jobs:
  deploy-preview:
    name: Deploy Preview
    runs-on: ubuntu-latest
    environment: development

    env:
      VERCEL_ORG_ID: ${{ secrets.VERCEL_ORG_ID }}
      VERCEL_PROJECT_ID: ${{ secrets.VERCEL_PROJECT_ID }}

    steps:
      - name: Check out repository
        uses: actions/checkout@v4

      - name: Set up Node.js
        uses: actions/setup-node@v4
        with:
          node-version: "22"
          cache: "npm"

      - name: Install dependencies
        run: npm ci

      - name: Lint
        run: npm run lint --if-present

      - name: Test
        run: npm test --if-present

      - name: Install Vercel CLI
        run: npm install --global vercel@latest

      - name: Pull Vercel preview environment
        run: vercel pull --yes --environment=preview --token=${{ secrets.VERCEL_TOKEN }}

      - name: Build project artifacts
        run: vercel build --token=${{ secrets.VERCEL_TOKEN }}

      - name: Deploy preview to Vercel
        run: vercel deploy --prebuilt --token=${{ secrets.VERCEL_TOKEN }}
```

Notes:

* If Vercel’s native Git integration is also enabled, avoid duplicate deployments. Prefer one deployment mechanism.
* If both are enabled intentionally, document why.
* The preview deployment is the development environment unless a separate Vercel project is created for development.

### 7.3 Production Deployment

Requirement:

* Production deployment should be available only after the development version has been approved.

Recommended workflow file:

```text
.github/workflows/vercel-production.yml
```

Recommended behavior:

* Trigger manually with `workflow_dispatch`.
* Use GitHub `production` environment protection rules.
* Require approval before deployment.
* Build using Vercel production environment settings.
* Deploy with `--prod`.

Example workflow:

```yaml
name: Deploy Production to Vercel

on:
  workflow_dispatch:

permissions:
  contents: read

jobs:
  deploy-production:
    name: Deploy Production
    runs-on: ubuntu-latest
    environment: production

    env:
      VERCEL_ORG_ID: ${{ secrets.VERCEL_ORG_ID }}
      VERCEL_PROJECT_ID: ${{ secrets.VERCEL_PROJECT_ID }}

    steps:
      - name: Check out repository
        uses: actions/checkout@v4

      - name: Set up Node.js
        uses: actions/setup-node@v4
        with:
          node-version: "22"
          cache: "npm"

      - name: Install dependencies
        run: npm ci

      - name: Lint
        run: npm run lint --if-present

      - name: Test
        run: npm test --if-present

      - name: Install Vercel CLI
        run: npm install --global vercel@latest

      - name: Pull Vercel production environment
        run: vercel pull --yes --environment=production --token=${{ secrets.VERCEL_TOKEN }}

      - name: Build production project artifacts
        run: vercel build --prod --token=${{ secrets.VERCEL_TOKEN }}

      - name: Deploy production to Vercel
        run: vercel deploy --prebuilt --prod --token=${{ secrets.VERCEL_TOKEN }}
```

Required GitHub environment setup:

* Create GitHub environment named `development`.
* Create GitHub environment named `production`.
* Configure `production` to require manual approval.
* Add deployment reviewers for the `production` environment.

### 7.4 Deployment Acceptance Criteria

Development deployment is complete when:

* A push to any branch triggers the preview workflow.
* CI installs dependencies successfully.
* Lint/test/build pass.
* Vercel preview deployment succeeds.
* A preview URL is available from the GitHub Actions logs and/or Vercel dashboard.

Production deployment is complete when:

* Manual workflow dispatch is available.
* GitHub requests approval for the `production` environment.
* Approved workflow deploys to Vercel production.
* Production URL serves the approved site.
* Production does not deploy automatically from routine pushes.

### 7.5 Local Development Usage

Recommended setup:

```bash
git clone https://github.com/programmeratlarge/Silphium_website.git
cd Silphium_website
npm install
npm run dev
```

Recommended local checks before pushing:

```bash
npm run lint
npm test
npm run build
```

---

## 8. Testing & QA Plan

### 8.1 Unit Tests

Recommended test targets:

* Contact-form validation.
* Content schema validation.
* Date formatting for press items.
* Development milestone rendering order.
* Navigation item configuration.

### 8.2 Component Tests

Recommended component tests:

* Header renders all required nav links.
* Footer renders disclaimer.
* Team cards render required fields.
* Press cards render title, outlet, date, and link.
* Contact form blocks invalid submissions.
* Disclaimer banner renders the correct development-stage language.

### 8.3 Integration Tests

Recommended integration tests:

* Home page renders successfully.
* Science page renders required cautionary language.
* Development page includes preclinical status.
* Contact form sends valid payload to the API route if email provider is configured.
* Contact form rejects personal medical information warning checkbox if unchecked.

### 8.4 Accessibility QA

Manual checks:

* Keyboard navigation through header, mobile menu, and contact form.
* Focus states visible.
* Color contrast acceptable.
* Images have meaningful alt text.
* Decorative images have empty alt text.
* Form fields have labels.
* Error messages are associated with fields.

Automated checks:

* Use built-in linting.
* Consider Playwright + axe in a future phase if the site grows.

### 8.5 Content / Claims QA

Before production deployment, review every page for:

* No claim of approved product.
* No claim of clinical validation.
* No claim of human efficacy.
* No “safe and effective” product claim.
* No “no side effects” claim.
* No medical advice.
* No patient recruitment language.
* Correct distinction between proof-of-concept science and Silphium development.
* Correct team names and bios.
* Correct press links.
* Founder approval.

### 8.6 Deployment QA

Before production deployment:

* Confirm the development / preview URL has been reviewed.
* Confirm the production workflow is manually triggered.
* Confirm GitHub environment approval is required.
* Confirm Vercel production deployment uses production environment variables.
* Confirm contact form works in production if enabled.
* Confirm no development-only banners or test content remain unless intentionally shown.

---

## 9. Content Drafting Guidance

### 9.1 Preferred Voice

The website voice should be:

* Clear.
* Scientific.
* Measured.
* Optimistic.
* Human-centered.
* Precise.
* Not hype-driven.

### 9.2 Example Approved-Style Copy

Homepage hero:

```text
Developing a new class of non-hormonal male contraception.

Silphium is advancing a precision, siRNA-based approach designed to temporarily pause sperm production without targeting hormones.
```

Development-stage disclaimer:

```text
Investigational technology. No approved product. Not currently enrolling clinical trials.
```

Science page intro:

```text
Sperm production depends on meiosis, the specialized cell division process that creates sperm cells. Silphium is developing an investigational approach designed to intervene early in this process using gene-targeted siRNA.
```

Partner CTA:

```text
Silphium is seeking partners aligned with the development of safe, reversible, non-hormonal contraceptive options and the expansion of shared reproductive choice.
```

Revise the partner CTA if legal or regulatory reviewers object to the phrase “safe, reversible” before clinical validation. A more conservative version is:

```text
Silphium is seeking partners aligned with the development of investigational, non-hormonal contraceptive options and the expansion of shared reproductive choice.
```

### 9.3 Phrases to Avoid

Avoid:

* “Male birth control is solved.”
* “Ready for patients.”
* “Clinically validated.”
* “Proven safe.”
* “Proven reversible.”
* “Zero side effects.”
* “No risk.”
* “Works in men.”
* “FDA-approved.”
* “Try Silphium.”
* “Join our trial” unless a confirmed approved trial exists.

---

## 10. Future Enhancements

Possible future additions:

* Founder-approved FAQ.
* Publication page.
* Investor-gated deck request form.
* Press kit download.
* Careers page.
* Blog / updates.
* Animated mechanism-of-action diagram.
* Privacy-preserving analytics.
* CMS integration if non-developers need direct editing.
* Mailing list if approved by founder and legal review.
* Multilingual support if the company expands public outreach.

Do not add these until requested.

---

## 11. Working with Users: Core Principles

### Before starting, always read this project plan for the full background.

### 1. Establish Context First

When the user asks for help:

* Ask what they are trying to accomplish.
* Ask what error or behavior they are seeing.
* Ask whether the change is for development preview or production.

### 2. Diagnose Before Fixing

Do not jump to conclusions and write lots of code before understanding the problem.

Common mistakes to avoid:

* Adding defensive code before understanding the root cause.
* Adding try/catch blocks that hide the real error.
* Creating workarounds that mask the problem.
* Making multiple unrelated changes at once.
* Changing deployment configuration before understanding which deployment path is active.

Correct process:

1. Reproduce the issue.
2. Identify the root cause.
3. Verify understanding.
4. Propose a minimal fix.
5. Test and verify.
6. Commit only the relevant changes.

### 3. Common Root Causes to Check First

Before writing code, check:

* Is the GitHub remote correct?
* Is the branch pushed to GitHub?
* Did GitHub Actions trigger?
* Did `npm ci` fail?
* Did `npm run build` fail locally?
* Are the Vercel secrets set in GitHub?
* Are `VERCEL_ORG_ID` and `VERCEL_PROJECT_ID` correct?
* Is `VERCEL_TOKEN` valid?
* Is the GitHub `production` environment waiting for approval?
* Is Vercel native Git integration also creating duplicate deployments?
* Are environment variables available to the correct Vercel environment?
* Is the production workflow being run manually rather than expected to run automatically?

### 4. Help Users Help Themselves

Encourage users to:

* Read GitHub Actions logs carefully.
* Test locally before pushing.
* Keep deployments incremental.
* Review the preview URL before production deployment.
* Separate content changes from deployment-infrastructure changes when possible.

---

## 12. Common Issues and Troubleshooting

### Issue 1: GitHub Actions deploy does not trigger

Symptoms:

* Push succeeds, but no workflow runs.

Likely causes:

* Workflow file is not in `.github/workflows/`.
* YAML syntax error.
* Branch filter excludes the pushed branch.
* Actions are disabled for the repository.

Diagnosis:

```bash
git status
git branch --show-current
git remote -v
```

Then check the repository Actions tab.

### Issue 2: Vercel deploy fails because project is not linked

Symptoms:

* `vercel pull` fails.
* Logs mention missing project settings.

Likely causes:

* `VERCEL_ORG_ID` missing.
* `VERCEL_PROJECT_ID` missing.
* Incorrect Vercel project.
* Invalid Vercel token.

Fix:

* Add or correct GitHub repository secrets.
* Re-run the workflow.

### Issue 3: Production deploy runs without approval

Symptoms:

* Production deploys immediately after manual workflow trigger.

Likely cause:

* GitHub `production` environment has no protection reviewers configured.

Fix:

* Go to GitHub repository settings.
* Create or edit environment named `production`.
* Add required reviewers.
* Re-run production workflow.

### Issue 4: Duplicate Vercel deployments

Symptoms:

* Two Vercel deployments appear for one push.

Likely cause:

* Both Vercel native Git integration and GitHub Actions are deploying.

Fix:

* Choose one deployment path.
* For this project, prefer GitHub Actions if the requirement is explicit CI-controlled deploys.
* If using Vercel native integration instead, update this document to reflect that decision.

### Issue 5: Contact form works locally but fails on Vercel

Likely causes:

* Missing production environment variables.
* Secret added to preview but not production.
* Email provider domain not verified.
* API route is using a browser-only environment variable.

Fix:

* Verify environment variables in Vercel.
* Confirm provider configuration.
* Check Vercel function logs.
* Do not expose server-only secrets with `NEXT_PUBLIC_`.

---

## 13. Directory Structure

```text
Silphium_website/
├── app/
│   ├── page.tsx
│   ├── science/
│   ├── development/
│   ├── team/
│   ├── press/
│   ├── contact/
│   ├── privacy/
│   └── api/
├── components/
├── content/
├── lib/
├── public/
│   ├── images/
│   ├── press/
│   └── social/
├── styles/
├── tests/
├── .github/
│   └── workflows/
├── README.md
├── CLAUDE.md
├── package.json
├── package-lock.json
├── next.config.ts
├── tsconfig.json
└── .env.example
```

Project is in early stages. Primary implementation should include:

* A polished, static-first public website.
* Cautious biotech messaging.
* Structured content files.
* Reusable typed components.
* Vercel preview deployment on every push.
* Manual approved Vercel production deployment.
* Contact pathway for press, investors, partners, and collaborators.

---

## 14. For Claude Code (AI Assistant)

When helping users:

0. Prepare by reading `CLAUDE.md`, `README.md`, `package.json`, existing routes, existing components, and workflow files.
1. Establish context: what is the user trying to accomplish?
2. Determine whether the change affects content, design, code, deployment, or production release.
3. Get exact error details if something is broken.
4. Diagnose first; do not write code before understanding the problem.
5. Make minimal, focused changes.
6. Keep scientific and medical claims conservative.
7. Never invent company, clinical, regulatory, publication, or team details.
8. Run relevant checks before claiming the task is complete.
9. Keep secrets out of source code.
10. Use Conventional Commits for commit messages.

Remember:

* This is an early-stage biotech website.
* It is not a product website.
* It is not a clinical trial recruitment website.
* It must not imply human efficacy, approval, or availability.
* Production deployment requires human approval.

---

# Claude Code Guidelines by Sabrina Ramonov

## Implementation Best Practices

### 0 — Purpose

These rules ensure maintainability, safety, and developer velocity.

**MUST** rules are enforced by CI; **SHOULD** rules are strongly recommended.

---

### 1 — Before Coding

* **BP-1 (MUST)** Ask the user clarifying questions when requirements are ambiguous.
* **BP-2 (SHOULD)** Draft and confirm an approach for complex work.
* **BP-3 (SHOULD)** If two or more approaches exist, list clear pros and cons.

---

### 2 — While Coding

* **C-1 (MUST)** Name functions with existing domain vocabulary for consistency.
* **C-2 (SHOULD NOT)** Introduce classes when small testable functions suffice.
* **C-3 (SHOULD)** Prefer simple, composable, testable functions.
* **C-4 (SHOULD NOT)** Add comments except for critical caveats; rely on self-explanatory code.
* **C-5 (SHOULD NOT)** Extract a new function unless it will be reused elsewhere, is the only way to unit-test otherwise untestable logic, or drastically improves readability of an opaque block.
* **C-6 (MUST)** Keep medical, regulatory, and scientific claims conservative unless user supplies approved copy.
* **C-7 (MUST)** Do not expose secrets in frontend code or committed files.

---

### 3 — Testing

* **T-1 (MUST)** Separate pure-logic unit tests from integration tests.
* **T-2 (SHOULD)** Prefer integration tests over heavy mocking.
* **T-3 (SHOULD)** Unit-test complex logic thoroughly.
* **T-4 (SHOULD)** Test the entire rendered structure in one assertion if practical.
* **T-5 (SHOULD)** Test claim-sensitive content such as disclaimers and development-stage language.

---

### 4 — Deployment

* **D-1 (MUST)** Every push should deploy to Vercel preview/development through GitHub Actions.
* **D-2 (MUST)** Production deployment should be manual.
* **D-3 (MUST)** Production deployment should use GitHub environment approval.
* **D-4 (MUST)** Vercel secrets must be configured as GitHub repository secrets, not committed.
* **D-5 (SHOULD)** Avoid duplicate deployment paths from both Vercel native Git integration and GitHub Actions unless intentionally documented.

---

### 5 — Code Organization

* **O-1 (SHOULD)** Keep content in `content/`.
* **O-2 (SHOULD)** Keep reusable UI in `components/`.
* **O-3 (SHOULD)** Keep validation and non-UI helpers in `lib/`.
* **O-4 (SHOULD)** Keep pages thin; compose from content and components.
* **O-5 (SHOULD NOT)** Scatter disclaimers across components; centralize them.

---

### 6 — Tooling Gates

* **G-1 (MUST)** Run build before production deployment.
* **G-2 (MUST)** Run lint before production deployment.
* **G-3 (SHOULD)** Run tests before production deployment.
* **G-4 (SHOULD)** Run a manual visual review on the Vercel preview URL.

---

### 7 — Git

* **GH-1 (MUST)** Use Conventional Commits format when writing commit messages: https://www.conventionalcommits.org/en/v1.0.0
* **GH-2 (SHOULD NOT)** Refer to Claude, Anthropic, or AI assistance in commit messages.

---

## Writing Functions Best Practices

When evaluating whether a function you implemented is good, use this checklist:

1. Can you read the function and honestly follow what it is doing?
2. Does the function have high cyclomatic complexity?
3. Would a common data structure or simpler pattern make it clearer?
4. Are there unused parameters?
5. Are there unnecessary type casts that can be moved to function arguments?
6. Is the function easily testable without mocking core framework behavior?
7. Does it have hidden untested dependencies?
8. Brainstorm three better function names and verify the current name fits the codebase vocabulary.

Do not refactor out a separate function unless there is a compelling need, such as:

* The refactored function is used in more than one place.
* The refactored function is easily unit testable while the original is not.
* The original function is extremely hard to follow.

## Writing Tests Best Practices

When evaluating whether a test is good, use this checklist:

1. Parameterize inputs where practical.
2. Do not add tests that cannot fail for a real defect.
3. Ensure the test description states exactly what the final expectation verifies.
4. Compare results to independent expectations or domain properties.
5. Follow the same lint, type-safety, and style rules as production code.
6. Express invariants where practical.
7. Group unit tests under `describe(functionName, () => ...)`.
8. Use `expect.any(...)` when testing values that can vary.
9. Prefer strong assertions over weak assertions.
10. Test edge cases, realistic input, unexpected input, and value boundaries.
11. Do not test conditions already guaranteed by the type checker.

## Remember Shortcuts

Remember the following shortcuts the user may invoke at any time.

### QNEW

When the user types `qnew`, this means:

```text
Understand all best practices listed in CLAUDE.md.
Your code should always follow these best practices.
```

### QPLAN

When the user types `qplan`, this means:

```text
Analyze similar parts of the codebase and determine whether your plan:
- is consistent with rest of codebase
- introduces minimal changes
- reuses existing code
```

### QCODE

When the user types `qcode`, this means:

```text
Implement your plan and make sure your new tests pass.
Always run tests to make sure you did not break anything else.
```

### QCHECK

When the user types `qcheck`, this means:

```text
You are a skeptical senior software engineer.
Perform this analysis for every major code change you introduced:

1. CLAUDE.md checklist Writing Functions Best Practices.
2. CLAUDE.md checklist Writing Tests Best Practices.
3. CLAUDE.md checklist Implementation Best Practices.
```

### QCHECKF

When the user types `qcheckf`, this means:

```text
You are a skeptical senior software engineer.
Perform this analysis for every major function you added or edited:

1. CLAUDE.md checklist Writing Functions Best Practices.
```

### QCHECKT

When the user types `qcheckt`, this means:

```text
You are a skeptical senior software engineer.
Perform this analysis for every major test you added or edited:

1. CLAUDE.md checklist Writing Tests Best Practices.
```

### QUX

When the user types `qux`, this means:

```text
Imagine you are a human UX tester of the feature you implemented.
Output a comprehensive list of scenarios you would test, sorted by highest priority.
```

### QGIT

When the user types `qgit`, this means:

```text
Add all changes to staging, create a commit, and push to remote.

Follow this checklist for writing the commit message:
- Use Conventional Commits format.
- Do not refer to Claude, Anthropic, or AI assistance.
- Structure commit messages as:
  <type>[optional scope]: <description>
  [optional body]
  [optional footer(s)]
```
