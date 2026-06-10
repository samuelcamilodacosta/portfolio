# Portfólio — Samuel Costa

Site pessoal de apresentação profissional desenvolvido com **React**, **TypeScript** e **Vite**. Exibe experiência, tecnologias, projetos e formas de contato, com suporte a **português (BR)** e **inglês**.

## Funcionalidades

- Páginas: Início, Sobre, Tecnologias, Experiência, Projetos e Contato
- Alternância de idioma **PT | EN** (preferência salva no navegador)
- Tema claro e escuro (respeita preferência do sistema na primeira visita)
- Layout responsivo com animações de entrada ao scroll
- Rotas com lazy loading para melhor performance
- TypeScript com verificação de tipos no build

## Stack

| Camada | Tecnologia |
|--------|------------|
| UI | React 19 |
| Linguagem | TypeScript 6 |
| Build | Vite 8 |
| Roteamento | React Router 7 |
| Estilos | CSS Modules + variáveis globais |
| Lint | ESLint |

## Pré-requisitos

- [Node.js](https://nodejs.org/) **18+** (recomendado: 20 LTS ou superior)
- npm (incluído com o Node.js)

## Inicialização

### 1. Clonar o repositório

```bash
git clone <url-do-repositorio>
cd portfolio
```

### 2. Instalar dependências

```bash
npm install
```

### 3. Rodar em desenvolvimento

```bash
npm run dev
```

O Vite exibirá a URL local (geralmente `http://localhost:5173`). A página recarrega automaticamente ao salvar alterações.

### 4. Build de produção

```bash
npm run build
```

Gera a pasta `dist/` com os arquivos estáticos prontos para deploy.

### 5. Preview do build

```bash
npm run preview
```

Serve localmente o conteúdo de `dist/` para validar o build antes de publicar.

## Scripts disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Servidor de desenvolvimento com HMR |
| `npm run build` | Typecheck (`tsc`) + build de produção |
| `npm run typecheck` | Verificação de tipos TypeScript |
| `npm run lint` | Análise estática com ESLint |
| `npm run preview` | Preview local do build de produção |

## Rotas

| Rota | Página | Conteúdo principal |
|------|--------|-------------------|
| `/` | Início | Hero, stack, formação, CTAs |
| `/sobre` | Sobre | Biografia + timeline profissional |
| `/tecnologias` | Tecnologias | Categorias de skills |
| `/experiencia` | Experiência | New Rizon, projetos, métricas, diferenciais |
| `/projetos` | Projetos | Projetos pessoais |
| `/contato` | Contato | E-mail, LinkedIn, GitHub |
| `*` | 404 | Página não encontrada |

As URLs permanecem em português independentemente do idioma selecionado; apenas os textos da interface mudam.

## Estrutura do projeto

```
portfolio/
├── public/                 # arquivos estáticos (favicon, etc.)
├── src/
│   ├── assets/             # imagens (ex.: profile.png)
│   ├── content/
│   │   └── shared/         # dados que não variam por idioma
│   │       └── contact.ts  # e-mail, LinkedIn, GitHub
│   ├── i18n/
│   │   ├── index.ts        # registro de locales e getLocaleData()
│   │   └── locales/
│   │       ├── pt-BR/      # textos e conteúdo em português
│   │       └── en/         # textos e conteúdo em inglês
│   ├── types/              # interfaces TypeScript
│   ├── context/            # ThemeContext, LocaleContext
│   ├── components/         # seções da UI e componentes reutilizáveis
│   ├── pages/              # entrada de cada rota
│   ├── layouts/            # header, footer, shell da aplicação
│   ├── hooks/
│   ├── styles/             # globals.css, variables.css
│   ├── App.tsx             # rotas e providers
│   └── main.tsx            # ponto de entrada React
├── index.html
├── vite.config.ts
├── tsconfig.json
└── package.json
```

### Conteúdo por idioma

Cada pasta em `src/i18n/locales/{pt-BR|en}/` contém:

| Arquivo | Conteúdo |
|---------|----------|
| `index.ts` | Navegação, hero, meta, textos de UI, about, contact labels |
| `experience.ts` | Experiência profissional, projetos, métricas, diferenciais |
| `skills.ts` | Categorias de tecnologias |
| `timeline.ts` | Linha do tempo da carreira |
| `personalProjects.ts` | Projetos pessoais |

## Guia de edição

| Quero alterar… | Onde editar |
|----------------|-------------|
| Menu, hero, botões, meta (PT) | `src/i18n/locales/pt-BR/index.ts` |
| Menu, hero, botões, meta (EN) | `src/i18n/locales/en/index.ts` |
| Experiência e projetos (PT) | `src/i18n/locales/pt-BR/experience.ts` |
| Experiência e projetos (EN) | `src/i18n/locales/en/experience.ts` |
| Skills / timeline / projetos pessoais | `src/i18n/locales/{pt-BR\|en}/` |
| E-mail, LinkedIn, GitHub | `src/content/shared/contact.ts` |
| Foto de perfil | `src/assets/profile.png` |
| Estilo de uma seção | `src/components/{Seção}/*.module.css` |
| Variáveis de cor e tema | `src/styles/variables.css` |
| Nova rota | `src/pages/`, `src/App.tsx` e locale `meta.pageTitles` |
| Contratos de dados | `src/types/` |

### Imports com alias

O projeto usa `@/` como atalho para `src/`:

```ts
import type { Translation } from '@/types/locale'
import { contactInfo } from '@/content/shared/contact'
```

Configurado em `vite.config.ts` e `tsconfig.json`.

## Internacionalização

- Idioma padrão: **pt-BR**
- Alternância pelo botão **PT | EN** no header
- Preferência persistida em `localStorage` (chave `locale`)
- Cada arquivo de locale é validado em compile time com `satisfies Translation`

## Tema

- Modos: **claro** e **escuro**
- Preferência salva em `localStorage` (chave `theme`)
- Na primeira visita, segue `prefers-color-scheme` do sistema operacional

## Deploy

Após `npm run build`, publique o conteúdo da pasta `dist/` em qualquer hospedagem de site estático:

- Vercel, Netlify, GitHub Pages, Cloudflare Pages, Azure Static Web Apps, etc.

Para SPAs com React Router, configure o servidor para redirecionar rotas desconhecidas para `index.html` (fallback), evitando 404 ao acessar `/sobre` ou `/experiencia` diretamente.

Exemplo para Netlify (`public/_redirects` ou arquivo na raiz do deploy):

```
/*    /index.html   200
```

## Desenvolvimento

### Adicionar um novo idioma

1. Criar pasta `src/i18n/locales/{codigo}/` espelhando `pt-BR/` ou `en/`
2. Registrar em `src/i18n/index.ts` e em `src/types/locale.ts` (`LocaleCode`)
3. Atualizar `LanguageToggle` e script de locale em `index.html` se necessário

### Adicionar uma nova seção

1. Criar componente em `src/components/`
2. Criar página em `src/pages/`
3. Registrar rota em `src/App.tsx`
4. Adicionar textos nos arquivos `index.ts` de cada locale
5. Adicionar item no array `nav` e em `meta.pageTitles`

## Licença

Projeto pessoal — Samuel Costa. Uso e distribuição conforme definido pelo autor do repositório.
