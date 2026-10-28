import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import AboutCTA from '../components/about/AboutCTA'
import AboutFooter from '../components/about/AboutFooter'
import { assets } from '../data/assets'
import { blogHero, blogPages } from '../data/blog'

export default function BlogListing() {
  const [page, setPage] = useState(0)
  const posts = blogPages[page]

  const goToPage = (index) => {
    setPage(index)
    window.scrollTo({ top: 0, behavior: 'instant' })
  }

  return (
    <div className="site category-page blog-page">
      <Navbar />
      <main id="main-content">
        <section
          className="blog-hero"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("${blogHero.image}")`,
          }}
          aria-labelledby="blog-title"
        >
          <div className="container">
            <div className="blog-hero-wrap">
              <div className="small-heading">{blogHero.eyebrow}</div>
              <h1 id="blog-title" className="heading-one-top-gap text-white">
                {blogHero.title}
              </h1>
            </div>
          </div>
        </section>

        <section className="blog-one-cards" aria-label="Blog posts">
          <div className="container">
            <ul className="blog-one-cards-wrapper" role="list">
              {posts.map((post) => (
                <li key={post.slug}>
                  <Link to={`/blog-posts/${post.slug}`} className="blog-card-one">
                    <div className="overflow-hidden">
                      <img
                        className="blog-card-one-image"
                        src={post.image}
                        width="410"
                        height="296"
                        alt=""
                        loading="lazy"
                      />
                    </div>
                    <div className="blog-card-one-text">
                      <div className="small-shot-heading margin-bottom-fifteen">{post.category}</div>
                      <div className="heading-five margin-bottom-twenty-five">{post.title}</div>
                      <div>{post.date}</div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="pagination" role="navigation" aria-label="Blog pages">
              {page > 0 && (
                <button type="button" className="next" onClick={() => goToPage(page - 1)}>
                  <img
                    className="arrow-rotate"
                    src={assets.blogPaginationArrow}
                    width="12"
                    alt=""
                    aria-hidden="true"
                  />
                  <span>Previous</span>
                </button>
              )}
              <div className="page-count" aria-live="polite">
                {page + 1} / {blogPages.length}
              </div>
              {page < blogPages.length - 1 && (
                <button type="button" className="next" onClick={() => goToPage(page + 1)}>
                  <span>Next</span>
                  <img
                    src={assets.blogPaginationArrow}
                    width="12"
                    alt=""
                    aria-hidden="true"
                  />
                </button>
              )}
            </div>
          </div>
        </section>

        <AboutCTA />
      </main>
      <AboutFooter current={null} />
    </div>
  )
}
