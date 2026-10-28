import { aboutDetails } from '../../data/aboutContent'
import Reveal from './Reveal'

export default function AboutHighlights() {
  return (
    <section>
      <div className="w-layout-blockcontainer container w-container">
        <Reveal className="w-layout-hflex home-two-details-main background-color-dark">
          {aboutDetails.map((item) => (
            <div className="w-layout-hflex home-two-details-box" key={item.id}>
              <img
                src={item.icon}
                loading="lazy"
                width="45"
                height="45"
                alt="Icon"
                className="details-icon"
              />
              <div className="w-layout-vflex details-text">
                <div className="heading-four text-white">{item.title}</div>
                <p className="no-margin-bottom text-light-white">{item.copy}</p>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
