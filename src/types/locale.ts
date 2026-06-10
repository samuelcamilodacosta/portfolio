import type {
  CompanyInfo,
  ExperienceProject,
  ExpertiseArea,
  PersonalProject,
  QualityInfo,
  SkillCategory,
  TimelineEvent,
} from './portfolio'

export type LocaleCode = 'pt-BR' | 'en'

export interface NavItem {
  label: string
  to: string
}

export interface EducationItem {
  degree: string
  institution: string | null
  period: string
}

export interface HighlightItem {
  value: string
  label: string
}

export interface TechStackGroup {
  label: string
  items: string[]
}

export interface FocusArea {
  value: string
  label: string
}

export interface CommonStrings {
  showDetails: string
  showLess: string
  technologies: string
  deliveries: string
  results: string
  highlights: string
  differentials: string
  github: string
  demo: string
  inDevelopment: string
}

export interface Translation {
  meta: {
    pageTitles: Record<string, string>
    notFound: string
  }
  nav: NavItem[]
  header: {
    navAria: string
    openMenu: string
    closeMenu: string
  }
  language: {
    switchAria: string
    pt: string
    en: string
  }
  theme: {
    lightAria: string
    darkAria: string
    lightTitle: string
    darkTitle: string
  }
  common: CommonStrings
  hero: {
    eyebrow: string
    subtitle: string
    description: string
    techStack: {
      title: string
      groups: TechStackGroup[]
    }
    education: {
      title: string
      items: EducationItem[]
    }
    focusAreas: FocusArea[]
    ctaExperience: string
    ctaProjects: string
    imageAlt: string
  }
  about: {
    label: string
    title: string
    paragraphs: string[]
    highlights: HighlightItem[]
  }
  skills: {
    label: string
    title: string
    subtitle: string
    categories: SkillCategory[]
  }
  experience: {
    label: string
    title: string
    subtitle: string
    projectsTitle: string
    companyInfo: CompanyInfo
    projects: ExperienceProject[]
    qualityInfo: QualityInfo
    expertiseAreas: ExpertiseArea[]
    expertiseTitle: string
  }
  timeline: {
    label: string
    title: string
    subtitle: string
    events: TimelineEvent[]
  }
  projects: {
    label: string
    title: string
    subtitle: string
    items: PersonalProject[]
  }
  contact: {
    label: string
    title: string
    subtitle: string
    message: string
    links: {
      email: string
      linkedin: string
      github: string
    }
  }
  footer: {
    tagline: string
  }
  notFound: {
    message: string
    backHome: string
  }
}

export interface LocaleContextValue {
  locale: LocaleCode
  setLocale: (locale: LocaleCode) => void
  toggleLocale: () => void
  t: Translation
}
