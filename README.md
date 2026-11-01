# Xelofia - AI Automation Platform

A high-fidelity, accessible, responsive landing page for **Xelofia**, engineered in React, Vite, and Tailwind CSS following strict design-system token specifications.

## Features

- **Typography:** Editorial pairing of **Bricolage Grotesque** (display titles, statistics, wordmarks) and **DM Sans** (body, buttons, UI controls).
- **Design Tokens:** Meticulously mapped CSS custom properties (`--bg`, `--surface`, `--ink`, `--accent-green`, `--sage-ring`, `--chart-orange`, `--chart-blue`) and fluid typography clamps.
- **Section 01 (Navbar):** Responsive sticky header with backdrop blur, 3x3 signature X-glyph logo, scrollspy tracking, and accessible mobile sheet drawer.
- **Section 02 (Hero):** Misty hills panorama with top/bottom gradient masks, high-contrast monochrome portrait cutout, interactive left notification cards (with functional toggle), and right Predictive AI Revenue dashboard with 3-ring concentric SVG donut chart.
- **Section 03 (Powerful Features):** Responsive carousel featuring Card 1 (Automation AI node with dashed SVG connectors & resolution metrics) and Card 2 (5-year Net Revenue stacked area chart & 92% callout).
- **Section 04 (Why Choose Us):** Full-bleed atmospheric ridge with 3 benefit items, active white card state, and wrap-around carousel controls.
- **Section 05 (Get Started in 3 Steps):** Accessible 3-row accordion paired with an interactive converging integration diagram connecting Slack, Microsoft Teams, HubSpot, Mailchimp, and Shopify into Xelofia.
- **Section 06 (Built for Every Team):** 4-card team grid with faint large numerals for standard cards and an expansive photographic marketing automation card.
- **Section 07 (FAQ & Support):** Animated category tabs (Product, Support, Payments) with sliding indicator, accessible question accordions, and support CTA card.
- **Section 08 (Footer):** Misty landscape continuation, newsletter subscription form with transparent connection handling, 4-column link directory, and copyright notice.

## Local Development

```bash
# 1. Install dependencies
npm install

# 2. Run local development server (port 3000)
npm run dev

# 3. Build production bundle
npm run build
```

## Photography & Asset Replacement

See [`src/assets/images/README.md`](src/assets/images/README.md) for detailed dimensions, WebP specifications, and image-generation prompts for all photography slots (`hero-landscape`, `hero-portrait`, `feature-automation-bg`, etc.).

Each image slot includes an automated CSS/SVG atmospheric gradient fallback so the application remains visually complete prior to substituting photography.

## Environment Variables

Defined in [`.env.example`](.env.example):
- `VITE_NEWSLETTER_ENDPOINT`: Webhook / API URL for newsletter submissions (e.g., Formspree, Mailchimp, Resend). If left empty, the UI informs the user that the subscription service is pending configuration.
- `VITE_SUPPORT_EMAIL`: Support contact email address for inquiries.

## Vercel Deployment

This project includes [`vercel.json`](vercel.json) pre-configured with Vite framework detection, SPA client rewrites, and asset cache headers.
Deploy by connecting your repository directly to Vercel or running `vercel --prod`.
