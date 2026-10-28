import { getCourseBySlug } from './courses'

export const categoryPages = {
  design: {
    slug: 'design',
    title: 'Design',
    courseSlugs: [
      'advanced-photoshop-techniques-for-designers',
      'learn-interactive-web-design-by-building-real-projects',
      'design-systems-and-pattern-libraries',
    ],
  },
  development: {
    slug: 'development',
    title: 'Development',
    courseSlugs: [
      'building-single-page-applications-with-angular',
      'database-integration-with-mongodb',
      'full-stack-development-with-the-mern-stack',
    ],
  },
  management: {
    slug: 'management',
    title: 'Management',
    courseSlugs: [
      'crisis-management-and-problem-solving-strategies',
      'grow-your-brand-and-reach-your-audience',
      'risk-management-and-business-continuity',
    ],
  },
  finance: {
    slug: 'finance',
    title: 'Finance',
    courseSlugs: [
      'understanding-corporate-finance-and-investments',
      'the-complete-guide-to-personal-and-business-finance',
      'operations-management-and-process-improvement',
    ],
  },
}

export const getCategoryPage = (slug) => {
  const page = categoryPages[slug]
  if (!page) return undefined
  return {
    ...page,
    courses: page.courseSlugs.map(getCourseBySlug).filter(Boolean),
  }
}

export const categories = [
  {
    id: 'creative-web-design',
    title: 'Creative web design',
    count: 8,
    icon: 'creative',
    href: '/category/design',
  },
  {
    id: 'finance-accounting',
    title: 'Finance accounting',
    count: 10,
    icon: 'finance',
    href: '/category/finance',
  },
  {
    id: 'it-software',
    title: 'IT and software',
    count: 5,
    icon: 'creative',
    href: '/category/development',
  },
  {
    id: 'digital-marketing',
    title: 'Digital marketing',
    count: 4,
    icon: 'marketing',
    href: '/category/finance',
  },
  {
    id: 'web-development',
    title: 'Web development',
    count: 8,
    icon: 'web',
    href: '/category/development',
  },
  {
    id: 'content-writing',
    title: 'Content writing',
    count: 3,
    icon: 'writing',
    href: '/category/design',
  },
]
