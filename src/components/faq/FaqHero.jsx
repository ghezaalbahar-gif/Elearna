import { hero } from './FaqHeroData'

export default function FaqHero() {
  return (
    <section className="relative isolate overflow-hidden px-[15px] pt-[160px] pb-[140px] lg:pt-[285px] lg:pb-[260px]">
      <div
        className="absolute inset-0 -z-10 bg-deep"
        style={{
          backgroundImage: 'radial-gradient(120% 90% at 50% 0%, #2b4a52 0%, #0f252a 68%)',
        }}
      />
      {hero.image ? (
        <img
          src={hero.image}
          alt={hero.imageAlt}
          onError={(event) => {
            event.currentTarget.style.display = 'none'
          }}
          className="absolute inset-0 -z-10 h-full w-full object-cover object-top"
        />
      ) : null}
      <div className="absolute inset-0 -z-10 bg-[rgba(0,0,0,0.7)]" />

      <div className="reveal mx-auto flex w-full max-w-[940px] flex-col items-center gap-[20px] text-center">
        <h1 className="font-heading text-[35px] font-semibold leading-[35px] tracking-[-1.3px] text-white md:text-[45px] md:leading-[45px] md:tracking-[-1.5px] lg:text-[60px] lg:leading-[60px] lg:tracking-[-2.3px]">
          {hero.title}
        </h1>
        <p className="max-w-[720px] text-[14px] leading-[23px] tracking-[0.5px] text-white md:text-[17px] md:leading-[28px]">
          {hero.description}
        </p>
      </div>
    </section>
  )
}
