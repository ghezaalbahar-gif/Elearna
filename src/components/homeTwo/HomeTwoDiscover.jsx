import { useState } from 'react'
import { discover } from './homeTwoData'

const panelClass =
  'relative flex cursor-pointer flex-col items-start justify-end overflow-hidden px-[15px] pt-[60px] pb-[40px] min-[768px]:pt-[100px] min-[992px]:h-full min-[992px]:border-r min-[992px]:border-line-veil min-[992px]:px-[20px] min-[992px]:pt-[50px] min-[992px]:pb-[40px] min-[1440px]:px-[50px] focus-visible:outline-2 focus-visible:outline-offset-[-6px] focus-visible:outline-amber'

export default function HomeTwoDiscover() {
  const [active, setActive] = useState(discover.defaultActive)

  const select = (index) => () => setActive(index)

  const press = (index) => (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      setActive(index)
    }
  }

  return (
    <section
      aria-labelledby="home-two-discover-title"
      className="bg-haze pt-[50px] min-[992px]:pt-[80px] min-[1440px]:pt-[110px]"
    >
      <div className="mx-auto w-full max-w-[1320px] px-[15px]">
        <div className="reveal mx-auto mb-[35px] flex w-full max-w-[928px] flex-col items-center text-center">
          <p className="text-[12px] font-medium uppercase leading-[23px] tracking-[0.5px] text-ink min-[992px]:text-[15px] min-[992px]:leading-[29px]">
            {discover.label}
          </p>
          <h2
            id="home-two-discover-title"
            className="mt-[15px] font-heading text-[25px] font-semibold leading-[35px] tracking-[-0.7px] text-ink min-[768px]:text-[35px] min-[768px]:leading-[42px] min-[768px]:tracking-[-1px]"
          >
            {discover.title}
          </h2>
        </div>
      </div>

      <div className="relative overflow-hidden">
        {/* Above 991px the four panels share one full-bleed photo; each panel owns its own. */}
        <div className="relative hidden min-[992px]:block min-[992px]:h-[750px]">
          {discover.cards.map((card, index) => (
            <img
              key={card.number}
              src={card.image}
              alt=""
              aria-hidden={index === active ? undefined : 'true'}
              loading={index === active ? 'eager' : 'lazy'}
              decoding="async"
              className={`absolute inset-0 h-[750px] w-full object-cover transition-opacity duration-[600ms] ease-in-out ${
                index === active ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
          <span
            aria-hidden="true"
            className="absolute inset-0 z-[2]"
            style={{ backgroundImage: 'linear-gradient(rgba(6, 15, 17, 0) 33%, #060f11)' }}
          />
        </div>

        <div className="relative grid grid-cols-1 gap-[15px] min-[480px]:grid-cols-2 min-[992px]:absolute min-[992px]:inset-0 min-[992px]:z-[5] min-[992px]:grid-cols-4 min-[992px]:gap-0">
          {discover.cards.map((card, index) => (
            <div
              key={card.number}
              role="button"
              tabIndex={0}
              aria-label={`${card.number}. ${card.title}`}
              onMouseEnter={select(index)}
              onFocus={select(index)}
              onClick={select(index)}
              onKeyDown={press(index)}
              className={panelClass}
            >
              <img
                src={card.mobileImage}
                alt=""
                aria-hidden="true"
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover min-[992px]:hidden"
              />
              <span
                aria-hidden="true"
                className="absolute inset-0 min-[992px]:hidden"
                style={{ backgroundImage: 'linear-gradient(rgba(6, 15, 17, 0) 17%, #060f11)' }}
              />
              <div className="relative flex w-full flex-col gap-[17px]">
                <span className="font-heading text-[25px] font-semibold leading-[35px] tracking-[-0.7px] text-white min-[768px]:text-[35px] min-[768px]:leading-[42px] min-[768px]:tracking-[-1px]">
                  {card.number}
                </span>
                <h3 className="font-heading text-[20px] font-semibold leading-[30px] tracking-[-0.5px] text-white min-[768px]:text-[24px] min-[768px]:leading-[32px]">
                  {card.title}
                </h3>
                <div
                  className={`grid grid-rows-[1fr] transition-[grid-template-rows] duration-[500ms] ease-roll ${
                    index === active
                      ? 'min-[992px]:grid-rows-[1fr]'
                      : 'min-[992px]:grid-rows-[0fr]'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-[17px] leading-[29px] tracking-[0.5px] text-white/70">
                      {discover.text}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
