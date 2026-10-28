import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ChevronDown, ChevronRight, Menu, X } from 'lucide-react'
import { assets } from '../data/assets'
import { headerActions, primaryNav } from '../data/navigation'
import CartButton from './cart/CartButton'

const slugify = (label) => label.toLowerCase().replace(/\s+/g, '-')

export default function Navbar({ variant = 'transparent', navItems = primaryNav }) {
  const [openDropdown, setOpenDropdown] = useState(null)
  const [openSubmenu, setOpenSubmenu] = useState(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileSection, setMobileSection] = useState(null)
  const [scrolled, setScrolled] = useState(false)
  const headerRef = useRef(null)
  const menuButtonRef = useRef(null)
  const reduceMotion = useReducedMotion()
  const { pathname, search } = useLocation()

  useEffect(() => {
    setOpenDropdown(null)
    setOpenSubmenu(null)
    setMobileOpen(false)
    setMobileSection(null)
  }, [pathname, search])

  useEffect(() => {
    setOpenSubmenu(null)
  }, [openDropdown])

  useEffect(() => {
    if (variant === 'solid') return undefined
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [variant])

  useEffect(() => {
    const onPointerDown = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setOpenDropdown(null)
        setOpenSubmenu(null)
      }
    }
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setOpenDropdown(null)
        setOpenSubmenu(null)
        if (mobileOpen) {
          setMobileOpen(false)
          setMobileSection(null)
          menuButtonRef.current?.focus()
        }
      }
    }
    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [mobileOpen])

  useEffect(() => {
    if (!mobileOpen) return undefined
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    headerRef.current?.querySelector('.mobile-nav-toggle')?.focus()
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [mobileOpen])

  const closeMobile = (restoreFocus = false) => {
    setMobileOpen(false)
    setMobileSection(null)
    if (restoreFocus) menuButtonRef.current?.focus()
  }

  const closeDesktopMenus = () => {
    setOpenDropdown(null)
    setOpenSubmenu(null)
  }

  const headerClasses = [
    'site-header',
    variant === 'solid' ? 'site-header--solid' : '',
    scrolled ? 'is-scrolled' : '',
    mobileOpen ? 'menu-is-open' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <header className={headerClasses} ref={headerRef}>
      <div className="navbar-container">
        <div className="navbar-grid">
          <Link to="/" className="brand" aria-label="Elearna home">
            <img
              src={assets.logo}
              width="105"
              height="26"
              alt="Elearna"
              className="brand-logo"
            />
          </Link>

          <nav className="desktop-nav" aria-label="Primary">
            <ul className="nav-list">
              {navItems.map((menu) => {
                const isOpen = openDropdown === menu.label
                const menuId = `desktop-menu-${slugify(menu.label)}`
                return (
                  <li
                    key={menu.label}
                    className={`nav-item${isOpen ? ' is-open' : ''}`}
                    onMouseEnter={() => setOpenDropdown(menu.label)}
                    onMouseLeave={() => {
                      setOpenDropdown(null)
                      setOpenSubmenu(null)
                    }}
                  >
                    <button
                      type="button"
                      className="nav-toggle"
                      aria-expanded={isOpen}
                      aria-controls={menuId}
                      aria-haspopup="true"
                      onClick={() => setOpenDropdown(isOpen ? null : menu.label)}
                      onKeyDown={(event) => {
                        if (event.key === 'ArrowDown') {
                          event.preventDefault()
                          setOpenDropdown(menu.label)
                        }
                      }}
                    >
                      {menu.label}
                      <ChevronDown size={15} strokeWidth={2} className="nav-chevron" aria-hidden="true" />
                    </button>
                    {isOpen && (
                      <ul className="nav-dropdown" id={menuId}>
                        {menu.children.map((child) => {
                          if (!child.children) {
                            return (
                              <li key={child.label}>
                                <Link
                                  to={child.to}
                                  className="nav-dropdown-link"
                                  onClick={closeDesktopMenus}
                                >
                                  {child.label}
                                </Link>
                              </li>
                            )
                          }

                          const subId = `desktop-submenu-${slugify(menu.label)}-${slugify(child.label)}`
                          const subOpen = openSubmenu === child.label

                          return (
                            <li
                              key={child.label}
                              className={`nav-subitem${subOpen ? ' is-open' : ''}`}
                              onMouseEnter={() => setOpenSubmenu(child.label)}
                              onMouseLeave={() =>
                                setOpenSubmenu((current) =>
                                  current === child.label ? null : current,
                                )
                              }
                              onBlur={(event) => {
                                if (!event.currentTarget.contains(event.relatedTarget)) {
                                  setOpenSubmenu((current) =>
                                    current === child.label ? null : current,
                                  )
                                }
                              }}
                            >
                              <button
                                type="button"
                                className="nav-subtoggle"
                                aria-expanded={subOpen}
                                aria-controls={subId}
                                aria-haspopup="true"
                                onClick={() => setOpenSubmenu(subOpen ? null : child.label)}
                                onKeyDown={(event) => {
                                  if (event.key === 'ArrowRight') {
                                    event.preventDefault()
                                    setOpenSubmenu(child.label)
                                  }
                                  if (event.key === 'ArrowLeft') {
                                    setOpenSubmenu(null)
                                  }
                                }}
                              >
                                {child.label}
                                <ChevronRight
                                  size={14}
                                  strokeWidth={2}
                                  className="nav-subchevron"
                                  aria-hidden="true"
                                />
                              </button>
                              {subOpen && (
                                <ul
                                  className={`nav-submenu${child.bottom ? ' nav-submenu--bottom' : ''}`}
                                  id={subId}
                                >
                                  {child.children.map((link) => (
                                    <li key={link.label}>
                                      <Link
                                        to={link.to}
                                        className="nav-dropdown-link"
                                        onClick={closeDesktopMenus}
                                      >
                                        {link.label}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </li>
                          )
                        })}
                      </ul>
                    )}
                  </li>
                )
              })}
            </ul>
          </nav>

          <div className="navbar-actions">
            <CartButton />
            <div className="account-links">
              <Link to={headerActions.login} className="account-link">
                Login
              </Link>
              <span className="menu-divider" aria-hidden="true" />
              <Link to={headerActions.register} className="account-link">
                Register
              </Link>
            </div>
          </div>

          <button
            type="button"
            className="nav-burger"
            ref={menuButtonRef}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? (
              <X size={25} aria-hidden="true" />
            ) : (
              <Menu size={25} aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="mobile-overlay" onClick={() => closeMobile(true)} aria-hidden="true" />
      )}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="mobile-nav"
            id="mobile-navigation"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            initial={{ y: reduceMotion ? 0 : '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: reduceMotion ? 0 : '-100%' }}
            transition={{ duration: reduceMotion ? 0 : 0.4, ease: [0, 0, 0.58, 1] }}
          >
            <nav className="mobile-nav-body" aria-label="Mobile primary">
              <ul className="mobile-nav-list">
                {navItems.map((menu) => {
                  const isOpen =
                    mobileSection === menu.label || mobileSection?.startsWith(`${menu.label}::`)
                  const submenuId = `mobile-menu-${slugify(menu.label)}`
                  return (
                    <li key={menu.label}>
                      <button
                        type="button"
                        className="mobile-nav-toggle"
                        aria-expanded={isOpen}
                        aria-controls={submenuId}
                        onClick={() => setMobileSection(isOpen ? null : menu.label)}
                      >
                        {menu.label}
                        <ChevronDown
                          size={20}
                          className={`mobile-chevron${isOpen ? ' is-open' : ''}`}
                          aria-hidden="true"
                        />
                      </button>
                      {isOpen && (
                        <ul className="mobile-submenu" id={submenuId}>
                          {menu.children.map((child) => {
                            if (!child.children) {
                              return (
                                <li key={child.label}>
                                  <Link to={child.to} onClick={() => closeMobile()}>
                                    {child.label}
                                  </Link>
                                </li>
                              )
                            }

                            const groupKey = `${menu.label}::${child.label}`
                            const groupOpen = mobileSection === groupKey
                            const groupId = `mobile-submenu-${slugify(menu.label)}-${slugify(child.label)}`

                            return (
                              <li key={child.label} className="mobile-subgroup">
                                <button
                                  type="button"
                                  className="mobile-subtoggle"
                                  aria-expanded={groupOpen}
                                  aria-controls={groupId}
                                  onClick={() =>
                                    setMobileSection(groupOpen ? menu.label : groupKey)
                                  }
                                >
                                  {child.label}
                                  <ChevronDown
                                    size={17}
                                    className={`mobile-chevron${groupOpen ? ' is-open' : ''}`}
                                    aria-hidden="true"
                                  />
                                </button>
                                {groupOpen && (
                                  <ul className="mobile-sub-submenu" id={groupId}>
                                    {child.children.map((link) => (
                                      <li key={link.label}>
                                        <Link to={link.to} onClick={() => closeMobile()}>
                                          {link.label}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </li>
                            )
                          })}
                        </ul>
                      )}
                    </li>
                  )
                })}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
