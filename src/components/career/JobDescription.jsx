import { motion } from 'framer-motion'
import { jobDescription } from './careerData'
import { rise } from './motion'

export default function JobDescription() {
  return (
    <motion.div {...rise} className="w-full flex-1 min-[992px]:max-w-[773px]">
      {jobDescription.blocks.map((block) => (
        <div key={block.heading}>
          <h4 className="mt-[10px] mb-[10px] font-heading text-[20px] font-semibold leading-[30px] tracking-[-0.5px] text-ink md:leading-[32px] min-[992px]:text-[24px]">
            {block.heading}
          </h4>
          {block.paragraphs.map((paragraph, index) => (
            <p key={index} className="mt-0 mb-[10px]">
              {paragraph}
            </p>
          ))}
          {block.list ? (
            <ul className="mt-0 mb-[10px] list-disc pl-[20px]">
              {block.list.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : null}
          {block.image ? (
            <figure className="my-[39px] mx-0">
              <img
                src={block.image.src}
                alt={block.image.alt}
                loading="lazy"
                className="h-auto w-full"
              />
            </figure>
          ) : null}
        </div>
      ))}
    </motion.div>
  )
}
