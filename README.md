# Global Youth Change Makers (GYCM)

> **Empowering Tomorrow's Climate Leaders, Today**  
> An original, enterprise-grade, high-performance web platform for youth-led climate action, delta resilience, and sustainability in Bangladesh.

---

## 1. Overview & Architecture

Global Youth Change Makers is built from the ground up on modern, secure, and statically generated web foundations, designed to be completely immune to legacy CMS exploits (e.g. WordPress plugin vulnerabilities and SEO spam injections).

* **Framework:** Next.js 16 (App Router with Turbopack & Partial Prerendering)
* **Language & Runtime:** TypeScript 5 with strict type safety
* **Styling & Theme:** Tailwind CSS v4 + Nature-inspired OKLCH color design system
* **UI Components:** `shadcn/ui` with accessible `@base-ui/react` primitives
* **Form Validation:** `react-hook-form` + `zod` schemas
* **Animations:** Subtle `framer-motion` layout and entrance effects
* **Search Engine Optimization (SEO):** Native `generateMetadata`, JSON-LD structured data (`Organization`, `Article`, `Event`), dynamic `sitemap.xml`, and `robots.txt`
* **Security:** Strict HTTP response security headers (CSP, HSTS, X-Frame-Options, Permissions-Policy), sliding window API rate limiting, and input sanitization.

---

## 2. Getting Started & Local Development

### Prerequisites
* Node.js `v20+` or `v24+`
* `pnpm` (`v9+` or `v10+`)

### Installation & Setup

1. **Clone or navigate to the project directory:**
   ```bash
   cd global-youth-change-makers
   ```

2. **Install dependencies using pnpm:**
   ```bash
   pnpm install
   ```

3. **Start the local development server:**
   ```bash
   pnpm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

4. **Run TypeScript Compiler Verification:**
   ```bash
   pnpm exec tsc --noEmit
   ```

5. **Run ESLint Linter:**
   ```bash
   pnpm run lint
   ```

6. **Create a Production Build:**
   ```bash
   pnpm run build
   ```

---

## 3. Project Directory Structure

```text
global-youth-change-makers/
├── public/                     # Static public assets (icons, SVGs)
├── src/
│   ├── app/                    # Next.js App Router routes & API endpoints
│   │   ├── api/
│   │   │   ├── contact/        # POST: Validated contact inquiry intake
│   │   │   ├── get-involved/   # POST: Volunteer, Partner, and Donate pledge intake
│   │   │   └── newsletter/     # POST: Climate Dispatch newsletter subscription
│   │   ├── about/              # /about - Vision, Mission, Theory of Change
│   │   ├── blog/               # /blog - Editorial dispatches & youth essays
│   │   │   └── [slug]/         # /blog/[slug] - Dynamic post detail with JSON-LD
│   │   ├── contact/            # /contact - Form, Bangladesh chapter coordinates
│   │   ├── events/             # /events - Upcoming summits, cleanups, webinars
│   │   ├── get-involved/       # /get-involved - Volunteer, Partner, Donate tabs
│   │   ├── impact/             # /impact - Verified field metrics & case studies
│   │   ├── programs/           # /programs - 5 core initiatives index
│   │   │   └── [slug]/         # /programs/[slug] - Detailed program blueprints
│   │   ├── resources/          # /resources - Toolkits & open policy whitepapers
│   │   ├── team/               # /team - Executive board, advisors, ambassadors
│   │   ├── globals.css         # Theme design tokens (Forest, Terracotta, Mist)
│   │   ├── layout.tsx          # Shared root layout (Fonts, Navbar, Footer, Meta)
│   │   ├── page.tsx            # Homepage with all 10 core sections
│   │   ├── robots.ts           # Dynamic search engine crawler rules
│   │   ├── sitemap.ts          # XML sitemap generator
│   │   ├── not-found.tsx       # Custom 404 page
│   │   └── error.tsx           # Global error boundary
│   ├── components/
│   │   ├── common/             # Reusable UI modules (PageHero, CtaBanner)
│   │   ├── contact/            # Client contact form & interactive map
│   │   ├── events/             # Client event calendar with RSVP modal
│   │   ├── get-involved/       # Client multi-track action intake forms
│   │   ├── layout/             # Shared Navbar and Footer
│   │   ├── resources/          # Client toolkit directory with search & filters
│   │   ├── sections/           # 10 modular homepage section components
│   │   └── ui/                 # shadcn/ui accessible components
│   ├── content/                # Typed content layer (Single source of truth)
│   │   ├── blog.ts & blogPosts.ts # Editorial articles and metadata
│   │   ├── events.ts           # Summits, hackathons, and river cleanup listings
│   │   ├── getInvolved.ts      # Action tracks, pledge tiers, and FAQs
│   │   ├── impact.ts           # Quantitative metrics and regional ecosystems
│   │   ├── navigation.ts       # Global sitemap and navbar configuration
│   │   ├── programs.ts         # The 5 frontline environmental initiatives
│   │   ├── resources.ts        # Downloadable toolkits and school packs
│   │   ├── site.ts             # Brand identity, mission, vision, and contact info
│   │   ├── team.ts             # Leadership profiles and advisory council
│   │   └── index.ts            # Central barrel export
│   └── lib/
│       ├── jsonLd.ts           # Schema.org structured data helpers
│       ├── security.ts         # Rate limiting & string sanitization utilities
│       └── utils.ts            # Class merging utility (cn)
├── next.config.ts              # Security headers, Turbopack, and build options
├── package.json
└── tsconfig.json
```

---

## 4. How to Edit & Manage Content

All text, copy, program milestones, and team information are strictly decoupled from UI markup and located in the typed content directory: [`src/content/`](file:///src/content/).

* **Site Identity & Contacts:** Edit [`src/content/site.ts`](file:///src/content/site.ts) to update the organization's tagline, phone numbers, official email, or office address.
* **Initiatives & Programs:** Edit [`src/content/programs.ts`](file:///src/content/programs.ts) to adjust program names, cohorts, milestones, or add new initiatives.
* **Blog Posts & Dispatches:** Edit [`src/content/blogPosts.ts`](file:///src/content/blogPosts.ts) to draft new articles. Slugs automatically generate static pages with pre-computed SEO metadata and JSON-LD.
* **Events & Summits:** Edit [`src/content/events.ts`](file:///src/content/events.ts) to schedule upcoming cleanups, webinars, or hardware hackathons.
* **Team & Advisors:** Edit [`src/content/team.ts`](file:///src/content/team.ts) to update executive leadership, advisory council members, or ambassadors.
* **Navigation & Menus:** Edit [`src/content/navigation.ts`](file:///src/content/navigation.ts) to add or rearrange navbar dropdowns or footer links.

---

## 5. Form Submissions & API Route Handlers

The platform includes three hardened Next.js Route Handlers:

1. **Newsletter Intake (`/api/newsletter`):**
   * Validates email syntax via Zod.
   * Rate limited to 5 requests / minute per client.
   * Sanitizes input before structured event logging.
2. **General Contact Inquiries (`/api/contact`):**
   * Validates full name, email, subject, and inquiry text.
   * Rate limited to 4 requests / minute.
   * Ready to pipe into transactional email providers (e.g. Resend, SendGrid) or CRM databases.
3. **Action & Volunteer Intake (`/api/get-involved`):**
   * Supports three discriminated union types: `volunteer`, `partner`, and `donate`.
   * Enforces field validation and district identification.

---

## 6. How to Deploy on Vercel

The application is optimized for zero-config deployment on Vercel:

### Option A: Using the Vercel Dashboard (Recommended)

1. Push your repository to **GitHub**, **GitLab**, or **Bitbucket**.
2. Go to [vercel.com](https://vercel.com) and log in.
3. Click **"Add New..."** $\rightarrow$ **"Project"**.
4. Import your repository.
5. In the configuration screen:
   * **Framework Preset:** Next.js
   * **Root Directory:** `./global-youth-change-makers` (or `./` if repository is root)
   * **Package Manager:** `pnpm`
   * **Build Command:** `pnpm run build`
   * **Output Directory:** `.next`
6. Click **Deploy**. Vercel will build all static routes, edge functions, and optimize assets automatically.

### Option B: Using the Vercel CLI

```bash
# Install Vercel CLI globally
pnpm add -g vercel

# Navigate to project directory
cd global-youth-change-makers

# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

---

## 7. Compliance & Intellectual Property Notice

* **Originality:** All copy, program structures, initiative titles, and design tokens are 100% original.
* **Ethical Transparency:** No images, logos, or materials were copied from competitor domains.
* **Security Standard:** Zero third-party unvetted plugins, preventing malicious SEO spam and doorway URL injections.
