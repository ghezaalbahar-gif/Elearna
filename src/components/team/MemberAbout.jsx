import { about } from './memberPage'

export default function MemberAbout() {
  return (
    <section className="bg-[#f1f2f3] px-[15px] py-[50px] lg:py-[80px] 2xl:py-[110px]">
      <div className="mx-auto w-full max-w-[1320px]">
        <div className="flex flex-col items-start gap-[14px] md:gap-[30px] lg:flex-row lg:items-start lg:justify-between">
          <p className="reveal text-[12px] font-medium uppercase leading-[23px] tracking-[0.5px] text-ink md:text-[15px]">
            {about.kicker}
          </p>

          <div className="reveal flex w-full max-w-[975px] flex-1 items-start gap-[20px] md:gap-[30px]">
            <span aria-hidden className="hidden h-[109px] w-[6px] shrink-0 bg-amber md:block" />
            <div className="flex-1 md:max-w-[880px]">
              <h2 className="mb-[20px] font-heading text-[25px] font-semibold leading-[35px] tracking-[-0.7px] text-ink md:text-[30px] md:leading-[37px] lg:text-[35px] lg:leading-[42px] lg:tracking-[-1px]">
                {about.lead}
              </h2>
              <p className="mb-[30px] text-[14px] leading-[23px] tracking-[0.5px] text-muted md:text-[17px] md:leading-[28px] lg:mb-[60px]">
                {about.body}
              </p>

              <div className="grid grid-cols-1 gap-[40px] md:grid-cols-2 md:gap-[50px]">
                {about.skills.map((skill) => (
                  <div key={skill.title} className="flex items-start gap-[30px]">
                    <div className="flex flex-1 flex-col gap-[15px]">
                      <h3 className="font-heading text-[20px] font-semibold leading-[30px] tracking-[-0.5px] text-ink md:text-[24px] md:leading-[32px]">
                        {skill.title}
                      </h3>
                      <p className="text-[14px] leading-[23px] tracking-[0.5px] text-muted md:text-[17px] md:leading-[28px]">
                        {skill.text}
                      </p>
                    </div>
                    <span className="shrink-0 font-heading text-[50px] font-medium leading-[44px] tracking-[0.5px] text-ink [writing-mode:vertical-rl] md:text-[70px] md:leading-[54px] lg:text-[80px] lg:leading-[64px]">
                      {skill.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
