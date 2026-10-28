import Reveal from './Reveal'
import { aboutAssets } from '../../data/aboutContent'

export default function AboutHero() {
  return (
    <section
      className="about-one-hero"
      style={{ backgroundImage: `url("${aboutAssets.heroBackground}")` }}
    >
      <div className="w-layout-blockcontainer about-one-hero-container w-container">
        <div className="w-layout-vflex about-one-hero-main">
          <Reveal as="div" className="small-heading" delay={100}>
            About us
          </Reveal>
          <Reveal
            as="h1"
            className="about-one-hero-heading"
            delay={200}
            offset={0}
          >
            You&rsquo;re sincerely determined to grow
          </Reveal>
        </div>
      </div>
    </section>
  )
}
