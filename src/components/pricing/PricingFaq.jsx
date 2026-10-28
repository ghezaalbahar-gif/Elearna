import { useState } from 'react'
import { faqIntro, pricingFaqs } from './PricingFaqData'

const focusRing =
  'focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-blue'

function FaqArt() {
  return (
    <img
      src={faqIntro.image}
      alt={faqIntro.imageAlt}
      width={faqIntro.width}
      height={faqIntro.height}
      onError={(event) => {
        event.currentTarget.style.display = 'none'
      }}
      className="shrink-0"
    />
  )
}

export default function PricingFaq() {
  const [open, setOpen] = useState([])

  const toggle = (id) => {
    setOpen((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id],
    )
  }

  return (
    <section
      id="contact"
      className="bg-mist pt-[60px] pb-[60px] min-[992px]:pt-[80px] min-[992px]:pb-[90px] min-[1440px]:pt-[100px] min-[1440px]:pb-[120px]"
    >
      <div className="mx-auto w-full max-w-[940px]">
        <div className="reveal mb-[40px] flex w-full max-w-[850px] flex-col items-center gap-[30px] text-center min-[768px]:flex-row min-[768px]:justify-between min-[768px]:text-left">
          <FaqArt />
          <div className="flex max-w-[413px] flex-1 flex-col items-center min-[768px]:items-start">
            <span className="text-[12px] font-medium uppercase leading-[23px] tracking-[0.5px] text-ink min-[768px]:text-[15px]">
              {faqIntro.label}
            </span>
            <h2 className="mt-[15px] font-heading text-[30px] font-semibold leading-[40px] tracking-[-1.3px] text-ink min-[768px]:text-[35px] min-[768px]:leading-[44px] min-[768px]:tracking-[-1.5px] min-[992px]:text-[48px] min-[992px]:leading-[52px]">
              {faqIntro.title}
            </h2>
          </div>
        </div>

        <div className="reveal">
          {pricingFaqs.map((item) => {
            const expanded = open.includes(item.id)
            return (
              <div key={item.id} className="border-b border-[rgba(15,37,42,0.1)]">
                <h3>
                  <button
                    type="button"
                    aria-expanded={expanded}
                    aria-controls={`faq-panel-${item.id}`}
                    onClick={() => {
                      toggle(item.id)
                    }}
                    className={`${focusRing} flex w-full cursor-pointer items-center justify-between gap-[30px] px-[10px] py-[15px] text-left min-[480px]:px-[20px] min-[768px]:px-[30px]`}
                  >
                    <span className="font-heading text-[15px] font-semibold leading-[20px] tracking-[-0.5px] text-ink min-[768px]:text-[18px] min-[768px]:leading-[22px]">
                      {item.question}
                    </span>
                    <span className="relative flex h-[14px] w-[14px] shrink-0 items-center justify-center">
                      <span className="absolute h-[2px] w-[14px] rounded-full bg-ink" />
                      <span
                        className={`absolute h-[2px] w-[14px] rounded-full bg-ink transition-transform duration-[400ms] ease-expo ${
                          expanded ? 'rotate-0' : 'rotate-90'
                        }`}
                      />
                    </span>
                  </button>
                </h3>
                <div
                  id={`faq-panel-${item.id}`}
                  role="region"
                  className={`grid transition-[grid-template-rows] duration-[400ms] ease-expo ${
                    expanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-[10px] pt-[8px] pb-[15px] text-[14px] leading-[23px] tracking-[0.5px] text-muted min-[480px]:px-[20px] min-[768px]:px-[30px] min-[768px]:text-[17px] min-[768px]:leading-[28px]">
                      {item.answer}
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
