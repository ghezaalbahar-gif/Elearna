import { Link } from 'react-router-dom'
import { aboutCta } from '../../data/aboutContent'
import Reveal from './Reveal'

export default function AboutCTA() {
  return (
    <section className="cta-three">
      <div className="w-layout-blockcontainer cta-three-container w-container">
        <div className="w-layout-hflex cta-three-main">
          <Reveal as="div" className="heading-three cta-heading text-white" delay={100}>
            {aboutCta.title}
          </Reveal>
          <Reveal className="w-layout-hflex cta-button-wrapper" delay={100}>
            <Link to={aboutCta.primary.to} className="button white-border-button w-inline-block">
              <div>{aboutCta.primary.label}</div>
            </Link>
            <Link to={aboutCta.secondary.to} className="button button-yellow w-inline-block">
              <div>{aboutCta.secondary.label}</div>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
