import EventCard from './EventCard'
import { upcomingEvents, upcomingEventsIntro } from './eventsData'

export default function UpcomingEvents({ currentSlug }) {
  const related = upcomingEvents(currentSlug)

  return (
    <section className="bg-mist px-[15px] pt-[50px] pb-[60px] min-[992px]:pt-[80px] min-[992px]:pb-[90px] min-[1440px]:pt-[110px] min-[1440px]:pb-[120px]">
      <div className="mx-auto w-full max-w-[1320px]">
        <div className="reveal mx-auto flex w-full max-w-[728px] flex-col items-center text-center">
          <h2 className="mt-[15px] mb-[20px] font-heading text-[30px] font-semibold leading-[40px] tracking-[-1.3px] text-ink min-[992px]:text-[48px] min-[992px]:leading-[52px] min-[992px]:tracking-[-1.5px]">
            {upcomingEventsIntro.heading}
          </h2>
          <p className="text-[14px] leading-[23px] text-muted min-[992px]:text-[17px] min-[992px]:leading-[28px]">
            {upcomingEventsIntro.description}
          </p>
        </div>

        <div className="mt-[40px] grid grid-cols-1 gap-[30px] min-[768px]:grid-cols-2 min-[992px]:grid-cols-3">
          {related.map((event, index) => (
            <EventCard key={event.slug} event={event} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
