import Reveal from './Reveal'

export default function AboutIntro() {
  return (
    <section className="about-one-success-cards">
      <div className="w-layout-blockcontainer w-container">
        <div className="w-layout-vflex about-one-success-main">
          <Reveal as="div" className="small-heading text-dark" delay={100}>
            Why we are
          </Reveal>
          <Reveal as="div" className="heading-three about-one-success-heading" delay={100}>
            We believe in our good education and development system and we know how to work together
            to reach greater success
          </Reveal>
        </div>
      </div>
    </section>
  )
}
