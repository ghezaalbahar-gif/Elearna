import { eventDetailContent as body } from './eventsData'

export default function EventDetailContent() {
  return (
    <div className="min-w-0 flex-1 lg:max-w-[759px]">
      <h2 className="mt-[20px] mb-[10px] font-heading text-[25px] font-semibold leading-[35px] tracking-[-0.7px] text-ink lg:text-[35px] lg:leading-[42px] lg:tracking-[-1px]">
        {body.detailsHeading}
      </h2>
      <div className="flex flex-col gap-[10px]">
        {body.paragraphs.map((paragraph, index) => (
          <p
            key={`detail-${index}`}
            className="text-[14px] leading-[23px] text-muted lg:text-[17px] lg:leading-[28px]"
          >
            {paragraph}
          </p>
        ))}
      </div>

      <h3 className="mt-[10px] mb-[10px] font-heading text-[20px] font-semibold leading-[30px] tracking-[-0.5px] text-ink lg:text-[24px] lg:leading-[32px]">
        {body.contentHeading}
      </h3>
      <ul className="mb-[10px] list-disc space-y-[8px] pl-[20px] text-[14px] leading-[23px] text-muted marker:text-ink lg:text-[17px] lg:leading-[28px]">
        {body.bullets.map((bullet, index) => (
          <li key={`bullet-${index}`}>{bullet}</li>
        ))}
      </ul>

      <figure className="my-[10px] w-full">
        <img
          src={body.image}
          alt={body.imageAlt}
          loading="lazy"
          className="h-auto w-full object-cover"
        />
      </figure>

      <h3 className="mt-[10px] mb-[10px] font-heading text-[20px] font-semibold leading-[30px] tracking-[-0.5px] text-ink lg:text-[24px] lg:leading-[32px]">
        {body.managementHeading}
      </h3>
      <p className="text-[14px] leading-[23px] text-muted lg:text-[17px] lg:leading-[28px]">
        {body.managementParagraph}
      </p>
    </div>
  )
}
