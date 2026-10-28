import { Link } from 'react-router-dom'
import { assets } from '../data/assets'
import { headerActions } from '../data/navigation'

export default function HeroSection() {
  return (
    <section
      className="hero"
      id="home"
      aria-labelledby="hero-title"
      style={{ backgroundImage: `url("${assets.heroBackground}")` }}
    >
      <div className="container">
        <div className="hero-inner">
          <div className="hero-media" data-reveal>
            <img
              className="hero-photo"
              src={assets.heroImage}
              width="1080"
              height="1189"
              alt="Smiling student wearing glasses and holding her study books"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />

            <img
              className="hero-achievement"
              src={assets.achievementsCard}
              width="275"
              height="93"
              alt="More than 125 achievement awards"
              loading="eager"
              decoding="async"
            />
            <img
              className="hero-trusted"
              src={assets.trustedByCard}
              width="268"
              height="179"
              alt="Trusted by 15,000 enrolled students, rated 4.94 out of 5"
              loading="eager"
              decoding="async"
            />

            <img className="hero-half-moon" src={assets.halfMoon} alt="" aria-hidden="true" />
            <img
              className="hero-yellow-dot hero-yellow-dot--small"
              src={assets.yellowDot}
              width="17"
              height="17"
              alt=""
              aria-hidden="true"
            />
            <img
              className="hero-yellow-dot hero-yellow-dot--left"
              src={assets.yellowDot}
              width="11"
              height="11"
              alt=""
              aria-hidden="true"
            />
            <img
              className="hero-blue-circle"
              src={assets.blueCircle}
              alt=""
              aria-hidden="true"
            />
          </div>

          <div className="hero-text" data-reveal>
            <span className="eyebrow eyebrow--light">Online learning</span>
            <h1 id="hero-title">
              More then <span className="brand-color">25000+</span> education courses online
            </h1>
            <p className="hero-description">
              Lorem ipsum dolor sit amet consectetur. Gravida enim risus sollicitudin mauris
              tincidunt commodo ornare.
            </p>
            <Link to={headerActions.getStarted} className="btn btn-dark">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
