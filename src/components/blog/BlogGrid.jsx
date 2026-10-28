import { Link } from 'react-router-dom'
import { slug } from './BlogData'

export default function BlogGrid({ posts, page }) {
  return (
    <div className="grid grid-cols-1 gap-[30px] md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post, index) => (
        <Link
          key={post.title}
          to={`/blog-one/${slug(post.title)}`}
          className="reveal group flex h-full flex-col overflow-hidden rounded-[4px] border border-line bg-white"
          style={{ transitionDelay: `${(index % 3) * 90}ms` }}
        >
          <span className="block aspect-[410/296] w-full overflow-hidden bg-mist">
            {post.image ? (
              <img
                src={post.image}
                alt={post.imageAlt}
                className="h-full w-full object-cover transition-transform duration-[900ms] ease-expo group-hover:scale-[1.05]"
              />
            ) : (
              <span className="flex h-full items-center justify-center px-[15px] text-center text-[11px] uppercase leading-[16px] tracking-[0.5px] text-muted">
                No image yet — slot {index + 1}
              </span>
            )}
          </span>

          <span className="card-body flex flex-1 flex-col">
            <span className="mb-[15px] text-[13px] font-medium uppercase leading-[12px] tracking-[0.5px] text-ink">
              {post.category}
            </span>
            <span className="mb-[25px] font-heading text-[17px] font-semibold leading-[23px] tracking-[-0.5px] text-ink transition-colors duration-[650ms] ease-expo group-hover:text-amber md:text-[20px] md:leading-[25px]">
              {post.title}
            </span>
            <span className="card-rule mt-auto text-[14px] leading-[23px] tracking-[0.5px] text-muted md:text-[17px]">
              {post.date}
            </span>
          </span>
        </Link>
      ))}
      {page ? (
        <span className="sr-only" aria-live="polite">
          Page {page}, {posts.length} entries shown
        </span>
      ) : null}
    </div>
  )
}
