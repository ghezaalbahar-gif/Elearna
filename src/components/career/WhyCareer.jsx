import { motion } from 'framer-motion'
import { whyCareer } from './careerData'
import { rise } from './motion'

export default function WhyCareer() {
  return (
    <section className="px-[15px] pt-[60px] pb-[50px] min-[992px]:pt-[90px] min-[992px]:pb-[90px] min-[1440px]:pt-[120px] min-[1440px]:pb-[120px]">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col items-center justify-between gap-[20px] sm:gap-[40px] min-[992px]:flex-row">
        <motion.div
          {...rise}
          className="flex w-full items-start gap-[15px] sm:gap-[30px] min-[992px]:max-w-[659px]"
        >
          <div className="flex-1 min-[992px]:max-w-[410px]">
            <img
              src={whyCareer.images[0].src}
              srcSet={whyCareer.images[0].srcSet}
              sizes={whyCareer.images[0].sizes}
              width={whyCareer.images[0].width}
              height={whyCareer.images[0].height}
              alt={whyCareer.images[0].alt}
              loading="lazy"
              className="aspect-square w-full rounded-[4px] object-cover min-[992px]:aspect-auto"
            />
          </div>
          <div className="hidden flex-1 self-end sm:block min-[992px]:mt-[140px] min-[992px]:max-w-[219px]">
            <img
              src={whyCareer.images[1].src}
              width={whyCareer.images[1].width}
              height={whyCareer.images[1].height}
              alt={whyCareer.images[1].alt}
              loading="lazy"
              className="aspect-square w-full rounded-[4px] object-cover min-[992px]:aspect-auto"
            />
          </div>
        </motion.div>

        <div className="flex w-full flex-1 flex-col items-start min-[992px]:max-w-[520px]">
          <motion.div
            {...rise}
            className="text-[12px] font-medium uppercase leading-[23px] tracking-[0.5px] text-ink md:text-[15px]"
          >
            {whyCareer.label}
          </motion.div>
          <motion.h2
            {...rise}
            className="mt-[15px] mb-[15px] font-heading text-[30px] font-semibold leading-[40px] tracking-[-1.3px] text-ink md:mb-[35px] md:text-[35px] md:leading-[44px] md:tracking-[-1.5px] min-[992px]:text-[48px] min-[992px]:leading-[52px] min-[992px]:tracking-[-1.5px]"
          >
            {whyCareer.heading}
          </motion.h2>
          <motion.p {...rise} className="mb-[20px]">
            {whyCareer.description}
          </motion.p>
          {whyCareer.points.map((point, index) => (
            <motion.div
              key={point.title}
              {...rise}
              className={`flex flex-col items-start gap-[15px] min-[480px]:flex-row min-[480px]:gap-[30px] ${
                index === 0 ? 'mb-[25px]' : ''
              }`}
            >
              <img
                src={point.icon}
                width={24}
                height={24}
                alt="Icon"
                loading="lazy"
                className="mt-[5px] h-[24px] w-[24px] shrink-0"
              />
              <div className="flex flex-col items-start">
                <div className="mb-[15px] font-heading text-[17px] font-semibold leading-[23px] tracking-[-0.5px] text-ink md:text-[20px] md:leading-[25px]">
                  {point.title}
                </div>
                <p className="m-0">{point.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
