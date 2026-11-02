/**
 * Central Route Configuration for Jobify
 */

export const NAV_LINKS = [
  { label: "Features", href: "/#how-it-works", isAnchor: true, targetId: "how-it-works" },
  { label: "Categories", href: "/#categories", isAnchor: true, targetId: "categories" },
  { label: "Pricing", href: "/#pricing", isAnchor: true, targetId: "pricing" },
  { label: "FAQ", href: "/#faq", isAnchor: true, targetId: "faq" },
  { label: "Contact", href: "/#contact", isAnchor: true, targetId: "contact" },
];

export const STUB_ROUTES = [
  {
    path: "/signup",
    title: "Create Your Jobify Account",
    description: "Start organizing your job search and tracking applications in one place.",
  },
  {
    path: "/login",
    title: "Sign In to Jobify",
    description: "Access your saved roles, application statuses, and interview calendar.",
  },
  {
    path: "/about",
    title: "About Jobify",
    description: "Empowering career transitions and simplifying employment discovery.",
  },
  {
    path: "/blog",
    title: "Career & Search Insights",
    description: "Actionable guidance on resumes, interview preparation, and application workflows.",
  },
  {
    path: "/terms",
    title: "Terms & Privacy Policy",
    description: "Information regarding our commitment to privacy and data protection.",
  },
];
