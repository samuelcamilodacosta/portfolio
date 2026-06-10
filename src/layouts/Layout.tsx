import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { useLocale } from '../context/LocaleContext'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import styles from './Layout.module.css'

function ScrollToTop() {
  const { pathname } = useLocation()
  const { t } = useLocale()

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = t.meta.pageTitles[pathname] ?? t.meta.notFound
  }, [pathname, t])

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
