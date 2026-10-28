const ICONS = 'https://cdn.prod.website-files.com/668cb7adec02e140422345de'
const COURSES = 'https://cdn.prod.website-files.com/66cbf9eecd2d43a6644e1854'

// On the reference site every instructor profile is the same detail template fed by
// the same demo collections, so all eight pages render identical copy apart from the
// name and photograph. Only the member's name and photo are overridden per page.
export const hero = {
  headingFor: (name) => `Professional training with ${name}`,
  lead: 'Lorem ipsum dolor sit amet consectetur. Scelerisque cursus eget aliquet vel elit. Suspendisse odio augue ultrices sed adipiscing placerat vel consectetur. Aliquet.',
  specialistLabel: 'Specialist in',
  specialists: ['Branding Design', 'Web Development', 'Logo design'],
  marqueeWords: ['UI/UX Design', 'Branding', 'Web developent'],
  marqueeIcon: `${ICONS}/66e57671dfc47c83c2021a47_Subtract-2.svg`,
  socials: [
    { label: 'Behance', href: 'https://www.behance.net', icon: `${ICONS}/66e7c6433d7856003f72b9f5_Behance.png` },
    { label: 'Twitter', href: 'https://x.com', icon: `${ICONS}/66e7c56daf060e8c0d357f32_Twitter.svg` },
    { label: 'LinkedIn', href: 'https://in.linkedin.com', icon: `${ICONS}/66e7c56d6c59a934ad103c27_LinkedIn.svg` },
    { label: 'Facebook', href: 'https://www.facebook.com', icon: `${ICONS}/66e7c64323897cf8a1810bdb_Facebook.png` },
  ],
}

export const about = {
  kicker: 'About Instructor',
  lead: 'Lorem ipsum dolor sit amet consectetur. Cras suscipit habitant nisi aliquam tincidunt egetvolutpat urna netus est quis.',
  body: 'Lorem ipsum dolor sit amet consectetur. Scelerisque cursus eget aliquet vel elit. Suspendisse odio augue ultrices sed adipiscing placerat vel consectetur. Aliquet.',
  skills: [
    { title: 'Teaching strategy', value: '84%', text: 'Lorem ipsum dolor sit amet consectetur. Quis vitae eget tincidunt enim in ipsum.' },
    { title: 'Success ratio', value: '95%', text: 'Lorem ipsum dolor sit amet consectetur. Quis vitae eget tincidunt enim in ipsum.' },
  ],
}

export const courses = {
  kicker: 'Online learning',
  heading: 'Instructor of course',
  starIcon: `${ICONS}/66c6fb8b857efb6c4c737b5d_Rating.svg`,
  // Cards link to the matching course pages that already exist in this site.
  items: [
    {
      title: 'Building single page applications with angular',
      category: 'Development',
      image: `${COURSES}/66ebabcd61399462d208146a_Course%20Portrait%20Image.webp`,
      rating: '5.00',
      reviews: '328',
      price: '$0',
      links: {
        detailsLabel: 'Course details',
        details: '/courses/building-single-page-applications-with-angular',
        buyLabel: 'Buy course',
        buy: '/courses/building-single-page-applications-with-angular/enroll',
      },
    },
    {
      title: 'Database integration with MongoDB',
      category: 'Development',
      image: `${COURSES}/66ebabde3e87f8984b6782a1_Course%20Portrait%20Image-9.webp`,
      rating: '4.49',
      reviews: '756',
      price: '$59',
      links: {
        detailsLabel: 'Course details',
        details: '/courses/database-integration-with-mongodb',
        buyLabel: 'Buy course',
        buy: '/courses/database-integration-with-mongodb/enroll',
      },
    },
    {
      title: 'Full-stack development with the MERN stack',
      category: 'Development',
      image: `${COURSES}/66ebac3db9565bc62a90430e_Course%20Portrait%20Image-5.webp`,
      rating: '5.00',
      reviews: '985',
      price: '$72',
      links: {
        detailsLabel: 'Course details',
        details: '/courses/full-stack-development-with-the-mern-stack',
        buyLabel: 'Buy course',
        buy: '/courses/full-stack-development-with-the-mern-stack/enroll',
      },
    },
  ],
}

export const awards = {
  kicker: 'awards',
  heading: 'Our achieved awards',
  body: 'Lorem ipsum dolor sit amet consectetur. Scelerisque cursus eget aliquet vel elit. Suspendisse odio augue ultrices sed adipiscing placerat vel consectetur. Aliquet.',
  items: [
    { year: '2012', name: 'Awwwards', icon: `${ICONS}/66e55e42fc586a4e75f8f96b_Awwwards.svg`, text: 'Lorem ipsum dolor sit amet consectetur. Nunc at faucibus risus sodales in mattis.' },
    { year: '2016', name: 'Dribbble', icon: `${ICONS}/66e55e422c3e8186a6f75758_Dribbble.svg`, text: 'Lorem ipsum dolor sit amet consectetur. Nunc at faucibus risus sodales in mattis.' },
    { year: '2019', name: 'hubSpot', icon: `${ICONS}/66e55e421201bf7ff039a2c8_Hubspot.svg`, text: 'Lorem ipsum dolor sit amet consectetur. Nunc at faucibus risus sodales in mattis.' },
  ],
}
