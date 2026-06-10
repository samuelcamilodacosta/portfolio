import { useLocale } from '../../context/LocaleContext'
import SectionTitle from '../ui/SectionTitle/SectionTitle'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'
import styles from './About.module.css'

export default function About() {
  const { t } = useLocale()
  const { about } = t
  const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>()

  return (
    <section className="section">
      <div className="container">
        <SectionTitle label={about.label} title={about.title} />

        <div
          ref={ref}
          className={`${styles.content} ${isVisible ? styles.visible : ''}`}
        >
          <div className={styles.card}>
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className={styles.highlights}>
            {about.highlights.map((item) => (
              <div key={item.label} className={styles.highlightItem}>
                <span className={styles.highlightValue}>{item.value}</span>
                <span className={styles.highlightLabel}>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
