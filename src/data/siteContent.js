/**
 * Site content and copy for Xelofia
 * All textual content is centralized here per system guidelines.
 */

export const SUPPORT_EMAIL = "support@xelofia.com"; // TODO: Update with client's production contact email

export const SHOW_EXTENSION_SLIDES = true;

export const SITE_CONTENT = {
  brand: {
    name: "Xelofia",
    tagline: "AI Automation Platform",
    navCta: "Get Started",
  },

  hero: {
    headlineLine1: "Amplify Your Productivity",
    headlineLine2: "Automate Your Work",
    description:
      "Smart AI tools that automate repetitive tasks, streamline workflows, and cut manual effort, so you can focus on what matters most.",
    cta: "Get 14 days free trial",
    ctaHref: "/signup",
    notifications: [
      {
        id: "lead",
        title: "New lead in Xelofia",
        type: "lead",
        toggleInitial: true,
      },
      {
        id: "score",
        title: "The score is greater than 50",
        type: "score",
        avatar: "avatar-1",
        dotColor: "#F5820D",
      },
      {
        id: "notify",
        title: "Notify sales team",
        type: "action",
        chip: "Filters",
      },
    ],
    dashboard: {
      title: "Predictive AI Revenue",
      filterLabel: "Filters",
      totalRevenue: "$ 149k",
      metrics: [
        { label: "Interactions", value: "$30k", color: "#B8BDB5" },
        { label: "Proposal", value: "$46k", color: "#F5820D" },
        { label: "Qualification", value: "$60k", color: "#5B7BD5" },
      ],
      chartAriaLabel: "Illustrative product UI: predicted revenue 149 thousand dollars with breakdown across interactions, proposal, and qualification.",
    },
  },

  features: {
    title: "Powerful Features That Work for You",
    description: "Powerful automation designed to simplify your workflow and maximize efficiency.",
    items: [
      {
        id: "workflow-automation",
        panelType: "workflow",
        panelHeader: "Automation",
        badge: {
          title: "Automation AI",
          author: "By Xelofia - latest update 18 May",
          growth: "+8.4% in 5 Days",
        },
        stats: [
          { label: "Self-Service Resolutions", value: "1,200" },
          { label: "Revenue Attributed", value: "$21,191" },
        ],
        title: "Workflow Automation",
        description:
          "Eliminate repetitive tasks and let intelligent automation handle your daily operations, so your team can focus on high-value work.",
        linkText: "Learn More",
        href: "/features/workflow-automation",
        imageKey: "feature-automation-bg",
        extension: false,
      },
      {
        id: "smart-analytics",
        panelType: "analytics",
        panelHeader: "Analytics",
        chartBadge: "92%",
        chartBadgeLabel: "Net Revenue",
        chartLegend: [
          { name: "Xelofia", color: "#6F8F66" },
          { name: "Other Companies", color: "#B8BDB5" },
          { name: "Other Companies", color: "#D1D6CE" },
        ],
        title: "Smart Analytics",
        description:
          "Streamline your workflows, and reduce manual effort - so you can focus on what truly matters and achieve more with less effort.",
        linkText: "Learn More",
        href: "/features/smart-analytics",
        imageKey: "feature-analytics-bg",
        extension: false,
      },
      {
        id: "smart-integrations",
        panelType: "workflow",
        panelHeader: "Integrations",
        badge: {
          title: "Omni Connector",
          author: "Sync engine active - 42 services",
          growth: "Zero Latency",
        },
        stats: [
          { label: "Active Connectors", value: "350+" },
          { label: "Sync Velocity", value: "<12ms" },
        ],
        title: "Smart Integrations",
        description:
          "Connect your core software stack seamlessly with bidirectional live triggers, webhook listeners, and zero operational lag.",
        linkText: "Learn More",
        href: "/features/workflow-automation",
        imageKey: "feature-automation-bg",
        extension: true,
      },
      {
        id: "team-collaboration",
        panelType: "analytics",
        panelHeader: "Collaboration",
        chartBadge: "98%",
        chartBadgeLabel: "Team Adoption",
        chartLegend: [
          { name: "Product Teams", color: "#6F8F66" },
          { name: "Sales Teams", color: "#B8BDB5" },
          { name: "Support Teams", color: "#D1D6CE" },
        ],
        title: "Team Collaboration",
        description:
          "Empower cross-functional groups with granular governance, real-time workspace auditing, and reusable automated recipe templates.",
        linkText: "Learn More",
        href: "/features/smart-analytics",
        imageKey: "feature-analytics-bg",
        extension: true,
      },
    ],
  },

  benefits: {
    title: "Why Choose Our AI Automation Platform",
    description: "Powerful automation designed to simplify your workflow and maximize efficiency.",
    imageKey: "benefits-bg",
    items: [
      {
        id: "01",
        label: "Smart Automation",
        icon: "Cpu",
        description: "Set up workflows that run themselves.",
      },
      {
        id: "02",
        label: "Intelligent Automation",
        icon: "Brain",
        description: "Rules that adapt as your team's work changes.",
      },
      {
        id: "03",
        label: "Real-Time Insights",
        icon: "Zap",
        description: "See what is working as it happens.",
      },
    ],
  },

  gettingStarted: {
    title: "Get Started in 3 Simple Steps",
    imageKey: "integration-bg",
    diagramAriaLabel: "Diagram: Slack, Microsoft Teams, HubSpot, Mailchimp and Shopify connecting into Xelofia",
    steps: [
      {
        num: "01",
        title: "Connect Your Tools",
        description: "Integrate your apps and platforms in just a few clicks.",
      },
      {
        num: "02",
        title: "Set Automation Rules",
        // PLACEHOLDER: Description not visible in reference screenshot
        description: "Define triggers and actions once, and let your workflows follow them.",
      },
      {
        num: "03",
        title: "Let AI Do the Work",
        // PLACEHOLDER: Description not visible in reference screenshot
        description: "Sit back while Xelofia handles the repetitive tasks for you.",
      },
    ],
  },

  useCases: {
    title: "Built for Every Team and Workflow",
    description: "From marketing to operations, our AI automation adapts to your needs and simplifies every process.",
    items: [
      {
        num: "01",
        title: "Customer Support",
        icon: "PhoneCall",
        isHighlighted: false,
        srDescription: "Deliver automated resolutions, intelligent ticket triaging, and real-time response escalation for customer success teams.",
        href: "/use-cases/customer-support",
      },
      {
        num: "02",
        title: "Marketing Automation",
        icon: "Megaphone",
        isHighlighted: true,
        imageKey: "usecase-marketing",
        description: "Set up your automation in minutes and let AI handle the rest effortlessly.",
        href: "/use-cases/marketing-automation",
      },
      {
        num: "03",
        title: "Sales Workflow",
        icon: "Briefcase",
        isHighlighted: false,
        srDescription: "Accelerate pipeline velocity, qualify inbound leads dynamically, and automate CRM record hygiene.",
        href: "/use-cases/sales-workflow",
      },
      {
        num: "04",
        title: "Data & Reporting",
        icon: "BarChart3",
        isHighlighted: false,
        srDescription: "Harmonize fragmented tool outputs into cohesive reporting metrics and automatic stakeholder dashboards.",
        href: "/use-cases/data-reporting",
      },
    ],
  },

  faq: {
    title: "All You Need to Know",
    description: "Quick answers to help you get the most out of your unified workspace.",
    tabs: [
      { id: "product", label: "Product", icon: "Monitor" },
      { id: "support", label: "Support", icon: "MessageCircle" },
      { id: "payments", label: "Payments", icon: "CreditCard" },
    ],
    items: {
      product: [
        {
          q: "What is your platform, and how can it benefit my SaaS team?",
          a: "Our platform is a comprehensive workspace designed to eliminate the inefficiencies of switching between multiple tools. By centralizing your workflows, it reduces manual tasks, enhances collaboration, and streamlines your operations, allowing your team to focus on strategic initiatives.",
        },
        {
          q: "Which tools and applications does your platform integrate with?",
          // PLACEHOLDER
          a: "Xelofia integrates with industry-standard productivity, messaging, CRM, and analytics software including Slack, Microsoft Teams, HubSpot, Shopify, Mailchimp, and custom webhooks.",
        },
        {
          q: "Is technical expertise required to set up and use your platform?",
          // PLACEHOLDER
          a: "No coding background is required. The visual drag-and-drop workflow builder and pre-configured templates enable anyone on your team to create powerful automations in minutes.",
        },
        {
          q: "Can your platform scale with my growing business needs?",
          // PLACEHOLDER
          a: "Yes. Our cloud architecture handles high throughput event processing with multi-region redundancy, role-based controls, and enterprise-grade concurrency.",
        },
        {
          q: "What kind of customer support do you offer?",
          // PLACEHOLDER
          a: "We provide 24/7 technical documentation, community discussions, priority email assistance, and dedicated solutions engineering for enterprise accounts.",
        },
      ],
      support: [
        {
          q: "How fast does customer support respond to inquiries?",
          // PLACEHOLDER
          a: "Our global support engineers respond to inquiries within standard business hours, with expedited assistance available for business-critical operational inquiries.",
        },
        {
          q: "Do you offer assisted onboarding and workflow configuration?",
          // PLACEHOLDER
          a: "Yes. Teams can schedule guided walkthroughs and receive architecture guidance to migrate complex manual processes over smoothly.",
        },
        {
          q: "Where can I find release notes and platform changelogs?",
          // PLACEHOLDER
          a: "All platform updates, API additions, and feature releases are documented continuously on our public changelog page.",
        },
        {
          q: "Can I request custom connectors or private integrations?",
          // PLACEHOLDER
          a: "Organizations requiring private ERP or custom database connectors can submit integration requests directly to our solutions engineering team.",
        },
      ],
      payments: [
        {
          q: "What payment methods are supported on Xelofia?",
          // PLACEHOLDER
          a: "We accept all major credit cards, automated ACH transfers for enterprise accounts, and annual invoicing upon request.",
        },
        {
          q: "Can I change or cancel my subscription plan at any time?",
          // PLACEHOLDER
          a: "Yes, you can upgrade, downgrade, or cancel your active workspace plan directly from your account billing settings without penalties.",
        },
        {
          q: "Is there a free trial period before committing?",
          // PLACEHOLDER
          a: "Every new workspace receives full access to platform features for 14 days with no initial payment required.",
        },
        {
          q: "How does volume-based task metering work?",
          // PLACEHOLDER
          a: "Tasks are counted only when an automated action runs successfully. Test runs, trigger polls, and failed retries are never billed against your allowance.",
        },
      ],
    },
    supportCard: {
      title: "Have more questions?",
      subtitle: "Contact our support team",
      buttonText: "Contact Us",
    },
  },

  footer: {
    wordmark: "Xelofia",
    newsletterTitle: "Subscribe Newsletter",
    inputPlaceholder: "Enter Your Email",
    buttonText: "Send Now",
    copyright: `© ${new Date().getFullYear()} Xelofia. All rights reserved.`,
    linkGroups: [
      {
        id: "g1",
        links: [
          { label: "Home", href: "/", isAnchor: true, targetId: "top" },
          { label: "About", href: "/about" },
          { label: "Features", href: "/#features", isAnchor: true, targetId: "features" },
          { label: "Blog", href: "/blog" },
          { label: "Pricing", href: "/pricing" },
          { label: "Integration", href: "/#get-started", isAnchor: true, targetId: "get-started" },
        ],
      },
      {
        id: "g2",
        links: [
          { label: "Pricing single", href: "/pricing/single" },
          { label: "Blog single", href: "/blog/sample-post" },
          { label: "Cookie policy", href: "/cookie-policy" },
          { label: "404", href: "/404" },
        ],
      },
      {
        id: "g3",
        links: [
          { label: "Login", href: "/login" },
          { label: "Signup", href: "/signup" },
          { label: "Forgot password", href: "/forgot-password" },
          { label: "Early Access", href: "/early-access" },
          { label: "Terms & Condition", href: "/terms" },
        ],
      },
      {
        id: "g4",
        links: [
          { label: "Style Guide", href: "/style-guide" },
          { label: "Pass Protected", href: "/password-protected" },
          { label: "License", href: "/license" },
          { label: "Changelog", href: "/changelog" },
        ],
      },
    ],
  },
};
