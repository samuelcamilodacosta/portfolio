import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { useLocale } from '../../context/LocaleContext'
import ThemeToggle from '../ThemeToggle/ThemeToggle'
import LanguageToggle from '../LanguageToggle/LanguageToggle'
import styles from './Header.module.css'

export default function Header() {
  const { t } = useLocale()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const handleNavClick = () => setMenuOpen(false)

  return (
    <header
      className={`${styles.header} ${scrolled || !isHome ? styles.scrolled : ''}`}
    >
      <div className={`container ${styles.inner}`}>
        <NavLink to="/" className={styles.logo} onClick={handleNavClick}>
          <span className={styles.logoMark}>SC</span>
          <span className={styles.logoText}>Samuel Costa</span>
        </NavLink>

        <div className={styles.actions}>
          <nav
            className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}
            aria-label={t.header.navAria}
          >
            <ul className={styles.navList}>
              {t.nav.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    end={item.to === '/'}
                    className={({ isActive }) =>
                      `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`
                    }
                    onClick={handleNavClick}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <LanguageToggle />
          <ThemeToggle />
        </div>

        <button
          type="button"
          className={`${styles.menuToggle} ${menuOpen ? styles.menuToggleOpen : ''}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? t.header.closeMenu : t.header.openMenu}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>

        {menuOpen && (
          <div
            className={styles.overlay}
            onClick={() => setMenuOpen(false)}
            aria-hidden="true"
            data-testid="header-overlay"
          />
        )}
      </div>
    </header>
  )
}
