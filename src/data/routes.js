/**
 * Central Route Configuration for Xelofia
 * All navigatable routes are registered here to prevent dead links.
 */

export const NAV_LINKS = [
  { label: "Home", href: "/", isAnchor: true, targetId: "top" },
  { label: "Features", href: "/#features", isAnchor: true, targetId: "features" },
  { label: "Use Cases", href: "/#use-cases", isAnchor: true, targetId: "use-cases" },
  { label: "Integrations", href: "/#get-started", isAnchor: true, targetId: "get-started" },
  { label: "Pricing", href: "/pricing", isAnchor: false },
];

export const STUB_ROUTES = [
  {
    path: "/pricing",
    title: "Pricing",
    description: "Explore flexible plans designed to scale with your team and automation needs.",
  },
  {
    path: "/pricing/single",
    title: "Pricing Details",
    description: "Detailed tier breakdown and enterprise volume licensing information.",
  },
  {
    path: "/about",
    title: "About Xelofia",
    description: "Learn about our mission to liberate teams from repetitive operations.",
  },
  {
    path: "/blog",
    title: "Blog & Insights",
    description: "The latest perspectives on artificial intelligence, workflow engineering, and productivity.",
  },
  {
    path: "/blog/sample-post",
    title: "Engineering Autonomous Workflows",
    description: "Deep dive into reactive agent patterns and multi-service event orchestration.",
  },
  {
    path: "/signup",
    title: "Get Started with Xelofia",
    description: "Create your workspace account and experience 14 days of free access.",
  },
  {
    path: "/login",
    title: "Sign In",
    description: "Access your Xelofia workspace dashboard and active automated pipelines.",
  },
  {
    path: "/forgot-password",
    title: "Reset Password",
    description: "Recover access to your Xelofia credentials and organization profile.",
  },
  {
    path: "/early-access",
    title: "Early Access Program",
    description: "Preview upcoming autonomous agents, live voice hooks, and custom triggers.",
  },
  {
    path: "/terms",
    title: "Terms & Conditions",
    description: "Standard terms of service, governance policies, and customer service agreements.",
  },
  {
    path: "/cookie-policy",
    title: "Cookie Policy",
    description: "Information regarding cookie utilization, telemetry restrictions, and preferences.",
  },
  {
    path: "/style-guide",
    title: "Design System & Style Guide",
    description: "Design tokens, typography specifications, and component tokens for Xelofia.",
  },
  {
    path: "/password-protected",
    title: "Protected Resource",
    description: "This environment requires authenticated organizational clearance.",
  },
  {
    path: "/license",
    title: "Software License",
    description: "Software terms, usage grants, and third-party dependency disclosures.",
  },
  {
    path: "/changelog",
    title: "Platform Changelog",
    description: "Track all recent updates, features, improvements, and system optimizations.",
  },
  // Feature detail stubs
  {
    path: "/features/workflow-automation",
    title: "Workflow Automation",
    description: "Eliminate repetitive tasks and let intelligent automation handle daily operations.",
  },
  {
    path: "/features/smart-analytics",
    title: "Smart Analytics",
    description: "Real-time visibility, automated telemetry, and predictive revenue attribution.",
  },
  // Use cases detail stubs
  {
    path: "/use-cases/customer-support",
    title: "Customer Support Automation",
    description: "Resolve tickets faster with context-aware triage, smart tagging, and automated resolutions.",
  },
  {
    path: "/use-cases/marketing-automation",
    title: "Marketing Automation",
    description: "Set up your automation in minutes and let AI handle multi-channel execution effortlessly.",
  },
  {
    path: "/use-cases/sales-workflow",
    title: "Sales Workflow Automation",
    description: "Enrich incoming leads, qualify high-intent accounts, and automate CRM sync instantaneously.",
  },
  {
    path: "/use-cases/data-reporting",
    title: "Data & Reporting Automation",
    description: "Automate cross-platform data synchronization, reconciliation, and weekly executive summaries.",
  },
];
