import { Link } from 'react-router-dom'
import { assets } from '../data/assets'

export default function ProgramCard({ course }) {
  const detailsPath = `/courses/${course.slug}`

  return (
    <article className="program-card">
      <Link to={detailsPath} className="program-image-link" aria-label={`View ${course.title}`}>
        <img
          src={course.image}
          width="600"
          height="462"
          alt={course.alt}
          loading="lazy"
          decoding="async"
          className="program-image"
        />
        <span className="program-price" aria-label={`Price: ${course.price}`}>
          {course.price}
        </span>
      </Link>

      <div className="program-body">
        <span className="course-category">{course.category}</span>
        <h3 className="program-title">
          <Link to={detailsPath}>{course.title}</Link>
        </h3>
        <div className="course-rating">
          <img src={assets.rating} width="79" height="19" alt="" aria-hidden="true" />
          <span>
            {course.rating} ({course.reviews})
          </span>
        </div>
      </div>
    </article>
  )
}
