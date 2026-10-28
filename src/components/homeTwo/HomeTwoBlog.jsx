import { Link } from 'react-router-dom'
import { posts, slug } from '../blog/BlogData'
import { blogBlock } from './homeTwoData'

export default function HomeTwoBlog() {
  return (
    <section
      aria-labelledby="home-two-blog-title"
      className="bg-mist px-[15px] pt-[50px] pb-[60px] min-[992px]:pt-[80px] min-[992px]:pb-[90px] min-[1440px]:pt-[110px] min-[1440px]:pb-[120px]"
    >
      <div className="mx-auto flex w-full max-w-[1320px] flex-col items-center">
        <p className="reveal text-[12px] font-medium uppercase leading-[23px] tracking-[0.5px] text-ink min-[768px]:text-[15px] min-[768px]:leading-[29px]">
          {blogBlock.label}
        </p>
        <h2
          id="home-two-blog-title"
          className="reveal mt-[10px] mb-[7px] text-center font-heading text-[30px] font-semibold leading-[40px] tracking-[-1.3px] text-ink min-[768px]:mt-[15px] min-[768px]:mb-[12px] min-[768px]:text-[48px] min-[768px]:leading-[52px] min-[768px]:tracking-[-1.5px]"
        >
          {blogBlock.title}
        </h2>
        <p className="reveal mx-auto mt-[12px] mb-[34px] max-w-[728px] text-center text-[17px] leading-[29px] text-muted">
          {blogBlock.text}
        </p>

        <div className="grid w-full grid-cols-1 gap-[30px] min-[768px]:grid-cols-2 min-[992px]:grid-cols-3">
          {posts.slice(0, 3).map((post, index) => (
            <Link
              key={post.title}
              to={`/blog-one/${slug(post.title)}`}
              style={{ transitionDelay: `${index * 90}ms` }}
              className="reveal overflow-hidden rounded-[4px] bg-white pb-[8px] shadow-post focus-visible:outline-2 focus-visible:outline-offset-3px focus-visible:outline-amber"
            >
              <img
                src={post.image}
                alt={post.imageAlt}
                width="410"
                height="296"
                loading="lazy"
                decoding="async"
                className="block h-auto w-full object-cover min-[768px]:h-[296px]"
              />
              <div className="flex flex-col items-start gap-[20px] px-[20px] py-[30px] min-[1440px]:px-[40px]">
                <p className="text-[13px] font-medium uppercase leading-[12px] text-ink">
                  {post.category}
                </p>
                <p className="font-heading text-[17px] font-semibold leading-[23px] tracking-[-0.5px] text-ink min-[768px]:text-[20px] min-[768px]:leading-[25px]">
                  {post.title}
                </p>
                <p className="text-[17px] leading-[29px] text-muted">{post.date}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
