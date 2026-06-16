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
    name: 'DataInsight Pro',
    description:
      'Plataforma inteligente de visualização de dados para análise rápida e geração automática de dashboards. Faça upload de arquivos CSV ou Excel, inspect colunas, gere gráficos inteligentes e exporte insights acionáveis em um espaço focado.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Recharts', 'SheetJS'],
    github: 'https://github.com/samuelcamilodacosta/processing-and-data-view',
    demo: 'https://samuelcamilodacosta.github.io/processing-and-data-view/',
    differentials: [
      'Upload de CSV/XLS(X) até 100MB',
      'Detecção automática de tipos de coluna',
      'Gráficos inteligentes auto-gerados',
      'Interface i18n pt-BR/en responsiva',
    ],
    placeholder: false,
  },
  {
    name: 'Em breve',
    description:
      'Experimento com microsserviços e boas práticas de arquitetura de software.',
    technologies: ['Python', 'MongoDB', 'React'],
    github: null,
    demo: null,
    differentials: ['Big Data', 'Dashboards', 'APIs REST'],
    placeholder: true,
  },
]
