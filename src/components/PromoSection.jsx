import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../data/assets'
import { headerActions } from '../data/navigation'

export default function PromoSection() {
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      video.pause()
    }
  }, [])

  return (
    <section className="promo" aria-label="Quick start with Elearna">
      <div className="container">
        <div className="promo-grid" data-reveal>
          <article className="promo-card promo-card--courses">
            <div className="promo-copy promo-copy--one">
              <h2 className="promo-title">Quick access to the popular courses</h2>
              <Link to={headerActions.browseCourses} className="btn btn-yellow">
                View Courses
              </Link>
            </div>
            <img
              className="promo-woman"
              src={assets.promoWoman}
              width="421"
              height="288"
              alt="Student taking an online course on her laptop"
              loading="lazy"
              decoding="async"
            />
          </article>

          <article className="promo-card promo-card--skills">
            <div className="promo-copy promo-copy--two">
              <h2 className="promo-title">Develop your skills online!</h2>
              <Link to={headerActions.becomeTeacher} className="btn btn-dark">
                Apply now
              </Link>
            </div>
            <div className="promo-video-wrap">
              <video
                ref={videoRef}
                className="promo-video"
                poster={assets.homeVideoPoster}
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                aria-hidden="true"
                tabIndex={-1}
              >
                <source src={assets.homeVideo} type="video/mp4" />
              </video>
              <img
                className="promo-video-controls"
                src={assets.videoControls}
                alt=""
                aria-hidden="true"
                loading="lazy"
              />
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
