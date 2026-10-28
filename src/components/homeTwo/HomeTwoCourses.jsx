import { Link } from 'react-router-dom'
import { assets } from '../../data/assets'
import { useCart } from '../../context/CartContext'
import { coursesBlock } from './homeTwoData'

const corner = 'absolute bg-white transition-[width,height] duration-[450ms] ease-in-out'

export default function HomeTwoCourses() {
  const { addItem } = useCart()

  return (
    <section
      aria-labelledby="home-two-courses-title"
      className="bg-mist px-[15px] pt-[50px] pb-[60px] min-[992px]:pt-[80px] min-[992px]:pb-[90px] min-[1440px]:pt-[110px] min-[1440px]:pb-[120px]"
    >
      <div className="mx-auto w-full max-w-[1320px]">
        <p className="reveal text-[12px] font-medium uppercase leading-[23px] tracking-[0.5px] text-ink min-[992px]:text-[15px] min-[992px]:leading-[29px]">
          {coursesBlock.label}
        </p>
        <h2
          id="home-two-courses-title"
          className="reveal mt-[15px] mb-[40px] font-heading text-[30px] font-semibold leading-[40px] tracking-[-1.3px] text-ink min-[768px]:text-[48px] min-[768px]:leading-[52px] min-[768px]:tracking-[-1.5px]"
        >
          {coursesBlock.title}
        </h2>

        <div className="mb-[40px] grid grid-cols-1 gap-[30px] min-[768px]:grid-cols-2 min-[992px]:mb-[80px] min-[992px]:grid-cols-3">
          {coursesBlock.items.map(({ course, image }, index) => (
            <article
              key={course.id}
              className="reveal group relative overflow-hidden rounded-[4px]"
              style={{ transitionDelay: `${(index % 3) * 90}ms` }}
            >
              <img
                src={image}
                alt={course.alt}
                width="410"
                height="510"
                loading="lazy"
                decoding="async"
                className="block h-[510px] w-full object-cover"
              />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
                style={{
                  backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.8) 74%)',
                }}
              />

              <div className="absolute inset-0 z-[3] flex flex-col items-start justify-end p-[20px] min-[480px]:p-[40px]">
                <p className="text-[13px] font-medium uppercase leading-[12px] tracking-[0.5px] text-white/70">
                  {course.category}
                </p>
                <h3 className="mt-[20px] mb-[15px] font-heading text-[20px] font-semibold leading-[30px] tracking-[-0.5px] text-white min-[768px]:text-[24px] min-[768px]:leading-[32px]">
                  {course.title}
                </h3>

                <div className="flex items-center gap-[5px]">
                  <img
                    src={assets.rating}
                    alt=""
                    width="79"
                    height="19"
                    loading="lazy"
                    decoding="async"
                    className="h-[19px] w-[79px]"
                  />
                  <span className="text-[13px] uppercase leading-[12px] tracking-[0.5px] text-muted">
                    {course.rating} ({course.reviews})
                  </span>
                </div>

                <div className="max-h-[220px] w-full overflow-hidden opacity-100 transition-[max-height,opacity] duration-[450ms] ease-in-out min-[992px]:max-h-0 min-[992px]:opacity-0 min-[992px]:group-focus-within:max-h-[220px] min-[992px]:group-focus-within:opacity-100 min-[992px]:group-hover:max-h-[220px] min-[992px]:group-hover:opacity-100">
                  <div className="flex w-full flex-col items-stretch gap-[10px] pt-[25px] min-[480px]:pt-[40px] min-[1280px]:flex-row">
                    <Link
                      to={`/courses/${course.slug}`}
                      className="home-two-action btn btn-yellow focus-visible:outline-2 focus-visible:outline-offset-3px focus-visible:outline-amber"
                    >
                      Course details
                    </Link>
                    {course.price !== 'Free' && (
                      <button
                        type="button"
                        onClick={() => addItem(course)}
                        className="home-two-action btn btn-dark focus-visible:outline-2 focus-visible:outline-offset-3px focus-visible:outline-amber"
                      >
                        Buy course
                      </button>
                    )}
                  </div>
                </div>
              </div>

              <span
                aria-hidden="true"
                className={`${corner} left-[10px] top-[10px] h-px w-[168px] min-[480px]:left-[20px] min-[480px]:top-[20px] min-[992px]:w-0 min-[992px]:group-hover:w-[168px] min-[992px]:group-focus-within:w-[168px]`}
              />
              <span
                aria-hidden="true"
                className={`${corner} left-[10px] top-[10px] h-[160px] w-px min-[480px]:left-[20px] min-[480px]:top-[20px] min-[992px]:h-0 min-[992px]:group-hover:h-[160px] min-[992px]:group-focus-within:h-[160px]`}
              />
              <span
                aria-hidden="true"
                className={`${corner} bottom-[10px] right-[10px] h-px w-[168px] min-[480px]:bottom-[20px] min-[480px]:right-[20px] min-[992px]:w-0 min-[992px]:group-hover:w-[168px] min-[992px]:group-focus-within:w-[168px]`}
              />
              <span
                aria-hidden="true"
                className={`${corner} bottom-[10px] right-[10px] h-[160px] w-px min-[480px]:bottom-[20px] min-[480px]:right-[20px] min-[992px]:h-0 min-[992px]:group-hover:h-[160px] min-[992px]:group-focus-within:h-[160px]`}
              />

              <span
                aria-label={`Price: ${course.price}`}
                className="absolute right-[30px] top-[30px] flex h-[65px] w-[65px] items-center justify-center rounded-full bg-blue text-[17px] text-white min-[480px]:h-[74px] min-[480px]:w-[74px] min-[480px]:text-[20px] min-[1280px]:right-[50px] min-[1280px]:top-[50px]"
              >
                {course.price}
              </span>
            </article>
          ))}
        </div>

        <div className="mx-auto flex max-w-[724px] items-center justify-center rounded-[10px] bg-ink px-[20px] py-[20px] text-center text-[16px] leading-[21px] text-white min-[480px]:rounded-[85px] min-[768px]:px-[60px]">
          <p>
            {coursesBlock.moreText}{' '}
            <Link
              to={coursesBlock.moreTo}
              className="text-white underline focus-visible:outline-2 focus-visible:outline-offset-3px focus-visible:outline-amber"
            >
              {coursesBlock.moreLabel}
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}
