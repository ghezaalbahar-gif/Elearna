import { hero } from './BlogHeroData'

export default function BlogHero() {
  return (
    <section className="relative isolate overflow-hidden px-[15px] pt-[150px] pb-[120px] md:pt-[186px] lg:pt-[233px] lg:pb-[210px]">
      <div
        className="absolute inset-0 -z-10 bg-deep"
        style={{
          backgroundImage: 'radial-gradient(120% 90% at 20% 0%, #2b4a52 0%, #0f252a 62%)',
        }}
      />
      {hero.image ? (
        <img
          src={hero.image}
          alt={hero.imageAlt}
          onError={(event) => {
            event.currentTarget.style.display = 'none'
          }}
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
      ) : null}
      <div className="absolute inset-0 -z-10 bg-[rgba(0,0,0,0.7)]" />

      <div className="mx-auto w-full max-w-[1320px]">
        <div className="max-w-[630px]">
          <p className="reveal text-[13px] font-medium uppercase leading-[12px] tracking-[0.5px] text-white">
            {hero.kicker}
          </p>
          <h1 className="reveal mt-[15px] font-heading text-[35px] font-semibold leading-[35px] tracking-[-1.3px] text-white md:text-[45px] md:leading-[45px] md:tracking-[-1.5px] lg:text-[60px] lg:leading-[60px] lg:tracking-[-2.3px]">
            {hero.title}
          </h1>
        </div>
      </div>
    </section>
  )
}
