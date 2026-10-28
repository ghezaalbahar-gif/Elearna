import { useState } from 'react'
import { cycleLabels, plans, pricingHero } from './PricingHeroData'

const focusRing =
  'focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-amber'

const labelClass =
  'text-[12px] font-medium uppercase leading-[23px] tracking-[0.5px] text-mist min-[768px]:text-[15px]'

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 21 21"
      width="21"
      height="21"
      fill="none"
      aria-hidden="true"
      className="shrink-0"
    >
      <circle cx="10.5" cy="10.5" r="9.5" stroke="var(--color-amber)" />
      <path
        d="M6.2 10.7 9.6 13.7 15.4 7.6"
        stroke="var(--color-amber)"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Price({ amount, unit, dark }) {
  return (
    <p
      className={`font-heading text-[25px] font-semibold leading-[35px] tracking-[-0.7px] min-[768px]:text-[30px] min-[768px]:leading-[37px] min-[768px]:tracking-[-1px] min-[992px]:text-[35px] min-[992px]:leading-[42px] ${
        dark ? 'text-white' : 'text-ink'
      }`}
    >
      {amount}
      <span
        className={`font-body text-[17px] font-normal leading-[35px] tracking-[0.5px] ${
          dark ? 'text-white' : 'text-ink'
        }`}
      >
        {unit}
      </span>
    </p>
  )
}

export default function PricingHero() {
  const [yearly, setYearly] = useState(false)

  return (
    <section className="relative isolate overflow-hidden pt-[100px] pb-[60px] min-[768px]:pt-[133px] min-[992px]:pt-[160px] min-[992px]:pb-[90px] min-[1440px]:pb-[120px]">
      <div className="absolute inset-0 -z-10 bg-ink" />
      {pricingHero.image ? (
        <img
          src={pricingHero.image}
          alt={pricingHero.imageAlt}
          onError={(event) => {
            event.currentTarget.style.display = 'none'
          }}
          className="absolute inset-0 -z-10 h-full w-full object-cover object-center"
        />
      ) : null}

      <div className="mx-auto w-full max-w-[1320px] px-[15px]">
        <div className="reveal mb-[40px] flex flex-col items-start">
          <span className={labelClass}>{pricingHero.label}</span>
          <h1 className="mt-[15px] max-w-[545px] font-heading text-[35px] font-semibold leading-[35px] tracking-[-1.3px] text-white min-[768px]:text-[45px] min-[768px]:leading-[45px] min-[768px]:tracking-[-1.5px] min-[992px]:text-[60px] min-[992px]:leading-[60px] min-[992px]:tracking-[-2.3px]">
            {pricingHero.title}
          </h1>
        </div>

        <div className="reveal mb-[35px] flex flex-nowrap items-center gap-[13px] min-[768px]:mb-[48px]">
          <span className={labelClass}>{cycleLabels.monthly}</span>
          <button
            type="button"
            role="switch"
            aria-checked={yearly}
            aria-label="Show yearly prices"
            onClick={() => {
              setYearly((current) => !current)
            }}
            className={`${focusRing} flex h-[35.5px] w-[70px] shrink-0 cursor-pointer items-center rounded-full bg-[rgba(123,124,125,0.24)] p-[5px]`}
          >
            <span
              className={`block h-[28px] w-[29px] rounded-full bg-amber transition-transform duration-[400ms] ease-expo ${
                yearly ? 'translate-x-[31px]' : 'translate-x-0'
              }`}
            />
          </button>
          <span className={labelClass}>{cycleLabels.yearly}</span>
        </div>

        <div className="reveal grid grid-cols-1 gap-[48px] min-[768px]:grid-cols-2 min-[768px]:gap-[30px] min-[992px]:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.id}
              className={`flex flex-col rounded-[4px] px-[25px] pt-[35px] pb-[45px] shadow-[0_20px_60px_rgba(0,0,0,0.15)] min-[480px]:px-[35px] min-[992px]:px-[20px] min-[1280px]:px-[60px] min-[1280px]:pt-[60px] min-[1280px]:pb-[70px] ${
                plan.dark ? 'border border-amber bg-ink' : 'bg-white'
              }`}
            >
              <h2
                className={`mb-[25px] font-heading text-[17px] font-semibold leading-[23px] tracking-[-0.5px] min-[768px]:text-[20px] min-[768px]:leading-[25px] ${
                  plan.dark ? 'text-white' : 'text-ink'
                }`}
              >
                {plan.name}
              </h2>
              <p
                className={`text-[14px] leading-[23px] tracking-[0.5px] min-[768px]:text-[17px] min-[768px]:leading-[28px] ${
                  plan.dark ? 'mb-[35px] text-white opacity-70' : 'mb-[30px] text-muted'
                }`}
              >
                {plan.description}
              </p>

              <div className="relative mb-[35px] flex items-center">
                <div
                  aria-hidden={yearly}
                  className={`transition-opacity duration-[400ms] ease-expo ${
                    yearly ? 'opacity-0' : 'opacity-100'
                  }`}
                >
                  <Price amount={plan.price.monthly} unit={plan.unit} dark={plan.dark} />
                </div>
                <div
                  aria-hidden={!yearly}
                  className={`pointer-events-none absolute inset-0 flex items-center transition-opacity duration-[400ms] ease-expo ${
                    yearly ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <Price amount={plan.price.yearly} unit={plan.unit} dark={plan.dark} />
                </div>
              </div>

              <ul className="mb-[50px] flex flex-col gap-[10px]">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-[20px]">
                    <CheckIcon />
                    <span
                      className={`text-[14px] leading-[23px] tracking-[0.5px] min-[768px]:text-[17px] min-[768px]:leading-[28px] ${
                        plan.dark ? 'text-white' : 'text-muted'
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <a
                  href={plan.action.href}
                  className={`${focusRing} flex min-h-[50px] w-full items-center justify-center rounded-[4px] px-[20px] py-[10px] text-[14px] leading-[20px] tracking-[-0.5px] capitalize transition duration-[650ms] ease-expo hover:scale-[0.95] min-[768px]:px-[45px] min-[768px]:text-[17px] ${
                    plan.dark ? 'bg-amber text-ink' : 'bg-ink text-white'
                  }`}
                >
                  {plan.action.label}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
