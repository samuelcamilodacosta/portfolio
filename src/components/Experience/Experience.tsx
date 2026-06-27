import { useState, type ReactNode } from 'react'
import { useLocale } from '../../context/LocaleContext'
import SectionTitle from '../ui/SectionTitle/SectionTitle'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'
import type { CommonStrings } from '../../types/locale'
import type { ExperienceProject, ExpertiseIcon } from '../../types/portfolio'
import styles from './Experience.module.css'

const icons: Record<ExpertiseIcon, ReactNode> = {
  architecture: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  ),
  quality: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  cloud: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
    </svg>
  ),
  performance: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  devops: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    </svg>
  ),
}

interface ProjectCardProps {
  project: ExperienceProject
  common: CommonStrings
}

function ProjectCard({ project, common }: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false)
  const [ref, isVisible] = useIntersectionObserver<HTMLElement>()

  return (
    <article
      ref={ref}
      className={`${styles.projectCard} ${isVisible ? styles.visible : ''}`}
    >
      <div className={styles.projectHeader}>
        <h3 className={styles.projectName}>{project.name}</h3>
        <div className={styles.techTags}>
          {project.technologies.slice(0, 3).map((tech) => (
            <span key={tech} className={styles.techTag}>{tech}</span>
          ))}
          {project.technologies.length > 3 && (
            <span className={styles.techTag}>+{project.technologies.length - 3}</span>
          )}
        </div>
      </div>

      <p className={styles.projectContext}>{project.context}</p>

      <button
        type="button"
        className={styles.expandBtn}
        onClick={() => setExpanded((prev) => !prev)}
        aria-expanded={expanded}
      >
        {expanded ? common.showLess : common.showDetails}
        <svg
          className={`${styles.chevron} ${expanded ? styles.chevronOpen : ''}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      {expanded && (
        <div className={styles.projectDetails}>
          <div className={styles.detailSection}>
            <h4>{common.technologies}</h4>
            <div className={styles.techTags}>
              {project.technologies.map((tech) => (
                <span key={tech} className={styles.techTag}>{tech}</span>
              ))}
            </div>
          </div>
          <div className={styles.detailSection}>
            <h4>{common.deliveries}</h4>
            <ul>
              {project.deliveries.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className={styles.detailSection}>
            <h4>{common.results}</h4>
            <ul>
              {project.results.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className={styles.detailSection}>
            <h4>{common.highlights}</h4>
            <ul>
              {project.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </article>
  )
}

export default function Experience() {
  const { t } = useLocale()
  const { experience, common } = t
  const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>()

  return (
    <section className={`section sectionAlt ${styles.page}`}>
      <div className="container">
        <SectionTitle
          label={experience.label}
          title={experience.title}
          subtitle={experience.subtitle}
          headingLevel="h1"
        />

        <div
          ref={ref}
          className={`${styles.companyCard} ${isVisible ? styles.visible : ''}`}
        >
          <div className={styles.companyInfo}>
            <h3 className={styles.companyName}>{experience.companyInfo.name}</h3>
            <p className={styles.role}>{experience.companyInfo.role}</p>
            <p className={styles.period}>{experience.companyInfo.period}</p>
          </div>
          <p className={styles.companyDesc}>{experience.companyInfo.description}</p>
        </div>

        <div className={styles.projectsSection}>
          <h3 className={styles.projectsTitle}>{experience.projectsTitle}</h3>
          <div className={styles.projectsGrid}>
            {experience.projects.map((project) => (
              <ProjectCard key={project.id} project={project} common={common} />
            ))}
          </div>
        </div>

        <div className={styles.quality}>
          <h3 className={styles.expertiseTitle}>{experience.qualityInfo.title}</h3>
          <p className={styles.qualityDesc}>{experience.qualityInfo.description}</p>
          <ul className={styles.qualityList}>
            {experience.qualityInfo.practices.map((practice) => (
              <li key={practice}>{practice}</li>
            ))}
          </ul>
        </div>

        <div className={styles.expertise}>
          <h3 className={styles.expertiseTitle}>{experience.expertiseTitle}</h3>
          <div className={styles.expertiseGrid}>
            {experience.expertiseAreas.map((area) => (
              <div key={area.title} className={styles.expertiseCard}>
                <div className={styles.expertiseIcon}>
                  {icons[area.icon]}
                </div>
                <h4>{area.title}</h4>
                <p>{area.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
