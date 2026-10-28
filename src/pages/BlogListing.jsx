import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CtaBand from '../components/CtaBand'
import BlogHero from '../components/blog/BlogHero'
import BlogGrid from '../components/blog/BlogGrid'
import Pagination from '../components/blog/Pagination'
import { posts } from '../components/blog/BlogData'
import useReveal from '../hooks/useReveal'

const PER_PAGE = 6

export default function BlogListing() {
  const [page, setPage] = useState(1)
  const pages = Math.max(1, Math.ceil(posts.length / PER_PAGE))
  const visible = posts.slice((page - 1) * PER_PAGE, page * PER_PAGE)

  useEffect(() => {
    document.title = 'Blog'
  }, [])

  // Cards mounted by pagination appear after the route-level reveal pass, so re-run it per page.
  useReveal(page)

  const goTo = (next) => {
    setPage(Math.min(pages, Math.max(1, next)))
    const anchor = document.getElementById('journal')
    if (anchor) window.scrollTo({ top: anchor.offsetTop, behavior: 'smooth' })
  }

  return (
    <div className="site">
      <Navbar />
      <main id="main-content" className="integrated-page">
        <BlogHero />
        <section id="journal" className="px-[15px] pt-[60px] pb-[60px] lg:pt-[90px] lg:pb-[90px]">
          <div className="mx-auto w-full max-w-[1320px]">
            <BlogGrid posts={visible} page={page} />
            <Pagination page={page} pages={pages} onPage={goTo} />
          </div>
        </section>
        <CtaBand />
      </main>
      <Footer />
    </div>
  )
}
