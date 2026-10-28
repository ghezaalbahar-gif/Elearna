import { Link } from 'react-router-dom'
import { cta } from './CtaBandData'

export default function CtaBand() {
  return (
    <section className="relative isolate overflow-hidden px-[15px] py-[80px] md:py-[100px] lg:py-[135px]">
      <div
        className="absolute inset-0 -z-10 bg-ink"
        style={{ backgroundImage: 'linear-gradient(100deg, #0f252a 0%, #1c375b 100%)' }}
      />
      {cta.image ? (
        <img
          src={cta.image}
          alt={cta.imageAlt}
          onError={(event) => {
            event.currentTarget.style.display = 'none'
          }}
          className="absolute inset-0 -z-10 h-full w-full object-cover object-top"
        />
      ) : null}
      <div className="absolute inset-0 -z-10 bg-[rgba(10,23,26,0.56)] md:bg-[rgba(10,23,26,0.4)]" />

      <div className="reveal mx-auto flex w-full max-w-[1084px] flex-col items-center gap-[26px] text-center md:flex-row md:justify-between md:gap-[40px] md:text-left">
        <h2 className="font-heading text-[25px] font-semibold leading-[35px] tracking-[-0.7px] text-white md:text-[35px] md:leading-[42px] md:tracking-[-1px]">
          {cta.heading}
        </h2>
        <div className="flex flex-nowrap items-center justify-center gap-[12px] md:gap-[16px]">
          {cta.actions.map((action, index) => (
            <Link
              key={action.label}
              to={action.to}
              className={`flex flex-nowrap items-center gap-[8px] whitespace-nowrap rounded-[4px] px-[16px] py-[10px] text-[14px] capitalize tracking-[-0.5px] transition duration-[650ms] ease-expo hover:scale-[0.95] md:px-[45px] md:py-[13px] md:text-[17px] ${
                index === 0
                  ? 'border border-white bg-transparent font-normal text-white'
                  : 'border border-transparent bg-amber font-normal text-ink'
              }`}
            >
              {action.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
