import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver'
import type { SectionTitleProps } from '../../../types/ui'
import styles from './SectionTitle.module.css'

export default function SectionTitle({
  label,
  title,
  subtitle,
  className = '',
  headingLevel = 'h2',
}: SectionTitleProps) {
  const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>()
  const Heading = headingLevel

  return (
    <div
      ref={ref}
      className={`${styles.wrapper} ${isVisible ? styles.visible : ''} ${className}`.trim()}
    >
      {label && <span className={styles.label}>{label}</span>}
      <Heading className={styles.title}>{title}</Heading>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  )
}
