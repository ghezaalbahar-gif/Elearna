import Reveal from './Reveal'
import StoryCounters from './CounterDigits'
import { aboutAssets } from '../../data/aboutContent'

export default function AboutStory() {
  return (
    <section className="about-one-main">
      <div className="w-layout-blockcontainer container w-container">
        <div className="w-layout-hflex about-one-wrap">
          <div className="w-layout-vflex about-one-image-wrap">
            <Reveal
              as="img"
              className="about-image"
              src={aboutAssets.storyImage}
              srcSet={aboutAssets.storyImageSrcSet}
              sizes="(max-width: 767px) 100vw, 630px"
              width="630"
              height="635"
              alt="Office Image"
              loading="lazy"
            />
            <Reveal
              as="img"
              className="about-image-two"
              src={aboutAssets.trustedImage}
              width="268"
              height="179"
              alt="Trusted By Image"
              loading="lazy"
              preset="slideInLeft"
              delay={200}
            />
          </div>

          <div className="w-layout-vflex about-one-text-wrap">
            <Reveal as="div" className="small-heading text-dark">
              Our Story
            </Reveal>
            <Reveal as="h2" className="heading-two-gap-updown">
              Limitless learning and get more possibilities
            </Reveal>
            <Reveal as="p" className="margin-bottom-thirty">
              Lorem ipsum dolor sit amet consectetur. Sed ac non suspendisse in maecenas
              scelerisque imperdiet nec. Pellentesque mauris amet ligula eget malesuada
              ullamcorper nibh. Etiam suspendisse pretium est elementum elementum rhoncus.
            </Reveal>
            <StoryCounters />
          </div>
        </div>
      </div>
    </section>
  )
}
