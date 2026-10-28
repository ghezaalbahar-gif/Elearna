import { hero } from './memberPage'

const hideBroken = (event) => {
  event.currentTarget.style.display = 'none'
}

function MarqueeTrain() {
  return (
    <div className="flex shrink-0 items-center gap-[100px] pr-[100px]">
      {hero.marqueeWords.map((word) => (
        <span key={word} className="flex shrink-0 items-center gap-[100px]">
          <span className="text-[60px] font-bold uppercase leading-[54px] tracking-[14px] text-white/10 md:text-[85px] md:leading-[70px] md:tracking-[14px] lg:text-[100px] lg:leading-[86px] lg:tracking-[20px]">
            {word}
          </span>
          <img src={hero.marqueeIcon} alt="" aria-hidden className="h-[48px] w-[40px] object-cover" />
        </span>
      ))}
    </div>
  )
}

export default function MemberHero({ member }) {
  return (
    <section className="relative isolate overflow-x-clip bg-ink px-[15px] pt-[89px] lg:pt-[160px]">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{ backgroundImage: 'radial-gradient(circle at 78% center, rgba(255, 182, 6, 0.1), rgba(255, 182, 6, 0) 25%)' }}
      />

      <div className="mx-auto w-full max-w-[1320px]">
        <div className="flex flex-col items-center gap-[45px] lg:flex-row lg:items-center lg:justify-between lg:gap-[80px]">
          <div className="relative mr-[60px] flex w-full max-w-[632px] flex-1 flex-col items-center lg:mr-0">
            <span aria-hidden className="absolute top-[25%] aspect-square w-full rounded-full bg-amber" />
            <img
              src={member.image}
              alt={member.name}
              onError={hideBroken}
              className="relative z-[3] h-auto w-full object-cover"
            />
            <div className="absolute right-[-50px] top-full flex flex-col items-center gap-[15px] md:bottom-[100px] md:top-auto lg:bottom-[200px] 2xl:right-[-70px]">
              {hero.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="block md:-rotate-90"
                >
                  <img src={social.icon} alt="" className="h-auto w-[29px]" />
                </a>
              ))}
              <span aria-hidden className="h-[75px] w-px bg-[rgba(255,255,255,0.5)]" />
            </div>
          </div>

          <div className="w-full max-w-[526px] flex-1">
            <h1 className="mb-[20px] font-heading text-[35px] font-semibold leading-[35px] tracking-[-1.3px] text-white md:text-[45px] md:leading-[45px] md:tracking-[-1.5px] lg:text-[60px] lg:leading-[60px] lg:tracking-[-2.3px]">
              {hero.headingFor(member.name)}
            </h1>
            <p className="mb-[30px] text-[14px] leading-[23px] tracking-[0.5px] text-white/70 md:text-[17px] md:leading-[28px]">
              {hero.lead}
            </p>
            <h2 className="mb-[20px] font-heading text-[20px] font-semibold leading-[30px] tracking-[-0.5px] text-white md:text-[24px] md:leading-[32px]">
              {hero.specialistLabel}
            </h2>
            <ul className="list-disc pl-[20px] text-[14px] leading-[23px] tracking-[0.5px] text-white/70 md:text-[17px] md:leading-[28px]">
              {hero.specialists.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="relative flex overflow-hidden py-[30px]">
        <div className="marquee-track flex w-max">
          <MarqueeTrain />
          <MarqueeTrain />
          <MarqueeTrain />
        </div>
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(90deg, #0f252a 0%, rgba(15,37,42,0) 25%, rgba(15,37,42,0) 50%, rgba(15,37,42,0) 75%, #0f252a 100%)',
          }}
        />
      </div>
    </section>
  )
}
