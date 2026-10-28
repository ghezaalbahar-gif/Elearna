import { motion } from 'framer-motion'
import { detailHero, jobIcons } from './careerData'
import { expo, rise } from './motion'

export default function CareerDetailHero({ job }) {
  return (
    <>
      <section
        className="relative isolate bg-ink px-[15px] pt-[148px] pb-[175px] min-[480px]:pt-[200px] min-[480px]:pb-[230px]"
        style={{
          backgroundImage: `linear-gradient(#142022b3, #142022b3), url("${detailHero.image}")`,
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
              {detailHero.label}
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: expo, delay: 0.1 }}
              className="mt-[15px] mb-0 font-heading text-[35px] font-semibold leading-[35px] tracking-[-1.3px] text-white md:text-[45px] md:leading-[45px] md:tracking-[-1.5px] min-[992px]:text-[60px] min-[992px]:leading-[60px] min-[992px]:tracking-[-2.3px]"
            >
              {detailHero.heading}
            </motion.h1>
          </div>
        </div>
      </section>

      <section className="relative z-10 -mt-[80px] px-[15px]">
        <motion.div
          {...rise}
          className="mx-auto flex w-full max-w-[1320px] flex-col flex-wrap items-start justify-between gap-x-[40px] gap-y-[20px] rounded-[4px] bg-white px-[60px] pt-[45px] pb-[50px] shadow-[0_10px_32.9px_0_rgba(121,146,235,0.2)] min-[480px]:flex-row min-[480px]:items-end"
        >
          <div className="flex flex-col items-start">
            <h2 className="mt-0 mb-[20px] font-heading text-[30px] font-semibold leading-[40px] tracking-[-1.3px] text-ink md:text-[35px] md:leading-[44px] md:tracking-[-1.5px] min-[992px]:text-[48px] min-[992px]:leading-[52px] min-[992px]:tracking-[-1.5px]">
              {job.title}
            </h2>
            <div className="flex flex-wrap items-center gap-x-[25px] gap-y-[15px]">
              <div className="flex flex-wrap items-center gap-[7px]">
                <img
                  src={jobIcons.briefcase}
                  width={23}
                  height={23}
                  alt="Icon"
                  className="h-[23px] w-[23px] shrink-0"
                />
                <div className="font-heading text-[15px] font-semibold leading-[20px] tracking-[-0.5px] text-ink md:text-[18px] md:leading-[22px]">
                  {job.type}
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-[7px]">
                <img
                  src={jobIcons.clock}
                  width={23}
                  height={23}
                  alt="Icon"
                  className="h-[23px] w-[23px] shrink-0"
                />
                <div className="font-heading text-[15px] font-semibold leading-[20px] tracking-[-0.5px] text-ink md:text-[18px] md:leading-[22px]">
                  Last Date Of Application:
                </div>
                <div className="font-heading text-[15px] font-semibold leading-[20px] tracking-[-0.5px] text-ink md:text-[18px] md:leading-[22px]">
                  {job.deadline}
                </div>
              </div>
            </div>
          </div>
          <a
            href="#career-form"
            className="flex min-h-[50px] shrink-0 items-center justify-center gap-[8px] rounded-[4px] border-none bg-ink px-[20px] py-[10px] text-[14px] font-normal capitalize leading-[20px] tracking-[-0.5px] text-white transition-transform duration-200 ease-out hover:scale-[0.96] active:scale-[0.94] sm:px-[45px] sm:text-[17px]"
          >
            Apply Now
          </a>
        </motion.div>
      </section>
    </>
  )
}
