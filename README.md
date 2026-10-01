# Soul Space Infrastructure

> **Premier Civil Construction & Real Estate Developer in Coimbatore, Tamil Nadu**  
> *Masterpieces built on Principles of Quality, Time & Safety.*

An executive digital monograph and architectural portfolio for **Soul Space Infrastructure**, showcasing signature residential enclaves, commercial tech workspaces, and bespoke construction landmarks across Coimbatore.

---

## 🏛️ Overview

Soul Space Infrastructure is an established property development and civil engineering firm operating in Coimbatore, Tamil Nadu. With over 250,000 square feet developed and 10+ landmarks delivered, Soul Space integrates contemporary structural engineering with ancient Vastu and Manaiyadi Shastra principles.

This web application serves as the flagship digital portfolio for prospective homeowners, commercial investors, and architectural clients, providing rich interactive monographs, floor plan specifications, and immediate access to the sales desk.

---

## ✨ Key Features

- **Architectural Project Monographs**:
  - **Aurum Villas** — 33 exclusive luxury villas in Vilankurichi with private clubhouse and 100% Vastu compliance.
  - **ABV Arbor** — Stilt + 5 floors monolith residences near Race Course and Ramanathapuram.
  - **Dotcom Workspaces** — Column-free post-tensioned (PT) commercial IT suites in PN Palayam.
  - **Mystic Villas** — 80-20 sustainable plantation farmhouses near Isha Foundation and Siruvani.
  - **Uptown Residences** — Luxury duplex residences and penthouses.
- **Vasthu Shastra Science & Physics Module**:
  - Interactive directional mandala visualizer explaining solar orientation, magnetic alignment, and positive energy zoning across North, East, South, and West quadrants.
- **Infra Architectural Concierge**:
  - Lightweight, deterministic, high-poise concierge desk answering detailed client questions on typologies, square footage, materials, and booking contacts with sub-millisecond response time.
- **Interactive Geospatial Landmark Map**:
  - Vector map pinpointing active developments, connectivity routes (Avinashi Road, Airport, Tidel Park), and neighborhood infrastructure.
- **Materiality & Engineering Standards**:
  - Comprehensive breakdown of structural specifications: Fe 550D TMT steel, M25/M30 ready-mix concrete, post-tensioned slabs, UPVC fenestrations, and pressurized hydro-pneumatic water networks.
- **Commission & Feasibility Estimator**:
  - Interactive calculator for custom turnkey residential and commercial development projects.
- **Mobile-Engineered 60 FPS Performance**:
  - Completely hardware-composited animations, passive event listeners, zero scroll jank, and instantaneous interaction.

---

## 🛠️ Technology Stack

| Layer | Technologies |
| :--- | :--- |
| **Framework** | Next.js 15 (App Router, SSG & Static Export) |
| **Library** | React 19, TypeScript 5.9 |
| **Styling** | Tailwind CSS v4, PostCSS, tw-animate-css |
| **Motion** | Motion (`motion/react` v12), Lenis Smooth Scroll |
| **Icons & Media** | Lucide React |
| **Geospatial** | Leaflet & React-Leaflet |
| **Typography** | Cormorant Garamond (Editorial Serif), Plus Jakarta Sans (Clean Modern Sans) |
| **CI/CD & Deployment** | GitHub Actions (`.github/workflows/deploy.yml`), GitHub Pages, Vercel |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v20.x or higher
- **npm** v10.x or higher (or equivalent package manager)

### 1. Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/<your-username>/soul-space-infrastructure.git
cd soul-space-infrastructure
npm install
```

### 2. Development Server

Start the local development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### 3. Production Build

To compile and verify the standard production build:

```bash
npm run build
npm run start
```

### 4. Static Export Build (GitHub Pages / Static Hosting)

To generate static HTML/CSS/JS export in the `/out` directory:

```bash
# Windows (PowerShell)
$env:EXPORT_STATIC="true"; npm run build

# macOS / Linux (Bash)
EXPORT_STATIC=true npm run build
```

To preview the exported static website locally:

```bash
npx serve out
```

---

## 🌐 Zero-Config GitHub Pages Deployment

This repository includes an automated GitHub Actions workflow (`.github/workflows/deploy.yml`) configured for 1-click deployment.

### Enablement Instructions:

1. Push this repository to GitHub.
2. In your repository settings on GitHub, navigate to **Settings** > **Pages**.
3. Under **Build and deployment** > **Source**, select **GitHub Actions**.
4. Push any commit to `main` (or `master`), or trigger the workflow manually via the **Actions** tab.
5. GitHub Actions will automatically install dependencies, compile the static export, configure SPA route fallbacks via `public/404.html`, and publish the site.

---

## 📁 Project Structure

```
soul-space-infrastructure/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Automated GitHub Pages CI/CD workflow
├── app/
│   ├── about/                  # Company history, ethos & leadership
│   ├── projects/[id]/          # Dynamic project monograph routes
│   ├── globals.css             # Design tokens, typography & luxury palette
│   ├── layout.tsx              # Root HTML layout, font injection & metadata
│   ├── not-found.tsx           # Branded 404 error experience
│   ├── page.tsx                # Flagship homepage
│   ├── robots.ts               # Automated search engine robots.txt
│   └── sitemap.ts              # XML sitemap generator
├── components/                 # Reusable modular UI components
│   ├── BrandLogo.tsx           # Vector logo mark and typography
│   ├── Hero.tsx                # Hero section with smooth focal elements
│   ├── InfraChatbot.tsx        # Architectural concierge interface
│   ├── Materiality.tsx         # Engineering materials breakdown
│   ├── Navbar.tsx              # Adaptive navigation bar & mobile drawer
│   ├── SelectedWorks.tsx       # Curated project gallery
│   ├── VasthuScience.tsx       # Vastu directional mandala guide
│   └── WhatsAppConcierge.tsx   # Direct sales concierge badge
├── data/
│   └── projects.ts             # Complete project specs, areas, amenities
├── lib/
│   ├── infraEngine.ts          # Deterministic client-side concierge engine
│   ├── infraKnowledge.ts       # Architecture knowledge base
│   └── slots.ts                # Dynamic picture slot system
├── public/
│   ├── 404.html                # SPA route fallback for GitHub Pages
│   ├── brand/                  # Vector insignia & logo assets
│   ├── site.webmanifest        # PWA web manifest
│   └── favicon.ico             # Browser favicon
├── next.config.ts              # Next.js configuration with static export support
├── vite.config.ts              # Vite configuration for relative base path resolution
├── package.json                # Project dependencies and scripts
└── tsconfig.json               # TypeScript compiler configuration
```

---

## 🎨 Design System & Palette

| Token | Hex | Role |
| :--- | :--- | :--- |
| **Warm Sand Background** | `#FAF7F2` | Primary canvas background |
| **Architectural Charcoal** | `#1D1814` | Deep primary typography & headers |
| **Bronze Accent** | `#B8936D` | Editorial highlights & badges |
| **Border Neutral** | `#E5DFD7` | Subtle architectural dividing lines |
| **Muted Editorial** | `#7A7061` | Body copy and secondary descriptions |

---

## 📄 License & Ownership

© 2016–2026 **Soul Space Infrastructure**. All rights reserved.  
Registered Office: No 5/2, Hindustan Avenue, Nava India Road, Sowripalayam Post, Coimbatore - 641028, Tamil Nadu, India.
