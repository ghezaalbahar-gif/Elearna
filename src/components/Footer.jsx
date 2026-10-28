import { Link } from 'react-router-dom'
import { assets } from '../data/assets'
import { footerColumns } from '../data/navigation'

export default function Footer() {
  return (
    <footer
      className="site-footer"
      id="footer"
      style={{ backgroundImage: `url("${assets.footerBackground}")` }}
    >
      <div className="container">
        <div className="footer-main" data-reveal>
          <div className="footer-brand">
            <Link to="/" className="brand footer-brand-link" aria-label="Elearna home">
              <img src={assets.logo} width="105" height="26" alt="Elearna" loading="lazy" />
            </Link>
            <p>
              Lorem ipsum dolor sit amet consectetur. Posuere vitae lacus quis eget amet ut tristique
              cras.
            </p>
          </div>

          {footerColumns.map((column) => (
            <nav className="footer-column" key={column.title} aria-label={column.title}>
              <h2 className="footer-heading">{column.title}</h2>
              <ul className="footer-links">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className="footer-link">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </div>

      <div className="footer-bottom-container">
        <div className="footer-rule" />
        <div className="footer-bottom">
          <p>
            Design by{' '}
            <a
              href="https://radianttemplates.com/"
              target="_blank"
              rel="noreferrer noopener"
              className="footer-credit-link"
            >
              Radiant Templates
            </a>
          </p>
          <p>
            Powered by{' '}
            <a
              href="https://webflow.com/"
              target="_blank"
              rel="noreferrer noopener"
              className="footer-credit-link"
            >
              Webflow
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
