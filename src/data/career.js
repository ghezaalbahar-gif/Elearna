const CDN = 'https://cdn.prod.website-files.com/668cb7adec02e140422345de'

export const careerHero = {
  eyebrow: 'We are hiring',
  title: 'Begin your journey as an instructor',
}

export const careerConnectivity = {
  eyebrow: 'Why we are',
  title: 'We help connectivity across the world',
  copy: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed eiusm tempor incididunt ut labore et dolore magna aliqua.',
  images: {
    left: {
      src: `${CDN}/66e2828b5c1aa1d3d510763b_Career%20Page%20Image.webp`,
      width: 410,
      height: 366,
    },
    right: {
      src: `${CDN}/66e2828981ae7c4eabf6c47b_Career%20Page%20Image-2.webp`,
      width: 219,
      height: 344,
    },
  },
  checkIcon: `${CDN}/66e28289f0f3ea3c0aa2d985_Black%20Check.svg`,
  points: [
    {
      title: 'Full network visibility worldwide',
      copy: 'Amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      title: 'Supported the use of fiber optic cable',
      copy: 'Amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  ],
}

export const careerJobs = [
  {
    title: 'Software development instructor',
    posts: '50 Posts available',
    location: '4367 Lula Shores, Derekton 48438',
    salary: '$23K - $35K',
    href: '/career/software-development-instructor',
    description: 'Lorem ipsum dolor sit amet consectetur.',
    type: 'Full-time, Permanent',
    experience: '2 years',
  },
  {
    title: 'Machine learning educator',
    posts: '35 Posts available',
    location: '4367 Lula Shores, Derekton 48438',
    salary: '$20K - $35K',
    href: '/career/machine-learning-educator',
    description: 'Lorem ipsum dolor sit amet consectetur.',
    type: 'Full-time, Permanent',
    experience: '2 years',
  },
  {
    title: 'Blockchain Technology Instructor',
    posts: '47 Posts available',
    location: '4367 Lula Shores, Derekton 48438',
    salary: '$26K - $40K',
    href: '/career/blockchain-technology-instructor',
    description: 'Lorem ipsum dolor sit amet consectetur.',
    type: 'Full-time, Permanent',
    experience: '3 years',
  },
  {
    title: 'Digital Design and UX Instructor',
    posts: '50 Posts available',
    location: '4367 Lula Shores, Derekton 48438',
    salary: '$23K - $35K',
    href: '/career/digital-design-and-ux-instructor',
    description: 'Lorem ipsum dolor sit amet consectetur.',
    type: 'Full-time, Permanent',
    experience: '2 years',
  },
]

export const careerCta = {
  title: 'Are you ready to start your journey?',
  primary: { label: 'Browse courses', to: '/course-one' },
  secondary: { label: 'Became an\u00a0\u00a0instructor', to: '/career' },
}
