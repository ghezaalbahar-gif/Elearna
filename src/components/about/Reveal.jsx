import { motion, useReducedMotion } from 'framer-motion'
import useDesktop from './useDesktop'

// Webflow IX2 "outQuart": 1 - (1 - t)^4.
const outQuart = (t) => 1 - Math.pow(1 - t, 4)

const PRESETS = {
  slideInBottom: {
    hidden: { opacity: 0, y: 100 },
    show: { opacity: 1, y: 0 },
  },
  slideInTop: {
    hidden: { opacity: 0, y: -100 },
    show: { opacity: 1, y: 0 },
  },
  slideInLeft: {
    hidden: { opacity: 0, x: -100 },
    show: { opacity: 1, x: 0 },
  },
  slideInRight: {
    hidden: { opacity: 0, x: 100 },
    show: { opacity: 1, x: 0 },
  },
  growIn: {
    hidden: { opacity: 0, scale: 0.75 },
    show: { opacity: 1, scale: 1 },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  },
}

export default function Reveal({
  as = 'div',
  preset = 'slideInBottom',
  delay = 0,
  offset = 10,
  className,
  children,
  ...rest
}) {
  const reduceMotion = useReducedMotion()
  const desktop = useDesktop()
  const Component = motion[as] || motion.div

  // IX2 binds every entrance interaction to the "main" (>=992px) breakpoint.
  if (!desktop || reduceMotion) {
    return (
      <Component className={className} {...rest}>
        {children}
      </Component>
    )
  }

  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: offset ? '0px 0px -10% 0px' : '0px' }}
      variants={PRESETS[preset]}
      transition={{ duration: 1, delay: delay / 1000, ease: outQuart }}
      {...rest}
    >
      {children}
    </Component>
  )
}
