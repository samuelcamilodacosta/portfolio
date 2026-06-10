import { useLocale } from '../../context/LocaleContext'
import styles from './Footer.module.css'

export default function Footer() {
  const { t } = useLocale()

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.copyright}>
          © 2026 Samuel Costa
        </p>
        <p className={styles.tagline}>
          {t.footer.tagline}
        </p>
      </div>
    </footer>
  )
}
