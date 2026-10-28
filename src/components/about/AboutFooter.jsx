import { Link } from 'react-router-dom'
import { assets } from '../../data/assets'
import { aboutFooterColumns, aboutFooterHelp } from '../../data/aboutContent'
import Reveal from './Reveal'

export default function AboutFooter({ current = 'About' }) {
  return (
    <section className="footer-two">
      <Reveal className="w-layout-blockcontainer container w-container" delay={0} offset={0}>
        <div className="w-layout-hflex footer-two-main">
          <div className="w-layout-vflex footer-links-wrap">
            <Link to="/" className="w-inline-block">
              <img src={assets.logo} loading="lazy" width="105" height="26" alt="Elearna" className="elerna" />
            </Link>
            <p className="no-margin-bottom">
              Lorem ipsum dolor sit amet consectetur. Posuere vitae lacus quis eget amet ut tristique
              cras.
            </p>
          </div>
          {aboutFooterColumns.map((column) => (
            <div className="w-layout-vflex footer-links-wrap-two" key={column.title}>
              <div className="heading-five text-white">{column.title}</div>
              <div className="w-layout-vflex links-wrap">
                {column.links.map((link) => (
                  <Link
                    key={link.label}
                    to={link.to}
                    className={`footer-link-hover${current && link.label === current ? ' w--current' : ''}`}
                    aria-current={current && link.label === current ? 'page' : undefined}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
          <div className="w-layout-vflex footer-links-wrap-three">
            <div className="heading-five text-white">{aboutFooterHelp.title}</div>
            <div className="w-layout-vflex footer-links-contact">
              <div>
                <div>{aboutFooterHelp.phoneLabel}</div>
                <a href={aboutFooterHelp.phoneHref} className="heading-five text-white footer-hover-in">
                  {aboutFooterHelp.phone}
                </a>
              </div>
              <div>
                <div>{aboutFooterHelp.supportLabel}</div>
                <a href={aboutFooterHelp.emailHref} className="heading-five text-white footer-hover-in">
                  {aboutFooterHelp.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
      <Reveal
        className="w-layout-blockcontainer footer-container w-container"
        preset="fadeIn"
        delay={100}
        offset={0}
      >
        <div className="border-one"></div>
        <div className="w-layout-hflex footer-bottom-main">
          <div className="footer-bottom-text">
            Design by{' '}
            <a
              href="https://www.radianttemplates.com"
              target="_blank"
              rel="noreferrer"
              className="footer-bottom-link"
            >
              Radiant Templates
            </a>
          </div>
          <div className="footer-bottom-text">
            Powered by{' '}
            <a
              href="https://webflow.com/?r=0"
              target="_blank"
              rel="noreferrer"
              className="footer-bottom-link"
            >
              Webflow
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
