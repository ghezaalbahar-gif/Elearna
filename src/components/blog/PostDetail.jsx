import { Link } from 'react-router-dom'
import { author, related, defaultBody } from './PostDetailData'
import BlogGrid from './BlogGrid'

const hideBroken = (event) => {
  event.currentTarget.style.display = 'none'
}

export default function PostDetail({ post, nextPosts }) {
  const writer = post.author ?? author
  const body = post.body ?? defaultBody
  // The card thumbnails are the 500px CDN variant; the band below is wider than that.
  const cover = post.image ? post.image.replace('-p-500', '') : ''

  return (
    <>
      <section className="relative isolate h-[420px] overflow-hidden md:h-[540px] lg:h-[655px]">
        <div className="absolute inset-0 -z-10 bg-deep" />
        {cover ? (
          <img
            src={cover}
            alt={post.imageAlt}
            onError={hideBroken}
            className="absolute inset-0 -z-10 h-full w-full object-cover"
          />
        ) : null}
        <div className="absolute inset-0 -z-10 bg-[rgba(15,37,42,0.55)]" />

        <Link
          to="/blog-one"
          className="absolute left-[25px] top-[110px] z-10 text-[13px] font-medium uppercase leading-[13px] tracking-[0.5px] text-white transition-colors duration-[650ms] ease-expo hover:text-amber"
        >
          ← Back to journals
        </Link>

        <div className="flex h-full items-center justify-center px-[15px]">
          <div className="w-full max-w-[760px] text-center">
            <p className="reveal text-[12px] font-medium uppercase leading-[12px] tracking-[0.5px] text-white">
              {post.category} • {writer.name}
            </p>
            <h1 className="reveal mt-[24px] font-heading text-[30px] font-semibold leading-[38px] tracking-[-1px] text-white md:text-[38px] md:leading-[48px] lg:text-[45px] lg:leading-[57px] lg:tracking-[-1.6px]">
              {post.title}
            </h1>
            <p className="reveal mt-[30px] text-[14px] leading-[23px] tracking-[0.5px] text-white lg:mt-[45px]">
              {post.date}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-mist px-[15px] pb-[90px]">
        <div className="relative mx-auto -mt-[100px] w-full max-w-[1290px] rounded-[4px] bg-white px-[25px] pt-[70px] pb-[110px] md:px-[60px] lg:px-[110px] lg:pt-[100px] lg:pb-[181px]">
          {body.map((block, index) => {
            if (block.type === 'heading') {
              return (
                <h2
                  key={index}
                  className="reveal mt-[40px] font-heading text-[19px] font-semibold leading-[27px] tracking-[-0.5px] text-ink md:text-[20px] md:leading-[25px]"
                >
                  {block.text}
                </h2>
              )
            }
            if (block.type === 'quote') {
              return (
                <blockquote
                  key={index}
                  className="reveal mt-[40px] flex flex-col gap-[15px] rounded-[4px] bg-mist px-[25px] py-[35px] md:flex-row md:gap-[30px] md:px-[40px]"
                >
                  <span aria-hidden className="hidden w-[50px] shrink-0 font-heading text-[64px] leading-[40px] text-white md:block">
                    &ldquo;
                  </span>
                  <p className="font-heading text-[16px] font-semibold leading-[28px] tracking-[-0.4px] text-ink md:text-[18px]">
                    {block.text}
                  </p>
                </blockquote>
              )
            }
            return (
              <p
                key={index}
                className="reveal mt-[25px] text-[16px] leading-[27px] tracking-[0.3px] text-muted first:mt-0 md:text-[17px] md:leading-[28px]"
              >
                {block.text}
              </p>
            )
          })}
        </div>

        <div className="reveal relative mx-auto -mt-[100px] w-full max-w-[1070px]">
          <div className="flex flex-col items-center gap-[25px] rounded-[4px] bg-ink px-[25px] py-[40px] text-center md:flex-row md:gap-[50px] md:px-[50px] md:text-left lg:gap-[80px] lg:px-[96px] lg:py-[50px]">
            {writer.photo ? (
              <img
                src={writer.photo}
                alt={writer.photoAlt}
                onError={hideBroken}
                className="h-[158px] w-[158px] shrink-0 rounded-full object-cover"
              />
            ) : (
              <span className="flex h-[158px] w-[158px] shrink-0 items-center justify-center rounded-full bg-deep px-[15px] text-center text-[11px] uppercase leading-[16px] tracking-[0.5px] text-white/60">
                No photo yet
              </span>
            )}
            <div>
              <p className="text-[12px] font-medium uppercase leading-[12px] tracking-[0.5px] text-white/60">
                Author
              </p>
              <h2 className="mt-[12px] font-heading text-[22px] font-semibold leading-[28px] tracking-[-0.8px] text-white md:text-[24px] md:leading-[30px]">
                {writer.name}
              </h2>
              <p className="mt-[12px] text-[15px] leading-[25px] tracking-[0.3px] text-white/70">
                {writer.bio}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-[15px] pt-[90px] pb-[30px]">
        <div className="mx-auto w-full max-w-[1290px]">
          <p className="reveal text-center text-[12px] font-medium uppercase leading-[12px] tracking-[0.5px] text-ink">
            {related.kicker}
          </p>
          <h2 className="reveal mx-auto mt-[30px] max-w-[700px] text-center font-heading text-[28px] font-semibold leading-[34px] tracking-[-1px] text-ink md:text-[36px] md:leading-[44px] md:tracking-[-1.4px]">
            {related.heading}
          </h2>
          <p className="reveal mx-auto mt-[25px] max-w-[700px] text-center text-[15px] leading-[25px] tracking-[0.3px] text-muted">
            {related.intro}
          </p>
          <div className="mt-[40px]">
            <BlogGrid posts={nextPosts} />
          </div>
        </div>
      </section>
    </>
  )
}
