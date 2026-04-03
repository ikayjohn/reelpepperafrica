# REELPEPPER AFRICA — CLAUDE CODE BUILD INSTRUCTIONS

> **This file is the single source of truth for building the ReelPepper Africa website.**
> Read this entire document before writing any code. Every section is load-bearing.
> When in doubt, refer back here — not to any previous Codex output.

---

## 1. PROJECT OVERVIEW

**Product:** ReelPepper Africa — Culture Capital & Entertainment Marketplace Platform
**Tagline:** "Culture as Capital. Entertainment as Infrastructure."
**URL Target:** reelpepper.africa (or reelpepperafrica.com)

**What this is:** A pan-African creative economy platform that turns cultural participation into structured economic returns. It combines marketplace commerce, festival activation, tokenized participation, creative finance, streaming, and impact tracking into one unified ecosystem.

**What this is NOT:**
- Not a basic portfolio/brochure site
- Not a generic e-commerce store
- Not a whitepaper dump with CTAs
- Not a Web3/crypto-first product (tokens are a feature, not the identity)

**Core proposition:** ReelPepper Africa turns cultural participation into structured economic power. The ecosystem cycle is: Creation → Commerce → Tokenization → Finance → Impact Redistribution.

---

## 2. BRAND IDENTITY & DESIGN SYSTEM

### 2.1 Brand Personality

The brand personality is **"Cultural Sovereign"** — it speaks with the authority of a continental institution but the warmth of a festival host. Think the African Union meets Coachella's marketing team meets a fintech pitch deck.

**Voice hierarchy:**
1. **Movement voice** (homepage hero, about page, impact sections) — Manifesto energy. Short declarative sentences. "This is not charity. It is not donation. It is not aid. It is structured economic participation." Use this voice for headlines and hero copy.
2. **Platform voice** (marketplace, vendor pages, dashboards, forms) — Clean, direct, utility-first. "List your product. Set your price. Reach 54 nations." Use this voice for UI copy, CTAs, and functional sections.
3. **Institutional voice** (invest/partner page, whitepapers, legal) — Data-driven, measured, credible. "The African creative economy represents a $1T addressable market across 500+ cultural tribes." Use this voice for investor-facing content only.

**CRITICAL: Never mix all three voices on the same page.** The homepage transitions from movement (hero) to platform (below fold). The About page is movement throughout. The Marketplace is platform throughout.

### 2.2 Color System

```css
:root {
  /* === PRIMARY PALETTE === */
  --rp-green-900: #071F0E;       /* Deepest — nav bg, footer bg */
  --rp-green-800: #0A2E1A;       /* Primary dark — hero overlays, cards */
  --rp-green-700: #0F4528;       /* Hover states on dark bg */
  --rp-green-600: #1A5E3A;       /* Secondary dark — borders, accents */
  --rp-green-100: #E8F5E9;       /* Light tint — subtle backgrounds */
  --rp-green-50:  #F1F8F2;       /* Lightest — section alternation */

  /* === ACTION / GOLD === */
  --rp-gold-500: #D4A017;        /* Primary CTA, token UI, highlights */
  --rp-gold-400: #E8B930;        /* Hover on gold elements */
  --rp-gold-300: #F0D060;        /* Light gold — badges, accents */
  --rp-gold-100: #FFF8E1;        /* Gold tint — featured card bg */
  --rp-gold-900: #5C4500;        /* Gold text on gold-tint bg */

  /* === PEPPER RED === */
  --rp-red-500: #C43D2E;         /* Brand accent — logo, alerts, featured */
  --rp-red-400: #D85545;         /* Hover on red elements */
  --rp-red-100: #FDECEA;         /* Red tint — error states, urgent bg */
  --rp-red-900: #5A1A12;         /* Red text on red-tint bg */

  /* === WARM NEUTRALS === */
  --rp-cream: #FAF7F2;           /* Page base background */
  --rp-cream-dark: #F0EBE3;      /* Card backgrounds, section alt bg */
  --rp-warm-gray-100: #E8E4DD;   /* Borders, dividers */
  --rp-warm-gray-300: #B8B2A8;   /* Muted text, placeholders */
  --rp-warm-gray-600: #6B6560;   /* Secondary text */
  --rp-warm-gray-900: #1A1816;   /* Primary text — warm black */

  /* === SEMANTIC === */
  --rp-success: #1D9E75;
  --rp-warning: #E8B930;
  --rp-error: #C43D2E;
  --rp-info: #2B7AB8;
}
```

**Usage rules:**
- Page background is ALWAYS `--rp-cream`, never pure white (#fff)
- Primary text is ALWAYS `--rp-warm-gray-900`, never pure black (#000)
- Primary CTAs use `--rp-gold-500` with `--rp-green-900` text
- Secondary CTAs use `--rp-green-800` with white text
- Ghost/tertiary CTAs use transparent bg with `--rp-green-800` border
- The red (`--rp-red-500`) is used SPARINGLY — logo lockup, "featured" badges, alerts, and the pepper icon motif. It should appear on every page but never dominate
- Section alternation: alternate between `--rp-cream` and `--rp-cream-dark` (or `--rp-green-50` for variety)
- NEVER use bright blue, purple, or any neon/electric color anywhere. The palette is warm and earthy throughout

### 2.3 Typography

```css
/* FONT STACK — Load from Google Fonts or self-host */

/* Display / Headlines */
--font-display: 'Clash Display', 'General Sans', sans-serif;
/* Weights: 500 (medium) for section heads, 600 (semibold) for hero/page titles */

/* Body / UI */
--font-body: 'Plus Jakarta Sans', 'General Sans', sans-serif;
/* Weights: 400 (regular) for body, 500 (medium) for labels/nav, 600 (semibold) for emphasis */

/* Mono (code, token IDs, wallet addresses) */
--font-mono: 'JetBrains Mono', 'Fira Code', monospace;
```

**If Clash Display is unavailable**, fallback to `General Sans` or `Satoshi` — never to Inter, Roboto, or system fonts.

**Type scale:**
```
Hero headline:       clamp(2.5rem, 5vw, 4.5rem)  / weight 600 / display font
Page title:          clamp(2rem, 4vw, 3rem)       / weight 600 / display font
Section headline:    clamp(1.5rem, 3vw, 2.25rem)  / weight 500 / display font
Card title:          1.25rem                       / weight 600 / body font
Body large:          1.125rem                      / weight 400 / body font / line-height 1.7
Body:                1rem                          / weight 400 / body font / line-height 1.7
Small / caption:     0.875rem                      / weight 400 / body font
Label / overline:    0.75rem                       / weight 600 / body font / letter-spacing 0.08em / uppercase
```

**Text rules:**
- Headlines: sentence case, NEVER all-caps except for overline labels
- Body copy: max 65ch line length on desktop. Use `max-width: 65ch` on prose containers
- No justified text anywhere
- Paragraph spacing: 1.5rem between paragraphs, not double line breaks
- Links in body text: underlined with `--rp-green-600`, no color change on hover, underline thickens

### 2.4 Spacing & Layout

```css
/* 8px base grid */
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-20: 5rem;     /* 80px */
--space-24: 6rem;     /* 96px */
--space-32: 8rem;     /* 128px */

/* Container */
--container-max: 1280px;
--container-padding: clamp(1rem, 5vw, 4rem);

/* Section vertical padding */
--section-py: clamp(3rem, 8vw, 6rem);
```

**Layout rules:**
- Max content width: 1280px, centered
- Horizontal padding: fluid, min 1rem (mobile) → 4rem (desktop)
- Section vertical padding: fluid, min 3rem → 6rem
- Cards: border-radius 12px, padding 1.5rem, border 1px solid `--rp-warm-gray-100`
- Buttons: border-radius 8px, padding 0.75rem 1.5rem (default), 1rem 2rem (large)
- Inputs: border-radius 8px, height 48px, border 1px solid `--rp-warm-gray-100`
- Mobile breakpoint: 768px. Tablet: 1024px. Desktop: 1280px.

### 2.5 Motion & Animation

```css
/* Timing */
--ease-out: cubic-bezier(0.16, 1, 0.3, 1);
--ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
--duration-fast: 150ms;
--duration-normal: 300ms;
--duration-slow: 500ms;

/* Scroll reveal — use Intersection Observer, NOT scroll-linked animation libraries */
/* Elements fade up 20px with 300ms ease-out on viewport entry */
/* Stagger children by 80ms */
```

**Motion rules:**
- Page transitions: crossfade 300ms between routes
- Hover states: 150ms ease-out on all interactive elements
- Scroll reveals: fade-up (translateY 20px → 0) with 300ms ease-out, trigger at 20% viewport intersection
- Counters (impact dashboard): count-up animation over 1.5s with ease-out when section enters viewport
- NO parallax scrolling
- NO auto-playing carousels (use manual swipe/click only)
- NO loading spinners longer than 2 seconds — use skeleton screens
- Respect `prefers-reduced-motion: reduce` — disable all transforms/opacity transitions

### 2.6 Iconography & Imagery

**Icons:** Use Lucide icons (or Phosphor as alternative). Stroke weight 1.5px, 24px default size. Always use consistent icon set — never mix icon libraries.

**Photography direction:**
- Hero images: wide shots of African cultural events, festivals, markets — real, not stock
- Creator spotlights: portrait-style, warm lighting, natural backgrounds
- Marketplace: clean product photography on neutral backgrounds
- Festival: high-energy crowd shots, stage lighting, cultural performances
- ALL images should show real African people, places, and culture. No generic stock photos of "diverse" Western settings
- Image treatment: slight warm overlay (5-10% `--rp-gold-300` overlay at 10% opacity) for consistency

**Placeholder strategy (pre-launch):**
- Use geometric pattern blocks in brand colors where photography isn't available
- Or use abstract African textile/kente-inspired geometric SVG patterns
- NEVER use AI-generated images of people

---

## 3. TECH STACK

```
Framework:        Next.js 14+ (App Router)
Language:         TypeScript (strict mode)
Styling:          Tailwind CSS 4+ with custom design tokens
Animation:        Framer Motion (for page transitions + scroll reveals)
CMS:              Sanity.io (for festivals, news, creator spotlights, media hub)
Auth:             NextAuth.js or Clerk (multi-role: citizen, creator, vendor, investor)
Database:         PostgreSQL via Supabase or PlanetScale
Payments:         Paystack (primary — NGN + multi-African currency)
                  Flutterwave (secondary/fallback)
State:            Zustand (lightweight global state for cart, auth, token wallet)
Forms:            React Hook Form + Zod validation
Email:            Resend or Postmark (transactional)
Analytics:        Vercel Analytics + Mixpanel (event tracking)
Hosting:          Vercel (primary) or Netlify
Image CDN:        Cloudinary or Vercel Image Optimization
Search:           Algolia (marketplace product search)
```

**Deployment notes:**
- Use Vercel's edge functions for geolocation-based content (festival country filtering)
- All images through CDN with WebP/AVIF auto-format
- Implement ISR (Incremental Static Regeneration) for marketplace pages
- API routes for: vendor dashboard, token wallet, payment webhooks, CMS preview
- Middleware for auth-gated routes (vendor dashboard, investor portal, token activation)

**Folder structure:**
```
src/
├── app/
│   ├── (marketing)/          # Public pages — home, about, impact, festivals
│   │   ├── page.tsx          # Homepage
│   │   ├── about/
│   │   ├── ecosystem/
│   │   ├── festivals/
│   │   ├── invest/
│   │   ├── resources/
│   │   ├── news/
│   │   └── contact/
│   ├── (commerce)/           # Marketplace, checkout, vendor
│   │   ├── marketplace/
│   │   ├── checkout/
│   │   └── vendor/
│   ├── (auth)/               # Login, register, onboarding
│   │   ├── login/
│   │   ├── register/
│   │   └── onboarding/
│   ├── (dashboard)/          # Authenticated — citizen, creator, vendor, investor dashboards
│   │   ├── citizen/
│   │   ├── creator/
│   │   ├── vendor/
│   │   └── investor/
│   ├── api/
│   ├── layout.tsx
│   └── globals.css
├── components/
│   ├── ui/                   # Primitives — Button, Input, Card, Badge, Modal, etc.
│   ├── layout/               # Header, Footer, Nav, MobileMenu, Container
│   ├── sections/             # Page sections — Hero, EcosystemGrid, FestivalCards, etc.
│   ├── commerce/             # ProductCard, Cart, CheckoutForm, VendorForm
│   ├── dashboard/            # DashboardNav, StatsCard, ActivityFeed
│   └── shared/               # ImpactCounter, TokenBadge, CTABlock, NewsletterForm
├── lib/
│   ├── db/                   # Database queries, Supabase client
│   ├── auth/                 # Auth configuration
│   ├── payments/             # Paystack/Flutterwave integration
│   ├── cms/                  # Sanity client + queries
│   ├── utils/                # Formatters, validators, helpers
│   └── constants/            # Site config, nav items, ecosystem data
├── hooks/                    # Custom React hooks
├── types/                    # TypeScript types/interfaces
└── public/
    ├── fonts/
    ├── images/
    ├── icons/
    └── patterns/             # SVG geometric patterns for placeholders
```

---

## 4. INFORMATION ARCHITECTURE

### 4.1 Navigation Structure

```
PRIMARY NAV (always visible):
├── Home
├── About
├── Ecosystem               → Mega menu or dedicated page with 6 pillar cards
├── Festivals               → Festival listing with filters
├── Marketplace             → Commerce hub
├── Invest                  → Investor/partner page
└── [CTA Button] "Join the Movement" → Register/onboarding flow

SECONDARY NAV (footer or hamburger):
├── Resources & Media Hub
├── News & Announcements
├── Impact Dashboard
├── Contact
├── Legal (Privacy, Terms, Token Disclaimer, IP Notice)
└── Social Links
```

**Nav behavior:**
- Desktop: horizontal nav, dark green bg (`--rp-green-900`), gold CTA button
- Sticky on scroll with background blur effect (backdrop-filter: blur(12px))
- Mobile: hamburger → full-screen overlay menu, same dark green bg
- Current page indicator: gold underline on active nav item
- Marketplace sub-nav (when inside marketplace routes): horizontal tab bar below main nav for Commerce / Streaming / Funding / Tokens / Impact

### 4.2 User Journey Hierarchy

**There are 5 user types. The website must serve all of them, but not equally on every page.**

```
PRIORITY ORDER (by conversion value):
1. Culture Citizen (mass audience — sign up, participate, buy, attend)
2. Vendor / Creator (supply side — list products, sell, perform)
3. Festival Participant (event-driven — register, attend, share)
4. Investor / Partner (institutional — fund, sponsor, co-brand)
5. Media / Researcher (informational — download, read, cite)
```

**Homepage serves users 1-3 primarily.** User 4 gets a clear "Invest" nav link. User 5 gets "Resources" in footer nav.

---

## 5. PAGE-BY-PAGE SPECIFICATIONS

### 5.1 HOMEPAGE

**Purpose:** Convert visitors into participants. Not an "about" page with CTAs bolted on — a participation launcher.

**Sections (in scroll order):**

```
1. HERO
   - Full-viewport height (100svh)
   - Background: dark image/video of African cultural event with dark green overlay (70% opacity)
   - Headline (display font, white): "Culture as Capital. Entertainment as Infrastructure."
   - Subline (body font, cream/muted white): "Join [COUNTER] Culture Citizens building Africa's creative economy."
   - 3 CTAs in a row:
     [Gold filled] "Explore Marketplace"
     [White outline] "Become a Culture Citizen"
     [White outline] "Activate Your Token"
   - Subtle scroll indicator (chevron down, pulsing)

2. ECOSYSTEM OVERVIEW (the "what we do" strip)
   - Section title: "One Ecosystem. Six Pillars. 54 Nations."
   - 6 cards in a 3x2 grid (2x3 on mobile):
     Each card:
       - Icon (Lucide)
       - Pillar name (card title)
       - One-sentence description
       - "Learn more →" link to /ecosystem#[pillar]
   - Cards use --rp-cream-dark bg, subtle hover lift (translateY -4px + shadow)
   
   THE 6 PILLARS:
     a. Citizen Activation — "Join and participate as a Culture Citizen"
     b. Creative Commerce — "Buy, sell, and trade cultural products"
     c. Festivals & Convergences — "Experience culture across 54 nations"
     d. Creative Finance — "Fund and invest in creative ventures"
     e. Digital Infrastructure — "Mobile-first access via tokens and telecom"
     f. Impact & Sustainability — "Track real outcomes in health, green, and education"

3. FEATURED FESTIVALS (carousel — manual swipe only, no autoplay)
   - Section title: "Upcoming Festivals"
   - 3 visible festival cards (scrollable on mobile)
   - Each card: cover image, festival name, date, city/country, "Register Interest" CTA
   - "View All Festivals →" link at end

4. MARKETPLACE PREVIEW
   - Section title: "The Culture Marketplace"
   - 4-6 product cards in a horizontal scroll or grid
   - Product card: image, name, price (₦), vendor name, "Shop Now" CTA
   - "Enter Marketplace →" full-width CTA below

5. IMPACT COUNTERS
   - Full-width strip with dark green bg
   - 6 animated counters in a row (3x2 on mobile):
     Culture Citizens Activated | Marketplace Transactions | Tokens Circulated
     Creative Ventures Funded | Festival Participation | Trees Pledged
   - Numbers count up on scroll into view
   - Each counter: large number (display font, gold) + label (body font, cream)

6. CREATOR / VENDOR SPOTLIGHT
   - Section title: "Meet the Culture Makers"
   - 3 spotlight cards: photo, name, role/business, short quote, "View Profile →"
   - Alternating layout: text-left/image-right, then flip

7. JOIN THE MOVEMENT CTA
   - Full-width section, cream bg
   - Headline: "Your Culture Has Value. Activate It."
   - Subline: "Join as a citizen, creator, vendor, or investor."
   - 4 pathway cards (horizontal scroll on mobile):
     Citizen | Creator | Vendor | Investor
     Each: icon, title, one-line description, "Get Started →" CTA
   - Newsletter signup: email input + "Subscribe" button below

8. FOOTER
   - Dark green bg (--rp-green-900)
   - 4-column grid: Ecosystem links, Marketplace links, Resources, Legal
   - Social icons row
   - Newsletter mini-signup
   - Bottom bar: © 2025 ReelPepper Africa. All rights reserved.
```

### 5.2 ABOUT PAGE

**Purpose:** Explain the philosophy, economic model, and governance logic. This is the movement-voice page.

```
1. PAGE HERO
   - Title: "Redefining Culture as Economic Sovereignty"
   - Subline: 2-3 sentences from the manifesto voice
   - No CTA in hero — this is an education page

2. VISION STATEMENT
   - Long-form prose (3-4 paragraphs, max 65ch width)
   - Pull quotes styled with left gold border + larger italic text
   - Content: What is culture capital? Why Africa? Why now?

3. ECOSYSTEM CYCLE (interactive diagram)
   - Visual representation of: Creation → Commerce → Tokenization → Finance → Impact → (loops back)
   - Interactive: click each node to expand explanation panel
   - This is the single most important diagram on the site
   - Build as an SVG/Canvas component, not an image

4. THE CAPITAL ARCHITECTURE
   - Explain ReelPepper Bank concept
   - How tokens circulate
   - How value accrues to participants
   - Use infographic-style layout (icons + short text blocks, not paragraphs)

5. AGENDA 2063 ALIGNMENT
   - Grid of AU Agenda 2063 goals that ReelPepper addresses
   - Each goal: icon + title + how ReelPepper contributes
   - Institutional credibility section

6. TEAM / LEADERSHIP (if available)
   - Grid of team cards: photo, name, role, short bio
   - Advisory board if applicable
```

### 5.3 ECOSYSTEM PAGE

**Purpose:** Deep dive into the 6 pillars. This replaces the dense "Impact Action Ecosystem" page from the original content.

```
STRUCTURE: Pillar explorer with tab/accordion navigation

- Hero with animated ecosystem cycle graphic (same as About page, smaller)
- 6 pillar sections, each containing:
  - Pillar title + icon
  - 2-3 sentence description
  - Program cards grid (the sub-brands live HERE, not on the homepage):
    
    PILLAR 1 — CITIZEN ACTIVATION:
      • Reel4Life (Culture Citizen enrollment)
      • ReelBuddie (Peer ambassador network)
      • Reel3rybeFace (Cultural identity profiles)
      • ReelKulture (Heritage preservation)

    PILLAR 2 — CREATIVE COMMERCE:
      • Shop4Reel (Marketplace storefront)
      • Crea80candy (Creator merchandise)
      • ReelPreneur (Creative business tools)
      • Gift4Reel (Gift card system)

    PILLAR 3 — FESTIVALS & CONVERGENCES:
      • ReelKulture Festival
      • ReelRhyde Mobile Festival
      • Krea84Reel Festival
      • ArtBuddie Convergence
      • FlixnFlex (Streaming events)

    PILLAR 4 — CREATIVE FINANCE:
      • CashMyReel (Creator funding)
      • ReelBanker (Culture capital banking)
      • Fund4Reel (Investment pools)
      • Reelmonie (Token wallet)

    PILLAR 5 — DIGITAL INFRASTRUCTURE:
      • Stream4Reel (Content streaming)
      • ReelRhyde (Mobile/telecom participation)
      • ReelPulse (Media & broadcasting)
      • Data4Reel (Analytics & insights)

    PILLAR 6 — IMPACT & SUSTAINABILITY:
      • Reel2Green (Environmental pledges)
      • Reel2Care (Health wallet)
      • Aid4Reel (Social impact fund)
      • ReelRoodie (Education & skills)

  Each program card: icon, name, one-line tagline, "Learn More →" link or expandable panel
  
CRITICAL: Sub-brand names are FEATURES within pillars, not standalone brands.
Display them as feature cards inside their parent pillar, NOT as top-level navigation items.
A visitor should understand the pillar before encountering any sub-brand name.
```

### 5.4 FESTIVALS PAGE

**Purpose:** Drive event participation and registration.

```
1. HERO
   - Title: "Experience Culture Across 54 Nations"
   - Background: festival imagery collage

2. FILTER BAR (sticky below nav)
   - Filters: Country dropdown, Category (music/film/art/food/tech), Date range, Token eligibility toggle
   - Search input for festival name

3. FESTIVAL GRID
   - Card layout (3 columns desktop, 2 tablet, 1 mobile)
   - Festival card:
     - Cover image (16:9 aspect ratio)
     - Festival name
     - Date range
     - City, Country
     - Category badges (pills)
     - Token eligibility badge (if applicable)
     - "Register Interest" CTA button
     - "Share" icon button

4. FESTIVAL DETAIL PAGE (dynamic route: /festivals/[slug])
   - Hero: full-width festival cover image
   - Title, date, location
   - Description (rich text from CMS)
   - Program schedule (if available)
   - Speakers/performers (grid of cards)
   - Registration form (name, email, phone, country, citizen ID if applicable)
   - Share buttons
   - Related festivals (3 cards)
```

### 5.5 MARKETPLACE PAGE

**Purpose:** Primary revenue engine. Commerce hub.

```
1. MARKETPLACE NAV (tab bar below main nav)
   Tabs: All | Creative Products | Streaming | Funding | Tokens | Gift Cards

2. HERO BANNER
   - Rotating promotional banner (manual navigation dots, NOT autoplay)
   - Featured products, new vendor spotlights, seasonal campaigns

3. PRODUCT GRID
   - Responsive grid (4 col → 3 → 2 → 1)
   - Product card:
     - Image (1:1 aspect ratio)
     - Product name
     - Price in ₦ (Naira) — use ₦ symbol, format with commas: ₦25,000
     - Vendor name (linked to vendor profile)
     - Rating (stars, if available)
     - "Add to Cart" button
     - "Quick View" icon (opens modal)

4. SIDEBAR FILTERS (desktop) / BOTTOM SHEET FILTERS (mobile)
   - Category
   - Price range (slider)
   - Vendor
   - Rating
   - Token-purchasable items toggle
   - Sort: Popular, Newest, Price low-high, Price high-low

5. PRODUCT DETAIL PAGE (/marketplace/[slug])
   - Image gallery (main image + thumbnails)
   - Title, price, description
   - Vendor info card (name, rating, "Visit Store →")
   - Add to cart + quantity selector
   - Token payment toggle (if eligible)
   - Related products (4 cards)
   - Reviews section

6. CART & CHECKOUT
   - Slide-out cart panel (right side)
   - Cart items: image, name, price, quantity +/-, remove
   - Subtotal, delivery fee (if physical), total
   - "Proceed to Checkout" CTA
   - Checkout page:
     - Delivery info form (for physical products)
     - Payment method: Paystack (card, bank transfer, USSD) + Token wallet
     - Order summary
     - "Place Order" CTA
     - Confirmation page with order number
```

### 5.6 VENDOR SIGN-UP & DASHBOARD

**Purpose:** Onboard and manage the supply side.

```
VENDOR REGISTRATION FLOW (/vendor/register):
  Step 1: Basic info (name, email, phone, business name)
  Step 2: Business details (category, country, description)
  Step 3: Document upload (business registration, ID)
  Step 4: Bank/wallet setup (Paystack sub-account or Moniepoint details)
  Step 5: Review & submit
  
  - Use multi-step form with progress indicator (step dots at top)
  - Save progress between steps (don't lose data on back-navigation)
  - Email confirmation after submission
  - "Application Under Review" status page

VENDOR DASHBOARD (/vendor/dashboard — auth-gated):
  - Sidebar nav: Overview, Products, Orders, Analytics, Payouts, Settings
  - Overview: sales summary cards (today, this week, this month), recent orders, quick actions
  - Products: CRUD for product listings (add, edit, delete, toggle active/inactive)
  - Orders: order table with status filters (pending, processing, shipped, delivered)
  - Analytics: sales charts (line chart for revenue over time, bar chart for top products)
  - Payouts: payout history table, pending balance, "Request Payout" action
  - Settings: profile, bank info, notification preferences
```

### 5.7 JOIN / PARTICIPATE PAGE

**Purpose:** Central registration hub. Route users to the right onboarding flow.

```
4 PATHWAY CARDS (full page, each takes ~25vh):

1. BECOME A CULTURE CITIZEN
   - Who it's for: "Anyone who believes culture has economic value"
   - What you get: citizen ID, token wallet, marketplace access, festival perks, impact tracking
   - CTA: "Become a Citizen" → registration form
   - Registration: name, email, phone, country, interests (multi-select)

2. BECOME A CREATOR
   - Who it's for: "Musicians, filmmakers, artists, writers, influencers"
   - What you get: creator profile, funding access, streaming platform, festival showcase slots
   - CTA: "Apply as Creator" → application form
   - Application: name, email, portfolio link, creative discipline, country, bio

3. BECOME A VENDOR
   - Who it's for: "Brands, merchants, and cultural entrepreneurs"
   - What you get: marketplace storefront, vendor dashboard, pan-African distribution
   - CTA: "Register as Vendor" → links to vendor registration flow (/vendor/register)

4. INVEST / PARTNER
   - Who it's for: "Institutions, funds, corporate sponsors, development partners"
   - What you get: investor briefing, partnership tiers, creative capital fund access
   - CTA: "Request Briefing" → links to /invest

ALSO ON THIS PAGE:
  - Volunteer section: "Volunteer at Festivals" — simple interest form (name, email, country, skills)
  - Culture Envoy: "Become a Culture Envoy" — ambassador application (more detailed than citizen)
```

### 5.8 INVEST / PARTNER PAGE

**Purpose:** Institutional credibility + conversion to investor/partner inquiry.

```
1. HERO
   - Title: "Invest in Africa's Creative Economy"
   - Subline: Market size stat + growth narrative (institutional voice)
   - CTA: "Request Investor Briefing"

2. THE OPPORTUNITY
   - Key stats in metric cards:
     $1T addressable market | 500+ cultural tribes | 54 nations | 1.4B population
   - 2-3 paragraphs on the investment thesis

3. CAPITAL POOLS & FUNDS
   - Cards for each investment vehicle:
     Creative Ventures Fund | Festival Sponsorship | Token Economy Participation | Impact Fund
   - Each: description, target amount, expected outcomes, "Learn More" expander

4. PARTNERSHIP TIERS
   - Tier comparison table or cards:
     Community Partner | Corporate Sponsor | Strategic Partner | Institutional Investor
   - Each tier: investment range, benefits, branding, access

5. CONTACT FORM
   - Name, organization, email, phone
   - Interest type dropdown (Investment / Sponsorship / Partnership / Other)
   - Message textarea
   - "Submit Inquiry" CTA
```

### 5.9 RESOURCE & MEDIA HUB

**Purpose:** Official knowledge archive. Builds authority and serves media/researchers.

```
TAB NAVIGATION:
  ReelPulse TV | Press Releases | Whitepapers | Creator Toolkits | Festival Media

Each tab → filterable grid of resource cards:
  - Card: thumbnail, title, type badge, date, "View / Download" CTA
  - Types: video, PDF, article, toolkit, photo album
  - Filters: type, date, topic

VIDEO SECTION (ReelPulse TV):
  - Embedded video grid (YouTube/Vimeo embeds or self-hosted via Cloudinary)
  - Video card: thumbnail with play icon overlay, title, duration, date

WHITEPAPERS:
  - PDF download cards with abstract preview
  - Gate behind email capture for investor-grade documents (optional)
```

### 5.10 IMPACT DASHBOARD

**Purpose:** Transparency and trust through real-time ecosystem metrics.

```
LAYOUT: Full-width dashboard page, public (no auth required)

1. HEADLINE METRICS (6 stat cards in grid)
   - Culture Citizens Activated: [count]
   - Marketplace Transactions: ₦[amount]
   - Tokens Circulated: [count]
   - Creative Ventures Funded: [count]
   - Festival Participation: [count]
   - Trees Pledged: [count]
   - Health Wallet Activations: [count]

2. CHARTS
   - Line chart: monthly growth of citizens over time
   - Bar chart: transactions by country/region
   - Donut chart: ecosystem breakdown by pillar

3. ADMIN UPDATE PANEL (auth-gated, admin role only)
   - Form to manually update metrics
   - Eventually replace with real-time database queries

Implementation: Use Recharts or Chart.js for charts.
Data: Start with static JSON, migrate to Supabase queries.
```

### 5.11 NEWS & ANNOUNCEMENTS

**Purpose:** Keep ecosystem informed. CMS-driven.

```
- Blog listing page: card grid with featured post at top (hero card, larger)
- Post card: image, title, excerpt, date, category badge, "Read More →"
- Categories: Festival Updates, Token News, Creator Spotlights, Investment, Impact
- Single post page: hero image, title, date, author, rich text body, share buttons, related posts
- Newsletter CTA at bottom of every post
- CMS: Sanity.io with structured content types
```

### 5.12 CONTACT PAGE

```
- Title: "Get in Touch"
- 4 contact pathways as cards:
  General Inquiry | Media & Press | Partnership | Creator Support
- Each opens a form with pre-selected inquiry type
- Form: name, email, inquiry type (pre-filled), message
- Location info (if applicable)
- Social links
```

### 5.13 LEGAL PAGES

```
Static content pages (CMS-managed or MDX):
- Privacy Policy
- Terms & Conditions
- Token Participation Disclaimer
- IP Protection Notice
All: clean typography, table of contents sidebar (sticky on desktop), last updated date
```

---

## 6. COMPONENT LIBRARY

Build these reusable components FIRST before assembling pages.

### 6.1 Primitives (src/components/ui/)

```
Button          — variants: primary (gold), secondary (green), ghost, danger, disabled
                  sizes: sm, md, lg
                  states: default, hover, active, loading (spinner), disabled

Input           — variants: text, email, phone, password, search
                  states: default, focus, error, disabled
                  with label, helper text, error message slots

Select          — custom dropdown (not native browser)
                  with search/filter for long lists (country selector)

Textarea        — auto-grow, character count option

Checkbox        — custom styled, with label

Radio           — custom styled, group component

Toggle          — on/off switch with label

Badge           — variants: default, success, warning, danger, info
                  sizes: sm, md
                  used for: category tags, status indicators, token eligibility

Card            — variants: default, elevated (shadow), featured (gold border)
                  slots: image, header, body, footer, actions

Modal           — center or slide-from-right variants
                  with backdrop, close button, trap focus

Accordion       — single or multi-expand modes
                  with smooth height animation

Tabs            — horizontal tab bar component
                  variants: underline, pill

Tooltip         — hover or click trigger, auto-position

Avatar          — image or initials fallback
                  sizes: sm (32px), md (40px), lg (56px), xl (80px)

Skeleton        — loading placeholder for: text lines, cards, images, stat cards

Counter         — animated count-up number component (for impact dashboard)
                  props: target number, duration, prefix (₦), suffix (+), decimals
```

### 6.2 Layout Components (src/components/layout/)

```
Header          — logo, nav items, mobile hamburger, CTA button, auth state (login/avatar)
Footer          — 4-column link grid, newsletter, social, copyright
Container       — max-width wrapper with fluid padding
Section         — vertical padding wrapper with optional background color prop
MobileMenu      — full-screen overlay nav
Breadcrumbs     — for deep pages (marketplace product, festival detail)
```

### 6.3 Section Components (src/components/sections/)

```
HeroSection       — full-viewport hero with bg image/video, headline, subline, CTAs
EcosystemGrid     — 6 pillar cards in responsive grid
FestivalCarousel  — horizontal scroll of festival cards
ProductGrid       — responsive grid of product cards with filters
ImpactCounters    — stat counters strip (dark bg variant)
SpotlightStrip    — creator/vendor spotlight cards
CTABlock          — full-width CTA section with headline + buttons
PathwayCards      — 4 user-type cards (citizen, creator, vendor, investor)
TestimonialSlider — manual slide of quotes (future — when social proof exists)
```

### 6.4 Commerce Components (src/components/commerce/)

```
ProductCard      — image, title, price, vendor, rating, add-to-cart
CartPanel        — slide-out cart overlay
CartItem         — line item in cart
CheckoutForm     — multi-step checkout
PaymentSelector  — Paystack / token wallet toggle
OrderSummary     — totals, fees, discount codes
VendorCard       — vendor info mini-card (for product pages)
VendorForm       — multi-step vendor registration form
```

### 6.5 Dashboard Components (src/components/dashboard/)

```
DashboardShell   — sidebar nav + content area layout
StatsCard        — metric card (label + number + trend indicator)
DataTable        — sortable, filterable table (for orders, products, payouts)
ChartWrapper     — responsive chart container (Recharts)
ActivityFeed     — timeline of recent actions
```

---

## 7. BUILD PHASES

### Phase 1 — Foundation + Revenue Pages (Week 1-3)

```
MUST COMPLETE:
□ Project setup (Next.js, Tailwind, TypeScript, folder structure)
□ Design tokens in Tailwind config (all colors, typography, spacing from Section 2)
□ Font loading (Clash Display + Plus Jakarta Sans)
□ All UI primitives (Button, Input, Card, Badge, Modal, etc.)
□ Layout components (Header, Footer, MobileMenu, Container, Section)
□ Homepage — all 8 sections
□ Marketplace — product grid, filters, product detail page
□ Vendor registration — multi-step form
□ Join/Participate page — 4 pathway cards + forms
□ Cart & checkout flow (Paystack integration)
□ Basic auth (NextAuth or Clerk — email + password)
□ Responsive across all breakpoints
```

### Phase 2 — Content + Community Pages (Week 3-5)

```
□ About page — all sections + interactive ecosystem cycle diagram
□ Ecosystem explorer — 6 pillars with program cards
□ Festivals page — listing + detail + registration form
□ Impact dashboard — stat cards + charts (static data first)
□ Invest/Partner page
□ Contact page
□ CMS setup (Sanity) — festivals, news, creator spotlights content types
□ News/blog listing + single post page
□ Vendor dashboard — overview, products CRUD, orders
```

### Phase 3 — Polish + Advanced Features (Week 5-7)

```
□ Resource & Media Hub
□ Token wallet UI (can be simulated/mockup initially if backend not ready)
□ Impact dashboard with live data connection
□ Vendor analytics charts
□ Search (Algolia) for marketplace
□ Email transactional flows (registration confirmation, order receipt, etc.)
□ SEO: meta tags, OG images, structured data, sitemap
□ Performance optimization: image lazy loading, code splitting, lighthouse audit
□ Accessibility audit: keyboard nav, screen reader, color contrast (WCAG AA min)
□ Legal pages
□ 404 and error pages (branded)
□ Loading states and skeleton screens for all data-fetching pages
```

---

## 8. CRITICAL RULES — DO NOT VIOLATE

```
1. CREAM NOT WHITE — Page background is always --rp-cream (#FAF7F2), never #FFFFFF
2. WARM NOT COLD — All grays are warm-tinted. Never use pure gray (#808080) or blue-gray
3. GOLD FOR ACTION — Primary CTAs are always gold. Never use green or red for primary CTAs
4. SUB-BRANDS ARE FEATURES — Never show sub-brand names (Shop4Reel, ReelBuddie, etc.) 
   in top-level navigation or homepage hero. They exist inside their pillar on the Ecosystem page
5. NAIRA FIRST — All prices display in ₦ (Nigerian Naira) by default. 
   Use the ₦ symbol, not "NGN". Format: ₦25,000
6. MOBILE FIRST — Design and build mobile layout first, enhance for tablet/desktop.
   Over 70% of African internet users are mobile-only.
7. MANIFESTO THEN PLATFORM — Homepage hero is movement energy. Below the fold is platform utility.
   Never mix manifesto copy into UI labels or CTA buttons.
8. NO AUTOPLAY — No auto-playing carousels, videos, or animations. 
   All media is user-initiated. Background video in hero is acceptable (muted, decorative).
9. NO STOCK PHOTOS — Use real photography of African people, places, events. 
   When unavailable, use geometric patterns in brand colors, never AI-generated people.
10. PROGRESSIVE DISCLOSURE — A new visitor should understand what ReelPepper is in 10 seconds.
    They should find their participation pathway in 30 seconds.
    Sub-brands, token economics, and detailed ecosystem mechanics are for the SECOND visit.
11. NO PURPLE, NO NEON — The palette is warm earth tones. No electric blue, no purple gradients,
    no neon green. If it looks like a Web3/crypto site, you've gone wrong.
12. SKELETON OVER SPINNER — Use skeleton loading states for all async data. 
    Never show a spinner for more than 2 seconds.
13. COUNT-UP ON SCROLL — All numeric stats (impact counters, marketplace stats) animate 
    from 0 to target when scrolling into viewport. Once. Not on every scroll.
14. ACCESSIBILITY BASELINE — All interactive elements keyboard-accessible. 
    All images have alt text. Color contrast WCAG AA minimum. 
    Focus rings visible on all focusable elements.
15. CTA HIERARCHY — Maximum 2 CTAs per visible screen area. One primary (gold), one secondary (green/ghost).
    Never show 4+ CTAs competing for attention in the same viewport.
```

---

## 9. CONTENT PLACEHOLDERS

Until real content is available, use these placeholder patterns:

```
HERO HEADLINE:     "Culture as Capital. Entertainment as Infrastructure."
HERO SUBLINE:      "Join 12,400+ Culture Citizens building Africa's creative economy."
STAT NUMBERS:      Citizens: 12,400 | Transactions: ₦84,000,000 | Tokens: 340,000
                   Ventures: 127 | Festivals: 23 | Trees: 8,500
FESTIVAL NAMES:    ReelKulture Lagos | ReelRhyde Abuja | Krea84Reel Port Harcourt
                   ArtBuddie Accra | FlixnFlex Nairobi
PRODUCT NAMES:     Use realistic African creative product names —
                   "Ankara Print Wall Art" ₦15,000
                   "Afrobeats Production Kit" ₦45,000
                   "Lagos Street Photography Print" ₦8,500
                   "Handwoven Kente Tote Bag" ₦22,000
VENDOR NAMES:      "Iya Oge Designs" | "Naija Canvas Studio" | "Afro Sonic Labs"
CREATOR NAMES:     Use realistic Nigerian/African names, not Western names
```

---

## 10. SEO & PERFORMANCE TARGETS

```
LIGHTHOUSE TARGETS:
  Performance: ≥90
  Accessibility: ≥95
  Best Practices: ≥90
  SEO: ≥95

CORE WEB VITALS:
  LCP: < 2.5s
  FID: < 100ms
  CLS: < 0.1

PAGE WEIGHT:
  Homepage: < 800KB initial load (excluding images)
  Marketplace: < 600KB (products load via ISR/pagination)

SEO REQUIREMENTS:
  - Unique <title> and <meta description> for every page
  - Open Graph + Twitter Card meta for all public pages
  - Dynamic OG images for festival and product pages (via Vercel OG)
  - JSON-LD structured data for: Organization, Product, Event
  - Sitemap.xml (auto-generated from Next.js)
  - robots.txt
  - Canonical URLs on all pages
  - Breadcrumb markup for deep pages
```

---

**END OF INSTRUCTIONS**

When building, start with Phase 1. Read this document in full before writing any code.
When making design decisions not covered here, default to: warm, clean, African, premium, mobile-first.
When in doubt about a sub-brand name's placement, hide it deeper. The ecosystem is discovered, not dumped.
