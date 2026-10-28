export default function SectionHeading({
  eyebrow,
  title,
  id,
  align = 'left',
  size = 'large',
  tone = 'dark',
  className = '',
  titleClassName = '',
  children,
}) {
  return (
    <div className={`section-heading section-heading--${align} ${className}`.trim()} data-reveal>
      {eyebrow && (
        <span className={`eyebrow ${tone === 'light' ? 'eyebrow--light' : 'eyebrow--dark'}`}>
          {eyebrow}
        </span>
      )}
      <h2
        id={id}
        className={`section-title section-title--${size} ${tone === 'light' ? 'section-title--light' : ''} ${titleClassName}`.trim()}
      >
        {title}
      </h2>
      {children}
    </div>
  )
}
