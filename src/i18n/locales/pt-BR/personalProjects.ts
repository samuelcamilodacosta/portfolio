import type { PersonalProject } from '@/types/portfolio'

export const personalProjects: PersonalProject[] = [
  {
    name: 'Sistema para Lojas',
    description:
      'Aplicativo desktop offline para gestão de produtos, estoque e vendas de lojas físicas. PDV com leitor de código de barras, carrinho multi-itens, históricos com filtros e dashboard analítico com KPIs e gráficos de performance.',
    technologies: ['Electron', 'TypeScript', 'SQLite', 'Chart.js', 'Vitest'],
    github: 'https://github.com/samuelcamilodacosta/sistema-para-lojas',
    demo: null,
    differentials: [
      'Offline first com SQLite local',
      'PDV e leitor de código de barras',
      '100% cobertura de testes automatizados',
      'i18n pt-BR/en e tema claro/escuro',
    ],
    placeholder: false,
  },
  {
    name: 'Em breve',
    description:
      'Projeto focado em microsserviços e boas práticas de engenharia de software.',
    technologies: ['NestJS', 'Docker', 'PostgreSQL'],
    github: null,
    demo: null,
    differentials: ['Testes automatizados', 'CI/CD', 'Observabilidade'],
    placeholder: true,
  },
  {
    name: 'Em breve',
    description:
      'Experimento com processamento de dados e visualizações interativas.',
    technologies: ['Python', 'MongoDB', 'React'],
    github: null,
    demo: null,
    differentials: ['Big Data', 'Dashboards', 'APIs REST'],
    placeholder: true,
  },
]
