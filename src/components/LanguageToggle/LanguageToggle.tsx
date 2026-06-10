import { useLocale } from '../../context/LocaleContext'
import styles from './LanguageToggle.module.css'

export default function LanguageToggle() {
  const { locale, setLocale, t } = useLocale()

  return (
    <div className={styles.group} role="group" aria-label={t.language.switchAria}>
      <button
        type="button"
        className={`${styles.btn} ${locale === 'pt-BR' ? styles.active : ''}`}
        onClick={() => setLocale('pt-BR')}
        aria-pressed={locale === 'pt-BR'}
      >
        {t.language.pt}
      </button>
      <button
        type="button"
        className={`${styles.btn} ${locale === 'en' ? styles.active : ''}`}
        onClick={() => setLocale('en')}
        aria-pressed={locale === 'en'}
      >
        {t.language.en}
      </button>
    </div>
  )
}
