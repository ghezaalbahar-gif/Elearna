export default function EventDetailHero({ event }) {
  return (
    <section
      className="relative isolate overflow-hidden bg-ink px-[15px] pt-[130px] pb-[60px] min-[768px]:pt-[165px] min-[768px]:pb-[120px] min-[992px]:pt-[280px] min-[992px]:pb-[177px]"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("${event.banner}")`,
        backgroundPosition: '0 0, 50%',
        backgroundRepeat: 'repeat, no-repeat',
        backgroundSize: 'auto, cover',
      }}
    >
      <div className="mx-auto w-full max-w-[939px]">
        <div className="reveal flex flex-col items-center text-center">
          <p className="flex flex-wrap items-center justify-center gap-[10px] text-[13px] font-medium uppercase leading-[12px] text-white">
            <span>{event.location}</span>
            <span className="h-[5px] w-[5px] shrink-0 rounded-full bg-white" />
            <span>{event.time}</span>
          </p>
          <h1 className="mt-[15px] mb-[20px] font-heading text-[35px] font-semibold leading-[35px] tracking-[-1.3px] text-white min-[992px]:text-[60px] min-[992px]:leading-[60px] min-[992px]:tracking-[-2.3px]">
            {event.title}
          </h1>
          <p className="text-[14px] leading-[23px] text-white min-[992px]:text-[17px] min-[992px]:leading-[28px]">
            {event.date}
          </p>
        </div>
      </div>
    </section>
  )
}
