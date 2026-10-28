import { eventDetailContent as body } from './eventsData'

export default function EventManager({ event }) {
  return (
    <div className="flex w-full flex-col items-center rounded-[4px] bg-mist px-[25px] pt-[40px] pb-[30px] min-[480px]:min-w-0 min-[480px]:flex-1 min-[480px]:px-[40px]">
      <div className="mb-[30px] flex w-full flex-col items-center justify-between gap-[30px] min-[992px]:flex-row min-[992px]:items-center">
        <img
          src={event.managerImage}
          alt=""
          width="126"
          height="126"
          loading="lazy"
          className="h-auto w-[126px] shrink-0 rounded-full object-cover"
        />
        <div className="flex flex-col items-center gap-[6px] text-center min-[992px]:items-start min-[992px]:text-left">
          <p className="text-[12px] font-medium uppercase leading-[23px] tracking-[0.5px] text-ink min-[992px]:text-[15px]">
            {body.managerLabel}
          </p>
          <p className="font-heading text-[20px] font-semibold leading-[30px] tracking-[-0.5px] text-ink min-[992px]:text-[24px] min-[992px]:leading-[32px] min-[992px]:tracking-[-0.5px]">
            {event.manager}
          </p>
        </div>
      </div>
      <p className="text-center text-[14px] leading-[23px] text-muted min-[992px]:text-[17px] min-[992px]:leading-[28px]">
        {body.managerBlurb}
      </p>
    </div>
  )
}
