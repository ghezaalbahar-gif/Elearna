import { useState } from 'react'
import { testimonials } from '../../data/testimonials'
import { testimonial } from './homeTwoData'

export default function HomeTwoTestimonial() {
  const [index, setIndex] = useState(0)

  const go = (step) => setIndex((previous) => (previous + step + testimonials.length) % testimonials.length)

  return (
    <section
      aria-labelledby="home-two-testimonial-title"
      className="bg-white px-[15px] py-[60px] min-[992px]:py-[90px] min-[1440px]:py-[120px]"
    >
      <div className="mx-auto w-full max-w-[1038px]">
        <h2 id="home-two-testimonial-title" className="sr-only">
          Student testimonials
        </h2>
        <div className="reveal flex flex-col items-center text-center">
          <img
            src={testimonial.quoteImage}
            alt=""
            aria-hidden="true"
            width="159"
            height="116"
            loading="lazy"
            decoding="async"
            className="mb-[30px] h-auto w-[100px] min-[768px]:w-[159px]"
          />

          <div className="relative flex w-full flex-col items-center pb-[60px]">
            <div className="w-full overflow-hidden">
              <div
                className="flex transition-transform duration-[500ms] ease-in-out"
                style={{ transform: `translateX(-${index * 100}%)` }}
              >
                {testimonials.map((item) => (
                  <div className="min-w-full basis-full" key={item.id}>
                    <div className="flex flex-col items-center">
                      <p className="mb-[40px] text-[15px] leading-[23px] text-ink min-[768px]:text-[22px] min-[768px]:leading-[29px]">
                        {item.quote}
                      </p>
                      <p className="mb-[5px] text-[15px] leading-[20px] text-ink min-[768px]:text-[22px] min-[768px]:leading-[32px]">
                        {item.name}
                      </p>
                      <p className="text-[12px] uppercase leading-[23px] text-muted min-[768px]:text-[15px]">
                        {item.role}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute inset-x-0 bottom-0 flex items-center justify-center gap-[10px]">
              <button
                type="button"
                aria-label={testimonial.previousLabel}
                onClick={() => go(-1)}
                className="flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full border border-ink opacity-50 transition-opacity duration-300 hover:opacity-100 focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-offset-3px focus-visible:outline-amber"
              >
                <img
                  src={testimonial.arrowImage}
                  alt=""
                  aria-hidden="true"
                  width="18"
                  height="12"
                  decoding="async"
                  className="h-auto w-[18px] rotate-180"
                />
              </button>
              <button
                type="button"
                aria-label={testimonial.nextLabel}
                onClick={() => go(1)}
                className="flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full border border-ink opacity-50 transition-opacity duration-300 hover:opacity-100 focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-offset-3px focus-visible:outline-amber"
              >
                <img
                  src={testimonial.arrowImage}
                  alt=""
                  aria-hidden="true"
                  width="18"
                  height="12"
                  decoding="async"
                  className="h-auto w-[18px]"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
