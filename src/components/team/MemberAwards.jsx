import { awards } from './memberPage'

export default function MemberAwards() {
  return (
    <section className="bg-[rgba(255,182,6,0.06)] px-[15px] py-[50px] lg:py-[80px] 2xl:py-[110px]">
      <div className="mx-auto w-full max-w-[1320px]">
        <div className="mb-[55px] flex max-w-[1220px] flex-col items-start gap-[15px] md:flex-row md:items-start md:justify-between md:gap-[30px]">
          <div className="reveal flex w-full max-w-[455px] flex-col items-start">
            <p className="text-[12px] font-medium uppercase leading-[23px] tracking-[0.5px] text-ink md:text-[15px]">
              {awards.kicker}
            </p>
            <h2 className="mt-[15px] font-heading text-[30px] font-semibold leading-[40px] tracking-[-1.3px] text-ink md:text-[40px] md:leading-[44px] md:tracking-[-1.5px] lg:text-[48px] lg:leading-[52px]">
              {awards.heading}
            </h2>
          </div>
          <p className="reveal w-full max-w-[374px] text-[14px] leading-[23px] tracking-[0.5px] text-muted md:text-[17px] md:leading-[28px]">
            {awards.body}
          </p>
        </div>

        <div className="grid max-w-[1210px] grid-cols-1 gap-[50px] md:grid-cols-2 md:gap-x-[25px] lg:grid-cols-3 lg:gap-x-[50px]">
          {awards.items.map((award) => (
            <div key={award.year} className="reveal flex items-start gap-[30px]">
              <span className="shrink-0 bg-gradient-to-r from-[rgba(27,44,48,0.15)] to-[rgba(27,44,48,0)] bg-clip-text text-[60px] font-semibold leading-[48px] text-transparent [writing-mode:vertical-rl] md:text-[80px] md:leading-[60px] lg:text-[110px] lg:leading-[84px]">
                {award.year}
              </span>
              <div className="flex flex-col items-start gap-[28px]">
                <img src={award.icon} alt="" className="h-[62px] w-[40px] object-contain" />
                <h3 className="font-heading text-[20px] font-semibold leading-[30px] tracking-[-0.5px] text-ink md:text-[24px] md:leading-[32px]">
                  {award.name}
                </h3>
                <p className="text-[14px] leading-[23px] tracking-[0.5px] text-muted md:text-[17px] md:leading-[28px]">
                  {award.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
