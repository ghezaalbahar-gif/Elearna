import { clients } from './homeTwoData'

export default function HomeTwoClients() {
  return (
    <section
      aria-label="Leading universities and companies"
      className="px-[15px] -mt-[42px] min-[992px]:-mt-[80px]"
    >
      <div className="mx-auto w-full max-w-[1320px]">
        <div className="reveal flex flex-col items-center gap-[35px] rounded-[4px] bg-white px-[20px] py-[45px] text-center shadow-panel min-[768px]:px-[55px]">
          <p className="text-[17px] leading-[29px] text-ink">{clients.text}</p>
          <div className="relative flex w-full items-center overflow-hidden">
            <div
              className="marquee-track"
              style={{ animationDuration: clients.speed }}
            >
              {[0, 1, 2].map((copy) => (
                <div
                  className="marquee-group"
                  key={copy}
                  aria-hidden={copy > 0 ? 'true' : undefined}
                >
                  {clients.logos.map((logo) => (
                    <img
                      key={`${copy}-${logo.name}`}
                      src={logo.src}
                      alt={copy === 0 ? logo.name : ''}
                      width={logo.width}
                      height={logo.height}
                      loading="lazy"
                      decoding="async"
                      className="shrink-0"
                    />
                  ))}
                </div>
              ))}
            </div>
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
              style={{
                backgroundImage:
                  'linear-gradient(90deg, #fff, rgba(247, 251, 252, 0) 25%, rgba(255, 255, 255, 0) 50%, rgba(245, 250, 251, 0) 75%, #fff)',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
