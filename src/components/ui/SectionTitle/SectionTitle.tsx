import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver'
import type { SectionTitleProps } from '../../../types/ui'
import styles from './SectionTitle.module.css'

export default function SectionTitle({
  label,
  title,
  subtitle,
  className = '',
}: SectionTitleProps) {
  const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className={`${styles.wrapper} ${isVisible ? styles.visible : ''} ${className}`.trim()}
    >
      {label && <span className={styles.label}>{label}</span>}
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  )
}
