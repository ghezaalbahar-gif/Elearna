import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import CategoryCourseCard from '../components/CategoryCourseCard'
import AboutCTA from '../components/about/AboutCTA'
import AboutFooter from '../components/about/AboutFooter'
import Placeholder from './Placeholder'
import { assets } from '../data/assets'
import { getCategoryPage } from '../data/categories'

export default function Category() {
  const { slug } = useParams()
  const page = getCategoryPage(slug)

  if (!page) return <Placeholder />

  return (
    <div className="site category-page">
      <Navbar />
      <main id="main-content">
        <section
          className="course-one-hero"
          style={{ backgroundImage: `url("${assets.categoryHeroBackground}")` }}
        >
          <div className="course-one-hero-container">
            <div className="course-one-hero-wrap">
              <h1>{page.title}</h1>
            </div>
          </div>
        </section>

        <section className="category-section" aria-label={`${page.title} courses`}>
          <div className="container">
            <ul className="category-course-grid" role="list">
              {page.courses.map((course) => (
                <li key={course.id}>
                  <CategoryCourseCard course={course} />
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
