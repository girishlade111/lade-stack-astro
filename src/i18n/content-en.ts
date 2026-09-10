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
    {
      q: 'What is Lade Stack?',
      a: 'Lade Stack is an independent software and technology platform founded in India, dedicated to building practical developer tools, AI-powered software, SaaS products, and modern web applications. The platform is focused on removing friction from technical workflows through thoughtful UI/UX design, clean engineering, and targeted automation.'
    },
    {
      q: 'Who is behind Lade Stack?',
      a: 'Lade Stack is founded and architected by Girish Lade, who serves as Founder & Lead Software Architect. Bringing together a multidisciplinary background across UI/UX design, frontend and backend engineering, cloud architecture, and Generative AI, Girish directs product strategy and builds tools designed to solve real engineering challenges.'
    },
    {
      q: 'What makes Lade Stack different from other software platforms?',
      a: 'Rather than chasing speculative hype or building bloated software suites, Lade Stack is founder-led and crafted at the intersection of design and engineering. Tools are built to be fast, accessible, and immediately useful without unnecessary account hurdles, complex configurations, or aggressive upsells.'
    },
    {
      q: 'What kinds of products does Lade Stack build?',
      a: 'Lade Stack develops focused developer utilities, intelligent code-enhancement tools, client-side productivity applications, and modern web software. Our ecosystem includes CodeEnhance AI (in-browser code editing and enhancement), LS PDF Tools and LS Image Studio (private client-side media utilities), Swift Resume, and developer utilities such as the API Testing Platform.'
    },
    {
      q: 'Is Lade Stack built specifically for software developers?',
      a: 'Many of our core tools—such as CodeEnhance AI, the API Testing Platform, and our technical documentation—are engineered developer-first to accelerate release cycles and eliminate repetitive toil. However, productivity tools like LS PDF Tools, LS Image Studio, and Swift Resume are crafted to be equally intuitive and valuable for students, creators, and professionals outside software engineering.'
    },
    {
      q: 'How does Lade Stack use Generative AI?',
      a: 'Generative AI is integrated pragmatically where machine intelligence provides clear, verifiable workflow acceleration—such as analyzing code structure, offering contextual suggestions, and streamlining documentation tasks. We avoid adding AI as a gimmick and focus on grounded, human-supervised assistance that saves developers meaningful time.'
    },
    {
      q: 'Are Lade Stack products browser-based?',
      a: 'Yes. The majority of Lade Stack applications run directly in modern web browsers, providing instant access without heavy local installations or runtime dependencies. Many tools, including our file and image processors, execute operations entirely client-side for maximum speed and privacy.'
    },
    {
      q: 'Is Lade Stack really free to use?',
      a: 'Yes. Core developer tools and productivity utilities across Lade Stack are free to use, with no paywalls, hidden trials, or mandatory credit cards required. Our aim is to keep high-utility software accessible to developers, learners, and builders worldwide.'
    },
    {
      q: 'Are all Lade Stack products open source?',
      a: "Lade Stack embraces an open, community-first philosophy, and select tools, libraries, and guides are shared openly on GitHub. However, 'free to use' does not mean every underlying service is open source. You can explore our open-source repositories and code projects directly on Girish Lade's GitHub profile."
    },
    {
      q: 'How does Lade Stack handle user data and privacy?',
      a: 'Privacy is treated as an architectural priority. Core utilities such as LS PDF Tools and LS Image Studio perform processing locally in your browser, meaning your files never leave your device. For tools that interact with online services, data handling is strictly limited to fulfilling the immediate user request. Please review individual product documentation for specific details.'
    },
    {
      q: 'How can I get support if I run into an issue?',
      a: 'You can reach out directly using the contact form on this page or by sending an email to admin@ladestack.in. Every inquiry is reviewed directly by Girish Lade. While we do not operate a formal enterprise SLA, we actively investigate problems and reply to constructive questions as promptly as possible.'
    },
    {
      q: 'Can I suggest a new feature or tool idea?',
      a: 'Yes, community feedback is genuinely encouraged. You can submit ideas and workflow suggestions through our contact form or by opening an issue on GitHub. Feature requests are prioritized based on general utility, technical feasibility, and alignment with Lade Stack\'s roadmap.'
    },
    {
      q: 'I found a bug. What is the best way to report it?',
      a: 'If you encounter a bug, please send details via the contact form or email admin@ladestack.in. Including the tool name, browser and operating system, steps to reproduce the issue, and any relevant error messages or screenshots helps us identify and deploy a fix quickly.'
    },
    {
      q: 'Where can I find documentation and usage guides?',
      a: 'Comprehensive guides, architectural breakdowns, and setup instructions are available in our Docs section (/docs) and on the Lade Stack Blog. Documentation continues to expand alongside each new release and feature update.'
    },
    {
      q: 'Does Lade Stack offer enterprise solutions or team plans?',
      a: 'Lade Stack is currently an independent, founder-led platform focused on accessible, high-performance web tools rather than complex corporate contracts or certified enterprise suites. However, if your team or startup has specific workflow needs, technical inquiries, or custom integration questions, you are welcome to reach out to discuss possibilities.'
    },
    {
      q: 'How does Lade Stack decide what to build next?',
      a: 'Product decisions are driven by real developer bottlenecks, hands-on user feedback, and opportunities where modern web technologies and Generative AI can meaningfully reduce friction. Every tool begins with a straightforward question: Does this save real time and make an essential workflow easier?'
    },
    {
      q: 'Can I collaborate with or contribute to Lade Stack?',
      a: 'Collaborative opportunities, technical feedback, and thoughtful project discussions are always welcome. Whether you are an engineer looking to contribute to open repositories or a builder interested in discussing product integrations, feel free to get in touch via admin@ladestack.in or connect on LinkedIn and GitHub.'
    }
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
