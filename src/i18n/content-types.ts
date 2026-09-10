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

export interface AboutFeatureItem {
  num: string;
  title: string;
  desc: string;
}

export interface AboutStepItem {
  step: string;
  title: string;
  desc: string;
}

export interface AboutEcosystemGroup {
  label: string;
  desc: string;
  tags: string[];
}

export interface AboutLearningCard {
  badge: string;
  title: string;
  desc: string;
}

export interface AboutPageContent {
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
  imageAlt: string;
  heroEyebrow: string;
  heroTitle: string;
  heroSubtitle: string;
  founderRole: string;
  founderLocation: string;
  founderBio1: string;
  founderBio2: string;
  storyEyebrow: string;
  storyTitle: string;
  storyParagraphs: string[];
  whatBuildEyebrow: string;
  whatBuildTitle: string;
  whatBuildSubtitle: string;
  whatBuildItems: AboutFeatureItem[];
  craftEyebrow: string;
  craftTitle: string;
  craftParagraphs: string[];
  aiEyebrow: string;
  aiTitle: string;
  aiParagraphs: string[];
  aiPillars: Titled[];
  philosophyEyebrow: string;
  philosophyTitle: string;
  philosophyItems: Titled[];
  workEyebrow: string;
  workTitle: string;
  workSubtitle: string;
  workSteps: AboutStepItem[];
  ecosystemEyebrow: string;
  ecosystemTitle: string;
  ecosystemSubtitle: string;
  ecosystemGroups: AboutEcosystemGroup[];
  learningEyebrow: string;
  learningTitle: string;
  learningSubtitle: string;
  learningCards: AboutLearningCard[];
  stackEyebrow: string;
  stackTitle: string;
  stackSubtitle: string;
  journeyEyebrow: string;
  journeyTitle: string;
  futureEyebrow: string;
  futureTitle: string;
  futureBody: string;
  futureQuote: string;
  futureAuthor: string;
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
  aboutPage: AboutPageContent;
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
