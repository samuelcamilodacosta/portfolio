import type {
  CompanyInfo,
  ExperienceProject,
  ExpertiseArea,
  QualityInfo,
} from '@/types/portfolio'

export const companyInfo: CompanyInfo = {
  name: 'New Rizon',
  role: 'Software Developer',
  period: 'January 2022 – Present',
  description:
    'Selected and hired through the New Rizon Back-End Bootcamp (2021), I evolved to work on corporate microservices, scalable APIs, integrations, and cloud environments (AWS and Azure). I contributed to building reusable services — authentication, payments, and email — and platforms across culture, condominium management, mobile, data processing, environmental, and education segments, from solution design to production deployment, including CI/CD, performance, and tests with over 80% coverage. In parallel with project deliveries, I mentored developers in the company Bootcamp (2023–2025), supporting junior and beginner Back-End developers with a focus on best practices, code quality, and technical growth.',
}

export const projects: ExperienceProject[] = [
  {
    id: 'evoe',
    name: 'Evoé Platform (Inhotim Museum)',
    context:
      'Development of the Evoé platform, the company responsible for the digital management of the Inhotim Museum.',
    technologies: ['Node.js', 'Express', 'MongoDB', 'Redis', 'Swagger', 'TSDoc', 'Node Cron', 'AWS'],
    deliveries: [
      'Microservice for account and project management',
      'REST APIs documented with Swagger and TSDoc',
      'Robust validations with Express Validator',
      'Automated routines for email delivery and report generation',
    ],
    results: [
      'Modular architecture with independent microservices in production',
      'Documented and standardized APIs for service integration',
      'Reliable automations for communication and reporting',
    ],
    highlights: [
      'Separation of critical domains into microservices',
      'Technical documentation with Swagger and TSDoc',
      'Redis caching and AWS service integration',
    ],
  },
  {
    id: 'email-platform',
    name: 'Email Microservice',
    context:
      'Design and development of an email delivery microservice reused across multiple company projects.',
    technologies: ['Node.js', 'Express', 'Redis', 'SMTP', 'Node Cron', 'Microservices'],
    deliveries: [
      'Microservice with support for multiple SMTP providers',
      'Abstraction layer to switch providers without impacting consumers',
      'Caching with Redis',
      'Automated scheduling for campaigns and notifications',
    ],
    results: [
      'Microservice reused across several company projects',
      'Flexibility to switch SMTP providers without rework',
      'Automated campaigns and notifications with reliability',
    ],
    highlights: [
      'Decoupled and reusable microservice architecture',
      'SMTP provider abstraction for seamless switching',
      'Redis caching and Node Cron scheduling',
    ],
  },
  {
    id: 'auth-service',
    name: 'Authentication Microservice',
    context:
      'Creation of an authentication microservice reused by multiple company applications, with role-based access control.',
    technologies: ['Node.js', 'Express', 'JWT Authentication', 'Middlewares', 'Microservices', 'REST APIs'],
    deliveries: [
      'Authentication and authorization microservice development',
      'Middleware for role-based access management',
      'Granular permission control tailored to each application',
      'Standardized integration for internal consumers',
    ],
    results: [
      'Centralized and reusable authentication across projects',
      'Flexible role-based permission management',
      'Reduced duplication of authentication logic',
    ],
    highlights: [
      'Custom middleware for role-based control',
      'Decoupled and reusable architecture',
      'Standardized authentication across microservices',
    ],
  },
  {
    id: 'payment-service',
    name: 'Payments Microservice',
    context:
      'Creation of a payments microservice supporting multiple providers, allowing custom integrations or a default provider.',
    technologies: ['Node.js', 'Express', 'Ebanx', 'Pagar.me', 'Microservices', 'REST APIs'],
    deliveries: [
      'Payments microservice development',
      'Abstraction layer for multiple payment API integrations',
      'Default provider option or custom integrations per project',
      'Integration with Ebanx and Pagar.me',
    ],
    results: [
      'Centralized and reusable payments across applications',
      'Flexibility to switch or add providers without impacting consumers',
      'Production integrations with payment gateways',
    ],
    highlights: [
      'Payment provider abstraction for decoupling',
      'Integration with Ebanx and Pagar.me',
      'Architecture ready for new gateways',
    ],
  },
  {
    id: 'framework',
    name: 'Microservices Base Framework',
    context:
      'Creation of the corporate template used by New Rizon to bootstrap new Back-End projects.',
    technologies: ['Node.js', 'Microservices', 'Authentication', 'Swagger', 'Automated Testing'],
    deliveries: [
      'Standard architecture definition for new services',
      'Reusable module structuring',
      'Standardization of authentication, documentation, validations, and tests',
      'Best practices for scalability and service maintainability',
    ],
    results: [
      'Faster creation of new microservices',
      'Technical standardization across teams and projects',
      'Company evolution toward a reusable products model',
    ],
    highlights: [
      'Corporate template adopted across multiple projects',
      'Direct contribution to microservices maturity',
      'Solid foundation for authentication, tests, and documentation',
    ],
  },
  {
    id: 'ergonomia',
    name: 'Ergonomics & Workplace Safety Management',
    context:
      'Development of a corporate MVP focused on ergonomic analysis and occupational risk management (2022–2023).',
    technologies: ['Node.js', 'Express', 'Angular', 'ECharts', 'MongoDB', 'Report Generation'],
    deliveries: [
      'Back-End and Front-End MVP development',
      'User, company, and branch management',
      'Occupational risk control',
      'Absence and leave management',
      'Bulk data import via spreadsheets',
      'PDF, XLSX, and CSV report export',
      'Analytical dashboards',
    ],
    results: [
      'MVP validated with corporate stakeholders',
      'Risk visibility and indicators via dashboards',
      'Reduced manual workplace compliance processes',
    ],
    highlights: [
      'Full-stack work with Node.js, Express, and Angular',
      'Analytical visualizations with ECharts',
      'Import and export in multiple formats',
    ],
  },
  {
    id: 'hubert',
    name: 'Hubert – Condominium Management',
    context:
      'Front-End development of the Hubert platform, a system for condominium administration and management.',
    technologies: ['Angular', 'TypeScript', 'Angular Material'],
    deliveries: [
      'New feature development',
      'Interface fixes and improvements',
      'REST API integration',
      'User experience evolution',
    ],
    results: [
      'Modern and functional interface for condominium management',
      'Optimized flows with real-time integrations',
      'Continuous user experience improvement',
    ],
    highlights: [
      'Front-end development with Angular and Angular Material',
      'Efficient REST API integration',
      'Focus on usability for condominium administrators',
    ],
  },
  {
    id: 'granado',
    name: 'Granado App',
    context:
      'Modernization of the Granado mobile ecosystem, replacing a deprecated legacy application (2023).',
    technologies: ['Ionic', 'TypeScript', 'N8N', 'REST APIs', 'Node.js'],
    deliveries: [
      'New mobile application development',
      'ERP and app integrations',
      'Flow orchestration and integrations with N8N',
      'BFF layer for data adaptation between systems',
    ],
    results: [
      'Legacy application replaced with a modern solution',
      'Smooth integration between mobile, BFF, and ERP',
      'Reliable orchestration of corporate flows',
    ],
    highlights: [
      'BFF layer for data adaptation between systems',
      'Integration orchestration with N8N',
      'Mobile development with Ionic and TypeScript',
    ],
  },
  {
    id: 'data-platform',
    name: 'Data Processing & Visualization',
    context:
      'Lead Back-End responsibility for the solution, with participation in Front-End implementations (2023–2024).',
    technologies: ['Node.js', 'MongoDB', 'Python', 'Angular', 'Angular Material', 'AWS S3'],
    deliveries: [
      'Processing of large data volumes from spreadsheets',
      'XLSX and CSV import system',
      'Analytical dashboards and visual indicators',
      'Notification system',
      'Asynchronous processing pipeline',
      'Cloud storage and processing queue integration',
    ],
    results: [
      'Architecture designed for high data volume',
      'Automated processing with Python',
      'Data converted into dashboards and management reports',
    ],
    highlights: [
      'Asynchronous pipeline with processing queues',
      'AWS S3 integration for cloud storage',
      'Back-end and front-end work with Angular and Python',
    ],
  },
  {
    id: 'eaterra',
    name: 'E-Aterra',
    context:
      'Maintenance and evolution of the E-Aterra platform through a full technology modernization process (2023–2024).',
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
      'Full infrastructure migration from AWS to Azure',
      'Automated CI/CD pipeline creation',
      'Database migration and cleanup',
      'Migrations to fix inconsistencies',
      'Query optimization and performance improvements',
      'Pagination and report improvements',
      'Email notification and campaign automation',
    ],
    results: [
      'Significant reduction of performance bottlenecks',
      'Greater operational stability',
      'Fully automated deployment process',
    ],
    highlights: [
      'Planning and execution of AWS → Azure cloud migration',
      'MariaDB cleanup and evolution with Hibernate',
      'Full-stack work with Angular, Ionic, and Spring Boot',
    ],
  },
  {
    id: 'ionica',
    name: 'Iônica App (FTD Publisher)',
    context:
      'Evolution of the Iônica app, an educational platform by FTD Publisher (2024 – Present).',
    technologies: [
      'React Native',
      'NestJS',
      'Azure DevOps',
      'Firebase Analytics',
      'Firebase Hosting',
      'Datadog',
    ],
    deliveries: [
      'Mobile features in React Native',
      'Deploy pipeline creation and maintenance',
      'Automated publishing with Azure and Firebase',
      'Monitoring and observability with Datadog',
      'Analytics service integration',
      'BFF integrations',
    ],
    results: [
      'Educational app in production with frequent and stable releases',
      'End-to-end automated and monitored deployment',
      'Operational visibility with integrated analytics and observability',
    ],
    highlights: [
      'Feature evolution in React Native',
      'BFF with NestJS for mobile and internal service integrations',
      'Azure DevOps pipelines, Firebase publishing, and Datadog monitoring',
    ],
  },
]

export const expertiseAreas: ExpertiseArea[] = [
  {
    title: 'Architecture',
    description:
      'Microservices, REST APIs, BFF layers, queue systems, and distributed architectures.',
    icon: 'architecture',
  },
  {
    title: 'Quality',
    description:
      'Unit, integration, and end-to-end tests with Jest, JUnit, Jasmine, and Cypress, plus SonarQube in CI/CD pipelines.',
    icon: 'quality',
  },
  {
    title: 'Cloud',
    description:
      'Experience with AWS (S3 and cloud services), Azure, Firebase, and automated deploy pipelines.',
    icon: 'cloud',
  },
  {
    title: 'Performance',
    description:
      'Query, report, and high-volume data system optimization.',
    icon: 'performance',
  },
  {
    title: 'DevOps',
    description: 'Automated pipeline creation and deployment processes with Azure DevOps.',
    icon: 'devops',
  },
]

export const qualityInfo: QualityInfo = {
  title: 'Software Quality',
  description:
    'Experience implementing and maintaining automated tests in backend and distributed systems, ensuring code coverage, regression prevention, and production stability. Skilled in unit, integration, and end-to-end testing with Jest, JUnit, Jasmine, and Cypress, plus SonarQube for quality analysis, coverage, and code metrics in CI/CD pipelines.',
  practices: [
    'Unit tests',
    'Integration tests',
    'End-to-end tests',
    'SonarQube in CI/CD pipelines',
  ],
}
