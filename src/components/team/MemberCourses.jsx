import { Link } from 'react-router-dom'
import { courses } from './memberPage'

export default function MemberCourses() {
  return (
    <section className="px-[15px] pt-[50px] pb-[60px] lg:pt-[80px] lg:pb-[90px] 2xl:pt-[110px] 2xl:pb-[120px]">
      <div className="mx-auto w-full max-w-[1320px]">
        <p className="reveal text-[12px] font-medium uppercase leading-[23px] tracking-[0.5px] text-ink md:text-[15px]">
          {courses.kicker}
        </p>
        <h2 className="reveal mb-[40px] mt-[15px] font-heading text-[30px] font-semibold leading-[40px] tracking-[-1.3px] text-ink md:text-[40px] md:leading-[44px] md:tracking-[-1.5px] lg:text-[48px] lg:leading-[52px]">
          {courses.heading}
        </h2>

        <div className="grid w-full grid-cols-1 gap-[30px] md:grid-cols-2 lg:grid-cols-3">
          {courses.items.map((course, index) => (
            <article
              key={course.title}
              className="reveal group relative cursor-pointer overflow-hidden rounded-[4px]"
              style={{ transitionDelay: `${(index % 3) * 90}ms` }}
            >
              <img
                src={course.image}
                alt=""
                onError={(event) => {
                  event.currentTarget.style.display = 'none'
                }}
                className="aspect-[410/510] w-full object-cover"
              />
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.8) 74%)' }}
              />
              <span className="absolute right-[30px] top-[30px] flex h-[74px] w-[74px] items-center justify-center rounded-full bg-blue text-[20px] text-white xl:right-[50px] xl:top-[50px]">
                {course.price}
              </span>

              <div className="absolute inset-0 flex flex-col items-start justify-end p-[40px]">
                <p className="text-[13px] font-medium uppercase leading-[12px] tracking-[0.5px] text-white">
                  {course.category}
                </p>
                <h3 className="mb-[15px] mt-[20px] font-heading text-[20px] font-semibold leading-[30px] tracking-[-0.5px] text-white md:text-[24px] md:leading-[32px]">
                  {course.title}
                </h3>
                <p className="flex items-center gap-[5px]">
                  <img src={courses.starIcon} alt="" className="h-[14px] w-[14px]" />
                  <span className="text-[11px] leading-[12px] tracking-[0.5px] text-muted md:text-[13px]">
                    {course.rating} ({course.reviews})
                  </span>
                </p>

                <div className="grid w-full grid-rows-[0fr] transition-[grid-template-rows] duration-[300ms] ease-out group-hover:grid-rows-[1fr]">
                  <div className="overflow-hidden">
                    <div className="flex flex-col gap-[10px] pt-[40px] xl:flex-row">
                      <Link
                        to={course.links.details}
                        className="flex min-h-[50px] flex-1 items-center justify-center whitespace-nowrap rounded-[4px] bg-amber px-[24px] text-[14px] capitalize tracking-[-0.5px] text-ink transition duration-[650ms] ease-expo hover:scale-[0.95] md:text-[17px]"
                      >
                        {course.links.detailsLabel}
                      </Link>
                      <Link
                        to={course.links.buy}
                        className="flex min-h-[50px] flex-1 items-center justify-center whitespace-nowrap rounded-[4px] border border-[rgba(255,255,255,0.2)] bg-transparent px-[24px] text-[14px] capitalize tracking-[-0.5px] text-white transition duration-[650ms] ease-expo hover:scale-[0.95] md:text-[17px]"
                      >
                        {course.links.buyLabel}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
