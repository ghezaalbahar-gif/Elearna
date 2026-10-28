import EventCard from './EventCard'
import { events, eventsIntro } from './eventsData'

export default function EventsGrid() {
  return (
    <section className="px-[15px] py-[50px] min-[992px]:pt-[80px] min-[992px]:pb-[90px] min-[1440px]:pt-[110px] min-[1440px]:pb-[120px]">
      <div className="mx-auto w-full max-w-[1320px]">
        <div className="reveal mx-auto flex w-full max-w-[725px] flex-col items-center text-center">
          <p className="text-[12px] font-medium uppercase leading-[23px] tracking-[0.5px] text-ink min-[992px]:text-[15px]">
            {eventsIntro.label}
          </p>
          <h2 className="mt-[15px] mb-[12px] font-heading text-[30px] font-semibold leading-[40px] tracking-[-1.3px] text-ink min-[992px]:text-[48px] min-[992px]:leading-[52px] min-[992px]:tracking-[-1.5px]">
            {eventsIntro.heading}
          </h2>
          <p className="text-[14px] leading-[23px] text-muted min-[992px]:text-[17px] min-[992px]:leading-[28px]">
            {eventsIntro.description}
          </p>
        </div>

        <div className="mt-[25px] grid grid-cols-1 gap-[30px] min-[768px]:mt-[60px] min-[768px]:grid-cols-2 min-[992px]:grid-cols-3">
          {events.map((event, index) => (
            <EventCard key={event.slug} event={event} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
