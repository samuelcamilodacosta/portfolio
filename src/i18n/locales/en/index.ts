import {
  companyInfo,
  projects,
  expertiseAreas,
  qualityInfo,
} from './experience'
import { timelineEvents } from './timeline'
import { skillCategories } from './skills'
import { personalProjects } from './personalProjects'
import type { Translation } from '@/types/locale'

const en = {
  meta: {
    pageTitles: {
      '/': 'Samuel Costa | Software Engineer',
      '/sobre': 'About | Samuel Costa',
      '/tecnologias': 'Skills | Samuel Costa',
      '/experiencia': 'Experience | Samuel Costa',
      '/projetos': 'Projects | Samuel Costa',
      '/contato': 'Contact | Samuel Costa',
    },
    notFound: 'Page not found | Samuel Costa',
  },
  nav: [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/sobre' },
    { label: 'Skills', to: '/tecnologias' },
    { label: 'Experience', to: '/experiencia' },
    { label: 'Projects', to: '/projetos' },
    { label: 'Contact', to: '/contato' },
  ],
  header: {
    navAria: 'Main navigation',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
  },
  language: {
    switchAria: 'Switch language',
    pt: 'PT',
    en: 'EN',
  },
  theme: {
    lightAria: 'Enable light theme',
    darkAria: 'Enable dark theme',
    lightTitle: 'Light theme',
    darkTitle: 'Dark theme',
  },
  common: {
    showDetails: 'View details',
    showLess: 'Show less',
    technologies: 'Technologies',
    deliveries: 'Key deliverables',
    results: 'Results achieved',
    highlights: 'Technical highlights',
    differentials: 'Key strengths',
    github: 'GitHub',
    demo: 'Demo',
    inDevelopment: 'In development',
  },
  hero: {
    eyebrow: 'Software Developer · Backend & Cloud',
    subtitle: 'Software Engineer · Backend Specialist · Cloud & Microservices',
    description:
      'Experience in microservices, scalable APIs, web and mobile applications, corporate integrations, cloud computing, and system modernization.',
    techStack: {
      title: 'Core stack',
      groups: [
        { label: 'Backend', items: ['Node.js', 'NestJS', 'Java', 'Spring Boot'] },
        { label: 'Cloud', items: ['AWS', 'Azure', 'Firebase'] },
        { label: 'Architecture', items: ['Microservices', 'REST APIs', 'BFF'] },
        { label: 'Web & Mobile', items: ['Angular', 'React Native', 'Ionic'] },
      ],
    },
    education: {
      title: 'Education',
      items: [
        {
          degree: 'Technology Degree in Systems Analysis and Development',
          institution: 'UniFatecie University Center',
          period: '2022 – 2025',
        },
        {
          degree: 'IT Technician',
          institution: 'Federal Institute Goiano - Urutaí Campus',
          period: '2012 – 2014',
        },
      ],
    },
    focusAreas: [
      { value: 'Backend', label: 'Node.js & Java' },
      { value: 'Cloud', label: 'AWS · Azure' },
      { value: 'Architecture', label: 'Microservices' },
    ],
    ctaExperience: 'View Experience',
    ctaProjects: 'View Projects',
    imageAlt: 'Samuel Costa - Software Engineer',
  },
  about: {
    label: 'About',
    title: 'About Me',
    paragraphs: [
      'My journey in technology began at the New Rizon Back-End Bootcamp (2021), where I was selected to join the team and hired in 2022.',
      'Since then, I have worked on REST APIs, corporate microservices — authentication, payments, and email — BFF layers, and integrations between legacy systems and modern applications. I have worked with Node.js, NestJS, Express, Java, and Spring Boot on web projects with Angular, mobile with React Native and Ionic, and data processing solutions with Python, ETL, and analytical dashboards in AWS and Azure cloud environments.',
      'I contributed to production platforms in education, culture, condominium management, environment, and retail, including infrastructure migration (AWS → Azure), CI/CD pipelines, observability, performance optimization, and automated tests with over 80% coverage. I also share knowledge with early-career professionals as a complementary activity alongside project work.',
    ],
    highlights: [
      { value: '2021', label: 'Back-End Bootcamp' },
      { value: 'Back-End', label: 'Primary specialization' },
      { value: 'Front-End', label: 'Angular & React' },
      { value: 'Mobile', label: 'React Native & Ionic' },
      { value: 'Full Cycle', label: 'Architecture to deploy' },
    ],
  },
  skills: {
    label: 'Stack',
    title: 'Skills',
    subtitle: 'Full stack used in real production projects',
    categories: skillCategories,
  },
  experience: {
    label: 'Experience',
    title: 'Professional Experience',
    subtitle: 'Work on real production projects',
    projectsTitle: 'Projects I worked on',
    companyInfo,
    projects,
    qualityInfo,
    expertiseAreas,
    expertiseTitle: 'Key strengths',
  },
  timeline: {
    label: 'Journey',
    title: 'Professional Timeline',
    subtitle: 'Career evolution from Bootcamp to large-scale projects',
    events: timelineEvents,
  },
  projects: {
    label: 'Portfolio',
    title: 'Personal Projects',
    subtitle: 'Open source projects and technical experiments built on my own',
    items: personalProjects,
  },
  contact: {
    label: 'Contact',
    title: "Let's talk?",
    subtitle: 'Available for opportunities, projects, and professional networking',
    message:
      'I am open to conversations about back-end opportunities, microservices architecture, cloud computing, and full-cycle development. Reach out through any of the channels below.',
    links: {
      email: 'Email',
      linkedin: 'LinkedIn',
      github: 'GitHub',
    },
  },
  footer: {
    tagline: 'Software Engineer | Backend Specialist | Cloud & Microservices',
  },
  notFound: {
    message: 'Page not found.',
    backHome: 'Back to home',
  },
} satisfies Translation

export default en
