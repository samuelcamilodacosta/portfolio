import { useTheme } from '../../context/ThemeContext'
import { useLocale } from '../../context/LocaleContext'
import styles from './ThemeToggle.module.css'

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme()
  const { t } = useLocale()

  return (
    <button
      type="button"
      className={styles.toggle}
      onClick={toggleTheme}
      aria-label={isDark ? t.theme.lightAria : t.theme.darkAria}
      title={isDark ? t.theme.lightTitle : t.theme.darkTitle}
    >
      {isDark ? (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path d="M12 3v1.5M12 19.5V21M4.22 4.22l1.06 1.06M18.72 18.72l1.06 1.06M3 12h1.5M19.5 12H21M4.22 19.78l1.06-1.06M18.72 5.28l1.06-1.06M12 7.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9z" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path d="M21 14.25A7.5 7.5 0 1110.5 3.75a5.25 5.25 0 007.75 6.75H21z" />
        </svg>
      )}
    </button>
  )
}
