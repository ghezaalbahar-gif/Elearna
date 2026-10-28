import { Link } from 'react-router-dom'
import { assets } from '../../data/assets'
import { categories } from '../../data/categories'
import { categoriesBlock } from './homeTwoData'

export default function HomeTwoCategories() {
  return (
    <section
      aria-labelledby="home-two-categories-title"
      className="bg-white px-[15px] pt-[50px] pb-[60px] min-[992px]:pt-[90px] min-[992px]:pb-[90px] min-[1440px]:pt-[120px] min-[1440px]:pb-[120px]"
    >
      <div className="mx-auto flex w-full max-w-[1320px] flex-col items-center gap-[40px] min-[992px]:flex-row min-[992px]:items-start min-[992px]:justify-between">
        <div className="reveal flex flex-col items-center text-center min-[992px]:max-w-[397px] min-[992px]:items-start min-[992px]:text-left">
          <p className="text-[12px] font-medium uppercase leading-[23px] tracking-[0.5px] text-ink min-[992px]:text-[15px] min-[992px]:leading-[29px]">
            {categoriesBlock.label}
          </p>
          <h2
            id="home-two-categories-title"
            className="mt-[15px] mb-[20px] max-w-[500px] font-heading text-[30px] font-semibold leading-[40px] tracking-[-1.3px] text-ink min-[768px]:text-[35px] min-[768px]:leading-[44px] min-[768px]:tracking-[-1.2px] min-[992px]:mb-[30px] min-[992px]:max-w-none min-[992px]:text-[48px] min-[992px]:leading-[52px] min-[992px]:tracking-[-1.5px]"
          >
            {categoriesBlock.title}
          </h2>
          <Link to={categoriesBlock.ctaTo} className="btn btn-dark">
            {categoriesBlock.ctaLabel}
          </Link>
        </div>

        <div className="grid w-full grid-cols-2 gap-[20px] min-[480px]:gap-[30px] min-[768px]:grid-cols-3 min-[992px]:mt-[10px] min-[992px]:max-w-[630px]">
          {categories.map((category, index) => (
            <div
              key={category.id}
              className="reveal"
              style={{ transitionDelay: `${index * 70}ms` }}
            >
              <Link
                to={category.href}
                className="flex h-full flex-col items-center justify-center rounded-[4px] border border-line-soft bg-white px-[20px] pt-[20px] pb-[30px] text-center transition-[border-color,box-shadow] duration-[350ms] ease-in-out hover:border-transparent hover:shadow-lift focus-visible:border-transparent focus-visible:shadow-lift"
              >
                <span className="mb-[15px] flex h-[70px] w-[70px] items-center justify-center rounded-full bg-mist">
                  <img
                    src={assets.categoryIcons[category.icon]}
                    alt=""
                    className="h-[37px] w-auto"
                    loading="lazy"
                    decoding="async"
                  />
                </span>
                <span className="mb-[5px] max-w-[116px] font-heading text-[15px] font-semibold leading-[20px] tracking-[-0.5px] text-ink min-[768px]:text-[18px] min-[768px]:leading-[22px]">
                  {category.title}
                </span>
                <span className="text-[17px] leading-[29px] tracking-[0.5px] text-muted">
                  {category.count} Courses
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
