export interface QA {
  q: string;
  a: string;
}

export interface Titled {
  title: string;
  text: string;
}

export interface Section {
  h: string;
  p: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  text: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export interface Flagship {
  title: string;
  tagline: string;
  desc: string;
  icon: string;
  link: string;
  badge: string;
}

export interface DocsGroup {
  id: string;
  title: string;
  articles: Titled[];
}

export interface ChangelogEntry {
  v: string;
  date: string;
  text: string;
}

export interface AppOverride {
  tagline: string;
  description: string;
  features: string[];
}

export interface BlogOverride {
  title: string;
  description: string;
}

export interface LocaleContent {
  metaDescription: string;
  testimonials: Testimonial[];
  products: Flagship[];
  supportTopics: Titled[];
  supportFaqs: QA[];
  contactFaqs: QA[];
  docsGroups: DocsGroup[];
  docsChangelog: ChangelogEntry[];
  timeline: TimelineItem[];
  aboutStats: string[];
  storyExtra: string;
  footerLinks: {
    aiCodeViewer: string;
    support: string;
    privacy: string;
    terms: string;
  };
  aicodeFeatures: Titled[];
  privacy: Section[];
  terms: Section[];
  /** Per-app copy overrides keyed by apps.json id. Missing apps fall back to apps.json English. */
  apps: Record<string, AppOverride>;
  /** Display labels for category keys (filtering still uses the English keys). */
  appCategories: Record<string, string>;
  /** Localized renderings of apps.json timeToValue values, keyed by the English source. */
  appTime: Record<string, string>;
  /** Display labels for blog category taxonomy (filtering still uses English keys). */
  blogCategories: Record<string, string>;
  /** Per-post title/description overrides keyed by slug. Missing posts fall back to frontmatter. */
  blogPosts: Record<string, BlogOverride>;
}
