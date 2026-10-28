# Elearna — Website Recreation

A single React + Vite site that combines the Home, About, Course, Blog, Pricing, FAQ, Team,
Instructor profile, Career, Events, Contact, Log in, and Sign up pages into one project with shared
navigation, footer, styling, routing, and a site-wide cart drawer.

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
| `/blog-one/:slug` | Blog post |
| `/pricing-one` | Pricing |
| `/faq` | FAQ |
| `/team` | Team listing |
| `/team-members/:slug` | Instructor profile |
| `/contact-three` | Contact |
| `/career` | Career listing |
| `/career/:slug` | Job details and application |
| `/events` | Events listing |
| `/events/:slug` | Event details and ticket form |
| `/log-in` | Log in |
| `/sign-up` | Sign up |

Any other route renders the shared `Placeholder` page. It is used for pages from the reference
site that were not part of the supplied projects: home-two/three, about-two, course-two/three,
pricing-two/three, blog-two/three, contact-one/two,
information/license, cart, and 404.

The reference's `/cart` page is not recreated as a route: the cart is the `Your Cart` drawer that
slides in over every page, opened from the header's cart icon.

## Project map

```
src/
├── App.jsx                  # Routes, cart provider/drawer, default title, reveal trigger
├── main.jsx                 # React root + BrowserRouter
├── index.css                # Design tokens, global styles, reveal/marquee/FAQ animations
├── assets/                  # Integrations' local assets (chat icon, contact background)
├── context/CartContext.jsx  # Cart items, drawer open state, subtotal maths
├── hooks/useReveal.js       # Shared scroll-reveal hook for both reveal systems
├── data/
│   ├── assets.js            # Remote image/video URLs
│   ├── navigation.js        # Header dropdowns, mobile nav, footer columns, header actions
│   ├── courses.js, courseListing.js, categories.js, benefits.js, testimonials.js
│   └── aboutContent.js      # About page content
├── pages/                   # One component per route
│   ├── Home.jsx, About.jsx, Category.jsx, CourseListing.jsx, CourseDetails.jsx
│   ├── BlogListing.jsx, BlogPost.jsx
│   ├── Pricing.jsx, Faq.jsx, Team.jsx, MemberProfile.jsx, ContactThree.jsx
│   ├── Career.jsx, CareerDetails.jsx
│   ├── Login.jsx, SignUp.jsx
│   └── Placeholder.jsx
└── components/
    ├── Navbar.jsx, Footer.jsx, CtaBand.jsx, CtaBandData.js
    ├── Home sections (Hero, Partners, Categories, Promo, Courses, Offer, Testimonials,
    │   Programs, Benefits, CTA) and shared cards
    ├── about/               # About page sections, AboutFooter, Reveal
    ├── pricing/             # PricingHero, PricingFaq + data
    ├── faq/                 # FaqHero, FaqBrowser + data
    ├── team/                # TeamHero, TeamSection, Member* + memberPage data
    ├── career/              # CareerHero, WhyCareer, JobOpenings/JobCard, JobDescription,
    │   JobDetails, ApplicationForm + careerData, motion
    ├── blog/                # BlogHero, BlogGrid, Pagination, PostDetail + their data
    ├── auth/                # AuthLayout, AuthCard, AuthInput, AuthCheckbox, AuthFooter
    ├── cart/                # CartDrawer, CartHeader, CartItem, EmptyCart, CartButton
    ├── events/              # EventsHero, EventsGrid, EventCard, EventDetailHero,
    │   EventDetailContent, EventTicketForm, EventManager, UpcomingEvents + eventsData
    └── contact/             # ContactPage, ContactHero, ChatButton, ContactFooter + data
```

## Integration notes

- The integrated pages keep their original markup, classes, and Tailwind utilities. Only imports,
  asset paths, and links were adapted.
- Navigation, footer, and scroll-to-top are shared. Contact uses the shared header plus the
  contact project's own fixed footer, as designed.
- `CtaBand`, used by Pricing, FAQ, Team, Career, and Blog, is stored once in `src/components/` and
  its buttons use React Router links.
- The career project switched layout at custom `xs`/`tab`/`wide` breakpoints; those are written as
  `min-[480px]`/`min-[992px]`/`min-[1440px]` utilities here, so `@theme` keeps the repo's own tokens.
- The blog project routed posts through `#/post/...`; posts now live at `/blog-one/:slug`, and
  `BlogListing` re-runs `useReveal` on page change because paginated cards mount after the
  route-level reveal pass.
- The Events listing and all six detail pages are driven by one file,
  `src/components/events/eventsData.js`. The reference renders the same rich-text body on every
  event, so that copy lives once in `eventDetailContent`; only the title, date, location, time,
  images, manager, booked slots, and ticket price vary per event and are stored on each record.
  `EventDetails` looks the record up with `useParams()` and redirects to `/events` for a slug that
  does not exist, so refreshing a detail URL keeps working.
- The card is only its image: the yellow "See event details" band and the white location/time/title
  panel are one group parked at `translate-y-full` inside the card's `overflow-hidden`, and
  `group-hover` / `group-focus` slide the pair up to rest on the image's bottom edge, exactly as on
  the reference. The date badge is a second, independent layer parked at `translate-x-full`. The
  band reuses the repo's existing `marquee-track` keyframe and is `aria-hidden`, so a card's
  accessible name stays its date, location, time, and title.
- The shared `.integrated-page p { margin: 0 }` reset in `src/index.css` is unlayered, so it beats
  any `m*-[…]` utility on a `<p>`. Every vertical gap on these pages is therefore carried by a
  wrapper or a non-paragraph element (`mt-[25px]` / `min-[768px]:mt-[60px]` on the card grid,
  `flex flex-col gap-[10px]` around the detail paragraphs, `<div>` for the form's error and status
  lines).
- `Events` was already a link in the Pages dropdown, the mobile nav, and the footer Quick links;
  those now resolve to the real `/events` route instead of the placeholder.
- The ticket form validates quantity and email on the client. It shows the reference's own
  "The ticket will be sent via email" note and, because there is no booking backend, a
  `role="status"` line saying plainly that no ticket was reserved rather than the reference's
  "submission received" copy. A Total row appears only for paid events when quantity is above 1.
- Design tokens (`brand`, `ink`, `deep`, `muted`, `blue`, `mist`, `haze`, `line`, `amber`, `utility`,
  `ease-expo`) are declared in Tailwind v4 `@theme` in `src/index.css`.
- Legacy global element rules are wrapped in `@layer base` so Tailwind utilities on the integrated
  pages win the cascade.
- `useReveal` supports both the legacy `[data-reveal]` animations and the integrated `.reveal`
  pages, and disables motion under `prefers-reduced-motion`.
- Course, instructor, pricing, FAQ, and contact links that referenced missing pages now resolve to
  the implemented routes (`/courses/...`, `/team-members/...`, `/contact-three`), as do the header's
  Login and Register actions (`/log-in`, `/sign-up`).
- The auth screens keep the reference's own chrome instead of the shared `Navbar`/`Footer`: a logo
  bar on top, the membership doodle over `ink`, and the credit bar at the bottom. Their link sets
  come from `ContactFooterData`, and the forms validate on the client only — nothing is sent, and
  the message says so rather than claiming a session was created.
- The cart drawer is mounted once in `App.jsx` behind the routes, so its state survives navigation.
  `CartProvider` holds the items and the open flag; `CartContext` converts the `price` strings in
  `data/courses.js` (`'Free'`, `'$59'`) into numbers for the subtotal, so no price is invented.
  The header icon, `Enroll` on the home and listing cards, `Enroll` on the course hero and
  curriculum summary, and `Buy course` on the category cards all add the real course; the buttons
  that used to link to `/courses/:slug/enroll` now perform that action instead, and the enroll
  route still resolves for direct visits.
- Its geometry follows the reference: 480px max width flush right (`w-full` below that), `mist`
  panel, 1px `muted` rules above the footer and under the header, a 65px header at desktop
  (63px below 992px) with the 24px/32px `Your Cart` heading, and `No items found.` centred in the
  remaining space with no illustration or button. The scrim is `--color-cart-scrim`
  (black at 72%), and body scroll is locked and restored while it is open.

## Verification

- Production build succeeds (one non-blocking chunk-size warning) and the preview server serves it.
- Home, About, category, course listing/details, blog, pricing, FAQ, team, instructor profile,
  contact, events, log-in, and sign-up routes render with the correct titles and no console errors.
- Navigation checked across header dropdowns, mobile menu (burger → Pages → Team), footer links,
  course cards, team cards, FAQ tabs, pricing accordions, contact form, chat panel, and the
  log-in ↔ sign-up cross-links.
- No horizontal overflow observed at the tested viewports. The auth pages were measured at 320,
  414, 768, 992, 1440, and 1920 against the reference's own per-breakpoint values (card padding,
  40/50px inputs, heading scale, checkbox offsets, footer stacking).
- Placeholder routes render the shared placeholder page with a working link back to Home.
- Cart drawer checked in the browser: opening from the header icon, closing with the X, the scrim,
  and Escape (each restoring focus to the icon and releasing the scroll lock), clicks inside the
  panel leaving it open, items surviving close/reopen and route changes, adding the same course
  twice raising its quantity instead of duplicating the row, the subtotal recomputing on quantity
  changes ($59 × 3 + $49 = $226), removing every item returning to `No items found.`, and the
  item list scrolling on its own while the header and footer stay pinned. No horizontal overflow
  and no console errors.
- Events checked in the browser: six cards in the reference's order with its own images, dates,
  cities, and times; the date badge and the band-plus-text group confirmed parked at
  `translate: 100%` and `0px 100%`, and with `:hover` active both compute to `0px` with the group's
  bottom edge flush against the card's; and every detail URL resolving on refresh,
  each rendering that event's own location, time, price, slots, and manager rather than a reused
  record. Ticket form checked against the reference's own prices: quantity and email validation,
  a `Total` that only appears for paid events above quantity 1 (`$200 × 3 → Total $600`), and no
  row on free events. Card images load at their natural 820×940, no horizontal overflow at 320,
  360, 390, 414, or 518, and a clean console.
