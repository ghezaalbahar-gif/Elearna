import { Fragment, useEffect, useRef, useState } from 'react'
import Reveal from './Reveal'
import { storyCounters } from '../../data/aboutContent'

const range = (length) => Array.from({ length }, (_, index) => String(index))

// Matches the reference digit trains: the first column starts at 0, the second
// column starts at the target digit so translating both by -100% lands on it.
const trainsFor = (digit) => {
  const value = Number(digit)
  if (value === 0) return [range(10), range(10)]
  const first = range(value)
  return [first, [String(value), ...first.slice(1)]]
}

function CounterBox({ counter }) {
  const boxRef = useRef(null)
  const [animated, setAnimated] = useState(false)

  useEffect(() => {
    const element = boxRef.current
    if (!element) return undefined
    if (!('IntersectionObserver' in window)) {
      setAnimated(true)
      return undefined
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimated(true)
            observer.disconnect()
          }
        })
      },
      { rootMargin: '0px 0px -10% 0px' },
    )
    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="w-layout-vflex home-two-counters">
      <div
        ref={boxRef}
        className={`w-layout-hflex counter-box${animated ? ' is-animated' : ''}`}
        role="img"
        aria-label={counter.value}
      >
        {counter.parts.map((part, index) => {
          if (typeof part === 'string') {
            return (
              <div className="heading-two" key={`${counter.id}-${index}`}>
                {part}
              </div>
            )
          }
          const [firstTrain, secondTrain] = trainsFor(part.digit)
          return (
            <div className="w-layout-vflex counter-train-wrapper" key={`${counter.id}-${index}`}>
              <div className="w-layout-vflex counter-train">
                {firstTrain.map((digit) => (
                  <div className="heading-two" key={`a-${digit}`}>
                    {digit}
                  </div>
                ))}
              </div>
              <div className="w-layout-vflex counter-train">
                {secondTrain.map((digit, digitIndex) => (
                  <div className="heading-two" key={`b-${digitIndex}`}>
                    {digit}
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>
      <div className="small-heading text-dark">{counter.label}</div>
    </div>
  )
}

export default function StoryCounters() {
  return (
    <Reveal className="w-layout-hflex home-two-counters-wrap no-margin-bottom">
      {storyCounters.map((counter, index) => (
        <Fragment key={counter.id}>
          {index > 0 ? <div className="counter-border" /> : null}
          <CounterBox counter={counter} />
        </Fragment>
      ))}
    </Reveal>
  )
}
