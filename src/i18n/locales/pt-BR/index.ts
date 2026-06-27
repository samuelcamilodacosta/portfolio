import { companyInfo, projects, expertiseAreas, qualityInfo } from './experience'
import { timelineEvents } from './timeline'
import { skillCategories } from './skills'
import { personalProjects } from './personalProjects'
import type { Translation } from '@/types/locale'

const ptBR = {
  meta: {
    pageTitles: {
      '/': 'Samuel Costa | Software Engineer',
      '/sobre': 'Sobre | Samuel Costa',
      '/tecnologias': 'Tecnologias | Samuel Costa',
      '/experiencia': 'Experiência | Samuel Costa',
      '/projetos': 'Projetos | Samuel Costa',
      '/contato': 'Contato | Samuel Costa',
    },
    pageDescriptions: {
      '/':
        'Portfólio de Samuel Costa — Desenvolvedor de Software especializado em Back-End, Microsserviços, Cloud Computing e aplicações Web e Mobile.',
      '/sobre':
        'Minha jornada na tecnologia começou no Bootcamp Back-End da New Rizon (2021), onde fui selecionado para integrar o time e contratado em 2022.',
      '/tecnologias': 'Stack completa utilizada em projetos reais de produção',
      '/experiencia': 'Atuação em projetos reais de produção',
      '/projetos':
        'Projetos open source e experimentos técnicos desenvolvidos por conta própria',
      '/contato':
        'Estou aberto a conversas sobre oportunidades em back-end, arquitetura de microsserviços, cloud computing e desenvolvimento full cycle. Entre em contato por qualquer um dos canais abaixo.',
    },
    notFound: 'Página não encontrada | Samuel Costa',
    notFoundDescription: 'Página não encontrada.',
  },
  nav: [
    { label: 'Início', to: '/' },
    { label: 'Sobre', to: '/sobre' },
    { label: 'Tecnologias', to: '/tecnologias' },
    { label: 'Experiência', to: '/experiencia' },
    { label: 'Projetos', to: '/projetos' },
    { label: 'Contato', to: '/contato' },
  ],
  header: {
    navAria: 'Navegação principal',
    openMenu: 'Abrir menu',
    closeMenu: 'Fechar menu',
  },
  language: {
    switchAria: 'Alternar idioma',
    pt: 'PT',
    en: 'EN',
  },
  theme: {
    lightAria: 'Ativar tema claro',
    darkAria: 'Ativar tema escuro',
    lightTitle: 'Tema claro',
    darkTitle: 'Tema escuro',
  },
  common: {
    showDetails: 'Ver detalhes',
    showLess: 'Ver menos',
    technologies: 'Tecnologias',
    deliveries: 'Principais entregas',
    results: 'Resultados alcançados',
    highlights: 'Destaques técnicos',
    differentials: 'Diferenciais',
    github: 'GitHub',
    demo: 'Demo',
    inDevelopment: 'Em desenvolvimento',
  },
  hero: {
    eyebrow: 'Desenvolvedor de Software · Backend & Cloud',
    subtitle: 'Software Engineer · Backend Specialist · Cloud & Microservices',
    description:
      'Experiência em microsserviços, APIs escaláveis, aplicações web e mobile, integrações corporativas, cloud computing e modernização de sistemas.',
    techStack: {
      title: 'Stack principal',
      groups: [
        { label: 'Backend', items: ['Node.js', 'NestJS', 'Java', 'Spring Boot'] },
        { label: 'Cloud', items: ['AWS', 'Azure', 'Firebase'] },
        { label: 'Arquitetura', items: ['Microsserviços', 'REST APIs', 'BFF'] },
        { label: 'Web & Mobile', items: ['Angular', 'React', 'Next.js', 'Vite', 'React Native', 'Ionic'] },
      ],
    },
    education: {
      title: 'Formação',
      items: [
        {
          degree: 'Tecnólogo em Análise e Desenvolvimento de Sistemas',
          institution: 'Centro Universitário UniFatecie',
          period: '2022 – 2024',
        },
        {
          degree: 'Técnico em Informática',
          institution: 'Instituto Federal Goiano - Campus Urutaí',
          period: '2012 – 2014',
        },
      ],
    },
    focusAreas: [
      { value: 'Backend', label: 'Node.js & Java' },
      { value: 'Cloud', label: 'AWS · Azure' },
      { value: 'Arquitetura', label: 'Microsserviços' },
    ],
    ctaExperience: 'Ver Experiência',
    ctaProjects: 'Ver Projetos',
    imageAlt: 'Samuel Costa - Software Engineer',
  },
  about: {
    label: 'Sobre',
    title: 'Sobre Mim',
    paragraphs: [
      'Minha jornada na tecnologia começou no Bootcamp Back-End da New Rizon (2021), onde fui selecionado para integrar o time e contratado em 2022.',
      'Desde então atuei no desenvolvimento de APIs REST, microsserviços corporativos — autenticação, pagamentos e e-mails —, camadas BFF e integrações entre sistemas legados e aplicações modernas. Trabalhei com Node.js, NestJS, Express, Java e Spring Boot em projetos web com Angular, mobile com React Native e Ionic, e soluções de processamento de dados com Python, ETL e dashboards analíticos, em ambientes cloud na AWS e Azure.',
      'Participei da construção de plataformas em produção para os setores de educação, cultura, gestão condominial, meio ambiente e varejo, com atuação em migração de infraestrutura (AWS → Azure), pipelines CI/CD, observabilidade, otimização de performance e testes automatizados com cobertura acima de 80%. Também compartilho conhecimento com profissionais em início de carreira, em atividade complementar ao trabalho nos projetos.',
    ],
    highlights: [
      { value: '2021', label: 'Bootcamp Back-End' },
      { value: 'Back-End', label: 'Especialização principal' },
      { value: 'Front-End', label: 'Angular & React' },
      { value: 'Mobile', label: 'React Native & Ionic' },
      { value: 'Full Cycle', label: 'Arquitetura ao deploy' },
    ],
  },
  skills: {
    label: 'Stack',
    title: 'Tecnologias',
    subtitle: 'Stack completa utilizada em projetos reais de produção',
    categories: skillCategories,
  },
  experience: {
    label: 'Experiência',
    title: 'Experiência Profissional',
    subtitle: 'Atuação em projetos reais de produção',
    projectsTitle: 'Projetos em que trabalhei',
    companyInfo,
    projects,
    qualityInfo,
    expertiseAreas,
    expertiseTitle: 'Diferenciais',
  },
  timeline: {
    label: 'Trajetória',
    title: 'Timeline Profissional',
    subtitle: 'Evolução da carreira desde o Bootcamp até projetos de grande escala',
    events: timelineEvents,
  },
  projects: {
    label: 'Portfólio',
    title: 'Projetos Pessoais',
    subtitle: 'Projetos open source e experimentos técnicos desenvolvidos por conta própria',
    items: personalProjects,
  },
  contact: {
    label: 'Contato',
    title: 'Vamos conversar?',
    subtitle: 'Disponível para oportunidades, projetos e networking profissional',
    message:
      'Estou aberto a conversas sobre oportunidades em back-end, arquitetura de microsserviços, cloud computing e desenvolvimento full cycle. Entre em contato por qualquer um dos canais abaixo.',
    links: {
      email: 'E-mail',
      linkedin: 'LinkedIn',
      github: 'GitHub',
    },
  },
  footer: {
    tagline: 'Software Engineer | Backend Specialist | Cloud & Microservices',
  },
  notFound: {
    message: 'Página não encontrada.',
    backHome: 'Voltar ao início',
  },
} satisfies Translation

export default ptBR
