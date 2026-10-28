import { Link } from 'react-router-dom'
import { assets } from '../data/assets'
import { categories } from '../data/categories'
import SectionHeading from './SectionHeading'

export default function CategoriesSection() {
  return (
    <section className="section-categories" id="categories" aria-labelledby="categories-title">
      <div className="container">
        <SectionHeading
          align="center"
          eyebrow="Top Categories"
          title="Discover leading categories to elevate your journey"
          id="categories-title"
          size="medium"
          className="categories-heading"
          titleClassName="categories-title"
        />
        <div className="category-grid" data-reveal>
          {categories.map((category) => (
            <Link
              key={category.id}
              to={category.href}
              className="category-card"
            >
              <span className="category-icon">
                <img
                  src={assets.categoryIcons[category.icon]}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  decoding="async"
                />
              </span>
              <span className="category-title">{category.title}</span>
              <span className="category-count">{category.count} Courses</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
