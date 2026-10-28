import { Link } from 'react-router-dom'
import { headerActions } from '../data/navigation'

export default function CTASection() {
  return (
    <section className="cta-section" id="get-started" aria-labelledby="cta-title">
      <div className="container">
        <div className="cta-main" data-reveal>
          <h2 id="cta-title" className="cta-title">
            Are you ready to start your journey?
          </h2>
          <div className="cta-buttons">
            <Link to={headerActions.browseCourses} className="btn btn-dark">
              Browse courses
            </Link>
            <Link to={headerActions.becomeTeacher} className="btn btn-outline">
              Became a teacher
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
