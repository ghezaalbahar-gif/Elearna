import { Link } from 'react-router-dom'
import { assets } from '../data/assets'
import { headerActions } from '../data/navigation'
import SectionHeading from './SectionHeading'

const offerPoints = [
  'Skill-based instruction',
  'Analytics and insights',
  'Global certification',
  'Customizable courses',
]

export default function OfferSection() {
  return (
    <section className="section-offer" id="about" aria-labelledby="offer-title">
      <div className="container">
        <div className="offer-main">
          <div className="offer-media" data-reveal>
            <div className="offer-media-left">
              <div className="offer-badge">
                <img
                  src={assets.freeCourseBadge}
                  width="272"
                  height="94"
                  alt="More than 50 free courses listed online"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="offer-man-frame">
                <img
                  className="offer-man"
                  src={assets.offerMan}
                  width="362"
                  height="454"
                  alt="Student celebrating his progress with a laptop and charts"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
            <div className="offer-media-right">
              <img
                className="offer-woman"
                src={assets.offerWoman}
                width="332"
                height="434"
                alt="Student studying online with headphones and a tablet"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          <div className="offer-content" data-reveal>
            <SectionHeading
              eyebrow="what we Offer"
              title="Personalized learning for your ambitions"
              id="offer-title"
              className="offer-heading"
            />
            <p className="offer-description">
              Lorem ipsum dolor sit amet consectetur. Pellentesque id quam mauris mus. Vitae diam
              dolor lacus amet integer ut.
            </p>
            <ul className="offer-list">
              {offerPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>

            <div className="offer-box">
              <div className="offer-box-copy">
                <h3>Still have questions?</h3>
                <p>Lorem ipsum dolor sit amet conse ipsum blandit etiam aliquam.</p>
              </div>
              <Link to={headerActions.getStarted} className="btn btn-dark offer-box-button">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
