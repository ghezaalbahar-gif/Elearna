import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { rise } from './motion'

const buttonBase =
  'flex min-h-[50px] items-center justify-center gap-[8px] rounded-[4px] px-[20px] py-[10px] text-[14px] font-normal capitalize leading-[20px] tracking-[-0.5px] sm:px-[45px] sm:text-[17px]'

export default function JobCard({ job }) {
  const topics = [
    { label: 'Job Description :', value: job.summary },
    { label: 'Job Type :', value: job.type },
    { label: 'Experience :', value: job.experience },
  ]

  return (
    <motion.div
      {...rise}
      className="flex h-full flex-col items-start rounded-[4px] bg-white px-[20px] py-[30px] shadow-[0_0_0_0_rgba(15,37,42,0)] transition-shadow duration-300 ease-out hover:shadow-[0_40px_60px_0_rgba(15,37,42,0.14)] sm:p-[30px] min-[992px]:p-[40px] xl:px-[60px]"
    >
      <div className="font-heading text-[20px] font-semibold leading-[30px] tracking-[-0.5px] text-ink md:leading-[32px] min-[992px]:text-[24px]">
        {job.title}
      </div>
      <div className="mt-[10px] mb-[30px] flex flex-col gap-[8px]">
        <div className="text-[11px] uppercase leading-[12px] tracking-[0.5px] text-muted sm:text-[13px]">
          {job.posts}
        </div>
        <div className="text-[11px] uppercase leading-[12px] tracking-[0.5px] text-muted sm:text-[13px]">
          {job.location}
        </div>
      </div>
      <div className="mb-[20px] flex flex-wrap items-stretch gap-[20px] min-[480px]:flex-col min-[480px]:items-start sm:flex-row sm:items-center">
        <div className={`${buttonBase} bg-amber text-ink`}>{job.salary}</div>
        <Link
          to={`/career/${job.slug}`}
          className={`${buttonBase} border-none bg-ink text-white transition-transform duration-200 ease-out hover:scale-[0.96] active:scale-[0.94]`}
        >
          Apply Now
        </Link>
      </div>
      <div>
        {topics.map((topic) => (
          <div key={topic.label} className="flex flex-wrap items-center gap-x-[7px]">
            <span className="h-[4px] w-[4px] shrink-0 rounded-full bg-muted" />
            <span>{topic.label}</span>
            <span>{topic.value}</span>
          </div>
        ))}
      </div>
    </motion.div>
  )
}
