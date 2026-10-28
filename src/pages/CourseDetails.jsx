import { useId, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import CategoryCourseCard from '../components/CategoryCourseCard'
import AboutCTA from '../components/about/AboutCTA'
import AboutFooter from '../components/about/AboutFooter'
import Placeholder from './Placeholder'
import { assets } from '../data/assets'
import {
  courseOverview,
  curriculumIntro,
  faqSets,
  getCourseBySlug,
  getInstructorsForCourse,
  getRelatedCourses,
  instructorIntro,
  lessonIntro,
  lessonSummary,
} from '../data/courses'

const tabs = ['Overview', 'Curriculum', 'Instructor', 'FAQ', 'Query']

export default function CourseDetails() {
  const { slug } = useParams()
  const course = getCourseBySlug(slug)

  if (!course) return <Placeholder />

  return <CourseDetailsView key={course.slug} course={course} />
}

function CourseDetailsView({ course }) {
  const isPaid = course.price !== 'Free'
  const detailsPath = `/courses/${course.slug}`
  const [activeTab, setActiveTab] = useState(isPaid ? 'Curriculum' : 'Overview')
  const [activeLesson, setActiveLesson] = useState(0)
  const baseId = useId().replace(/:/g, '')

  const stats = [
    {
      label: 'Time span',
      value: course.timeSpan,
      icon: assets.courseMetaIcons.time,
      width: 30,
      height: 31,
    },
    {
      label: 'Lectures',
      value: `${course.lessons} Lessons`,
      icon: assets.courseMetaIcons.lectures,
      width: 28,
      height: 32,
    },
    {
      label: 'Skill level',
      value: course.skillLevel,
      icon: assets.courseMetaIcons.skill,
      width: 36,
      height: 32,
    },
    {
      label: 'Video lessons',
      value: course.videoLessons,
      icon: assets.courseMetaIcons.video,
      width: 29,
      height: 31,
    },
    {
      label: 'Students',
      value: `${course.enrolled} Enrolled`,
      icon: assets.courseMetaIcons.students,
      width: 30,
      height: 30,
    },
  ]

  return (
    <div className="site category-page course-page">
      <Navbar />
      <main id="main-content">
        <section
          className="course-hero"
          style={{ backgroundImage: `url("${course.heroImage}")` }}
        >
          <div className="course-hero-overlay" aria-hidden="true" />
          <div className="course-hero-box">
            <div className="container">
              <div className={isPaid ? 'course-hero-row' : undefined}>
                <div className="course-hero-content-box">
                  <div className="small-heading text-light-white">{course.category}</div>
                  <h1 className="course-hero-title">{course.title}</h1>
                  <div className="course-hero-rating">
                    <img src={assets.rating} width="79" height="19" alt="" aria-hidden="true" />
                    <span>
                      {course.rating} ({course.reviews})
                    </span>
                  </div>
                </div>
                {isPaid && (
                  <div className="course-hero-price">
                    <span className="course-hero-price-value">{course.price}</span>
                    <Link to={`${detailsPath}/enroll`} className="btn btn-yellow">
                      Enroll
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="course-short-information" aria-label="Course information">
          <div className="container">
            <div className="course-short-information-main">
              {stats.map((stat, index) => (
                <div
                  className={`course-short-information-box${index === stats.length - 1 ? ' border-off' : ''}`}
                  key={stat.label}
                >
                  <img
                    src={stat.icon}
                    width={stat.width}
                    height={stat.height}
                    alt=""
                    aria-hidden="true"
                  />
                  <div>
                    <div className="heading-six">{stat.label}</div>
                    <div className="course-stat-value">{stat.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="course-details">
          <div className="container">
            <div className="course-details-tab">
              <div className="course-details-tabs" role="tablist" aria-label="Course information">
                {tabs.map((tab) => {
                  const selected = activeTab === tab
                  const tabId = `${baseId}-tab-${tab.toLowerCase()}`
                  const panelId = `${baseId}-panel-${tab.toLowerCase()}`
                  return (
                    <button
                      key={tab}
                      type="button"
                      role="tab"
                      id={tabId}
                      aria-selected={selected}
                      aria-controls={panelId}
                      className={`course-details-tabs-options${selected ? ' w--current' : ''}`}
                      onClick={() => setActiveTab(tab)}
                    >
                      {tab}
                    </button>
                  )
                })}
              </div>

              <div
                className="course-tab-content"
                id={`${baseId}-panel-${activeTab.toLowerCase()}`}
                role="tabpanel"
                aria-labelledby={`${baseId}-tab-${activeTab.toLowerCase()}`}
              >
                {activeTab === 'Overview' && <OverviewPane />}
                {activeTab === 'Curriculum' && (
                  <CurriculumPane
                    course={course}
                    isPaid={isPaid}
                    detailsPath={detailsPath}
                    activeLesson={activeLesson}
                    onSelectLesson={setActiveLesson}
                  />
                )}
                {activeTab === 'Instructor' && <InstructorPane course={course} />}
                {activeTab === 'FAQ' && <FaqPane course={course} />}
                {activeTab === 'Query' && <QueryPane />}
              </div>
            </div>
          </div>
        </section>

        <section className="course-details-more" aria-label="Related courses">
          <div className="container">
            <p className="course-related-eyebrow">Online learning</p>
            <h2 className="course-related-heading">Related courses</h2>
            <ul className="category-course-grid" role="list">
              {getRelatedCourses().map((related) => (
                <li key={related.id}>
                  <CategoryCourseCard course={related} />
                </li>
              ))}
            </ul>
          </div>
        </section>

        <AboutCTA />
      </main>
      <AboutFooter current={null} />
    </div>
  )
}

function OverviewPane() {
  return (
    <div className="course-overview">
      <h3>Course description</h3>
      <p>{courseOverview.description}</p>
      <h4>Main features</h4>
      <ul>
        {courseOverview.features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
      <h4>What is the target audience?</h4>
      <p>{courseOverview.audience}</p>
    </div>
  )
}

function CurriculumPane({ course, isPaid, detailsPath, activeLesson, onSelectLesson }) {
  if (isPaid) {
    return (
      <div className="course-product">
        <div className="product-summary">
          <div className="product-summary-course">
            <img src={course.image} alt="" width="107" height="72" loading="lazy" />
            <div className="product-summary-title">{course.title}</div>
          </div>
          <div className="product-summary-actions">
            <span className="product-summary-price">{course.price}</span>
            <Link to={`${detailsPath}/enroll`} className="btn btn-yellow">
              Enroll
            </Link>
          </div>
        </div>

        <div className="product-details-body">
          <h3>Course details</h3>
          <p>{curriculumIntro}</p>
          <h4>Lessons</h4>
          <div className="course-dark-border" />
          <ul className="lessons-list" role="list">
            {course.paidLessons.map((title, index) => (
              <li className="lessons-lock-box" key={`${title}-${index}`}>
                <div className="lessons-name-box">
                  <span>Lesson {index + 1}:</span>
                  <span>{title}</span>
                </div>
                <div className="lessons-right-box">
                  <span className="video-tag">Video</span>
                  <img
                    src={assets.courseLockIcon}
                    width="15"
                    height="22"
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }

  const items = course.curriculumItems
  const lesson = items[activeLesson] ?? items[0]

  return (
    <div className="curriculum-tab">
      <div className="curriculum-tabs-menu" role="tablist" aria-label="Lessons">
        {items.map((item, index) => {
          const selected = index === activeLesson
          return (
            <button
              key={`${item.title}-${index}`}
              type="button"
              role="tab"
              aria-selected={selected}
              className={`curriculum-lesson-tab${selected ? ' is-active' : ''}`}
              onClick={() => onSelectLesson(index)}
            >
              Lesson {index + 1}
            </button>
          )
        })}
      </div>
      <div className="curriculum-tab-content">
        <div className="course-lesson-pane">
          <h5>Introduction</h5>
          <p>{lessonIntro}</p>
          <div className="course-lesson-video">
            <iframe
              src={lesson.video}
              title={lesson.title}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
          <h5>Main features</h5>
          <ul>
            {courseOverview.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
          <img className="course-lesson-image" src={assets.lessonDetailImage} alt="" loading="lazy" />
          <p>{lessonIntro}</p>
          <h5>Lesson Summary</h5>
          <p>{lessonSummary}</p>
        </div>
      </div>
    </div>
  )
}

function InstructorPane({ course }) {
  return (
    <div className="course-instructor">
      <h3>Course instructor</h3>
      <p>{instructorIntro}</p>
      <div className="team-wrapper course-team">
        {getInstructorsForCourse(course).map((instructor) => (
          <div className="course-instructor-card" key={instructor.name}>
            <div className="team-card-image">
              <img
                className="team-member-image"
                src={instructor.image}
                alt={`${instructor.name}, instructor`}
                loading="lazy"
              />
            </div>
            <div className="team-member-names">
              <div className="heading-five">{instructor.name}</div>
              <div className="small-shot-heading small-heading-body-color">instructor</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function FaqPane({ course }) {
  const [openIndex, setOpenIndex] = useState(null)
  const items = faqSets[course.faqSet] ?? []
  const panelPrefix = `faq-${course.id}`

  return (
    <div className="course-faq">
      <h3>Frequently asked questions</h3>
      <p className="course-pane-intro">{curriculumIntro}</p>
      <div className="course-faq-list">
        {items.map((item, index) => {
          const open = openIndex === index
          return (
            <div className={`course-faq-item${open ? ' is-open' : ''}`} key={item.question}>
              <button
                type="button"
                className="course-faq-question"
                aria-expanded={open}
                aria-controls={`${panelPrefix}-${index}`}
                onClick={() => setOpenIndex(open ? null : index)}
              >
                <span className="heading-five">{item.question}</span>
                <span className="course-faq-icon" aria-hidden="true">
                  <span />
                  <span />
                </span>
              </button>
              {open && (
                <div className="course-faq-answer" id={`${panelPrefix}-${index}`}>
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

function QueryPane() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setSent(true)
    event.currentTarget.reset()
  }

  return (
    <div className="course-query">
      <div className="course-query-heading">
        <h3>Have any questions about this course?</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur. Et facilisis nunc quam quam etiam donec
          pellentesque ut. Nisl pellentesque at aliquam scelerisque non consequat amet curabitur.
        </p>
      </div>
      {sent ? (
        <p className="course-form-success" role="status">
          Thank you! Your submission has been received!
        </p>
      ) : (
        <form className="course-form" onSubmit={handleSubmit}>
          <div className="course-form-row">
            <input
              className="course-field"
              name="firstName"
              type="text"
              placeholder="First name*"
              aria-label="First name"
              maxLength="256"
              required
            />
            <input
              className="course-field"
              name="lastName"
              type="text"
              placeholder="Last name*"
              aria-label="Last name"
              maxLength="256"
              required
            />
          </div>
          <div className="course-form-row">
            <input
              className="course-field"
              name="email"
              type="email"
              placeholder="Your email*"
              aria-label="Your email"
              maxLength="256"
              required
            />
            <input
              className="course-field"
              name="courseCategory"
              type="text"
              placeholder="Course category*"
              aria-label="Course category"
              maxLength="256"
              required
            />
          </div>
          <textarea
            className="course-field course-textarea"
            name="query"
            placeholder="Your query*"
            aria-label="Your query"
            maxLength="5000"
            required
          />
          <label className="course-checkbox">
            <input type="checkbox" name="saveInfo" />
            <span>Save information for next time.</span>
          </label>
          <button type="submit" className="btn btn-dark course-form-submit">
            Send your query
          </button>
        </form>
      )}
    </div>
  )
}
