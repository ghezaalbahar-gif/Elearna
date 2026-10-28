import { Link } from 'react-router-dom'
import { assets } from '../data/assets'

export default function CategoryCourseCard({ course }) {
  const detailsPath = `/courses/${course.slug}`
  const image = course.categoryImage ?? course.image

  return (
    <article className="category-course-card">
      <img
        className="category-course-image"
        src={image}
        alt=""
        width="410"
        height="510"
        loading="lazy"
      />
      <div className="category-course-overlay" aria-hidden="true" />
      <div className="category-course-content">
        <p className="category-course-category">{course.category}</p>
        <h2 className="category-course-title">{course.title}</h2>
        <div className="category-course-rating">
          <img src={assets.rating} width="79" height="19" alt="" aria-hidden="true" />
          <span>
            {course.rating} ({course.reviews})
          </span>
        </div>
        <div className="category-course-actions">
          <div className="category-course-actions-inner">
            <Link to={detailsPath} className="category-buy-button">
              Buy course
            </Link>
          </div>
        </div>
      </div>
      <span className="category-card-border category-card-border--top" aria-hidden="true" />
      <span className="category-card-border category-card-border--left" aria-hidden="true" />
      <span className="category-card-border category-card-border--bottom" aria-hidden="true" />
      <span className="category-card-border category-card-border--right" aria-hidden="true" />
      <span className="category-course-price">{course.price}</span>
      <Link
        to={detailsPath}
        className="category-card-link"
        aria-label={`View ${course.title}`}
      />
    </article>
  )
}
