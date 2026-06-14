import type { PersonalProject } from '@/types/portfolio'

export const personalProjects: PersonalProject[] = [
  {
    name: 'Store Management System',
    description:
      'Offline desktop application for managing products, inventory, and sales in physical retail stores. Portuguese (pt-BR) or English (en) interface, light or dark theme, and a counter-focused workflow: barcode scanning, multi-item cart, filtered history views, and an analytics dashboard.',
    technologies: ['Electron', 'TypeScript', 'SQLite', 'Chart.js', 'Vitest'],
    github: 'https://github.com/samuelcamilodacosta/sistema-para-lojas/blob/main/README.en.md',
    demo: null,
    differentials: [
      'Offline — data persisted locally in SQLite, no internet required',
      'Sales (POS) — barcode scanner, discounts, Pix/Cash/Debit/Credit',
      '157 tests with 100% line coverage (Vitest)',
      'Portuguese (pt-BR) or English (en) and light/dark theme',
    ],
    placeholder: false,
  },
  {
    name: 'Coming soon',
    description:
      'Project focused on microservices and software engineering best practices.',
    technologies: ['NestJS', 'Docker', 'PostgreSQL'],
    github: null,
    demo: null,
    differentials: ['Automated tests', 'CI/CD', 'Observability'],
    placeholder: true,
  },
  {
    name: 'Coming soon',
    description:
      'Experiment with data processing and interactive visualizations.',
    technologies: ['Python', 'MongoDB', 'React'],
    github: null,
    demo: null,
    differentials: ['Big Data', 'Dashboards', 'REST APIs'],
    placeholder: true,
  },
]
