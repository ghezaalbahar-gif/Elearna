import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CtaBand from '../components/CtaBand'
import FaqHero from '../components/faq/FaqHero'
import FaqBrowser from '../components/faq/FaqBrowser'

export default function Faq() {
  useEffect(() => {
    document.title = 'Frequently asked questions'
  }, [])

  return (
    <div className="site">
      <Navbar />
      <main id="main-content" className="integrated-page">
        <FaqHero />
        <FaqBrowser />
        <CtaBand />
      </main>
      <Footer />
    </div>
  )
}
