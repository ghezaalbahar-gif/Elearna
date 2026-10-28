import { useId, useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CTASection from '../components/CTASection'
import CourseListingCard from '../components/CourseListingCard'
import { assets } from '../data/assets'
import {
  courseListingCategoryLinks,
  courseListingHero,
  courseListingIntro,
  courseListingSlides,
} from '../data/courseListing'

export default function CourseListing() {
  const [activeSlide, setActiveSlide] = useState(0)
  const baseId = useId().replace(/:/g, '')

  return (
    <div className="site category-page course-listing-page">
      <Navbar />
      <main id="main-content">
        <section
          className="course-one-hero"
          style={{ backgroundImage: `url("${assets.categoryHeroBackground}")` }}
          aria-labelledby="course-listing-title"
        >
          <div className="course-one-hero-container">
            <div className="course-one-hero-wrap">
              <div className="small-heading">{courseListingHero.eyebrow}</div>
              <h1 id="course-listing-title">{courseListingHero.title}</h1>
            </div>
          </div>
        </section>

        <section className="course-one-category" aria-label="Course categories">
          <div className="container">
            <div className="course-one-category-main">
              {courseListingCategoryLinks.map((category) => (
                <Link key={category.title} to={category.href} className="course-one-category-cards">
                  <span className="category-icons-wrap">
                    <img
                      src={category.icon}
                      width="30"
                      height="30"
                      alt=""
                      aria-hidden="true"
                      loading="lazy"
                    />
                  </span>
                  <span className="category-text">{category.title}</span>
                  <span className="course-one-category-count">{category.count} Courses</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="course-one-store" aria-labelledby="course-store-title">
          <div className="container">
            <div className="small-heading text-dark">{courseListingIntro.eyebrow}</div>
            <h2 id="course-store-title" className="course-one-store-heading">
              {courseListingIntro.title}
            </h2>

            <div className="courses-pagination">
              <div className="courses-tab-content">
                {courseListingSlides.map((slide, index) => (
                  <div
                    key={index}
                    id={`${baseId}-pane-${index}`}
                    role="tabpanel"
                    aria-labelledby={`${baseId}-tab-${index}`}
                    className={`w-tab-pane${activeSlide === index ? ' w--tab-active' : ''}`}
                  >
                    <ul className="courses-cards-wrapper" role="list">
                      {slide.map((course) => (
                        <li key={course.id}>
                          <CourseListingCard course={course} />
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="courses-pagination-menu" role="tablist" aria-label="Course pages">
                {courseListingSlides.map((slide, index) => (
                  <button
                    key={index}
                    type="button"
                    id={`${baseId}-tab-${index}`}
                    role="tab"
                    aria-selected={activeSlide === index}
                    aria-controls={`${baseId}-pane-${index}`}
                    tabIndex={activeSlide === index ? 0 : -1}
                    className={`tab-nav-link${activeSlide === index ? ' w--current' : ''}`}
                    onClick={() => setActiveSlide(index)}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
