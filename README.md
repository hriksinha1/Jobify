# Jobify — Job Search & Application Management

A premium, modern, accessible SaaS landing page for **Jobify**, engineered in React 19, Vite 8, and Tailwind CSS following the exact 11-section information architecture of the Aarivi design reference.

## Product Identity

Jobify is a focused job search and application management platform designed to help seekers organize their applications, manage interview milestones, track recruiter communications, and discover opportunities across tech, design, engineering, and remote roles.

## Section Order & Architecture

The landing page follows this exact sequence:

1. **Header & Navigation:** Minimalist sticky header with brand logo, nav links (`#how-it-works`, `#categories`, `#pricing`, `#faq`, `#contact`), Sign In, and Get Started CTA.
2. **Hero & Product Demonstration:** Large bold headline ("Your job search, all in one place"), supporting description, dual CTAs, subtle halftone flank patterns, and a rich, realistic Jobify application tracking workspace preview with demo records and verified company indicators.
3. **Explore Job Categories:** Interactive category chips (AI Engineer, Frontend, Backend, Product Designer, Internships, Remote Jobs, etc.) with role count feedback.
4. **How Jobify Works:** Interactive 4-capability workflow engine (`Search`, `Track`, `Prepare`, `Stay Organized`) with live UI demonstrations for each stage.
5. **Everything You Need (Also Included):** 2×2 feature grid with compact product demonstrations for Application Tracking, Smart Job Discovery, Resume Management, and Milestone Follow-Ups.
6. **Pricing Plans:** Simple transparent pricing with a monthly/annual billing switch (Save 20%), detailed feature comparisons for Free and Pro plans, and development disclaimers.
7. **Customer Testimonials:** Compact customer review cards highlighting genuine use-cases from university graduates, interns, and early career seekers.
8. **Frequently Asked Questions (FAQ):** Accessible two-column layout with expandable, single-open accordions answering top candidate questions.
9. **Get in Touch / Contact Form:** Two-column contact section with direct support email, business hour details, and a validated contact form.
10. **Final Conversion CTA:** Centered conversion panel with generous whitespace and "Get Started" prompt.
11. **Footer:** Four organized link columns (`PRODUCT`, `COMPANY`, `ACCOUNT`, `LEGAL`), brand summary, and copyright notice.

## Tech Stack

- **Framework:** React 19 + Vite 8
- **Routing:** React Router DOM (with hash scroll management and stub pages)
- **Styling:** Tailwind CSS 4 + custom CSS design tokens
- **Typography:** Bricolage Grotesque (Display) + DM Sans (Body/UI)
- **Icons:** Lucide React
- **Animations:** Motion + CSS micro-interactions

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build production bundle
npm run build
```
