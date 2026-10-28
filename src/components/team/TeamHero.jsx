import { hero } from './TeamHeroData'

export default function TeamHero() {
  return (
    <section className="relative isolate overflow-hidden px-[15px] pt-[136px] pb-[100px] md:pt-[183px] md:pb-[140px] lg:pt-[300px] lg:pb-[200px]">
      <div className="absolute inset-0 -z-10 bg-ink" />
      {hero.image ? (
        <img
          src={hero.image}
          alt={hero.imageAlt}
          onError={(event) => {
            event.currentTarget.style.display = 'none'
          }}
          className="absolute inset-0 -z-10 h-full w-full object-cover object-center"
        />
      ) : null}
      <div className="absolute inset-0 -z-10 bg-[rgba(0,0,0,0.7)]" />

      <div className="mx-auto flex w-full max-w-[1320px] flex-col items-center justify-center text-center">
        <h1 className="reveal font-heading text-[35px] font-semibold leading-[35px] tracking-[-1.3px] text-white md:text-[45px] md:leading-[45px] md:tracking-[-1.5px] lg:text-[60px] lg:leading-[60px] lg:tracking-[-2.3px]">
          {hero.title}
        </h1>
      </div>
    </section>
  )
}
