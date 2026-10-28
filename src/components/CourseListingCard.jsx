import { Link } from 'react-router-dom'
import { assets } from '../data/assets'

export default function CourseListingCard({ course }) {
  const detailsPath = `/courses/${course.slug}`
  const enrollPath = `${detailsPath}/enroll`
  const isPaid = course.price !== 'Free'
  const image = assets.courseListingImages[course.id] ?? course.image

  return (
    <article className="courser-card-one">
      <Link
        to={detailsPath}
        className="course-card-image-wrapper"
        aria-label={`View ${course.title}`}
      >
        <img
          className="course-card-image"
          src={image}
          width="410"
          height="254"
          alt={course.alt}
          loading="lazy"
          decoding="async"
        />
      </Link>

      <div className="course-content">
        <p className="small-shot-heading margin-bottom-twenty">{course.category}</p>
        <h3 className="course-heading">
          <Link to={detailsPath}>{course.title}</Link>
        </h3>

        <div className="course-rating">
          <img src={assets.rating} width="79" height="19" alt="" aria-hidden="true" />
          <span className="small-shot-heading small-heading-body-color">
            {course.rating} ({course.reviews})
          </span>
        </div>

        <div className="cards-wrap">
          <div className="course-cards-button-wrapper course-cards-information">
            <div className="cards-button-left">
              <div className="course-information">
                <img src={assets.booksIcon} width="16" height="16" alt="" aria-hidden="true" />
                <span className="menu-font text-dark">{course.lessons} Lessons</span>
              </div>
            </div>
            <div className="cards-button-right">
              <div className="course-information align-right">
                <img src={assets.personIcon} width="12" height="14" alt="" aria-hidden="true" />
                <span className="menu-font text-dark">{course.enrolled} Enrolled</span>
              </div>
            </div>
          </div>

          <div
            className={`course-cards-button-wrapper course-cards-button${isPaid ? '' : ' free-card'}`}
          >
            <div
              className={`cards-button-left cousers-button-wrapper-border${isPaid ? '' : ' border-off'}`}
            >
              <div className="buttons-hover-show">
                <Link to={detailsPath} className="btn btn-yellow course-listing-action">
                  Course Details
                </Link>
              </div>
            </div>
            {isPaid && (
              <div className="cards-button-right">
                <div className="buttons-hover-show">
                  <Link to={enrollPath} className="btn btn-dark course-listing-action">
                    Enroll
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>

        <span className="course-price-wrapper" aria-label={`Price: ${course.price}`}>
          {course.price}
        </span>
      </div>
    </article>
  )
}
