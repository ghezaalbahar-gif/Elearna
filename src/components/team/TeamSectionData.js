const CDN = 'https://cdn.prod.website-files.com/66cbf9eecd2d43a6644e1854'

export const intro = {
  kicker: 'Contact Us',
  heading: 'Know our expert team agents, they solve your questions',
  body: 'Lorem ipsum dolor sit amet consectetur. Neque libero donec hendrerit nam id',
}

// `slug` is the profile route: /team-members/<slug>. The same list drives the
// listing cards and the eight detail pages, so a name or photo edited here
// updates both.
export const members = [
  { slug: 'leslie-upton', name: 'Leslie Upton', role: 'instructor', image: `${CDN}/66e54e091763e997592e23aa_Team%20Member-2.webp` },
  { slug: 'darnell-kuphal', name: 'Darnell Kuphal', role: 'instructor', image: `${CDN}/66e54dfe163cc2b616b99dd3_Team%20Member-3.webp` },
  { slug: 'steven-roob', name: 'Steven Roob', role: 'instructor', image: `${CDN}/66e54dddec07c3fa3f20027a_Team%20Member-4.webp` },
  { slug: 'wanda-abshire', name: 'Wanda Abshire', role: 'instructor', image: `${CDN}/66e54da5dd0e5c0326754533_Team%20Member-5.webp` },
  { slug: 'lee-schmitt', name: 'Lee Schmitt', role: 'instructor', image: `${CDN}/66e54d38f0ccaa6615e57338_Team%20Member.webp` },
  { slug: 'jasmine-konopelski', name: 'Jasmine Konopelski', role: 'instructor', image: `${CDN}/66e54d1d831de420da7dd70f_Team%20Member-6.webp` },
  { slug: 'tonya-flatley', name: 'Tonya Flatley', role: 'instructor', image: `${CDN}/66e54cf958de957ca8c9be63_Team%20Member-7.webp` },
  { slug: 'colin-fay', name: 'Colin Fay', role: 'instructor', image: `${CDN}/66e54cd0f0ccaa6615e5101f_Team%20Member-8.webp` },
]

export const memberBySlug = (slug) => members.find((member) => member.slug === slug)
