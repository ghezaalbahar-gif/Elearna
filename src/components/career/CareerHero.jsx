import { motion } from 'framer-motion'
import { careerHero } from './careerData'
import { expo } from './motion'

export default function CareerHero() {
  return (
    <section
      className="relative isolate overflow-hidden bg-ink px-[15px] pt-[123px] pb-[86px] md:pt-[160px] min-[992px]:pt-[210px] min-[992px]:pb-[178px]"
      style={{
        backgroundImage: `linear-gradient(#142022b3, #142022b3), url("${careerHero.image}")`,
        backgroundPosition: '0 0, 50%',
        backgroundRepeat: 'repeat, no-repeat',
        backgroundSize: 'auto, cover',
      }}
    >
      <div className="mx-auto w-full max-w-[1320px]">
        <div className="flex w-full max-w-[644px] flex-col items-start">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: expo }}
            className="text-[12px] font-medium uppercase leading-[23px] tracking-[0.5px] text-mist md:text-[15px]"
          >
            {careerHero.label}
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: expo, delay: 0.1 }}
            className="mt-[15px] mb-0 font-heading text-[35px] font-semibold leading-[35px] tracking-[-1.3px] text-white md:text-[45px] md:leading-[45px] md:tracking-[-1.5px] min-[992px]:text-[60px] min-[992px]:leading-[60px] min-[992px]:tracking-[-2.3px]"
          >
            {careerHero.heading}
          </motion.h1>
        </div>
      </div>
    </section>
  )
}
