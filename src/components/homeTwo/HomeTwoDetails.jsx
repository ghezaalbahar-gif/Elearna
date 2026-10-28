import { details } from './homeTwoData'

export default function HomeTwoDetails() {
  return (
    <section aria-label="What Elearna includes" className="relative z-[2] -mt-[50px] px-[15px]">
      <div className="reveal mx-auto grid w-full max-w-[1320px] grid-cols-1 gap-[40px] rounded-[4px] bg-white p-[40px_30px] shadow-float min-[480px]:grid-cols-2 min-[480px]:gap-[40px_20px] min-[768px]:flex min-[768px]:items-center min-[768px]:justify-between min-[768px]:gap-[30px] min-[768px]:p-[40px_30px_30px] min-[992px]:gap-[20px] min-[992px]:p-[60px_30px_50px]">
        {details.map((item) => (
          <div
            key={item.id}
            className="flex max-w-[383px] flex-col items-center gap-[24px] text-center min-[768px]:flex-1 min-[992px]:flex-row min-[992px]:items-start min-[992px]:text-left"
          >
            <img
              src={item.icon}
              alt=""
              width="45"
              height="45"
              loading="lazy"
              decoding="async"
              className="mt-[7px] h-[45px] w-[45px] shrink-0"
            />
            <div>
              <h2 className="font-heading text-[20px] font-semibold leading-[30px] tracking-[-0.5px] text-ink min-[768px]:leading-[32px] min-[992px]:text-[24px]">
                {item.title}
              </h2>
              <p className="text-[17px] leading-[29px] tracking-[0.5px] text-muted">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
