import { useState } from 'react'
import { aboutAssets, aboutTestimonials } from '../../data/aboutContent'
import Reveal from './Reveal'

export default function AboutTestimonial() {
  const [activeIndex, setActiveIndex] = useState(0)

  const move = (step) => {
    setActiveIndex((index) => (index + step + aboutTestimonials.length) % aboutTestimonials.length)
  }

  const arrowKey = (event, step) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      move(step)
    }
  }

  return (
    <section className="home-two-testimonial">
      <div className="w-layout-blockcontainer home-two-testimonial-container w-container">
        <div className="w-layout-vflex home-two-testimonial-main">
          <Reveal
            as="img"
            src={aboutAssets.quoteIcon}
            loading="lazy"
            width="159"
            height="116"
            alt="Quote"
            className="testimonial-two-quote"
            preset="growIn"
            delay={100}
          />
          <Reveal className="testimonial-two-slider w-slider" delay={100}>
            <div className="w-slider-mask">
              {aboutTestimonials.map((testimonial, index) => (
                <div
                  className={`w-slide${index === activeIndex ? ' is-active' : ''}`}
                  key={testimonial.id}
                  aria-hidden={index === activeIndex ? undefined : 'true'}
                >
                  <div className="w-layout-vflex home-two-testimonial-items">
                    <p className="home-two-testimonial-text">{testimonial.quote}</p>
                    <div className="home-two-testimonial-name">{testimonial.name}</div>
                    <div className="body-small-text">{testimonial.role}</div>
                  </div>
                </div>
              ))}
            </div>
            <div
              className="testimonial-two-slider-arrow slider-arrow-left w-slider-arrow-left"
              role="button"
              tabIndex="0"
              aria-label="previous slide"
              onClick={() => move(-1)}
              onKeyDown={(event) => arrowKey(event, -1)}
            >
              <img
                src={aboutAssets.sliderArrowBlack}
                loading="lazy"
                width="18"
                height="18"
                alt="Slider Arrow"
                className="icon-rotate"
              />
            </div>
            <div
              className="testimonial-two-slider-arrow slider-arrow-right w-slider-arrow-right"
              role="button"
              tabIndex="0"
              aria-label="next slide"
              onClick={() => move(1)}
              onKeyDown={(event) => arrowKey(event, 1)}
            >
              <img
                src={aboutAssets.sliderArrowBlack}
                loading="lazy"
                width="18"
                height="18"
                alt="Slider Arrow"
              />
            </div>
            <div className="display-off w-slider-nav w-round w-num"></div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
