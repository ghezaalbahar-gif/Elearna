const A = 'https://cdn.prod.website-files.com/668cb7adec02e140422345de'
const B = 'https://cdn.prod.website-files.com/66cbf9eecd2d43a6644e1854'

export const eventsHero = {
  image: `${A}/66e3d9b9b8346ed0ecee24a5_Events%20Banner.webp`,
  imageAlt: 'Audience attending an institute event',
  label: 'Enjoy with',
  heading: 'Great upcoming events for our institute',
}

export const eventsIntro = {
  label: 'Our event',
  heading: 'Professional online events',
  description:
    'Lorem ipsum dolor sit amet consectetur. Congue sit pellentesque eu scelerisque urna a porttitor. Massa nec ipsum sed etiam et facilisis bibendum.',
}

export const marqueeLabel = 'See event details'

// The reference site renders one shared rich-text body for all six event detail
// pages; only the fields on each event below differ.
export const eventDetailContent = {
  detailsHeading: 'Event details',
  paragraphs: [
    'Lorem ipsum dolor sit amet consectetur. Et facilisis nunc quam quam etiam donec pellentesque ut. Nisl pellentesque at aliquam scelerisque non consequat amet curabitur. Imperdiet habitant purus pulvinar diam. Molestie pharetra morbi eu odio volutpat. Cursus velit elit senectus auctor vitae tristique velit. Feugiat consequat diam ipsum suspendisse vestibulum ipsum malesuada.',
    'Lorem ipsum dolor sit amet consectetur. Interdum mauris ac ipsum pulvinar tempor tincidunt. Condimentum lacus at augue tortor viverra dui. Turpis sed ut leo dignissim scelerisque.Adipiscing aliquam id aliquam lorem. Tempor ut nullam et amet. Sed nulla blandit tellus tincidunt aliquam odio amet sed interdum. Facilisis eget nullam ultrices elementum in congue id vestibulum. Pellentesque morbi est lobortis eget arcu curabitur. Tortor phasellus non in lacus turpis proin arcu mollis. Amet id nunc at ipsum adipiscing varius lacus tristique ante. Nibh habitant tellus turpis nec risus diam cursus convallis nec. Enim ut massa pellentesque viverra.',
  ],
  contentHeading: 'Event content',
  bullets: [
    'Lorem ipsum dolor sit amet consectetur. Interdum mauris ac ipsum pulvinar tempor tincidunt. Condimentum lacus at augue tortor viverra dui.',
    'Lorem ipsum dolor sit amet consectetur. Interdum mauris ac ipsum.',
    'Lorem ipsum dolor sit amet consectetur. Interdum mauris ac ipsum.',
    'Lorem ipsum dolor sit amet consectetur. Interdum mauris ac ipsum pulvinar tempor tincidunt. Condimentum lacus at augue tortor viverra dui.',
    'Lorem ipsum dolor sit amet consectetur ac ipsum pulvinar tempor tincidunt. Condimentum lacus at augue tortor viverra dui.',
    'Lorem ipsum dolor sit amet consectetur. Interdum mauris ac ipsum.',
  ],
  image: `${B}/66e5082a9ec2cf5375aae0ab_66e5074167d5eeb317e1437a_Events%2520Image.webp`,
  imageAlt: 'Trainers running a session in a classroom',
  managementHeading: 'Event management',
  managementParagraph:
    'Lorem ipsum dolor sit amet consectetur. Interdum mauris ac ipsum pulvinar tempor tincidunt.Tempor ut nullam et amet. Sed nulla blandit tellus tincidunt aliquam odio amet sed interdum. Facilisis eget nullam ultrices elementum in congue id vestibulum. Pellentesque morbi est lobortis eget arcu curabitur. Tortor phasellus non in lacus turpis proin arcu mollis.',
  managerLabel: 'Event manager',
  managerBlurb:
    'Lorem ipsum dolor sit amet consectetur. Interdum mauris ac ipsum pulvinar tempor tincidunt.Tempor ut nullam et amet. Sed nulla blandit tellus tincidunt aliquam odio amet sed interdum.',
}

export const upcomingEventsIntro = {
  heading: 'Upcoming events',
  description:
    'Lorem ipsum dolor sit amet consectetur. Adipiscing eget risus tempus facilisis scelerisque vitae consectetur vitae. Amet faucibus venenatis donec mattis.',
}

export const events = [
  {
    slug: 'leadership-strategies-for-higher-education-institutions',
    title: 'Leadership strategies for higher education institutions',
    day: '4',
    month: 'Oct',
    year: '2024',
    date: 'October 4, 2024',
    location: 'New York,USA',
    time: '9:00 am - 7:00 pm',
    image: `${B}/66e3fd546621c8e4562b7472_Event%20Image.webp`,
    banner: `${B}/66e40db8fba3f379b18b1e5d_Event%20Banner.webp`,
    totalSlots: 500,
    bookedSlots: 198,
    price: 'Free',
    manager: 'Sheldon Hirthe',
    managerImage: `${B}/66e50825311b2e77b1426f9d_Event%20Author%20Image.jpg`,
  },
  {
    slug: 'professional-development-for-online-educators-and-trainers',
    title: 'Professional development for online educators and trainers',
    day: '18',
    month: 'Oct',
    year: '2024',
    date: 'October 18, 2024',
    location: 'Kansas City,USA',
    time: '10:00 am - 3:00 pm',
    image: `${B}/66e3fd84d5ee3e9e2dc6737c_Event%20Image-3.webp`,
    banner: `${B}/66e40dec1c94d0e2e8a75c17_Event%20Banner-5.webp`,
    totalSlots: 500,
    bookedSlots: 210,
    price: '$200',
    manager: 'Casey Windler',
    managerImage: `${B}/66e51d038a1df228f46ffd5f_Event%20Author%20Image-2.jpg`,
  },
  {
    slug: 'navigating-the-future-of-online-education-platforms',
    title: 'Navigating the future of online education platforms',
    day: '20',
    month: 'Oct',
    year: '2024',
    date: 'October 20, 2024',
    location: 'Detroit ,USA',
    time: '10:00 am - 5:00 pm',
    image: `${B}/66e3fea59a7a20a9116a4089_Event%20Image-4.webp`,
    banner: `${B}/66e40dfd5bddc381811999d5_Event%20Banner-3.webp`,
    totalSlots: 500,
    bookedSlots: 105,
    price: '$250',
    manager: 'Dean McGlynn',
    managerImage: `${B}/66e51d4dec07c3fa3ff27b50_Event%20Author%20Image-3.jpg`,
  },
  {
    slug: 'best-practices-for-virtual-classroom-management',
    title: 'Best practices for virtual classroom management',
    day: '25',
    month: 'Oct',
    year: '2024',
    date: 'October 25, 2024',
    location: 'Chicago ,USA',
    time: '9:00 am - 7:00 pm',
    image: `${B}/66e3fef7b390a845ab7ed21b_Event%20Image-2.webp`,
    banner: `${B}/66e40e16687d2dde51b25d27_Event%20Banner-2.webp`,
    totalSlots: 500,
    bookedSlots: 130,
    price: '$312',
    manager: 'Camille Ward',
    managerImage: `${B}/66e51d86807e91c5b0d0707f_Event%20Manager.jpg`,
  },
  {
    slug: 'the-impact-of-emotional-intelligence-on-student-success',
    title: 'The impact of emotional intelligence on student success',
    day: '6',
    month: 'Nov',
    year: '2024',
    date: 'November 6, 2024',
    location: 'Austin ,USA',
    time: '10:00 am - 5:00 pm',
    image: `${B}/66e3fd456d37a4f19469ab68_Event%20Image-7.webp`,
    banner: `${B}/66e40e25242083e9ae36da62_Event%20Image-6.webp`,
    totalSlots: 500,
    bookedSlots: 210,
    price: 'Free',
    manager: 'Joe Koepp',
    managerImage: `${B}/66e5216fe9d2bc959c8c40f9_Event%20Author%20Image-6.jpg`,
  },
  {
    slug: 'innovative-teaching-strategies-for-modern-classrooms',
    title: 'Innovative teaching strategies for modern classrooms',
    day: '22',
    month: 'Nov',
    year: '2024',
    date: 'November 22, 2024',
    location: 'Phoenix ,USA',
    time: '9:00 am - 3:00 pm',
    image: `${B}/66e40042a1bb76d626e145ba_Event%20Image-5.webp`,
    banner: `${B}/66e40e3aef892eb1a3151450_Event%20Banner-4.webp`,
    totalSlots: 500,
    bookedSlots: 230,
    price: '$240',
    manager: 'Dana Gutmann',
    managerImage: `${B}/66e52184831de420da5519be_Event%20Author%20Image-7.jpg`,
  },
]

export const findEvent = (slug) => events.find((event) => event.slug === slug)

// The reference's Upcoming events block is the collection in order, minus the event being read.
export const upcomingEvents = (slug) => events.filter((event) => event.slug !== slug).slice(0, 3)
