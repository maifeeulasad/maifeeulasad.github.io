// Single source of truth for the blog's profile sidebar, navigation, SEO defaults
// and the set of collections it surfaces. Everything visible on the sidebar
// is driven from here, so the blog can be re-themed by editing this one file.

export interface ProfileStat {
  label: string;
  value: string;
}

export interface SocialLink {
  title: string;
  href: string;
  // Material Symbols icon name OR a brand slug matching BrandIcon.astro
  icon?: string;
  brand?: 'github' | 'linkedin' | 'stackoverflow' | 'twitter';
}

export interface CollectionConfig {
  // Matches the folder name under src/content and the key in content.config.ts
  id: 'journal' | 'notes';
  // Shown in the sidebar
  label: string;
  // Headline on the listing page
  title: string;
  // Breadcrumb shown above the title, e.g. "~/journal/stack-solutions"
  breadcrumb: string;
  // One-line description for cards/meta
  description: string;
  // Material Symbols icon for the sidebar entry
  icon: string;
  // Posts per page on the listing
  perPage: number;
  // If true, the collection is listed on the home page too
  featured: boolean;
}

export interface NavSection {
  label: string;
  // Resolves relative to the blog base (prepend site.base)
  href: string;
  icon: string;
  // Small right-side badge: a number comes from a count, a string is literal
  count?: number | string;
  // Opens in a new tab if the href starts with http
  external?: boolean;
}

export const site = {
  author: 'Maifee Ul Asad',
  initials: 'MU',
  tagline: 'Full Stack Engineer · ML Enthusiast',
  status: 'Open to opportunities',
  about:
    'Full Stack Engineer across the whole stack: backend, frontend, databases and the infrastructure that ships them. Lately deep in TypeScript, Python and applied ML. I write here about problems worth remembering and solutions that held up in production.',

  profileStats: [
    { label: 'Focus', value: 'Full Stack & ML' },
    { label: 'Experience', value: '5+ yrs · since 2020' },
  ] as ProfileStat[],

  stack: [
    'TypeScript',
    'Python',
    'React',
    'Node.js',
    'PostgreSQL',
    'Docker',
    'AWS',
    'PyTorch',
    'Django',
  ],

  socials: [
    { title: 'GitHub', href: 'https://github.com/maifeeulasad', brand: 'github' },
    { title: 'LinkedIn', href: 'https://linkedin.com/in/maifeeulasad', brand: 'linkedin' },
    {
      title: 'Stack Overflow',
      href: 'https://stackoverflow.com/users/9152501',
      brand: 'stackoverflow',
    },
    { title: 'RSS feed', href: '/writing/rss.xml', icon: 'rss_feed' },
  ] as SocialLink[],

  // Top nav strip — matches the resume site structure
  nav: [
    { label: 'Home', href: '/' },
    { label: 'Writing', href: '/writing/' },
    { label: 'Projects', href: '/#projects' },
    { label: 'About', href: '/#about' },
  ],

  // The blog's sidebar section list. `id` matches a collection id to pull its
  // post count automatically; otherwise `count` is a literal label like "bio".
  sidebarSections: [
    { id: 'journal', icon: 'arrow_right' as const, label: 'Journal' },
    { id: 'notes', icon: 'chevron_right' as const, label: 'Notes' },
    {
      icon: 'chevron_right' as const,
      label: 'Resume',
      href: '/',
      count: 'home',
    },
    {
      icon: 'chevron_right' as const,
      label: 'XML Feed (RSS 2.0)',
      href: '/writing/rss.xml',
      count: 'xml',
    },
  ] as Array<{
    id?: 'journal' | 'notes';
    icon: string;
    label: string;
    href?: string;
    count?: number | string;
  }>,

  // SEO defaults
  url: 'https://maifeeulasad.github.io',
  base: '/writing',
  title: 'Writing',
  description:
    'Notes, fixes and deep-dives from building full-stack systems and shipping ML to production.',
  image: '/writing/og-default.png',
  lang: 'en',
  twitterCard: 'summary_large_image' as const,

  // GitHub Actions / Google Analytics id (optional)
  gaId: '',

  // Repo for the top-right star button (empty string hides it)
  repo: 'maifeeulasad/maifeeulasad.github.io',
} as const;

export const collections: CollectionConfig[] = [
  {
    id: 'journal',
    label: 'Journal',
    title: 'Journal',
    breadcrumb: '~/journal',
    description: 'Long-form writing: war stories, decisions, deep dives.',
    icon: 'menu_book',
    perPage: 10,
    featured: true,
  },
  {
    id: 'notes',
    label: 'Notes',
    title: 'Notes',
    breadcrumb: '~/notes',
    description: 'Short, pointed notes on things I had to look up more than once.',
    icon: 'sticky_note_2',
    perPage: 20,
    featured: true,
  },
];

export const getCollection = (id: string): CollectionConfig | undefined =>
  collections.find((c) => c.id === id);
