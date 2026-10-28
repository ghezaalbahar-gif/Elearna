const A = 'https://cdn.prod.website-files.com/668cb7adec02e140422345de'

export const aboutAssets = {
  heroBackground: `${A}/66d96859eeb82869ca4d5d3f_About%20One%20Hero.webp`,

  storyImage: `${A}/66d9685910e51570ad70d12e_Employ%20Images.webp`,
  storyImageSrcSet: [
    `${A}/66d9685910e51570ad70d12e_Employ%20Images-p-500.webp 500w`,
    `${A}/66d9685910e51570ad70d12e_Employ%20Images-p-800.webp 800w`,
    `${A}/66d9685910e51570ad70d12e_Employ%20Images-p-1080.webp 1080w`,
    `${A}/66d9685910e51570ad70d12e_Employ%20Images.webp 1260w`,
  ].join(', '),
  trustedImage: `${A}/66f640175a11d2c4db6078d6_Trusted%20By%20Image%20In%20White.avif`,

  detailsIcons: {
    courses: `${A}/66d9685900d6e3c06862ddb9_Circle%20Icons%20White.svg`,
    personalized: `${A}/66d96859c968783a7b05acb2_Pen%20Icons%20White.svg`,
    updates: `${A}/66d96859eeb82869ca4d5d1e_Update%20White%20Icons.svg`,
  },

  homeVideo: `${A}%2F66c86567624ca9dec83f55cc_Home%20One%20Video-transcode.mp4`,
  homeVideoWebm: `${A}%2F66c86567624ca9dec83f55cc_Home%20One%20Video-transcode.webm`,
  homeVideoPoster: `${A}%2F66c86567624ca9dec83f55cc_Home%20One%20Video-poster-00001.jpg`,
  laptopGirl: `${A}/66d96859eb61b636c95fdb98_Girl%20Image%20Using%20Laptop.webp`,
  laptopGirlSrcSet: [
    `${A}/66d96859eb61b636c95fdb98_Girl%20Image%20Using%20Laptop-p-500.webp 500w`,
    `${A}/66d96859eb61b636c95fdb98_Girl%20Image%20Using%20Laptop.webp 732w`,
  ].join(', '),

  yellowCircle: `${A}/66cff2745bc495d2bda978f2_Yellow%20Circle.svg`,
  outlineCircle: `${A}/66cff274f001523c81c44d05_Outline%20Circle.svg`,

  instructorImage: `${A}/66d98189c5a2b384d11ea977_Girl%20With%20Logo.webp`,
  instructorImageSrcSet: [
    `${A}/66d98189c5a2b384d11ea977_Girl%20With%20Logo-p-500.webp 500w`,
    `${A}/66d98189c5a2b384d11ea977_Girl%20With%20Logo-p-800.webp 800w`,
    `${A}/66d98189c5a2b384d11ea977_Girl%20With%20Logo.webp 942w`,
  ].join(', '),
  reviewPopup: `${A}/66d98188f6fc5249944bae7c_Review%20Popup.webp`,

  quoteIcon: `${A}/66cff274c1ce9bc0b1d47e56_Quote%20Icons.svg`,
  sliderArrowBlack: `${A}/66cff27450908035329d09f0_Slider%20Arrow%20Black.svg`,

  ctaBackground: `${A}/66d97d5ab0f5c99538183a86_Office%20Image.webp`,
  footerBackground: `${A}/66d57c66a83a752540483c24_Noisy%20Background.webp`,
}

// Each object token becomes the reference digit train; strings render as-is.
export const storyCounters = [
  {
    id: 'seasons',
    label: 'Finish seasons',
    value: '1.5K',
    parts: [{ digit: '1' }, '.', { digit: '5' }, 'K'],
  },
  {
    id: 'enrolled',
    label: 'Enrolled',
    value: '7.8K',
    parts: [{ digit: '7' }, '.', { digit: '8' }, 'K'],
  },
  {
    id: 'placement',
    label: 'Job placement',
    value: '100%',
    parts: [{ digit: '1' }, { digit: '0' }, { digit: '0' }, '%'],
  },
]

export const aboutDetails = [
  {
    id: 'courses',
    icon: aboutAssets.detailsIcons.courses,
    title: '150+ online courses',
    copy: 'Lorem ipsum dolor sit amet',
  },
  {
    id: 'personalized',
    icon: aboutAssets.detailsIcons.personalized,
    title: 'Personalized learning',
    copy: 'Lorem ipsum dolor sit amet',
  },
  {
    id: 'updates',
    icon: aboutAssets.detailsIcons.updates,
    title: 'Lifetime update',
    copy: 'Lorem ipsum dolor sit amet',
  },
]

export const aboutFeatures = [
  {
    id: 'flexibility',
    number: '01',
    title: 'Flexibility and convenience',
    copy: 'Lorem ipsum dolor sit amet consectetur. Lectus faucibus eu lectus malesuada morbi in quam donec a pellentesque risus.',
    href: '/contact-three',
    wrapClass: 'button-wrap-one',
  },
  {
    id: 'accessibility',
    number: '02',
    title: 'Course accessibility',
    copy: 'Lorem ipsum dolor sit amet consectetur. Lectus faucibus eu lectus malesuada morbi in quam donec a pellentesque risus.',
    href: '/contact-three',
    wrapClass: 'button-wrap-two',
  },
  {
    id: 'cost',
    number: '03',
    title: 'Cost-effectiveness',
    copy: 'Lorem ipsum dolor sit amet consectetur. Lectus faucibus eu lectus malesuada morbi in quam donec a pellentesque risus.',
    href: '/contact-three',
    wrapClass: 'button-wrap-three',
  },
  {
    id: 'personalization',
    number: '04',
    title: 'Personalized learning',
    copy: 'Lorem ipsum dolor sit amet consectetur. Lectus faucibus eu lectus malesuada morbi in quam donec a pellentesque risus.',
    href: '/contact-three',
    wrapClass: 'button-wrap-four',
  },
]

export const aboutOffer = {
  eyebrow: 'what we Offer',
  title: 'Personalized learning for your ambitions',
  copy: 'Lorem ipsum dolor sit amet consectetur. Pellentesque id quam mauris mus. Vitae diam dolor lacus amet integer ut.',
  questionTitle: 'Still have questions?',
  questionCopy: 'Lorem ipsum dolor sit amet conse ipsum blandit etiam aliquam.',
  cta: 'Get Started',
}

export const aboutOfferPoints = [
  'Skill-based instruction',
  'Analytics and insights',
  'Global certification',
  'Customizable courses',
]

export const aboutPartnerNote = 'Learn from 350+ leading universities and companies with us'

export const aboutInstructor = {
  title: 'Became an instructor',
  copy: 'Lorem ipsum dolor sit amet consectetur. Sed ultricies fames scelerisque urna quis semper amet. Nisl tincidunt tortor nullam est nec commodo orci dictum in. Lorem consectetur donec purus sagittis.',
  cta: 'Start teaching today',
  href: '/career',
}

export const aboutTestimonials = [
  {
    id: 'linda',
    quote:
      '“Lorem ipsum dolor sit amet consectetur. Adipiscing eget risus tempus facilisis scelerisque vitae consectetur vitae. Amet faucibus venenatis donec mattis. Morbi placerat eleifend malesuada sed semper quis.”',
    name: 'Linda Grady',
    role: 'Co-assistant manager',
  },
  {
    id: 'jim',
    quote:
      '"Lorem ipsum dolor sit amet consectetur. Est felis pulvinar tortor ut nibh montes ante gravida velit. Facilisi posuere in sed mattis blandit duis aliquet. Molestie faucibus nibh felis tempor vel aliquet cursus placerat duis."',
    name: 'Jim Adams',
    role: 'Designer',
  },
]

export const aboutCta = {
  title: 'Are you ready to start your journey?',
  primary: { label: 'Browse courses', to: '/course-one' },
  secondary: { label: 'Became an instructor', to: '/career' },
}

export const aboutFooterColumns = [
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
    ],
  },
  {
    title: 'CMS',
    links: [
      { label: 'Course details', to: '/courses/crisis-management-and-problem-solving-strategies' },
      { label: 'Instructor details', to: '/team-members/lee-schmitt' },
      { label: 'Blog details', to: '/blog-one/teaching-tools' },
    ],
  },
]

export const aboutFooterHelp = {
  title: 'Need help?',
  phoneLabel: 'Call us',
  phone: '(888) 123 4567',
  phoneHref: 'tel:8881234567',
  supportLabel: 'Need support?',
  email: 'info@example.com',
  emailHref: 'mailto:info@example.com',
}
