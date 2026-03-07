# Kelley's Auto Glass — Website Documentation

**Version:** 1.5.0  
**Last Updated:** March 2026  
**Maintained by:** Milo (Carlos Crespo)  
**Live Site:** [kelleysautoglass.com](https://kelleysautoglass.com)  
**Repository:** [github.com/Crespo1301/KelleysAG](https://github.com/Crespo1301/KelleysAG)

---

## Company Overview

| Field | Detail |
|---|---|
| **Business Name** | Kelley's Auto Glass LLC |
| **Owner** | Kelley |
| **Phone** | (415) 619-9393 |
| **Email** | kelleysautoglassllc@gmail.com |
| **Service Region** | San Francisco Bay Area |
| **Business Type** | Owner-operated mobile auto glass service |
| **Entity** | LLC |

### Service Areas

San Francisco, Daly City, South San Francisco, San Bruno, Pacifica, Half Moon Bay, San Mateo, Foster City, Redwood City, Tiburon, San Rafael, Marin

### Services Offered

- Windshield Replacement (all makes and models, OEM-quality glass)
- Chip and Crack Repair (resin injection, 30-minute service)
- Side and Rear Window Replacement (door glass, quarter windows, vent glass)
- Mobile Service (on-site at home or office)

---

## Brand Identity

### Logo

The Kelley's Auto Glass logo features a bold, script-style wordmark set against a stylized windshield graphic. The design conveys speed, professionalism, and a polished local-business aesthetic.

**File:** `logo.png`  
**Usage:** Navigation bar on all pages. Display at 50px height minimum. Always maintain aspect ratio. Do not place on backgrounds that conflict with the black and white outlines.

### Color Palette

| Name | Hex | Usage |
|---|---|---|
| **Brand Orange** | `#f97316` | Primary CTAs, accents, trust bar, highlights |
| **Orange Dark** | `#ea6c0a` | Hover states on orange elements |
| **Orange Light** | `#fff7ed` | Icon backgrounds, tag backgrounds |
| **Black** | `#111111` | Navigation, hero background, dark sections |
| **Charcoal** | `#1e1e1e` | Footer background |
| **White** | `#ffffff` | Page background, card surfaces, text on dark |
| **Gray** | `#f5f5f5` | Alternating section backgrounds |
| **Text** | `#1e1e1e` | Body copy |
| **Muted** | `#6b7280` | Secondary copy, captions |

All color values are defined as CSS custom properties in the `:root` block at the top of each page's `<style>` tag, making sitewide color changes a single-line update.

### Typography

| Role | Font | Weight |
|---|---|---|
| **Headings** | Lora (Google Fonts, serif) | 400, 600 |
| **Body / UI** | Nunito (Google Fonts, sans-serif) | 400, 600, 700, 800 |

Both fonts are loaded from Google Fonts via a single `<link>` tag in each page's `<head>`. No self-hosting is required.

### Brand Voice

Kelley's Auto Glass communicates with warmth, confidence, and zero pretension. The tone is that of a knowledgeable friend rather than a corporate service provider. Key principles:

- **Direct** — say what needs to be said in as few words as possible
- **Honest** — no upsells, no jargon, no runaround
- **Reassuring** — customers are often stressed; the copy acknowledges that and provides calm clarity
- **Local** — always reference the Bay Area, specific cities, and the owner-operated nature of the business

---

## Site Structure

```
KelleysAG/
├── index.html          Homepage
├── services.html       Services detail page
├── portfolio.html      Work gallery and customer reviews
├── about.html          Brand story and values
├── contact.html        Quote request form and contact info
├── logo.png            Brand logo (navbar)
├── favicon.svg         Browser tab icon (derived from logo)
└── images/             Photo assets (see Image Guide below)
    ├── hero-bg.jpg     Hero section background photo
    ├── owner.jpg       Owner portrait (homepage and about page)
    ├── job-01.jpg      Portfolio card 1 (Honda Accord)
    ├── job-02.jpg      Portfolio card 2 (Toyota Camry)
    ├── job-03.jpg      Portfolio card 3 (Ford F-150)
    ├── job-04.jpg      Portfolio card 4 (Chevrolet Silverado)
    ├── job-05.jpg      Portfolio card 5 (Tesla Model 3)
    └── job-06.jpg      Portfolio card 6 (BMW 3 Series)
```

---

## Image Guide

All images live in the `images/` folder. The site is built to load each photo automatically once the file is placed in that folder with the correct filename. No code changes are needed for standard image updates.

### Hero Background (`images/hero-bg.jpg`)

The full-width photo behind the homepage headline. A dark overlay (`rgba(0,0,0,0.58)`) is applied automatically so text remains legible regardless of image brightness.

| Spec | Recommendation |
|---|---|
| Dimensions | 1920 x 1080px minimum |
| Orientation | Landscape |
| Subject | Tech working on a windshield, branded van exterior, or glass installation in progress |
| Format | JPEG, compressed to under 400KB for fast load |

### Owner Portrait (`images/owner.jpg`)

Used on the homepage "Why Choose Us" panel and the About page. Displayed as a full-bleed card with a gradient overlay at the bottom for the name caption.

| Spec | Recommendation |
|---|---|
| Dimensions | 800 x 900px minimum |
| Orientation | Portrait or square |
| Subject | Kelley, good natural light, ideally near a vehicle or at a job site |
| Format | JPEG, compressed to under 200KB |

### Portfolio Job Photos (`images/job-01.jpg` through `job-06.jpg`)

Each portfolio card on the Portfolio page loads its photo via a CSS class. Update each card independently by replacing the corresponding file.

| File | Card |
|---|---|
| `job-01.jpg` | 2021 Honda Accord — Windshield Replacement |
| `job-02.jpg` | 2019 Toyota Camry — Chip Repair |
| `job-03.jpg` | 2020 Ford F-150 — Side Window |
| `job-04.jpg` | 2022 Chevrolet Silverado — Mobile Service |
| `job-05.jpg` | 2023 Tesla Model 3 — Windshield Replacement |
| `job-06.jpg` | 2018 BMW 3 Series — Rear Windshield |

| Spec | Recommendation |
|---|---|
| Dimensions | 800 x 500px minimum |
| Orientation | Landscape |
| Subject | Close-up of finished glass work, or vehicle with completed job visible |
| Format | JPEG, compressed to under 150KB each |

---

## Hosting and Deployment

| Component | Provider |
|---|---|
| **Hosting** | Netlify (free tier, auto-deploy from GitHub) |
| **Domain Registrar** | Porkbun |
| **Domain** | kelleysautoglass.com |
| **SSL** | Netlify auto-provisioned (Let's Encrypt) |

### Deployment Workflow

Every push to the `main` branch on GitHub triggers an automatic redeploy on Netlify. There is no build step — the site is plain HTML and deploys as-is.

```
Edit files locally
      ↓
git add .
git commit -m "describe the change"
git push origin main
      ↓
Netlify auto-deploys within 30 seconds
```

### DNS Configuration (Porkbun)

| Record | Type | Value |
|---|---|---|
| `@` (root) | ALIAS | Netlify deployment URL |
| `www` | CNAME | Netlify deployment URL |
| MX, SPF, TXT | (untouched) | Handles Gmail routing |

---

## Contact Form Setup (Formspree)

The quote request form on `contact.html` uses [Formspree](https://formspree.io) to route submissions to `kelleysautoglassllc@gmail.com`.

**Current status:** Pending activation. The form action contains a placeholder (`YOUR_FORMSPREE_ID`) that must be replaced before the form goes live.

### Activation Steps

1. Go to [formspree.io](https://formspree.io) and create a free account using the business Gmail
2. Create a new form and connect it to `kelleysautoglassllc@gmail.com`
3. Copy the form ID (looks like `xpwzgkrj`)
4. Open `contact.html` and find this line:

```html
<form id="quoteForm" action="https://formspree.io/f/YOUR_FORMSPREE_ID" method="POST">
```

5. Replace `YOUR_FORMSPREE_ID` with the actual ID:

```html
<form id="quoteForm" action="https://formspree.io/f/xpwzgkrj" method="POST">
```

6. Also delete the yellow setup notice block (the `<div id="setupNotice">` element)
7. Push to GitHub — Netlify deploys automatically

---

## Pending Content

The following items are still needed from the client and will be added as they are received.

| Item | Used On | Status |
|---|---|---|
| Hero background photo | Homepage hero | Pending |
| Owner portrait | Homepage, About | Pending |
| Job photos (6 total) | Portfolio cards | Pending |
| Real customer reviews (3+) | Portfolio page | Pending |
| Formspree ID | Contact form | Pending |
| Business hours confirmation | Contact page | Assumed Mon-Sat 8am-6pm |
| Years in business | About page | Pending |
| Certifications or credentials | About page | Pending |
| Google Business Profile | SEO, reviews | Pending setup |

---

## How to Make Common Updates

All edits are made directly in the HTML files. Open the file in any text editor (Notepad, TextEdit, VS Code), make the change, save, and push to GitHub.

### Update a phone number

Search for `4156199393` across all files and replace every instance.

### Update the email address

Search for `kelleysautoglassllc@gmail.com` across all files and replace every instance.

### Add a customer review

Open `portfolio.html`. Find the commented-out review template block and uncomment it, then fill in the customer quote, first name initial, and service type.

### Swap a portfolio photo

Drop the new photo into the `images/` folder using the exact filename listed in the Image Guide above (e.g. `job-01.jpg`). The site picks it up automatically.

### Change the hero photo

Drop the new photo into `images/` named `hero-bg.jpg`. The site picks it up automatically.

### Add a new service area city

Open `index.html`. Find the `<div class="areas-grid">` block and add:

```html
<span class="area-pill">City Name</span>
```

---

## SEO Notes

Each page has a unique `<title>` tag. Meta descriptions have not yet been added and are a recommended next step for improved search visibility. Google Business Profile setup is also pending and will significantly impact local search rankings for queries like "auto glass repair near me" in the service area cities.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Markup | HTML5 |
| Styling | CSS3 (custom properties, grid, flexbox) |
| Fonts | Google Fonts (Lora, Nunito) |
| Icons | Inline SVG (no external dependency) |
| Form handling | Formspree |
| Hosting | Netlify |
| Version control | Git / GitHub |
| Domain | Porkbun |

No JavaScript frameworks, no build tools, no npm. The entire site is plain HTML and CSS, making it easy for a non-technical owner to understand and maintain with guidance.
