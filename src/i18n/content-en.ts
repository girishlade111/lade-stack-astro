import type { LocaleContent } from './content-types';

export const en: LocaleContent = {
  metaDescription: 'Free AI developer tools: code review, PDF toolkit, resume builder & image studio. No signup, free forever.',
  testimonials: [
    {
      quote: 'CodeEnhance AI cut my frontend iteration time in half. The live AI suggestions feel like pair-programming with a senior dev.',
      name: 'Priya Sharma',
      role: 'Frontend Engineer, Mumbai'
    },
    {
      quote: 'LS PDF Tools replaced three paid subscriptions for our team. Fully client-side, fast, and free — unbelievable.',
      name: 'Daniel Kim',
      role: 'Indie Hacker, Seoul'
    },
    {
      quote: 'The Lade Stack blog is my go-to reference for RAG architecture and MLOps. Deep, practical, no fluff.',
      name: 'Ana Souza',
      role: 'ML Engineer, São Paulo'
    }
  ],
  products: [
    {
      title: 'CodeEnhance AI',
      tagline: 'Intelligent Code Viewer & Enhancer',
      desc: 'Transform raw code into production-ready software with real-time AI linting, suggestions, and instant previews.',
      icon: 'lucide:code-xml',
      link: '/ai-code-viewer-ai',
      badge: 'Popular'
    },
    {
      title: 'API Testing Platform',
      tagline: 'Automated REST & GraphQL Testing',
      desc: 'Generate automated validation suites, mock API responses, and run security benchmarks in seconds.',
      icon: 'lucide:network',
      link: '/apps',
      badge: 'High Speed'
    },
    {
      title: 'Website Builder AI',
      tagline: 'No-Code Semantic Generator',
      desc: 'Generate modern, responsive web interfaces with semantic markup and export to standard HTML/CSS.',
      icon: 'lucide:layout-template',
      link: '/apps',
      badge: 'Zero Code'
    },
    {
      title: 'Secure File Hub',
      tagline: 'Encrypted Developer File Sharing',
      desc: 'Fast, secure temporary sharing for configuration files, credentials, and deployment archives.',
      icon: 'lucide:shield-check',
      link: '/apps',
      badge: 'Encrypted'
    }
  ],
  supportTopics: [
    { title: 'Getting started', text: 'Launch any app from the gallery — no signup needed. Your work stays in your browser.' },
    { title: 'File tools', text: 'PDF and image tools process files locally. Large files work best on desktop with a stable connection.' },
    { title: 'CodeEnhance AI', text: 'Paste code, pick an action, review suggestions, then copy or download the result.' },
    { title: 'Accounts & data', text: 'No accounts required. Clear site data anytime — exports keep your work portable.' }
  ],
  supportFaqs: [
    { q: 'A tool is not loading. What should I do?', a: 'Hard-refresh the page, disable aggressive ad-blockers for ladestack.in, and try a Chromium or Firefox build from the last year.' },
    { q: 'Are my files uploaded anywhere?', a: 'No. Core tools run fully client-side; files never leave your device.' },
    { q: 'How do I report a bug?', a: 'Email admin@ladestack.in with the tool name, browser version, and steps to reproduce. Screenshots help.' },
    { q: 'Can I suggest a new tool?', a: 'Yes — feature requests from the community drive the roadmap. Reach out via the contact page.' },
    { q: 'Is there an SLA for free tools?', a: 'No formal SLA, but we monitor uptime continuously and fix regressions fast.' },
    { q: 'Where do I learn best practices?', a: 'Start with the Docs and the Blog — 27+ guides cover AI development end to end.' }
  ],
  contactFaqs: [
    { q: 'Is Lade Stack really free?', a: 'Yes. Every tool is free forever — no tiers, trials, or credit cards.' },
    { q: 'How fast is support?', a: 'We operate 24/7 and typically respond within hours at admin@ladestack.in.' },
    { q: 'Can I request a feature?', a: 'Absolutely — open a GitHub issue or send a message below.' },
    { q: 'Do you offer enterprise solutions?', a: 'Yes. Contact us with your requirements for custom integrations and SLAs.' }
  ],
  docsGroups: [
    { id: 'getting-started', title: 'Getting Started', articles: [
      { title: 'Quickstart: launch your first app', text: 'Open the Apps Gallery, pick a tool, and you are productive in under a minute — no signup required.' },
      { title: 'Navigating the ecosystem', text: 'Home, Apps, Blog, Docs, and Support — how each surface fits your workflow.' }
    ]},
    { id: 'api-reference', title: 'API Reference', articles: [
      { title: 'CodeEnhance AI usage', text: 'Paste HTML, CSS, or JS, choose enhance or explain, and export production-ready code.' },
      { title: 'Rate limits & fair use', text: 'Generous free quotas with per-minute guards that keep the platform fast for everyone.' }
    ]},
    { id: 'integrations', title: 'Integrations', articles: [
      { title: 'Export to GitHub & Vercel', text: 'Copy generated code straight into your repo or deploy previews in one click.' }
    ]},
    { id: 'tutorials', title: 'Tutorials', articles: [
      { title: 'Build a landing page in 5 minutes', text: 'From prompt to published page using the Website Builder and Image Studio together.' }
    ]},
    { id: 'security', title: 'Security', articles: [
      { title: 'Privacy by design', text: 'Client-side processing means your files never leave your browser for core tools.' }
    ]},
    { id: 'teams', title: 'Teams', articles: [
      { title: 'Collaborating with shared links', text: 'Share outputs and templates with your team using portable JSON exports.' }
    ]},
    { id: 'data', title: 'Data Management', articles: [
      { title: 'Exporting your work', text: 'Every tool supports copy, download, and markdown export — your data stays yours.' }
    ]},
    { id: 'deployment', title: 'Deployment', articles: [
      { title: 'Self-hosting checklist', text: 'Static-first architecture makes mirroring Lade Stack tools straightforward.' }
    ]}
  ],
  docsChangelog: [
    { v: 'v2.4.0', date: '2026-08-20', text: 'Pure Astro rebuild with 7-language support and 100/100 Lighthouse.' },
    { v: 'v2.3.0', date: '2024-11-30', text: 'Documentation AI beta and API Testing collections.' },
    { v: 'v2.0.0', date: '2024-06-01', text: 'CodeEnhance AI general availability.' }
  ],
  timeline: [
    { year: '2020', title: 'The toolkit begins', text: 'Girish Lade starts building personal developer utilities — PDF, image, and code helpers.' },
    { year: '2022', title: 'Lade Stack takes shape', text: 'Tools consolidate under one brand with a shared design language and free-forever pledge.' },
    { year: '2024', title: 'AI-powered ecosystem', text: 'CodeEnhance AI launches; blog and docs grow to 27+ guides; community passes 8,000 developers.' },
    { year: '2026', title: 'Pure Astro re-creation', text: 'Full static rebuild: zero-JS runtime, 7 languages, 100/100 Lighthouse.' }
  ],
  aboutStats: ['Founded', 'Production tools', 'Developers', 'Free forever'],
  storyExtra: 'Multi-disciplinary engineer and designer with expertise in AI systems, web development, and user experience — building tools that give every creator startup-velocity superpowers at zero cost.',
  footerLinks: {
    aiCodeViewer: 'AI Code Viewer',
    support: 'Support Center',
    privacy: 'Privacy Policy',
    terms: 'Terms of Service'
  },
  aicodeFeatures: [
    { title: 'Real-time AI assistance', text: 'Explain, refactor, and enhance code as you type with grounded suggestions.' },
    { title: 'Live preview & compile', text: 'See HTML, CSS, and JS results instantly with error highlighting.' },
    { title: 'One-click enhance', text: 'Turn rough snippets into clean, accessible, production-ready code.' },
    { title: 'Export anywhere', text: 'Copy or download your work — no lock-in, no watermark.' }
  ],
  privacy: [
    { h: 'Information we collect', p: 'We collect minimal data: contact messages you send us, newsletter emails you opt into, and privacy-respecting analytics (page views, no cross-site tracking). Core tools process files entirely in your browser — your documents never reach our servers.' },
    { h: 'How we use information', p: 'To respond to support requests, send requested newsletters, and improve performance and reliability. We never sell personal data or share it with ad networks.' },
    { h: 'Cookies & storage', p: 'We store theme and language preferences in localStorage on your device. Analytics cookies, if any, are first-party and anonymized.' },
    { h: 'Your rights', p: 'Request access, correction, or deletion of your data anytime at admin@ladestack.in. Unsubscribe from emails with one click.' },
    { h: 'Contact', p: 'Questions about this policy: admin@ladestack.in, Mumbai, India.' }
  ],
  terms: [
    { h: 'Acceptable use', p: 'Use Lade Stack tools lawfully. Do not abuse rate limits, attempt to disrupt the service, or process content you have no right to use.' },
    { h: 'Free license', p: 'Tools are provided free for personal and commercial use. Outputs you create are yours. Redistribution of the platform itself under our brand requires permission.' },
    { h: 'API & fair use', p: 'Automated access must respect published quotas. Excessive or abusive traffic may be rate-limited to protect all users.' },
    { h: 'No warranties', p: 'Services are provided "as is" without warranties. We work hard on reliability but cannot guarantee uninterrupted availability.' },
    { h: 'Limitation of liability', p: 'To the maximum extent permitted by law, Lade Stack is not liable for indirect or consequential damages arising from use of the service.' },
    { h: 'Contact', p: 'Questions about these terms: admin@ladestack.in, Mumbai, India.' }
  ],
  apps: {},
  appTime: {
    'Instant': 'Instant',
    '1 minute': '1 minute',
    '2 minutes': '2 minutes',
    '5 minutes': '5 minutes'
  },
  appCategories: {
    'AI Tools': 'AI Tools',
    'Productivity': 'Productivity',
    'Utilities': 'Utilities'
  },
  blogCategories: {
    'AI Development': 'AI Development',
    'Generative AI': 'Generative AI',
    'SaaS Architecture': 'SaaS Architecture',
    'Backend as a Service': 'Backend as a Service',
    'API Design & Scaling': 'API Design & Scaling',
    'Cloud Computing': 'Cloud Computing',
    'Virtual Machines': 'Virtual Machines',
    'DevOps & CI/CD': 'DevOps & CI/CD',
    'Security in Web Apps': 'Security in Web Apps',
    'AI Production Systems': 'AI Production Systems'
  },
  blogPosts: {}
};
