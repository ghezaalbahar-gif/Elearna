import { Link } from 'react-router-dom'
import { aboutAssets, aboutOffer, aboutOfferPoints } from '../../data/aboutContent'
import Reveal from './Reveal'

export default function AboutOffer() {
  return (
    <section className="about-one-offer">
      <div className="w-layout-blockcontainer container w-container">
        <div className="w-layout-hflex about-one-offer-main">
          <div className="home-two-learning-image-wrap">
            <Reveal className="learning-video-wrap" delay={100}>
              <div className="video-two w-background-video w-background-video-atom">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{ backgroundImage: `url("${aboutAssets.homeVideoPoster}")` }}
                >
                  <source src={aboutAssets.homeVideo} type="video/mp4" />
                  <source src={aboutAssets.homeVideoWebm} type="video/webm" />
                </video>
              </div>
            </Reveal>
            <Reveal className="learning-image-wrap" preset="slideInTop" delay={100}>
              <img
                src={aboutAssets.laptopGirl}
                loading="lazy"
                width="366"
                height="471"
                alt="Woman Image"
                srcSet={aboutAssets.laptopGirlSrcSet}
                sizes="(max-width: 479px) 100vw, 366px"
                className="border-radius-four tab-image-full-width"
              />
            </Reveal>
          </div>
          <div className="home-one-offer-right">
            <Reveal as="div" className="small-heading text-dark" delay={100}>
              {aboutOffer.eyebrow}
            </Reveal>
            <Reveal as="h2" className="heading-two-gap-updown" delay={100}>
              {aboutOffer.title}
            </Reveal>
            <Reveal as="p" className="margin-bottom-twenty" delay={100}>
              {aboutOffer.copy}
            </Reveal>
            <Reveal as="ul" role="list" className="home-one-offer-list" delay={100}>
              {aboutOfferPoints.map((point) => (
                <li className="heading-six" key={point}>
                  {point}
                </li>
              ))}
            </Reveal>
            <Reveal className="w-layout-hflex home-one-offer-box" delay={100}>
              <div className="w-layout-vflex home-one-offer-text">
                <div className="heading-five">{aboutOffer.questionTitle}</div>
                <p className="no-margin-bottom">{aboutOffer.questionCopy}</p>
              </div>
              <div className="no-shrink">
                <Link to="/contact-three" className="button button-border-off w-inline-block">
                  <div>{aboutOffer.cta}</div>
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
