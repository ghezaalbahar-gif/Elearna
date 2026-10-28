import { assets } from '../../data/assets'
import { aboutPartnerNote } from '../../data/aboutContent'
import Reveal from './Reveal'

export default function AboutPartners() {
  return (
    <section className="clients-three">
      <div className="w-layout-blockcontainer container w-container">
        <Reveal as="p" className="margin-bottom-twenty-five text-align-center" delay={100}>
          {aboutPartnerNote}
        </Reveal>
        <Reveal className="w-layout-hflex marquee-main" delay={100}>
          {[0, 1, 2].map((train) => (
            <div className="w-layout-hflex clients-train" key={train}>
              {assets.partnerLogos.map((logo) => (
                <img
                  key={logo.name}
                  src={logo.src}
                  loading="lazy"
                  width={logo.width}
                  height={logo.height}
                  alt="Clients Logo"
                  className="clients-logo"
                />
              ))}
            </div>
          ))}
          <div className="clients-overlay-one dark-overlay"></div>
        </Reveal>
      </div>
    </section>
  )
}
