export type ExpertiseIcon = 'architecture' | 'quality' | 'cloud' | 'performance' | 'devops'

export type TimelineSide = 'left' | 'right'

export interface CompanyInfo {
  name: string
  role: string
  period: string
  description: string
}

export interface ExperienceProject {
  id: string
  name: string
  context: string
  technologies: string[]
  deliveries: string[]
  results: string[]
  highlights: string[]
}

export interface ExpertiseArea {
  title: string
  description: string
  icon: ExpertiseIcon
}

export interface QualityInfo {
  title: string
  description: string
  practices: string[]
}

export interface SkillCategory {
  title: string
  skills: string[]
}

export interface TimelineEvent {
  year: string
  title: string
  subtitle: string
  side: TimelineSide
  highlights?: string[]
  activities?: string[]
}

export interface PersonalProject {
  name: string
  description: string
  technologies: string[]
  github: string | null
  demo: string | null
  differentials: string[]
  placeholder: boolean
}

export interface ContactInfo {
  email: string
  linkedin: string
  github: string
}
