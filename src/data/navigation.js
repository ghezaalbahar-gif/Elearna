export const primaryNav = [
  {
    label: 'Home',
    children: [
      { label: 'Home One', to: '/' },
      { label: 'Home Two', to: '/home-two' },
      { label: 'Home Three', to: '/home-three' },
    ],
  },
  {
    label: 'Courses',
    children: [
      { label: 'All Courses', to: '/courses' },
      { label: 'Free Courses', to: '/courses?filter=free' },
      { label: 'Paid Courses', to: '/courses?filter=paid' },
      { label: 'Design', to: '/category/design' },
      { label: 'Development', to: '/category/development' },
      { label: 'Management', to: '/category/management' },
      { label: 'Finance', to: '/category/finance' },
    ],
  },
  {
    label: 'Pages',
    children: [
      { label: 'About', to: '/about' },
      { label: 'Course Listing', to: '/course-one' },
      { label: 'FAQ', to: '/faq' },
      { label: 'Pricing', to: '/pricing-one' },
      { label: 'Career', to: '/career' },
      { label: 'Events', to: '/events' },
      { label: 'Team', to: '/team' },
    ],
  },
  {
    label: 'Blog',
    children: [
      { label: 'Blog One', to: '/blog-one' },
      { label: 'Blog Two', to: '/blog-two' },
      { label: 'Blog Three', to: '/blog-three' },
    ],
  },
  {
    label: 'Contact',
    children: [
      { label: 'Contact Three', to: '/contact-three' },
    ],
  },
]

export const homeNav = [
  {
    label: 'Home',
    children: [
      { label: 'Home One', to: '/' },
      { label: 'Home Two', to: '/home-two' },
      { label: 'Home Three', to: '/home-three' },
    ],
  },
  {
    label: 'Courses',
    children: [
      {
        label: 'Free',
        children: [
          {
            label: 'Corporate Finance And Investments',
            to: '/courses/understanding-corporate-finance-and-investments',
          },
          {
            label: 'Advanced Photoshop Techniques',
            to: '/courses/advanced-photoshop-techniques-for-designers',
          },
          {
            label: 'Crisis Management',
            to: '/courses/crisis-management-and-problem-solving-strategies',
          },
          {
            label: 'Single Page Applications With Angular',
            to: '/courses/building-single-page-applications-with-angular',
          },
        ],
      },
      {
        label: 'Paid',
        bottom: true,
        children: [
          {
            label: 'Personal And Business Finance',
            to: '/courses/the-complete-guide-to-personal-and-business-finance',
          },
          {
            label: 'Management And Process Improvement',
            to: '/courses/operations-management-and-process-improvement',
          },
          {
            label: 'Interactive Web Design',
            to: '/courses/learn-interactive-web-design-by-building-real-projects',
          },
          {
            label: 'Design Systems And Pattern Libraries',
            to: '/courses/design-systems-and-pattern-libraries',
          },
          {
            label: 'Grow Your Brand And Reach Your Audience',
            to: '/courses/grow-your-brand-and-reach-your-audience',
          },
          {
            label: 'Risk Management',
            to: '/courses/risk-management-and-business-continuity',
          },
          {
            label: 'Database Integration With MongoDB',
            to: '/courses/database-integration-with-mongodb',
          },
          {
            label: 'Full-Stack Development with MERN Stack',
            to: '/courses/full-stack-development-with-the-mern-stack',
          },
        ],
      },
    ],
  },
  {
    label: 'Pages',
    children: [
      { label: 'About One', to: '/about-one' },
      { label: 'About Two', to: '/about-two' },
      { label: 'Course One', to: '/course-one' },
      { label: 'Course Two', to: '/course-two' },
      { label: 'Course Three', to: '/course-three' },
      { label: 'FAQ', to: '/faq' },
      { label: 'Pricing One', to: '/pricing-one' },
      { label: 'Pricing Two', to: '/pricing-two' },
      { label: 'Pricing Three', to: '/pricing-three' },
      { label: 'Career', to: '/career' },
      { label: 'Events', to: '/events' },
      { label: 'Team', to: '/team' },
    ],
  },
  {
    label: 'Blog',
    children: [
      { label: 'Blog One', to: '/blog-one' },
      { label: 'Blog Two', to: '/blog-two' },
      { label: 'Blog Three', to: '/blog-three' },
    ],
  },
  {
    label: 'Contact',
    children: [
      { label: 'Contact Three', to: '/contact-three' },
    ],
  },
]

export const footerColumns = [
  {
    title: 'Quick links',
    links: [
      { label: 'Home', to: '/' },
      { label: 'Events', to: '/events' },
      { label: 'Career', to: '/career' },
      { label: 'Instructor', to: '/team' },
    ],
  },
  {
    title: 'Popular courses',
    links: [
      { label: 'Finance', to: '/category/finance' },
      { label: 'Management', to: '/category/management' },
      { label: 'Design', to: '/category/design' },
      { label: 'Web development', to: '/category/development' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', to: '/about' },
      { label: 'Courses', to: '/courses' },
      { label: 'Blog', to: '/blog-one' },
      { label: 'Contact', to: '/contact-three' },
      { label: 'License', to: '/information/license' },
      { label: 'Pricing', to: '/pricing-one' },
      { label: '404', to: '/not-found' },
    ],
  },
  {
    title: 'CMS',
    links: [
      { label: 'Course details', to: '/courses/crisis-management-and-problem-solving-strategies' },
      { label: 'Instructor details', to: '/team-members/lee-schmitt' },
      { label: 'Blog details', to: '/blog-one/the-evolution-of-teaching-tools-in-the-21st-century' },
    ],
  },
]

export const headerActions = {
  login: '/log-in',
  register: '/sign-up',
  getStarted: '/contact-three',
  browseCourses: '/courses',
  becomeTeacher: '/career',
}
