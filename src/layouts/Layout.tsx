import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { applyPageMeta, resolvePageMeta } from '../config/seo'
import { useLocale } from '../context/LocaleContext'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import styles from './Layout.module.css'

function ScrollToTop() {
  const { pathname } = useLocation()
  const { locale, t } = useLocale()

  useEffect(() => {
    window.scrollTo(0, 0)

    const pageMeta = resolvePageMeta({ pathname, locale, t })
    applyPageMeta(pageMeta, locale)
  }, [pathname, locale, t])

  return null
}

export default function Layout() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  return (
    <>
      <ScrollToTop />
      <Header />
      <main className={isHome ? styles.mainHome : styles.main}>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
