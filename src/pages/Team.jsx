import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CtaBand from '../components/CtaBand'
import TeamHero from '../components/team/TeamHero'
import TeamSection from '../components/team/TeamSection'

export default function Team() {
  useEffect(() => {
    document.title = 'Team'
  }, [])

  return (
    <div className="site">
      <Navbar />
      <main id="main-content" className="integrated-page">
        <TeamHero />
        <TeamSection />
        <CtaBand />
      </main>
      <Footer />
    </div>
  )
}
