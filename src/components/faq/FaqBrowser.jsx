import { useRef, useState } from 'react'
import { faqCategories, placeholderAnswer } from './FaqBrowserData'

function Arrow() {
  return (
    <svg
      width="13"
      height="10"
      viewBox="0 0 13 10"
      fill="none"
      aria-hidden="true"
      className="shrink-0 transition-transform duration-[650ms] ease-expo group-hover/tab:translate-x-[4px]"
    >
      <path d="M0 5h11M7.5 1.5 11 5l-3.5 3.5" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  )
}

const focusRing =
  'focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-blue'

export default function FaqBrowser() {
  const [active, setActive] = useState(faqCategories[0].id)
  const [open, setOpen] = useState([])
  const menuRef = useRef(null)

  const toggle = (id) =>
    setOpen((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))

  const onMenuKey = (event) => {
    const step = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 }[event.key]
    if (!step) return
    event.preventDefault()
    const index = faqCategories.findIndex((item) => item.id === active)
    const next = faqCategories[(index + step + faqCategories.length) % faqCategories.length]
    setActive(next.id)
    menuRef.current.querySelector(`[data-tab="${next.id}"]`).focus()
  }

  const category = faqCategories.find((item) => item.id === active)

  return (
    <section className="px-[15px] py-[60px] lg:py-[90px] min-[1440px]:py-[120px]">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col lg:flex-row lg:items-center lg:justify-between">
        <div
          ref={menuRef}
          role="tablist"
          aria-orientation="vertical"
          aria-label="FAQ categories"
          className="reveal flex w-full flex-1 flex-col lg:max-w-[410px]"
        >
          {faqCategories.map((item) => {
            const current = item.id === active
            return (
              <button
                key={item.id}
                data-tab={item.id}
                type="button"
                role="tab"
                id={`tab-${item.id}`}
                aria-selected={current}
                aria-controls={`panel-${item.id}`}
                tabIndex={current ? 0 : -1}
                onClick={() => setActive(item.id)}
                onKeyDown={onMenuKey}
                className={`group/tab flex w-full items-center justify-between gap-[10px] px-[20px] py-[11px] text-left font-heading text-[17px] font-semibold leading-[30px] tracking-[-0.5px] transition-colors duration-[650ms] ease-expo md:px-[30px] md:text-[20px] md:leading-[27px] lg:py-[17px] lg:leading-[32px] ${focusRing} ${
                  current
                    ? 'bg-deep text-white'
                    : 'bg-mist text-[#6f8197] hover:text-ink'
                }`}
              >
                {item.label}
                <Arrow />
              </button>
            )
          })}
        </div>

        <div
          key={active}
          id={`panel-${active}`}
          role="tabpanel"
          aria-labelledby={`tab-${active}`}
          className="mt-[33px] mb-[15px] w-full flex-1 lg:mt-0 lg:ml-[60px] lg:max-w-[770px]"
        >
          {category.questions.map((question, index) => {
            const id = `${category.id}-${index}`
            const expanded = open.includes(id)
            return (
              <div
                key={id}
                className="faq-enter group/row border-b border-[rgba(15,37,42,0.1)] transition-colors duration-[650ms] ease-expo hover:border-b-amber"
                style={{ animationDelay: `${index * 70}ms` }}
              >
                <button
                  type="button"
                  id={`ask-${id}`}
                  aria-expanded={expanded}
                  aria-controls={`ans-${id}`}
                  onClick={() => toggle(id)}
                  className={`flex w-full items-center justify-between gap-[30px] px-[20px] py-[15px] text-left max-[480px]:px-[10px] md:px-[30px] ${focusRing}`}
                >
                  <span className="font-heading text-[15px] font-semibold leading-[20px] tracking-[-0.5px] text-ink md:text-[18px] md:leading-[22px]">
                    {question}
                  </span>
                  <span className="relative flex h-[14px] w-[14px] shrink-0 items-center justify-center">
                    <span className="absolute h-[2px] w-[14px] rounded-full bg-ink transition-[width,background-color] duration-[650ms] ease-expo group-hover/row:w-[20px] group-hover/row:bg-amber" />
                    <span
                      className={`absolute h-[2px] w-[14px] rounded-full bg-ink transition-transform duration-[400ms] ease-expo ${
                        expanded ? 'rotate-0' : 'rotate-90'
                      }`}
                    />
                  </span>
                </button>
                <div
                  id={`ans-${id}`}
                  role="region"
                  aria-labelledby={`ask-${id}`}
                  className={`grid transition-[grid-template-rows] duration-[400ms] ease-expo ${
                    expanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-[20px] pt-[8px] pb-[15px] text-[14px] leading-[23px] tracking-[0.5px] text-muted max-[480px]:px-[10px] md:px-[30px] md:text-[17px] md:leading-[28px]">
                      {placeholderAnswer}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
