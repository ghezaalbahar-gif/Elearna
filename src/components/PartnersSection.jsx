import { assets } from '../data/assets'

export default function PartnersSection() {
  const logos = assets.partnerLogos

  return (
    <section className="partners" aria-label="Trusted learning partners">
      <div className="container">
        <div className="partners-main" data-reveal>
          <p className="partners-copy">
            Learn from 350+ leading universities and companies with us
          </p>
          <div className="marquee">
            <div className="marquee-track">
              {[0, 1].map((copy) => (
                <div className="marquee-group" key={copy} aria-hidden={copy === 1 ? 'true' : undefined}>
                  {logos.map((logo) => (
                    <img
                      key={`${copy}-${logo.name}`}
                      src={logo.src}
                      alt={copy === 0 ? logo.name : ''}
                      width={logo.width}
                      height={logo.height}
                      loading="lazy"
                      decoding="async"
                      className="partner-logo"
                    />
                  ))}
                </div>
              ))}
            </div>
            <div className="marquee-fade marquee-fade--left" aria-hidden="true" />
            <div className="marquee-fade marquee-fade--right" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  )
}
