import { ArrowLeft } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const pageNames = {
  '/courses': 'Courses',
  '/cart': 'Cart',
  '/login': 'Login',
  '/sign-up': 'Register',
  '/contact-one': 'Contact',
  '/career': 'Career',
  '/events': 'Events',
  '/team': 'Instructor',
  '/about-one': 'About',
  '/blog-one': 'Blog',
  '/pricing-one': 'Pricing',
}

export default function Placeholder() {
  const { pathname } = useLocation()
  const pageName = pageNames[pathname] ?? 'This page'

  return (
    <div className="site placeholder-site">
      <Navbar variant="solid" />
      <main id="main-content" className="placeholder-main">
        <div className="container placeholder-card">
          <span className="eyebrow eyebrow--brand">Phase 1 preview</span>
          <h1>{pageName} not completed</h1>
          <p>
            The page is coming soon 
          </p>
          <p className="placeholder-path">
            {/* Route: <code>{pathname}</code> */}
          </p>
          <Link className="btn btn-dark" to="/">
            <ArrowLeft size={18} aria-hidden="true" />
            Back to Home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  )
}
