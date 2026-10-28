import { hero } from './homeTwoData'

const ghostWord =
  'text-[55px] font-bold uppercase leading-[58px] tracking-[-1px] bg-clip-text text-transparent min-[480px]:text-[60px] min-[480px]:leading-[64px] min-[768px]:text-[90px] min-[768px]:leading-[84px] min-[992px]:text-[110px] min-[992px]:leading-[98px] min-[992px]:tracking-[-2.3px] min-[1280px]:text-[120px]'

export default function HomeTwoHero() {
  return (
    <section
      aria-labelledby="home-two-title"
      className="relative isolate overflow-hidden bg-ink px-[15px] pt-[135px] pb-[110px] min-[768px]:pt-[163px] min-[992px]:pt-[300px] min-[992px]:pb-[170px]"
      style={{
        backgroundImage: `url("${hero.background}")`,
        backgroundPosition: '50%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      {/* The reference only dims the photo below 992px, where the crop falls behind the copy. */}
      <span aria-hidden="true" className="absolute inset-0 -z-[1] bg-black/35 min-[992px]:hidden" />

      <div className="mx-auto w-full max-w-[1320px]">
        <div className="flex flex-col items-start">
          <div className="reveal mb-[57px] flex flex-col items-end min-[992px]:mb-[120px]">
            <span
              className={ghostWord}
              style={{ backgroundImage: 'linear-gradient(#5f88a3, rgba(81, 97, 107, 0) 95%)' }}
            >
              {hero.ghostTop}
            </span>
            <span
              className={`${ghostWord} -mt-[28px]`}
              style={{
                backgroundImage: 'linear-gradient(#5e6d77 15%, rgba(14, 24, 31, 0) 89%)',
                textShadow: 'rgba(0, 0, 0, 0.6) 0 -21px 33px',
              }}
            >
              {hero.ghostBottom}
            </span>
          </div>

          <div className="reveal ml-auto w-full max-w-[662px] min-[1440px]:-mr-[60px] min-[1920px]:-mr-[97px]">
            <p className="text-[12px] font-medium uppercase leading-[23px] tracking-[0.5px] text-mist min-[992px]:text-[15px] min-[992px]:leading-[29px]">
              {hero.label}
            </p>
            <h1
              id="home-two-title"
              className="mt-[15px] font-heading text-[35px] font-semibold leading-[35px] tracking-[-1.3px] text-white min-[768px]:text-[45px] min-[768px]:leading-[45px] min-[768px]:tracking-[-1.5px] min-[992px]:text-[60px] min-[992px]:leading-[60px] min-[992px]:tracking-[-2.3px]"
            >
              {hero.headingLead} <span className="text-amber">{hero.headingAccent}</span>{' '}
              {hero.headingTail}
            </h1>
          </div>
        </div>
      </div>
    </section>
  )
}
