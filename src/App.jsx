import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Category from './pages/Category'
import CourseListing from './pages/CourseListing'
import CourseDetails from './pages/CourseDetails'
import BlogListing from './pages/BlogListing'
import BlogPost from './pages/BlogPost'
import Pricing from './pages/Pricing'
import Faq from './pages/Faq'
import Team from './pages/Team'
import MemberProfile from './pages/MemberProfile'
import ContactThree from './pages/ContactThree'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Career from './pages/Career'
import CareerDetails from './pages/CareerDetails'
import Events from './pages/Events'
import EventDetails from './pages/EventDetails'
import Placeholder from './pages/Placeholder'
import ScrollToTop from './components/ScrollToTop'
import CartDrawer from './components/cart/CartDrawer'
import { CartProvider } from './context/CartContext'
import useReveal from './hooks/useReveal'

const DEFAULT_TITLE = 'Elearna — Online Learning Platform'

function RouteReveal() {
  const { pathname } = useLocation()
  useReveal(pathname)
  // Reset first so pages without their own title effect don't inherit the previous route's title.
  useEffect(() => {
    document.title = DEFAULT_TITLE
  }, [pathname])
  return null
}

export default function App() {
  useEffect(() => {
    document.documentElement.classList.add('js-ready')
  }, [])

  return (
    <CartProvider>
      <>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <ScrollToTop />
        <RouteReveal />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about-one" element={<About />} />
          <Route path="/category/:slug" element={<Category />} />
          <Route path="/courses" element={<CourseListing />} />
          <Route path="/course-one" element={<CourseListing />} />
          <Route path="/courses/:slug" element={<CourseDetails />} />
          <Route path="/courses/:slug/enroll" element={<CourseDetails />} />
          <Route path="/blog-one" element={<BlogListing />} />
          <Route path="/blog-one/:slug" element={<BlogPost />} />
          <Route path="/pricing-one" element={<Pricing />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/team" element={<Team />} />
          <Route path="/team-members/:slug" element={<MemberProfile />} />
          <Route path="/contact-three" element={<ContactThree />} />
          <Route path="/log-in" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/career" element={<Career />} />
          <Route path="/career/:slug" element={<CareerDetails />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:slug" element={<EventDetails />} />
          <Route path="*" element={<Placeholder />} />
        </Routes>
      </>
      <CartDrawer />
    </CartProvider>
  )
}
