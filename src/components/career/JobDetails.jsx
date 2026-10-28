import { motion } from 'framer-motion'
import { jobDetailsPanel } from './careerData'
import { rise } from './motion'

export default function JobDetails({ job }) {
  return (
    <motion.aside
      {...rise}
      className="w-full flex-1 rounded-[8px] bg-amber px-[20px] py-[35px] min-[480px]:px-[35px] min-[992px]:sticky min-[992px]:top-[150px] min-[992px]:max-w-[409px]"
    >
      <h3 className="mt-0 mb-[20px] font-heading text-[25px] font-semibold leading-[35px] tracking-[-0.7px] text-ink md:text-[30px] md:leading-[37px] md:tracking-[-1px] min-[992px]:text-[35px] min-[992px]:leading-[42px]">
        {jobDetailsPanel.heading}
      </h3>
      <div className="mb-[30px]">
        {jobDetailsPanel.rows.map((row) => (
          <div
            key={row.label}
            className="mb-[10px] flex flex-wrap items-center justify-start gap-[8px] text-ink"
          >
            <div>{row.label}</div>
            <div>{job[row.key]}</div>
          </div>
        ))}
      </div>
      <a
        href="#career-form"
        className="flex min-h-[50px] w-full items-center justify-center gap-[8px] rounded-[4px] border-none bg-ink px-[20px] py-[10px] text-[14px] font-normal capitalize leading-[20px] tracking-[-0.5px] text-white transition-transform duration-200 ease-out hover:scale-[0.96] active:scale-[0.94] sm:px-[45px] sm:text-[17px]"
      >
        Apply Now
      </a>
    </motion.aside>
  )
}
