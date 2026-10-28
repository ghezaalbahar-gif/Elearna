export const expo = [0.16, 1, 0.3, 1]

export const rise = {
  initial: { opacity: 0, y: 26 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '0px 0px -6% 0px' },
  transition: { duration: 0.8, ease: expo },
}
