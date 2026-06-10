import type { TimelineEvent } from '@/types/portfolio'

export const timelineEvents: TimelineEvent[] = [
  {
    year: '2021',
    title: 'Entrada na New Rizon',
    subtitle: 'Bootcamp Back-End',
    highlights: [
      'Formação Back-End',
      'Contratação após programa',
      'Primeiros microsserviços',
    ],
    side: 'left',
  },
  {
    year: '2022',
    title: 'Evoé / Museu Inhotim',
    subtitle: 'Plataforma cultural',
    activities: [
      'Microsserviços de autenticação e pagamentos',
      'APIs REST com Swagger e TSDoc',
      'Node.js, MongoDB, Redis e AWS',
    ],
    side: 'left',
  },
  {
    year: '2022',
    title: 'Framework Corporativo',
    subtitle: 'Template de microsserviços',
    activities: [
      'Arquitetura padrão e módulos reutilizáveis',
      'Padronização de autenticação, testes e documentação',
      'Evolução para modelo focado em produtos',
    ],
    side: 'right',
  },
  {
    year: '2022 – 2023',
    title: 'Ergonomia e Segurança',
    subtitle: 'Plataforma corporativa',
    activities: [
      'MVP Back-End e Front-End',
      'Gestão de riscos e dashboards com ECharts',
      'Importação e exportação de relatórios',
    ],
    side: 'left',
  },
  {
    year: '2023',
    title: 'Hubert',
    subtitle: 'Gestão condominial',
    activities: [
      'Desenvolvimento Front-End com Angular',
      'Angular Material e integrações REST',
      'Evolução da experiência do usuário',
    ],
    side: 'right',
  },
  {
    year: '2023',
    title: 'Granado App',
    subtitle: 'Modernização mobile',
    activities: [
      'Novo app substituindo legado depreciado',
      'BFF e integrações ERP com N8N',
      'Ionic, TypeScript e Node.js',
    ],
    side: 'left',
  },
  {
    year: '2023 – 2024',
    title: 'Plataforma de Dados',
    subtitle: 'Processamento corporativo',
    activities: [
      'Importação XLSX/CSV e alto volume de dados',
      'Pipeline assíncrono e filas de processamento',
      'Python, MongoDB, Angular e AWS S3',
    ],
    side: 'right',
  },
  {
    year: '2023 – 2024',
    title: 'E-Aterra',
    subtitle: 'Meio ambiente',
    activities: [
      'Migração completa AWS → Azure',
      'Pipelines CI/CD e saneamento de banco de dados',
      'Otimização de performance, relatórios e notificações',
    ],
    side: 'left',
  },
  {
    year: '2024 – Atual',
    title: 'Iônica – Editora FTD',
    subtitle: 'Educação digital',
    activities: [
      'Funcionalidades mobile com React Native',
      'BFF com NestJS e pipelines Azure DevOps',
      'Firebase Hosting, Analytics e observabilidade com Datadog',
    ],
    side: 'right',
  },
]
