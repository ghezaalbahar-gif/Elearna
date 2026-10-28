import { eventsHero } from './eventsData'

export default function EventsHero() {
  return (
    <section
      className="relative isolate overflow-hidden bg-ink px-[15px] pt-[145px] pb-[115px] min-[768px]:pt-[157px] min-[992px]:pt-[220px] min-[992px]:pb-[200px]"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("${eventsHero.image}")`,
        backgroundPosition: '0 0, 50%',
        backgroundRepeat: 'repeat, no-repeat',
        backgroundSize: 'auto, cover',
      }}
    >
      <div className="mx-auto w-full max-w-[1320px]">
        <div className="reveal flex w-full max-w-[644px] flex-col items-start">
          <p className="text-[12px] font-medium uppercase leading-[23px] tracking-[0.5px] text-mist min-[992px]:text-[15px]">
            {eventsHero.label}
          </p>
          <h1 className="mt-[15px] font-heading text-[35px] font-semibold leading-[35px] tracking-[-1.3px] text-white min-[992px]:text-[60px] min-[992px]:leading-[60px] min-[992px]:tracking-[-2.3px]">
            {eventsHero.heading}
          </h1>
        </div>
      </div>
    </section>
  )
}
