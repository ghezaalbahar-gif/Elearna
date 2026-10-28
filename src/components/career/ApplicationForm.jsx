import { useState } from 'react'
import { motion } from 'framer-motion'
import { application } from './careerData'
import { rise } from './motion'

const fieldBase =
  'h-[50px] w-full rounded-[4px] border border-transparent bg-[rgba(255,255,255,0.15)] px-[20px] text-[14px] leading-[29px] font-normal text-white placeholder:text-white outline-none transition-colors duration-300 focus:border-[rgba(255,255,255,0.55)] sm:text-[17px]'

export default function ApplicationForm() {
  const [status, setStatus] = useState('idle')

  const onSubmit = (event) => {
    event.preventDefault()
    const form = event.currentTarget
    if (!form.reportValidity()) {
      setStatus('error')
      return
    }
    form.reset()
    setStatus('success')
  }

  return (
    <section
      id="career-form"
      className="px-[15px] pt-[50px] pb-[60px] min-[992px]:pt-[90px] min-[992px]:pb-[90px]"
      style={{
        backgroundImage: `linear-gradient(#00000080, #00000080), url("${application.image}")`,
        backgroundPosition: '0 0, 50%',
        backgroundRepeat: 'repeat, no-repeat',
        backgroundSize: 'auto, cover',
      }}
    >
      <div className="mx-auto flex w-full max-w-[1320px] flex-col items-start justify-between gap-[40px] min-[992px]:flex-row min-[992px]:items-center">
        <motion.div
          {...rise}
          className="flex w-full flex-1 flex-col items-start min-[992px]:max-w-[452px]"
        >
          <div className="text-[12px] font-medium uppercase leading-[23px] tracking-[0.5px] text-mist md:text-[15px]">
            {application.label}
          </div>
          <h2 className="mt-[10px] mb-[7px] font-heading text-[30px] font-semibold leading-[40px] tracking-[-1.3px] text-white md:mt-[15px] md:mb-[12px] md:text-[35px] md:leading-[44px] md:tracking-[-1.5px] min-[992px]:text-[48px] min-[992px]:leading-[52px] min-[992px]:tracking-[-1.5px]">
            {application.heading}
          </h2>
          <p className="m-0 text-white opacity-70">{application.description}</p>
        </motion.div>

        <motion.div
          {...rise}
          className="w-full flex-1 rounded-[4px] border border-[rgba(255,182,6,0.16)] bg-[rgba(255,255,255,0.1)] px-[20px] py-[40px] backdrop-blur-[52px] min-[480px]:p-[40px] min-[992px]:p-[60px] min-[992px]:max-w-[520px]"
        >
          {status === 'success' ? (
            <div className="bg-[#ddd] p-[20px] text-center text-ink" role="status">
              {application.success}
            </div>
          ) : (
            <>
              <form noValidate onSubmit={onSubmit} className="flex flex-col">
                {application.fields.map((field, index) => (
                  <input
                    key={field.name}
                    name={field.name}
                    id={field.name}
                    type={field.type}
                    placeholder={field.label}
                    maxLength={256}
                    required
                    onChange={() => setStatus('idle')}
                    className={`${fieldBase} ${index === application.fields.length - 1 ? 'mb-[30px]' : 'mb-[10px]'}`}
                  />
                ))}
                <input
                  type="submit"
                  value={application.submit}
                  title="Demo only — this form is not connected to a backend"
                  className="min-h-[50px] w-full cursor-pointer rounded-[4px] border-none bg-amber px-[20px] text-[14px] font-normal capitalize leading-[20px] tracking-[-0.5px] text-ink transition-transform duration-200 ease-out hover:scale-[0.96] active:scale-[0.94] sm:px-[45px] sm:text-[17px]"
                />
              </form>
              {status === 'error' ? (
                <div className="mt-[10px] bg-[#ffdede] p-[10px] text-ink" role="alert">
                  {application.failure}
                </div>
              ) : null}
            </>
          )}
        </motion.div>
      </div>
    </section>
  )
}
