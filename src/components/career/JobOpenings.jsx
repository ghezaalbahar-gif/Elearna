import { motion } from 'framer-motion'
import { jobOpenings, jobs } from './careerData'
import { rise } from './motion'
import JobCard from './JobCard'

export default function JobOpenings() {
  return (
    <section className="bg-mist px-[15px] pt-[50px] pb-[60px] min-[992px]:pt-[80px] min-[992px]:pb-[90px] min-[1440px]:pt-[110px] min-[1440px]:pb-[120px]">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col items-center">
        <motion.div
          {...rise}
          className="text-[12px] font-medium uppercase leading-[23px] tracking-[0.5px] text-ink md:text-[15px]"
        >
          {jobOpenings.label}
        </motion.div>
        <motion.h2
          {...rise}
          className="mt-[15px] mb-0 text-center font-heading text-[30px] font-semibold leading-[40px] tracking-[-1.3px] text-ink md:text-[35px] md:leading-[44px] md:tracking-[-1.5px] min-[992px]:text-[48px] min-[992px]:leading-[52px] min-[992px]:tracking-[-1.5px]"
        >
          {jobOpenings.heading}
        </motion.h2>
        <div className="mt-[30px] grid w-full grid-cols-1 gap-[15px] min-[480px]:grid-cols-2 sm:gap-[30px]">
          {jobs.map((job) => (
            <JobCard key={job.slug} job={job} />
          ))}
        </div>
      </div>
    </section>
  )
}
