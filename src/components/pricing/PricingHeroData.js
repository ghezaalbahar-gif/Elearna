export const pricingHero = {
  label: 'Pricing',
  title: 'Flexible pricing plan for everyone',
  image: 'https://cdn.prod.website-files.com/668cb7adec02e140422345de/66d96859eeb82869ca4d5d3f_About%20One%20Hero.webp',
  imageAlt: 'Decorative line-art background',
}

export const cycleLabels = { monthly: 'Monthly', yearly: 'Yearly' }

export const plans = [
  {
    id: 'basic',
    name: 'Basic',
    description: 'Lorem ipsum dolor sit amet consectetur erat ipsum non.',
    price: { monthly: '$199', yearly: '$139' },
    unit: '/month',
    features: [
      'Access to 10+ top courses',
      'Certification prep',
      'Customizable content',
      'AI-powered coding exercises',
    ],
    action: { label: 'Subscribe this plan', href: '#contact' },
    dark: false,
  },
  {
    id: 'standard',
    name: 'Standard',
    description: 'Lorem ipsum dolor sit amet consectetur erat ipsum non.',
    price: { monthly: '$299', yearly: '$279' },
    unit: '/month',
    features: [
      'Access to 30+ top courses',
      'Certification prep',
      'Customizable content',
      'AI-powered coding exercises',
    ],
    action: { label: 'Subscribe this plan', href: '#contact' },
    dark: false,
  },
  {
    id: 'premium',
    name: 'Premium',
    description: 'Lorem ipsum dolor sit amet consectetur erat ipsum non.',
    price: { monthly: '$699', yearly: '$659' },
    unit: '/month',
    features: [
      'Access to 50+ top courses',
      'Certification prep',
      'Customizable content',
      'AI-powered coding exercises',
      'Analytics and adoption reports',
    ],
    action: { label: 'Subscribe this plan', href: '#contact' },
    dark: true,
  },
]
