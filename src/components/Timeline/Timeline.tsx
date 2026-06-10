import { useLocale } from '../../context/LocaleContext'
import SectionTitle from '../ui/SectionTitle/SectionTitle'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'
import type { TimelineEvent } from '../../types/portfolio'
import styles from './Timeline.module.css'

interface TimelineItemProps {
  event: TimelineEvent
  index: number
}

function TimelineItem({ event, index }: TimelineItemProps) {
  const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>()
  const items = event.highlights || event.activities || []

  return (
    <div
      ref={ref}
      className={`${styles.item} ${styles[event.side]} ${isVisible ? styles.visible : ''}`}
      style={{ transitionDelay: `${index * 0.08}s` }}
    >
      <div className={styles.marker}>
        <span className={styles.dot} />
      </div>
      <div className={styles.card}>
        <span className={styles.year}>{event.year}</span>
        <h3 className={styles.title}>{event.title}</h3>
        <p className={styles.subtitle}>{event.subtitle}</p>
        <ul className={styles.list}>
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default function Timeline() {
  const { t } = useLocale()
  const { timeline } = t

  return (
    <section className={`section sectionAlt`}>
      <div className="container">
        <SectionTitle
          label={timeline.label}
          title={timeline.title}
          subtitle={timeline.subtitle}
        />

        <div className={styles.timeline}>
          <div className={styles.line} aria-hidden="true" />
          {timeline.events.map((event, index) => (
            <TimelineItem key={`${event.year}-${event.title}`} event={event} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
