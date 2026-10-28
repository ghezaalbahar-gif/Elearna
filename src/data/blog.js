import { assets } from './assets'

const B = 'https://cdn.prod.website-files.com/66cbf9eecd2d43a6644e1854'

export const blogHero = {
  eyebrow: 'News and journals',
  title: 'Planning to transition to a new career?',
  image: assets.blogHeroBackground,
}

export const blogPosts = [
  {
    slug: 'improve-knowledge-retention-with-visual-learning',
    category: 'Career',
    title: 'Improve knowledge retention with visual learning',
    date: 'October 4, 2024',
    image: `${B}/66ff7196253a4813606a5f52_Blog%20Small%20Thumbnail-12.webp`,
  },
  {
    slug: 'master-online-learning-with-proven-strategies',
    category: 'Development',
    title: 'Master online learning with proven strategies',
    date: 'October 4, 2024',
    image: `${B}/66ff6e0a6f9b375fbca970fe_Blog%20Small%20Thumbnail-11.webp`,
  },
  {
    slug: 'how-to-enhance-your-learning-experience-today',
    category: 'Teaching',
    title: 'How to enhance your learning experience today',
    date: 'October 3, 2024',
    image: `${B}/66ff6a72dd07492f0cbb0a6d_Blog%20Small%20Thumbnail-10.webp`,
  },
  {
    slug: 'the-evolution-of-teaching-tools-in-the-21st-century',
    category: 'Career',
    title: 'The evolution of teaching tools in the 21st century',
    date: 'September 17, 2024',
    image: `${B}/66e93b2410f6e96cbbc70c8d_Blog%20Small%20Thumbnail.webp`,
  },
  {
    slug: 'the-role-of-parental-involvement-in-academic-achievement',
    category: 'Development',
    title: 'The role of parental involvement in academic achievement',
    date: 'September 16, 2024',
    image: `${B}/66e93b734e839a98823ff445_Blog%20Small%20Thumbnail-3.webp`,
  },
  {
    slug: 'the-role-of-technology-in-modern-classrooms',
    category: 'Teaching',
    title: 'The role of technology in modern classrooms',
    date: 'September 14, 2024',
    image: `${B}/66e93bb940c86a7d79f1e185_Blog%20Small%20Thumbnail-8.webp`,
  },
  {
    slug: 'how-globalization-is-shaping-curriculum-development',
    category: 'Career',
    title: 'How globalization is shaping curriculum development',
    date: 'September 13, 2024',
    image: `${B}/66e93bf4c8aeb4955eb8be4c_Blog%20Small%20Thumbnail-2.webp`,
  },
  {
    slug: 'how-personalized-learning-is-changing-education',
    category: 'Development',
    title: 'How personalized learning is changing education',
    date: 'September 12, 2024',
    image: `${B}/66e93c5403c2878a6a504f80_Blog%20Small%20Thumbnail-7.webp`,
  },
  {
    slug: 'empowering-teachers-with-continuous-professional-development',
    category: 'Career',
    title: 'Empowering teachers with continuous professional development',
    date: 'September 11, 2024',
    image: `${B}/66e93c6c4ffe823e68be9c67_Blog%20Small%20Thumbnail-6.webp`,
  },
  {
    slug: 'advances-in-educational-technology-and-online-learning',
    category: 'Teaching',
    title: 'Advances in educational technology and online learning',
    date: 'September 2, 2024',
    image: `${B}/66e93c8560cf638d71097d98_Blog%20Small%20Thumbnail-4.webp`,
  },
  {
    slug: 'exploring-the-benefits-of-project-based-learning',
    category: 'Career',
    title: 'Exploring the benefits of project-based learning',
    date: 'September 2, 2024',
    image: `${B}/66e93c9a40c86a7d79f2a22b_Blog%20Small%20Thumbnail-9.webp`,
  },
  {
    slug: 'promoting-inclusivity-and-diversity-in-education',
    category: 'Development',
    title: 'Promoting inclusivity and diversity in education',
    date: 'August 29, 2024',
    image: `${B}/66e94a24c519df88d828f365_Blog%20Small%20Thumbnail-5.webp`,
  },
]

export const blogPages = [blogPosts.slice(0, 6), blogPosts.slice(6)]
