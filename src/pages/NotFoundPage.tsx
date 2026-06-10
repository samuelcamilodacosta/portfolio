import { useLocale } from '../context/LocaleContext'
import Button from '../components/ui/Button/Button'
import styles from './NotFoundPage.module.css'

export default function NotFoundPage() {
  const { t } = useLocale()

  return (
    <section className={styles.page}>
      <div className="container">
        <h1 className={styles.title}>404</h1>
        <p className={styles.message}>{t.notFound.message}</p>
        <Button to="/" variant="primary">
          {t.notFound.backHome}
        </Button>
      </div>
    </section>
  )
}
