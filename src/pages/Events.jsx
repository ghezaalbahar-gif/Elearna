import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CtaBand from '../components/CtaBand'
import EventsHero from '../components/events/EventsHero'
import EventsGrid from '../components/events/EventsGrid'

export default function Events() {
  useEffect(() => {
    document.title = 'Events'
  }, [])

  return (
    <div className="site">
      <Navbar />
      <main id="main-content" className="integrated-page">
        <EventsHero />
        <EventsGrid />
        <CtaBand />
      </main>
      <Footer />
    </div>
  )
}
