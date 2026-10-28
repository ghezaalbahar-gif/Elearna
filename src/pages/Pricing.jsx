import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CtaBand from '../components/CtaBand'
import PricingHero from '../components/pricing/PricingHero'
import PricingFaq from '../components/pricing/PricingFaq'

export default function Pricing() {
  useEffect(() => {
    document.title = 'Flexible pricing plan for everyone'
  }, [])

  return (
    <div className="site">
      <Navbar />
      <main id="main-content" className="integrated-page">
        <PricingHero />
        <PricingFaq />
        <CtaBand />
      </main>
      <Footer />
    </div>
  )
}
