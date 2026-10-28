import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { homeNav } from '../data/navigation'
import HomeTwoHero from '../components/homeTwo/HomeTwoHero'
import HomeTwoDetails from '../components/homeTwo/HomeTwoDetails'
import HomeTwoCategories from '../components/homeTwo/HomeTwoCategories'
import HomeTwoDiscover from '../components/homeTwo/HomeTwoDiscover'
import HomeTwoCourses from '../components/homeTwo/HomeTwoCourses'
import HomeTwoLearning from '../components/homeTwo/HomeTwoLearning'
import HomeTwoOffer from '../components/homeTwo/HomeTwoOffer'
import HomeTwoClients from '../components/homeTwo/HomeTwoClients'
import HomeTwoTestimonial from '../components/homeTwo/HomeTwoTestimonial'
import HomeTwoBlog from '../components/homeTwo/HomeTwoBlog'

export default function HomeTwo() {
  useEffect(() => {
    document.title = 'Elearna - Home Two'
  }, [])

  return (
    <div className="site">
      <Navbar navItems={homeNav} />
      <main id="main-content">
        <HomeTwoHero />
        <HomeTwoDetails />
        <HomeTwoCategories />
        <HomeTwoDiscover />
        <HomeTwoCourses />
        <HomeTwoLearning />
        <HomeTwoOffer />
        <HomeTwoClients />
        <HomeTwoTestimonial />
        <HomeTwoBlog />
      </main>
      <Footer />
    </div>
  )
}
