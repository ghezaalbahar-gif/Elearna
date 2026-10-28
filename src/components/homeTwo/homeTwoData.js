import { assets } from '../../data/assets'
import { courses } from '../../data/courses'

const byId = (id) => courses.find((course) => course.id === id)

export const hero = {
  ghostTop: 'Personal',
  ghostBottom: 'Coach',
  label: 'Online learning',
  headingLead: 'Transform',
  headingAccent: 'learning',
  headingTail: 'with flexible online education',
  background: assets.homeTwo.heroBackground,
}

export const details = [
  {
    id: 'courses',
    icon: assets.homeTwo.detailIcons[0],
    title: '150+ online courses',
    text: 'Lorem ipsum dolor sit amet',
  },
  {
    id: 'learning',
    icon: assets.homeTwo.detailIcons[1],
    title: 'Personalized learning',
    text: 'Lorem ipsum dolor sit amet',
  },
  {
    id: 'update',
    icon: assets.homeTwo.detailIcons[2],
    title: 'Lifetime update',
    text: 'Lorem ipsum dolor sit amet',
  },
]

export const categoriesBlock = {
  label: 'Top categories',
  title: 'Discover leading categories',
  ctaLabel: 'Get Started',
  ctaTo: '/course-one',
}

export const discover = {
  label: 'Unlocking Potential',
  title:
    'Discover the boundless advantages and transformative power of eLearning for professional growth',
  text: 'Lorem ipsum dolor sit amet consectetur. Lectus faucibus eu lectus malesuada morbi in quam donec a pellentesque risus.',
  // Card order matches the reference. The photo strip above 991px and the
  // per-card photo below it are authored separately on the reference, so cards
  // 03 and 04 keep their own mobile crop.
  cards: [
    {
      number: '01',
      title: 'Flexibility and convenience',
      image: assets.homeTwo.discoverImages.three,
      mobileImage: assets.homeTwo.discoverImages.three,
    },
    {
      number: '02',
      title: 'Course accessibility',
      image: assets.homeTwo.discoverImages.two,
      mobileImage: assets.homeTwo.discoverImages.two,
    },
    {
      number: '03',
      title: 'Cost-effectiveness',
      image: assets.homeTwo.discoverImages.four,
      mobileImage: assets.homeTwo.discoverImages.one,
    },
    {
      number: '04',
      title: 'Personalized learning',
      image: assets.homeTwo.discoverImages.contact,
      mobileImage: assets.homeTwo.discoverImages.four,
    },
  ],
  defaultActive: 1,
}

export const coursesBlock = {
  label: 'Online learning',
  title: 'Top online courses',
  moreText: 'We assist you in finding the ideal tutor at no cost.',
  moreLabel: 'Browse all available courses',
  moreTo: '/course-one',
  items: ['angular', 'mongodb', 'operations', 'risk', 'design-systems', 'mern'].map((id) => {
    const course = byId(id)
    return {
      course,
      slug: course.slug,
      image: assets.coursePortraitImages[id],
    }
  }),
}

export const learning = {
  label: 'Why we are',
  title: 'World-class learning from anywhere',
  text: 'Lorem ipsum dolor sit amet consectetur. Pellentesque id quam mauris mus. Vitae diam dolor lacus amet integer ut.',
  counters: [
    { id: 'seasons', value: '1.5K', label: 'Finish seasons' },
    { id: 'enrolled', value: '7.8K', label: 'Enrolled' },
    { id: 'placement', value: '100%', label: 'Job placement' },
  ],
  questions: {
    title: 'Still have questions?',
    text: 'Lorem ipsum dolor sit amet conse ipsum blandit etiam aliquam.',
    ctaLabel: 'Get Started',
    ctaTo: '/contact-three',
  },
  video: {
    source: assets.homeVideo,
    poster: assets.homeVideoPoster,
  },
  woman: {
    image: assets.homeTwo.learningWoman,
    alt: 'Woman learning online',
  },
  yellowCircle: assets.homeTwo.learningYellowCircle,
  outlineCircle: assets.homeTwo.learningOutlineCircle,
}

export const offer = {
  label: 'what we Offer',
  title: 'Personalized learning for your ambitions',
  text: 'Lorem ipsum dolor sit amet consectetur. Pellentesque id quam mauris mus. Vitae diam dolor lacus amet integer ut.',
  ctaLabel: 'Get Course',
  ctaTo: '/course-one',
  background: assets.homeTwo.offerBackground,
}

export const clients = {
  text: 'Learn from 350+ leading universities and companies with us',
  logos: assets.homeTwo.partnerLogosDark,
  speed: '24s',
}

export const testimonial = {
  quoteImage: assets.homeTwo.quoteIcon,
  arrowImage: assets.homeTwo.sliderArrow,
  previousLabel: 'Previous testimonial',
  nextLabel: 'Next testimonial',
}

export const blogBlock = {
  label: 'Education Blog',
  title: 'Our news and ideas',
  text: 'Lorem ipsum dolor sit amet consectetur. Adipiscing eget risus tempus facilisis scelerisque vitae consectetur vitae. Amet faucibus venenatis donec mattis.',
}
