import { useLocale } from '../../context/LocaleContext'
import Button from '../ui/Button/Button'
import profileImage from '../../assets/profile.png'
import styles from './Hero.module.css'

export default function Hero() {
  const { t } = useLocale()
  const { hero } = t

  return (
    <section className={styles.hero}>
      <div className={styles.bgShape} aria-hidden="true" />

      <div className={`container ${styles.wrapper}`}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>{hero.eyebrow}</p>

          <h1 className={styles.title}>
            Samuel <span className={styles.titleHighlight}>Costa</span>
          </h1>

          <p className={styles.subtitle}>{hero.subtitle}</p>

          <p className={styles.description}>{hero.description}</p>

          <div className={styles.techSection}>
            <h2 className={styles.sectionLabel}>{hero.techStack.title}</h2>
            <div className={styles.techGrid}>
              {hero.techStack.groups.map((group) => (
                <div key={group.label} className={styles.techGroup}>
                  <span className={styles.techGroupLabel}>{group.label}</span>
                  <p className={styles.techGroupItems}>
                    {group.items.join(' · ')}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.educationSection}>
            <h2 className={styles.sectionLabel}>{hero.education.title}</h2>
            <ul className={styles.educationList}>
              {hero.education.items.map((item) => (
                <li key={item.degree} className={styles.educationItem}>
                  <div className={styles.educationMain}>
                    <span className={styles.educationDegree}>{item.degree}</span>
                    {item.institution && (
                      <span className={styles.educationInstitution}>
                        {item.institution}
                      </span>
                    )}
                  </div>
                  <span className={styles.educationPeriod}>{item.period}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.actions}>
            <Button to="/experiencia" variant="primary">
              {hero.ctaExperience}
            </Button>
            <Button to="/projetos" variant="secondary">
              {hero.ctaProjects}
            </Button>
          </div>
        </div>

        <div className={styles.profile}>
          <div className={styles.avatarFrame}>
            <div className={styles.avatarRing} aria-hidden="true" />
            <div className={styles.avatarCircle}>
              <img
                src={profileImage}
                alt={hero.imageAlt}
                className={styles.avatarImage}
                width={280}
                height={280}
              />
            </div>
          </div>

          <div className={styles.profileMeta}>
            {hero.focusAreas.map((area, index) => (
              <div key={area.value} className={styles.metaGroup}>
                {index > 0 && <div className={styles.metaDivider} aria-hidden="true" />}
                <div className={styles.metaItem}>
                  <span className={styles.metaValue}>{area.value}</span>
                  <span className={styles.metaLabel}>{area.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
