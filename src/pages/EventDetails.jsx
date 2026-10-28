import { useEffect } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CtaBand from '../components/CtaBand'
import EventDetailHero from '../components/events/EventDetailHero'
import EventDetailContent from '../components/events/EventDetailContent'
import EventTicketForm from '../components/events/EventTicketForm'
import EventManager from '../components/events/EventManager'
import UpcomingEvents from '../components/events/UpcomingEvents'
import { findEvent } from '../components/events/eventsData'

export default function EventDetails() {
  const { slug } = useParams()
  const event = findEvent(slug)

  useEffect(() => {
    document.title = event ? event.title : 'Events'
  }, [event])

  if (!event) return <Navigate to="/events" replace />

  return (
    <div className="site">
      <Navbar />
      <main id="main-content" className="integrated-page">
        <EventDetailHero event={event} />
        <section className="px-[15px] pt-[30px] pb-[60px] min-[992px]:pt-[65px] min-[992px]:pb-[85px] min-[1440px]:pt-[85px] min-[1440px]:pb-[115px]">
          <div className="mx-auto flex w-full max-w-[1320px] flex-col items-start justify-between gap-[30px] min-[992px]:flex-row min-[992px]:items-start min-[992px]:gap-[40px]">
            <EventDetailContent />
            <div className="flex w-full flex-col items-center gap-[30px] min-[480px]:flex-row min-[992px]:sticky min-[992px]:top-[100px] min-[992px]:mt-[30px] min-[992px]:w-auto min-[992px]:max-w-[410px] min-[992px]:flex-1 min-[992px]:flex-col min-[992px]:items-stretch">
              <EventTicketForm event={event} />
              <EventManager event={event} />
            </div>
          </div>
        </section>
        <UpcomingEvents currentSlug={event.slug} />
        <CtaBand />
      </main>
      <Footer />
    </div>
  )
}
