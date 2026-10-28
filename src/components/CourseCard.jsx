import { Link } from 'react-router-dom'
import { assets } from '../data/assets'
import { useCart } from '../context/CartContext'

export default function CourseCard({ course }) {
  const { addItem } = useCart()
  const detailsPath = `/courses/${course.slug}`

  return (
    <article className="course-card">
      <Link to={detailsPath} className="course-image-link" aria-label={`View ${course.title}`}>
        <img
          src={course.image}
          width="800"
          height="500"
          alt={course.alt}
          loading="lazy"
          decoding="async"
          className="course-image"
        />
      </Link>

      <div className="course-body">
        <span className="course-category">{course.category}</span>
        <h3 className="course-title">
          <Link to={detailsPath}>{course.title}</Link>
        </h3>

        <div className="course-rating">
          <img src={assets.rating} width="79" height="19" alt="" aria-hidden="true" />
          <span>
            {course.rating} ({course.reviews})
          </span>
        </div>

        <div className="course-actions">
          <div className="course-meta">
            <span>
              <img src={assets.booksIcon} width="16" height="16" alt="" aria-hidden="true" />
              {course.lessons} Lessons
            </span>
            <span>
              <img src={assets.personIcon} width="12" height="14" alt="" aria-hidden="true" />
              {course.enrolled} Enrolled
            </span>
          </div>

          <div className={`course-action-row${course.price === 'Free' ? ' is-free' : ''}`}>
            <Link to={detailsPath} className="btn btn-yellow course-action-button">
              Course Details
            </Link>
            {course.price !== 'Free' && (
              <button
                type="button"
                className="btn btn-dark course-action-button"
                onClick={() => addItem(course)}
              >
                Enroll
              </button>
            )}
          </div>
        </div>

        <span className="course-price" aria-label={`Price: ${course.price}`}>
          {course.price}
        </span>
      </div>
    </article>
  )
}
