import type { PersonalProject } from '@/types/portfolio'

export const personalProjects: PersonalProject[] = [
  {
    name: 'Em breve',
    description:
      'Espaço reservado para projetos pessoais open source, ferramentas e experimentos técnicos.',
    technologies: ['Node.js', 'React', 'Cloud'],
    github: null,
    demo: null,
    differentials: ['Arquitetura limpa', 'Código aberto', 'Documentação completa'],
    placeholder: true,
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
