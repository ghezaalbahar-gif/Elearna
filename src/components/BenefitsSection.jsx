import { assets } from '../data/assets'
import { benefits } from '../data/benefits'
import SectionHeading from './SectionHeading'

export default function BenefitsSection() {
  return (
    <section className="section-benefits" id="benefits" aria-labelledby="benefits-title">
      <div className="container">
        <SectionHeading
          align="center"
          eyebrow="Why we are"
          title="Elevate your professional journey"
          id="benefits-title"
          size="medium"
          className="benefits-heading"
          titleClassName="benefits-title"
        >
          <p className="benefits-description">
            Lorem ipsum dolor sit amet consectetur. Pellentesque id quam mauris mus. Vitae diam
            dolor lacus amet integer ut.
          </p>
        </SectionHeading>

        <div className="benefit-grid" data-reveal>
          {benefits.map((benefit) => (
            <article className="benefit-item" key={benefit.id}>
              <img
                src={assets.benefitIcons[benefit.icon]}
                width={benefit.iconWidth}
                height={benefit.iconHeight}
                alt=""
                aria-hidden="true"
                loading="lazy"
                decoding="async"
              />
              <h3>{benefit.title}</h3>
              <p>{benefit.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
