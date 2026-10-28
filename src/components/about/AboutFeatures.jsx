import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { aboutFeatures } from '../../data/aboutContent'
import Reveal from './Reveal'
import useDesktop from './useDesktop'

const INITIAL_OPEN = 1

export default function AboutFeatures() {
  const desktop = useDesktop()
  const wrapRefs = useRef([])
  const [openIndex, setOpenIndex] = useState(INITIAL_OPEN)

  useEffect(() => {
    wrapRefs.current.forEach((wrap, index) => {
      if (!wrap) return
      if (!desktop) {
        wrap.style.height = ''
        return
      }
      wrap.style.height = index === openIndex ? `${wrap.scrollHeight}px` : '0px'
    })
  }, [desktop, openIndex])

  return (
    <section>
      <Reveal className="home-three-potential-cards-wrap about-one-hover-accordion" delay={100}>
        {aboutFeatures.map((feature, index) => (
          <div
            className="potential-cards"
            key={feature.id}
            onMouseEnter={() => {
              if (desktop) setOpenIndex(index)
            }}
          >
            <div className="heading-three text-blue margin-bottom-ten">{feature.number}</div>
            <div className="heading-four margin-bottom-ten">{feature.title}</div>
            <p className="no-margin-bottom">{feature.copy}</p>
            <div
              className={`potential-cards-button-wrap ${feature.wrapClass}`}
              ref={(node) => {
                wrapRefs.current[index] = node
              }}
            >
              <div className="potential-button">
                <Link to={feature.href} className="button button-border-off w-inline-block">
                  <div>Get Started </div>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Reveal>
    </section>
  )
}
