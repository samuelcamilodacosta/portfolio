import { useLocale } from '../../context/LocaleContext'
import SectionTitle from '../ui/SectionTitle/SectionTitle'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'
import type { SkillCategory } from '../../types/portfolio'
import styles from './Skills.module.css'

interface SkillCardProps {
  category: SkillCategory
  index: number
}

function SkillCard({ category, index }: SkillCardProps) {
  const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className={`${styles.card} ${isVisible ? styles.visible : ''}`}
      style={{ transitionDelay: `${index * 0.06}s` }}
    >
      <h3 className={styles.cardTitle}>{category.title}</h3>
      <div className={styles.tags}>
        {category.skills.map((skill) => (
          <span key={skill} className={styles.tag}>
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  const { t } = useLocale()
  const { skills } = t

  return (
    <section className="section">
      <div className="container">
        <SectionTitle
          label={skills.label}
          title={skills.title}
          subtitle={skills.subtitle}
        />

        <div className={styles.grid}>
          {skills.categories.map((category, index) => (
            <SkillCard key={category.title} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
