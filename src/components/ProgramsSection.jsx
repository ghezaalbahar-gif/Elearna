import { featuredCourses } from '../data/courses'
import ProgramCard from './ProgramCard'
import SectionHeading from './SectionHeading'

export default function ProgramsSection() {
  return (
    <section className="section-programs" id="programs" aria-labelledby="programs-title">
      <div className="container">
        <SectionHeading
          eyebrow="Trending courses"
          title="Explore our top programs"
          id="programs-title"
          size="medium"
          className="programs-heading"
        />
        <div className="program-grid" data-reveal>
          {featuredCourses.map((course) => (
            <ProgramCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  )
}
