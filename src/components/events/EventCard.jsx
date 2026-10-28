import { Link } from 'react-router-dom'
import { marqueeLabel } from './eventsData'

function MarqueeTrain() {
  return (
    <span className="flex shrink-0 items-center gap-[15px] pr-[15px]">
      {[0, 1, 2].map((item) => (
        <span key={item} className="flex items-center gap-[15px]">
          <span className="font-heading text-[18px] font-semibold leading-[22px] tracking-[-0.5px] text-ink">
            {marqueeLabel}
          </span>
          <span className="h-[5px] w-[5px] shrink-0 rounded-full bg-ink" />
        </span>
      ))}
    </span>
  )
}

export default function EventCard({ event, index }) {
  return (
    <Link
      to={`/events/${event.slug}`}
      className="reveal group relative block overflow-hidden"
      style={{ transitionDelay: `${(index % 3) * 90}ms` }}
    >
      <img
        src={event.image}
        alt=""
        width="410"
        height="470"
        loading="lazy"
        className="block aspect-[410/470] w-full rounded-[4px] object-cover"
      />

      <span className="absolute right-0 top-0 flex max-w-[108px] translate-x-full items-center gap-[7px] rounded-bl-[4px] bg-white px-[17px] py-[7px] transition-transform duration-[650ms] ease-expo group-hover:translate-x-0 group-focus:translate-x-0">
        <span className="font-heading text-[25px] font-semibold leading-[35px] tracking-[-0.7px] text-ink min-[992px]:text-[35px] min-[992px]:leading-[42px] min-[992px]:tracking-[-1px]">
          {event.day}
        </span>
        <span className="flex flex-col gap-[4px] text-[13px] font-normal uppercase leading-[12px] text-muted">
          <span>{event.month}</span>
          <span>{event.year}</span>
        </span>
      </span>

      <span className="absolute inset-x-0 bottom-0 translate-y-full transition-transform duration-[650ms] ease-expo group-hover:translate-y-0 group-focus:translate-y-0">
        <span aria-hidden="true" className="block overflow-hidden bg-amber py-[7px]">
          <span className="marquee-track flex w-max">
            <MarqueeTrain />
            <MarqueeTrain />
            <MarqueeTrain />
          </span>
        </span>

        <span className="block bg-white px-[20px] py-[25px] text-center">
          <span className="mb-[12px] flex flex-wrap items-center justify-center gap-[10px] text-[13px] font-normal uppercase leading-[12px] text-muted">
            <span>{event.location}</span>
            <span className="h-[5px] w-[5px] shrink-0 rounded-full bg-muted" />
            <span>{event.time}</span>
          </span>
          <span className="block font-heading text-[17px] font-semibold leading-[23px] tracking-[-0.5px] text-ink min-[992px]:text-[20px] min-[992px]:leading-[25px]">
            {event.title}
          </span>
        </span>
      </span>
    </Link>
  )
}
