import type {
  CompanyInfo,
  ExperienceProject,
  ExpertiseArea,
  QualityInfo,
} from '@/types/portfolio'

export const companyInfo: CompanyInfo = {
  name: 'New Rizon',
  role: 'Desenvolvedor de Software',
  period: 'Janeiro de 2022 – Atual',
  description:
    'Selecionado e contratado através do Bootcamp Back-End da New Rizon (2021), evoluí para atuar em microsserviços corporativos, APIs escaláveis, integrações e ambientes cloud (AWS e Azure). Participei da criação de serviços reutilizáveis — autenticação, pagamentos e e-mails — e de plataformas em segmentos como cultura, gestão condominial, mobile, processamento de dados, meio ambiente e educação, com atuação do desenho da solução ao deploy em produção, incluindo CI/CD, performance e testes com cobertura acima de 80%. Em paralelo às entregas nos projetos, atuei como mentor no Bootcamp da empresa (2023–2025), apoiando desenvolvedores juniores e iniciantes na trilha Back-End, com foco em boas práticas, qualidade de código e evolução técnica.',
}

export const projects: ExperienceProject[] = [
  {
    id: 'evoe',
    name: 'Plataforma Evoé (Museu Inhotim)',
    context:
      'Desenvolvimento da plataforma da Evoé, empresa responsável pela gestão digital do Museu Inhotim.',
    technologies: [
      'Node.js',
      'Express',
      'MongoDB',
      'Redis',
      'Swagger',
      'TSDoc',
      'Node Cron',
      'AWS',
    ],
    deliveries: [
      'Microsserviço para gestão de contas e projetos',
      'APIs REST documentadas com Swagger e TSDoc',
      'Validações robustas com Express Validator',
      'Rotinas automatizadas para envio de e-mails e geração de relatórios',
    ],
    results: [
      'Arquitetura modular com microsserviços independentes em produção',
      'APIs documentadas e padronizadas para integração entre serviços',
      'Automações confiáveis para comunicação e relatórios',
    ],
    highlights: [
      'Separação de domínios críticos em microsserviços',
      'Documentação técnica com Swagger e TSDoc',
      'Cache com Redis e integração com serviços AWS',
    ],
  },
  {
    id: 'email-platform',
    name: 'Microsserviço de E-mails',
    context:
      'Concepção e desenvolvimento de microsserviço de envio de e-mails reutilizado por múltiplos projetos da empresa.',
    technologies: [
      'Node.js',
      'Express',
      'Redis',
      'SMTP',
      'Node Cron',
      'Microsserviços',
    ],
    deliveries: [
      'Microsserviço com suporte a múltiplos provedores SMTP',
      'Camada de abstração para troca de provedores sem impacto nos consumidores',
      'Cache utilizando Redis',
      'Agendamentos automáticos para campanhas e notificações',
    ],
    results: [
      'Microsserviço reutilizado por diversos projetos da empresa',
      'Flexibilidade para troca de provedores SMTP sem retrabalho',
      'Campanhas e notificações automatizadas com confiabilidade',
    ],
    highlights: [
      'Arquitetura de microsserviço desacoplada e reutilizável',
      'Abstração de provedores SMTP para troca sem impacto nos consumidores',
      'Cache Redis e agendamentos com Node Cron',
    ],
  },
  {
    id: 'auth-service',
    name: 'Microsserviço de Autenticação',
    context:
      'Criação de microsserviço de autenticação reutilizado por múltiplas aplicações da empresa, com controle de acesso baseado em roles.',
    technologies: [
      'Node.js',
      'Express',
      'JWT Authentication',
      'Middlewares',
      'Microsserviços',
      'REST APIs',
    ],
    deliveries: [
      'Desenvolvimento do microsserviço de autenticação e autorização',
      'Middlewares para gerenciamento de acesso por roles',
      'Controle granular de permissões conforme necessidade de cada aplicação',
      'Integração padronizada para consumidores internos',
    ],
    results: [
      'Autenticação centralizada e reutilizável entre projetos',
      'Gestão de permissões flexível por roles',
      'Redução de duplicação de lógica de autenticação',
    ],
    highlights: [
      'Middlewares customizados para controle por roles',
      'Arquitetura desacoplada e reutilizável',
      'Padronização de autenticação entre microsserviços',
    ],
  },
  {
    id: 'payment-service',
    name: 'Microsserviço de Pagamentos',
    context:
      'Criação de microsserviço de pagamentos com suporte a múltiplos provedores, permitindo integrações customizadas ou uso de um provedor default.',
    technologies: [
      'Node.js',
      'Express',
      'Ebanx',
      'Pagar.me',
      'Microsserviços',
      'REST APIs',
    ],
    deliveries: [
      'Desenvolvimento do microsserviço de pagamentos',
      'Camada de abstração para integração com múltiplas APIs de pagamento',
      'Opção de provedor default ou integrações customizadas por projeto',
      'Integração com Ebanx e Pagar.me',
    ],
    results: [
      'Pagamentos centralizados e reutilizáveis entre aplicações',
      'Flexibilidade para troca ou adição de provedores sem impacto nos consumidores',
      'Integrações em produção com gateways de pagamento',
    ],
    highlights: [
      'Abstração de provedores de pagamento para desacoplamento',
      'Integração com Ebanx e Pagar.me',
      'Arquitetura preparada para novos gateways',
    ],
  },
  {
    id: 'framework',
    name: 'Framework Base para Microsserviços',
    context:
      'Criação do template corporativo utilizado pela New Rizon para inicialização de novos projetos Back-End.',
    technologies: [
      'Node.js',
      'Microsserviços',
      'Autenticação',
      'Swagger',
      'Testes Automatizados',
    ],
    deliveries: [
      'Definição de arquitetura padrão para novos serviços',
      'Estruturação de módulos reutilizáveis',
      'Padronização de autenticação, documentação, validações e testes',
      'Boas práticas para escalabilidade e manutenção dos serviços',
    ],
    results: [
      'Aceleração na criação de novos microsserviços',
      'Padronização técnica entre equipes e projetos',
      'Evolução da empresa para modelo focado em produtos reutilizáveis',
    ],
    highlights: [
      'Template corporativo adotado em múltiplos projetos',
      'Contribuição direta para maturidade em microsserviços',
      'Base sólida para autenticação, testes e documentação',
    ],
  },
  {
    id: 'ergonomia',
    name: 'Gestão de Ergonomia e Segurança do Trabalho',
    context:
      'Desenvolvimento de MVP corporativo voltado para análise ergonômica e gestão de riscos ocupacionais (2022–2023).',
    technologies: [
      'Node.js',
      'Express',
      'Angular',
      'ECharts',
      'MongoDB',
      'Geração de Relatórios',
    ],
    deliveries: [
      'Desenvolvimento Back-End e Front-End do MVP',
      'Gestão de usuários, empresas e filiais',
      'Controle de riscos ocupacionais',
      'Gestão de faltas, ausências e afastamentos',
      'Importação massiva de dados via planilhas',
      'Exportação de relatórios PDF, XLSX e CSV',
      'Dashboards analíticos',
    ],
    results: [
      'MVP validado com stakeholders corporativos',
      'Visibilidade de riscos e indicadores via dashboards',
      'Redução de processos manuais de compliance trabalhista',
    ],
    highlights: [
      'Atuação full-stack com Node.js, Express e Angular',
      'Visualizações analíticas com ECharts',
      'Importação e exportação em múltiplos formatos',
    ],
  },
  {
    id: 'hubert',
    name: 'Hubert – Gestão Condominial',
    context:
      'Desenvolvimento Front-End da plataforma Hubert, sistema voltado para administração e gestão de condomínios.',
    technologies: ['Angular', 'TypeScript', 'Angular Material'],
    deliveries: [
      'Desenvolvimento de novas funcionalidades',
      'Correções e melhorias de interface',
      'Integração com APIs REST',
      'Evolução da experiência do usuário',
    ],
    results: [
      'Interface moderna e funcional para gestão condominial',
      'Fluxos otimizados com integrações em tempo real',
      'Melhoria contínua da experiência do usuário',
    ],
    highlights: [
      'Desenvolvimento front-end com Angular e Angular Material',
      'Integração eficiente com APIs REST',
      'Foco em usabilidade para administradores de condomínios',
    ],
  },
  {
    id: 'granado',
    name: 'Granado App',
    context:
      'Modernização do ecossistema mobile da Granado, substituindo uma aplicação legada já depreciada (2023).',
    technologies: ['Ionic', 'TypeScript', 'N8N', 'APIs REST', 'Node.js'],
    deliveries: [
      'Desenvolvimento do novo aplicativo mobile',
      'Integrações entre ERP e aplicativo',
      'Orquestração de fluxos e integrações com N8N',
      'Construção de camada BFF para adaptação de dados entre sistemas',
    ],
    results: [
      'Substituição de aplicação legada por solução moderna',
      'Integração fluida entre mobile, BFF e ERP',
      'Orquestração confiável de fluxos corporativos',
    ],
    highlights: [
      'Camada BFF para adaptação de dados entre sistemas',
      'Orquestração de integrações com N8N',
      'Desenvolvimento mobile com Ionic e TypeScript',
    ],
  },
  {
    id: 'data-platform',
    name: 'Processamento e Visualização de Dados',
    context:
      'Principal responsável pelo Back-End da solução, com participação em implementações Front-End (2023–2024).',
    technologies: [
      'Node.js',
      'MongoDB',
      'Python',
      'Angular',
      'Angular Material',
      'AWS S3',
    ],
    deliveries: [
      'Processamento de grandes volumes de dados provenientes de planilhas',
      'Sistema de importação XLSX e CSV',
      'Dashboards analíticos e indicadores visuais',
      'Sistema de notificações',
      'Pipeline de processamento assíncrono',
      'Integração com armazenamento em nuvem e filas de processamento',
    ],
    results: [
      'Arquitetura voltada para alto volume de dados',
      'Processamento automatizado com Python',
      'Dados convertidos em dashboards e relatórios gerenciais',
    ],
    highlights: [
      'Pipeline assíncrono com filas de processamento',
      'Integração com AWS S3 para armazenamento em nuvem',
      'Atuação back-end e front-end com Angular e Python',
    ],
  },
  {
    id: 'eaterra',
    name: 'E-Aterra',
    context:
      'Sustentação e evolução da plataforma E-Aterra em processo completo de modernização tecnológica (2023–2024).',
    technologies: [
      'Java 17',
      'Spring Boot',
      'Hibernate',
      'MariaDB',
      'Angular',
      'Ionic',
      'Azure DevOps',
      'Azure Cloud',
    ],
    deliveries: [
      'Migração completa da infraestrutura AWS para Azure',
      'Criação de pipelines automatizadas de CI/CD',
      'Migração e saneamento de banco de dados',
      'Migrations para correção de inconsistências',
      'Otimização de consultas e problemas de performance',
      'Paginações e melhorias em relatórios',
      'Automação de notificações e campanhas por e-mail',
    ],
    results: [
      'Redução significativa de gargalos de performance',
      'Maior estabilidade operacional',
      'Processo de deploy totalmente automatizado',
    ],
    highlights: [
      'Planejamento e execução de migração cloud AWS → Azure',
      'Saneamento e evolução de banco MariaDB com Hibernate',
      'Atuação full-stack com Angular, Ionic e Spring Boot',
    ],
  },
  {
    id: 'ionica',
    name: 'Aplicativo Iônica (Editora FTD)',
    context:
      'Evolução do aplicativo Iônica, plataforma educacional da Editora FTD (2024 – Atual).',
    technologies: [
      'React Native',
      'NestJS',
      'Azure DevOps',
      'Firebase Analytics',
      'Firebase Hosting',
      'Datadog',
    ],
    deliveries: [
      'Funcionalidades mobile em React Native',
      'Criação e manutenção de pipelines de deploy',
      'Publicação automatizada com Azure e Firebase',
      'Monitoramento e observabilidade com Datadog',
      'Integração com serviços de Analytics',
      'Integrações através de BFF',
    ],
    results: [
      'App educacional em produção com releases frequentes e estáveis',
      'Deploy automatizado e monitorado de ponta a ponta',
      'Visibilidade operacional com analytics e observabilidade integrados',
    ],
    highlights: [
      'Evolução de funcionalidades em React Native',
      'BFF com NestJS para integrações entre mobile e serviços internos',
      'Pipelines Azure DevOps, publicação via Firebase e monitoramento com Datadog',
    ],
  },
]

export const expertiseAreas: ExpertiseArea[] = [
  {
    title: 'Arquitetura',
    description:
      'Microsserviços, APIs REST, camadas BFF, sistemas de fila e arquiteturas distribuídas.',
    icon: 'architecture',
  },
  {
    title: 'Qualidade',
    description:
      'Testes unitários, de integração e end-to-end com Jest, JUnit, Jasmine e Cypress, além de SonarQube em pipelines CI/CD.',
    icon: 'quality',
  },
  {
    title: 'Cloud',
    description:
      'Experiência com AWS (S3 e serviços cloud), Azure, Firebase e pipelines de deploy automatizado.',
    icon: 'cloud',
  },
  {
    title: 'Performance',
    description:
      'Otimização de consultas, relatórios e sistemas de grande volume de dados.',
    icon: 'performance',
  },
  {
    title: 'DevOps',
    description: 'Criação de pipelines automatizadas e processos de deploy com Azure DevOps.',
    icon: 'devops',
  },
]

export const qualityInfo: QualityInfo = {
  title: 'Qualidade de Software',
  description:
    'Atuação na implementação e manutenção de testes automatizados em sistemas backend e distribuídos, assegurando cobertura de código, prevenção de regressões e estabilidade em produção. Experiência com testes unitários, de integração e end-to-end utilizando Jest, JUnit, Jasmine e Cypress, além de SonarQube para análise de qualidade, cobertura e métricas de código em pipelines de CI/CD.',
  practices: [
    'Testes unitários',
    'Testes de integração',
    'Testes end-to-end',
    'SonarQube em pipelines CI/CD',
  ],
}
