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
    name: 'DataInsight Pro',
    description:
      'Smart data visualization platform for quick analysis and automatic dashboard generation. Upload CSV or Excel files, inspect columns, generate intelligent charts, and export actionable insights in a focused space.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Recharts', 'SheetJS'],
    github: 'https://github.com/samuelcamilodacosta/processing-and-data-view',
    demo: 'https://samuelcamilodacosta.github.io/processing-and-data-view/',
    differentials: [
      'CSV/XLS(X) upload up to 100MB',
      'Automatic column type detection',
      'Auto-generated intelligent charts',
      'Responsive i18n pt-BR/en interface',
    ],
    placeholder: false,
  },
  {
    name: 'NutriFit',
    description:
      'Modern nutrition and fitness platform with AI integration for intelligent analysis of eating habits. Track meals, receive personalized AI recommendations, and chat with an intelligent assistant in real-time.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'AI'],
    github: 'https://github.com/samuelcamilodacosta/nutrifit',
    demo: 'https://samuelcamilodacosta.github.io/nutrifit/',
    differentials: [
      'Real-time AI chat',
      'Personalized AI recommendations',
      'Intelligent meal tracking',
      'Responsive and intuitive interface',
    ],
    placeholder: false,
  },
  {
    name: 'Coming soon',
    description:
      'Experiment with microservices and software architecture best practices.',
    technologies: ['Python', 'MongoDB', 'NestJS'],
    github: null,
    demo: null,
    differentials: ['Big Data', 'Dashboards', 'REST APIs'],
    placeholder: true,
  },
]
