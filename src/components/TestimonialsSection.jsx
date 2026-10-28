import { useEffect, useRef, useState } from 'react'
import { assets } from '../data/assets'
import { testimonials } from '../data/testimonials'
import SectionHeading from './SectionHeading'

const range = (length) => Array.from({ length }, (_, index) => String(index))

const trainsFor = (digit) => {
  const value = Number(digit)
  if (value === 0) return [range(10), range(10)]
  const first = range(value)
  return [first, [String(value), ...first.slice(1)]]
}

const stats = [
  { id: 'students', value: '70', suffix: 'M', label: 'Successful students' },
  { id: 'placements', value: '25', suffix: 'K', label: 'Global job placements' },
]

function StatCounter({ value, suffix, animated, label }) {
  return (
    <span
      className={`stat-value${animated ? ' is-animated' : ''}`}
      role="img"
      aria-label={`${value}${suffix} ${label}`}
    >
      {value.split('').map((digit, index) => {
        const [firstTrain, secondTrain] = trainsFor(digit)
        return (
          <span className="counter-train-wrapper" key={`${digit}-${index}`} aria-hidden="true">
            <span className="counter-train">
              {firstTrain.map((item, itemIndex) => (
                <span className="stat-digit" key={`first-${itemIndex}`}>
                  {item}
                </span>
              ))}
            </span>
            <span className="counter-train">
              {secondTrain.map((item, itemIndex) => (
                <span className="stat-digit" key={`second-${itemIndex}`}>
                  {item}
                </span>
              ))}
            </span>
          </span>
        )
      })}
      <span className="stat-digit" aria-hidden="true">
        {suffix}
      </span>
    </span>
  )
}

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [statsAnimated, setStatsAnimated] = useState(false)
  const statsRef = useRef(null)
  const active = testimonials[activeIndex]

  useEffect(() => {
    const element = statsRef.current
    if (!element) return undefined
    if (!('IntersectionObserver' in window)) {
      setStatsAnimated(true)
      return undefined
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStatsAnimated(true)
            observer.disconnect()
          }
        })
      },
      { rootMargin: '0px 0px -10% 0px' },
    )
    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  const showPrevious = () => {
    setActiveIndex((index) => (index === 0 ? testimonials.length - 1 : index - 1))
  }
  const showNext = () => {
    setActiveIndex((index) => (index + 1) % testimonials.length)
  }

  return (
    <section
      className="section-testimonials"
      id="testimonials"
      aria-labelledby="testimonials-title"
      style={{ backgroundImage: `url("${assets.testimonialBackground}")` }}
    >
      <div className="container">
        <div className="testimonials-top">
          <SectionHeading
            eyebrow="Our testimonials"
            title="Trusted by our successful students"
            id="testimonials-title"
            tone="light"
            className="testimonials-heading"
          />

          <div
            ref={statsRef}
            className="testimonials-stats"
            data-reveal
            aria-label="Elearna student statistics"
          >
            {stats.map((stat) => (
              <div className="stat" key={stat.id}>
                <StatCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                  animated={statsAnimated}
                />
                <span className="stat-divider" aria-hidden="true" />
                <div>
                  <p className="stat-label">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="testimonials-main" data-reveal>
          <div className="testimonial-image-frame">
            {testimonials.map((testimonial, index) => (
              <img
                key={testimonial.id}
                src={testimonial.image}
                width="520"
                height="351"
                alt={testimonial.alt}
                loading="lazy"
                decoding="async"
                aria-hidden={index === activeIndex ? undefined : 'true'}
                className={`testimonial-image${index === activeIndex ? ' is-active' : ''}`}
              />
            ))}
          </div>

          <div className="testimonial-content">
            <div className="testimonial-quote-wrap" aria-live="polite">
              <blockquote key={active.id} className="testimonial-quote">
                <p>{active.quote}</p>
              </blockquote>
              <p className="testimonial-author">{active.name}</p>
              <p className="testimonial-role">{active.role}</p>
            </div>

            <div className="testimonial-controls">
              <button
                type="button"
                className="testimonial-arrow"
                onClick={showPrevious}
                aria-label="previous slide"
              >
                <img
                  src={assets.sliderArrow}
                  width="18"
                  height="14"
                  alt=""
                  aria-hidden="true"
                  className="icon-rotate"
                />
              </button>
              <button
                type="button"
                className="testimonial-arrow"
                onClick={showNext}
                aria-label="next slide"
              >
                <img
                  src={assets.sliderArrow}
                  width="18"
                  height="14"
                  alt=""
                  aria-hidden="true"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
