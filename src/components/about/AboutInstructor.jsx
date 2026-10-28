import { Link } from 'react-router-dom'
import { aboutAssets, aboutInstructor } from '../../data/aboutContent'
import Reveal from './Reveal'

export default function AboutInstructor() {
  return (
    <section className="about-one-instructor">
      <div className="w-layout-blockcontainer container w-container">
        <div className="w-layout-hflex about-one-instructor-main">
          <div className="w-layout-vflex about-one-instructor-text">
            <Reveal as="h2" className="no-margin-top" delay={100}>
              {aboutInstructor.title}
            </Reveal>
            <Reveal as="p" className="margin-bottom-thirty" delay={100}>
              {aboutInstructor.copy}
            </Reveal>
            <Reveal delay={100}>
              <Link to={aboutInstructor.href} className="button button-border-off w-inline-block">
                <div>{aboutInstructor.cta}</div>
              </Link>
            </Reveal>
          </div>
          <div className="about-one-instructor-image">
            <Reveal
              as="img"
              className="tab-image-full-width"
              src={aboutAssets.instructorImage}
              width="471"
              alt="Girl Image"
              sizes="(max-width: 479px) 100vw, 471px"
              loading="lazy"
              srcSet={aboutAssets.instructorImageSrcSet}
              delay={100}
            />
            <Reveal
              as="img"
              src={aboutAssets.reviewPopup}
              loading="lazy"
              width="218"
              height="107"
              alt="Popup"
              className="instructor-popup-image"
              preset="slideInRight"
              delay={100}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
