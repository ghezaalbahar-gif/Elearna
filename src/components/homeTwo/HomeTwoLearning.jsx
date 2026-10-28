import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { learning } from './homeTwoData'

const headingTwo =
  'font-heading text-[30px] font-semibold leading-[40px] tracking-[-1.3px] text-ink min-[768px]:text-[48px] min-[768px]:leading-[52px] min-[768px]:tracking-[-1.5px]'

export default function HomeTwoLearning() {
  return (
    <section
      aria-labelledby="home-two-learning-title"
      className="bg-white px-[15px] py-[55px] min-[992px]:pt-[80px] min-[992px]:pb-[90px] min-[1440px]:pt-[110px] min-[1440px]:pb-[120px]"
    >
      <div className="mx-auto w-full max-w-[1320px]">
        <div className="reveal flex flex-col items-center text-center">
          <p className="text-[12px] font-medium uppercase leading-[23px] tracking-[0.5px] text-ink min-[768px]:text-[15px] min-[768px]:leading-[29px]">
            {learning.label}
          </p>
          <h2
            id="home-two-learning-title"
            className={`mt-[15px] mb-[20px] min-[768px]:mb-[30px] ${headingTwo}`}
          >
            {learning.title}
          </h2>
        </div>

        <div className="flex flex-col items-stretch gap-[30px] min-[480px]:gap-[50px] min-[992px]:flex-row min-[992px]:items-center min-[992px]:justify-between">
          <div
            className="reveal relative flex flex-1 items-center justify-between gap-[20px] pt-[40px] pb-[60px] max-[479px]:flex-col max-[479px]:py-0 max-[767px]:[background-size:40%,50%] min-[992px]:max-w-[629px]"
            style={{
              backgroundImage: `url(${learning.yellowCircle}), url(${learning.outlineCircle})`,
              backgroundPosition: '17% 0, 15px 100%',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <div className="relative z-[3] w-full flex-1 min-[480px]:mb-[50px] min-[992px]:max-w-[243px]">
              <div className="h-[286px] w-full overflow-hidden rounded-tl-[40px]">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster={learning.video.poster}
                  className="block h-full w-full object-cover"
                >
                  <source src={learning.video.source} type="video/mp4" />
                </video>
              </div>
            </div>
            <div className="flex-1 min-[992px]:max-w-[366px]">
              <img
                src={learning.woman.image}
                alt={learning.woman.alt}
                width="366"
                height="471"
                loading="lazy"
                decoding="async"
                className="block h-auto w-full rounded-[4px] object-cover"
              />
            </div>
          </div>

          <div className="reveal flex-1 min-[992px]:max-w-[550px]">
            <p className="mb-[30px] text-[17px] leading-[29px] text-muted">{learning.text}</p>

            <div className="mb-[40px] grid grid-cols-2 gap-[30px] min-[480px]:flex min-[480px]:items-stretch min-[480px]:justify-between">
              {learning.counters.map((counter, index) => (
                <Fragment key={counter.id}>
                  {index > 0 ? (
                    <span
                      aria-hidden="true"
                      className="hidden w-px shrink-0 self-stretch bg-ink min-[480px]:block"
                    />
                  ) : null}
                  <div className="flex flex-col items-start">
                    <div className="flex h-[40px] items-center overflow-hidden min-[768px]:h-[44px] min-[992px]:h-[52px]">
                      <span className={`${headingTwo} whitespace-nowrap`}>{counter.value}</span>
                    </div>
                    <p className="text-[12px] font-medium uppercase leading-[23px] tracking-[0.5px] text-ink min-[768px]:text-[15px] min-[768px]:leading-[29px]">
                      {counter.label}
                    </p>
                  </div>
                </Fragment>
              ))}
            </div>

            <div className="flex flex-col items-start gap-[25px] rounded-[4px] bg-mist px-[20px] py-[30px] min-[480px]:flex-row min-[480px]:flex-wrap min-[480px]:items-center min-[480px]:justify-between min-[480px]:px-[40px]">
              <div className="flex flex-1 flex-col gap-[19px] min-[480px]:max-w-[299px]">
                <p className="font-heading text-[17px] font-semibold leading-[23px] tracking-[-0.5px] text-ink min-[768px]:text-[20px] min-[768px]:leading-[25px]">
                  {learning.questions.title}
                </p>
                <p className="text-[17px] leading-[29px] text-muted">{learning.questions.text}</p>
              </div>
              <div className="shrink-0">
                <Link
                  to={learning.questions.ctaTo}
                  className="btn btn-dark focus-visible:outline-2 focus-visible:outline-offset-3px focus-visible:outline-amber"
                >
                  {learning.questions.ctaLabel}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
