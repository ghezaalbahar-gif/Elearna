import { assets } from './assets'
import { getCourseBySlug } from './courses'

export const courseListingHero = {
  eyebrow: 'START WITH',
  title: 'Professional online courses',
}

export const courseListingIntro = {
  eyebrow: 'ONLINE LEARNING',
  title: 'Popular courses',
}

export const courseListingCategoryLinks = [
  {
    title: 'Web design and creative',
    count: 8,
    href: '/category/design',
    icon: assets.categoryIcons.creative,
  },
  {
    title: 'Finance and accounting',
    count: 4,
    href: '/category/finance',
    icon: assets.categoryIcons.finance,
  },
  {
    title: 'IT and software',
    count: 5,
    href: '/category/development',
    icon: assets.categoryIcons.it,
  },
  {
    title: 'Digital marketing',
    count: 4,
    href: '/category/management',
    icon: assets.categoryIcons.marketing,
  },
  {
    title: 'Web development',
    count: 8,
    href: '/category/development',
    icon: assets.categoryIcons.web,
  },
  {
    title: 'Content and language',
    count: 3,
    href: '/category/design',
    icon: assets.categoryIcons.writing,
  },
]

export const courseListingSlides = [
  [
    'understanding-corporate-finance-and-investments',
    'advanced-photoshop-techniques-for-designers',
    'crisis-management-and-problem-solving-strategies',
    'building-single-page-applications-with-angular',
    'database-integration-with-mongodb',
    'full-stack-development-with-the-mern-stack',
  ],
  [
    'the-complete-guide-to-personal-and-business-finance',
    'learn-interactive-web-design-by-building-real-projects',
    'grow-your-brand-and-reach-your-audience',
    'design-systems-and-pattern-libraries',
    'operations-management-and-process-improvement',
    'risk-management-and-business-continuity',
  ],
].map((slugs) => slugs.map(getCourseBySlug).filter(Boolean))
