import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {
  careerHero,
  careerConnectivity,
  careerJobs,
  careerCta,
} from '../data/career'

export default function Career() {
  useEffect(() => {
    document.title = 'Career'
  }, [])

  return (
    <div className="site career-page">
      <Navbar />
      <main id="main-content">
        <section className="career-hero">
          <div className="container">
            <div className="w-layout-vflex career-hero-text reveal">
              <div className="small-heading">{careerHero.eyebrow}</div>
              <h1 className="no-margin-bottom text-white margin-top-fifteen">
                {careerHero.title}
              </h1>
            </div>
          </div>
        </section>

        <section className="career-connetivity">
          <div className="container">
            <div className="w-layout-hflex connetivity-main">
              <div className="w-layout-hflex connetivity-left">
                <div className="career-left-image reveal">
                  <img
                    src={careerConnectivity.images.left.src}
                    width={careerConnectivity.images.left.width}
                    height={careerConnectivity.images.left.height}
                    alt="Career Image"
                    loading="lazy"
                    className="border-radius-four tab-image"
                  />
                </div>
                <div className="career-right-image reveal" style={{ transitionDelay: '120ms' }}>
                  <img
                    src={careerConnectivity.images.right.src}
                    width={careerConnectivity.images.right.width}
                    height={careerConnectivity.images.right.height}
                    alt="Career Image"
                    loading="lazy"
                    className="border-radius-four tab-image"
                  />
                </div>
              </div>
              <div className="w-layout-vflex connectivity-right">
                <div className="small-heading text-dark reveal">
                  {careerConnectivity.eyebrow}
                </div>
                <h2 className="heading-two-gap-top margin-bottom-thirty-five mobile-margin-fifteen reveal">
                  {careerConnectivity.title}
                </h2>
                <p className="margin-bottom-twenty reveal">{careerConnectivity.copy}</p>
                <div>
                  {careerConnectivity.points.map((point, index) => (
                    <div
                      className={`w-layout-hflex connectivity-points reveal${
                        index === 0 ? ' margin-bottom-twenty-five' : ''
                      }`}
                      key={point.title}
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      <img
                        src={careerConnectivity.checkIcon}
                        width="24"
                        height="24"
                        alt="Icon"
                        loading="lazy"
                        className="checkpoint-icon"
                      />
                      <div className="w-layout-vflex">
                        <div className="heading-five margin-bottom-fifteen">{point.title}</div>
                        <p className="no-margin-bottom">{point.copy}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="career-cards">
          <div className="container">
            <div className="w-layout-vflex career-cards-main">
              <div className="small-heading text-dark reveal">job opening</div>
              <h2 className="heading-two-gap-top text-align-center reveal">
                Be a part of our faculty
              </h2>
              <div className="career-list">
                <div className="career-cards-wrapper" role="list">
                  {careerJobs.map((job, index) => (
                    <div className="w-layout-vflex career-cards-options reveal" role="listitem" key={job.href} style={{ transitionDelay: `${(index % 2) * 100}ms` }}>
                      <div className="heading-four">{job.title}</div>
                      <div className="w-layout-vflex career-card-information">
                        <div className="small-shot-heading small-heading-body-color">
                          {job.posts}
                        </div>
                        <div className="small-shot-heading small-heading-body-color">
                          {job.location}
                        </div>
                      </div>
                      <div className="w-layout-hflex career-buttons-wrap">
                        <div className="button button-yellow">
                          <div>{job.salary}</div>
                        </div>
                        <Link to={job.href} className="button button-border-off w-inline-block">
                          <div>Apply Now</div>
                        </Link>
                      </div>
                      <div>
                        <div className="w-layout-hflex career-topics">
                          <div className="dot" />
                          <div>Job Description :</div>
                          <div>{job.description}</div>
                        </div>
                        <div className="w-layout-hflex career-topics">
                          <div className="dot" />
                          <div>Job Type :</div>
                          <div>{job.type}</div>
                        </div>
                        <div className="w-layout-hflex career-topics">
                          <div className="dot" />
                          <div>Experience :</div>
                          <div>{job.experience}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-three">
          <div className="container cta-three-container">
            <div className="w-layout-hflex cta-three-main">
              <div className="heading-three cta-heading text-white reveal">{careerCta.title}</div>
              <div
                className="w-layout-hflex cta-button-wrapper reveal"
                style={{ transitionDelay: '100ms' }}
              >
                <Link to={careerCta.primary.to} className="button white-border-button w-inline-block">
                  <div>{careerCta.primary.label}</div>
                </Link>
                <Link to={careerCta.secondary.to} className="button button-yellow w-inline-block">
                  <div>{careerCta.secondary.label}</div>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
