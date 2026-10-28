import { useState } from 'react'
import { Link } from 'react-router-dom'
import { courseTabs, getCoursesForTab } from '../data/courses'
import CourseCard from './CourseCard'
import SectionHeading from './SectionHeading'

export default function CoursesSection() {
  const [activeTab, setActiveTab] = useState('All courses')
  const visibleCourses = getCoursesForTab(activeTab)

  return (
    <section className="section-courses" id="courses" aria-labelledby="courses-title">
      <div className="container">
        <div className="courses-head" data-reveal>
          <SectionHeading
            eyebrow="Online learning"
            title="Top online courses"
            id="courses-title"
            className="courses-heading"
          />
          <div className="course-tabs" role="group" aria-label="Filter courses by category">
            {courseTabs.map((tab) => (
              <button
                key={tab}
                type="button"
                className={`course-tab${activeTab === tab ? ' is-active' : ''}`}
                aria-pressed={activeTab === tab}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <p className="sr-only" aria-live="polite">
          Showing {visibleCourses.length} {activeTab.toLowerCase()}.
        </p>

        <div className="course-grid" key={activeTab}>
          {visibleCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        <p className="all-courses-bar">
          We assist you in finding the ideal tutor at no cost.{' '}
          <Link to="/courses">Browse All Available Courses</Link>
        </p>
      </div>
    </section>
  )
}
