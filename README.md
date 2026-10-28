# Elearna — Website Recreation

A single React + Vite site that combines the Home, About, Course, Blog, Pricing, FAQ, Team,
Instructor profile, and Contact pages into one project with shared navigation, footer, styling,
and routing.

## Requirements

- Node.js 20.19+ (tested with Node 24)
- npm

## Run locally

Dependencies are not bundled with this folder, so install them first:

```bash
npm install
npm run dev
```

Open the URL Vite prints (default: http://localhost:5173).

## Production build

```bash
npm run build
npm run preview
```

## Routes

| Route | Page |
| --- | --- |
| `/` | Home |
| `/about` | About |
| `/category/:slug` | Course category |
| `/courses` | Course listing |
| `/courses/:slug` | Course details |
| `/courses/:slug/enroll` | Course details (enroll view) |
| `/blog-one` | Blog listing |
| `/pricing-one` | Pricing |
| `/faq` | FAQ |
| `/team` | Team listing |
| `/team-members/:slug` | Instructor profile |
| `/contact-three` | Contact |

Any other route renders the shared `Placeholder` page. It is used for pages from the reference
site that were not part of the supplied projects: home-two/three, about-two, course-two/three,
pricing-two/three, blog-two/three, blog post details, contact-one/two, career, events,
information/license, cart, login, sign-up, and 404.

## Project map

```
src/
├── App.jsx                  # Routes, default document title, reveal trigger
├── main.jsx                 # React root + BrowserRouter
├── index.css                # Design tokens, global styles, reveal/marquee/FAQ animations
├── assets/                  # Integrations' local assets (chat icon, contact background)
├── hooks/useReveal.js       # Shared scroll-reveal hook for both reveal systems
├── data/
│   ├── assets.js            # Remote image/video URLs
│   ├── navigation.js        # Header dropdowns, mobile nav, footer columns, header actions
│   ├── courses.js, courseListing.js, categories.js, benefits.js, testimonials.js
│   ├── aboutContent.js      # About page content
│   └── blog.js              # Blog hero and post pages
├── pages/                   # One component per route
│   ├── Home.jsx, About.jsx, Category.jsx, CourseListing.jsx, CourseDetails.jsx
│   ├── BlogListing.jsx
│   ├── Pricing.jsx, Faq.jsx, Team.jsx, MemberProfile.jsx, ContactThree.jsx
│   └── Placeholder.jsx
└── components/
    ├── Navbar.jsx, Footer.jsx, CtaBand.jsx, CtaBandData.js
    ├── Home sections (Hero, Partners, Categories, Promo, Courses, Offer, Testimonials,
    │   Programs, Benefits, CTA) and shared cards
    ├── about/               # About page sections, AboutFooter, Reveal
    ├── pricing/             # PricingHero, PricingFaq + data
    ├── faq/                 # FaqHero, FaqBrowser + data
    ├── team/                # TeamHero, TeamSection, Member* + memberPage data
    └── contact/             # ContactPage, ContactHero, ChatButton, ContactFooter + data
```

## Integration notes

- The integrated pages keep their original markup, classes, and Tailwind utilities. Only imports,
  asset paths, and links were adapted.
- Navigation, footer, and scroll-to-top are shared. Contact uses the shared header plus the
  contact project's own fixed footer, as designed.
- `CtaBand`, used by Pricing, FAQ, and Team, is stored once in `src/components/` and its buttons use
  React Router links.
- Design tokens (`brand`, `ink`, `deep`, `muted`, `blue`, `mist`, `haze`, `line`, `amber`, `utility`,
  `ease-expo`) are declared in Tailwind v4 `@theme` in `src/index.css`.
- Legacy global element rules are wrapped in `@layer base` so Tailwind utilities on the integrated
  pages win the cascade.
- `useReveal` supports both the legacy `[data-reveal]` animations and the integrated `.reveal`
  pages, and disables motion under `prefers-reduced-motion`.
- Course, instructor, pricing, FAQ, and contact links that referenced missing pages now resolve to
  the implemented routes (`/courses/...`, `/team-members/...`, `/contact-three`).

## Verification

- Production build succeeds (one non-blocking chunk-size warning) and the preview server serves it.
- Home, About, category, course listing/details, blog, pricing, FAQ, team, instructor profile, and
  contact routes render with the correct titles and no console errors.
- Navigation checked across header dropdowns, mobile menu (burger → Pages → Team), footer links,
  course cards, team cards, FAQ tabs, pricing accordions, contact form, and chat panel.
- No horizontal overflow observed at the tested viewports.
- Placeholder routes render the shared placeholder page with a working link back to Home.
