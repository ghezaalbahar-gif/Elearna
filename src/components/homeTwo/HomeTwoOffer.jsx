import { Link } from 'react-router-dom'
import { offer } from './homeTwoData'

export default function HomeTwoOffer() {
  return (
    <section
      aria-labelledby="home-two-offer-title"
      className="relative isolate overflow-hidden px-[15px] pt-[60px] pb-[100px] min-[992px]:py-[160px]"
    >
      <span
        aria-hidden="true"
        className="absolute inset-0 -z-[2] bg-cover bg-[position:50%_50%] bg-no-repeat"
        style={{ backgroundImage: `url(${offer.background})` }}
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-[1] bg-gradient-to-r from-black/70 from-100% min-[480px]:from-black/50 min-[768px]:from-23% min-[992px]:from-0%"
      />

      <div className="mx-auto w-full max-w-[1320px]">
        <div className="flex max-w-[553px] flex-col items-start text-left">
          <p className="reveal text-[12px] font-medium uppercase leading-[23px] tracking-[0.5px] text-mist min-[768px]:text-[15px] min-[768px]:leading-[29px]">
            {offer.label}
          </p>
          <h2
            id="home-two-offer-title"
            className="reveal mt-[10px] mb-[7px] font-heading text-[30px] font-semibold leading-[40px] tracking-[-1.3px] text-white min-[768px]:mt-[15px] min-[768px]:mb-[12px] min-[768px]:text-[48px] min-[768px]:leading-[52px] min-[768px]:tracking-[-1.5px]"
          >
            {offer.title}
          </h2>
          <p className="reveal mb-[30px] text-[17px] leading-[29px] text-white/70 min-[768px]:mb-[40px]">
            {offer.text}
          </p>
          <Link
            to={offer.ctaTo}
            className="btn btn-yellow focus-visible:outline-2 focus-visible:outline-offset-3px focus-visible:outline-white"
          >
            {offer.ctaLabel}
          </Link>
        </div>
      </div>
    </section>
  )
}
