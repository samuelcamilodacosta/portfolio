**Português** | [English](./README.en.md)

# Portfólio — Samuel Costa

Site pessoal de apresentação profissional desenvolvido com **React**, **TypeScript** e **Vite**. Exibe experiência, tecnologias, projetos e formas de contato, com suporte a **português (BR)** e **inglês**.

## Funcionalidades

- Páginas: Início, Sobre, Tecnologias, Experiência, Projetos e Contato
- Alternância de idioma **PT | EN** (preferência salva no navegador)
- Tema claro e escuro (respeita preferência do sistema na primeira visita)
- Layout responsivo com menu mobile e animações de entrada ao scroll
- Cards de experiência com detalhes expansíveis (entregas, resultados, destaques)
- Rotas com lazy loading para melhor performance
- SEO: meta tags, Open Graph, Twitter Cards e JSON-LD em `index.html`
- TypeScript com verificação de tipos no build
- Suite de testes com **Vitest** e **Testing Library** (cobertura mínima de 100%)

## Stack

| Camada | Tecnologia |
|--------|------------|
| UI | React 19 |
| Linguagem | TypeScript 6 |
| Build | Vite 8 |
| Roteamento | React Router 7 |
| Estilos | CSS Modules + variáveis globais |
| Testes | Vitest 4 + Testing Library + jsdom |
| Lint | ESLint 10 (flat config) |

## Pré-requisitos

- [Node.js](https://nodejs.org/) **18+** (recomendado: 20 LTS ou superior)
- npm (incluído com o Node.js)

## Inicialização

### 1. Clonar o repositório

```bash
git clone https://github.com/samuelcamilodacosta/portfolio.git
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
| `npm run build` | Typecheck (`tsc -b`) + build de produção |
| `npm run typecheck` | Verificação de tipos TypeScript |
| `npm run lint` | Análise estática com ESLint |
| `npm run preview` | Preview local do build de produção |
| `npm run test` | Executa a suíte de testes uma vez |
| `npm run test:watch` | Executa testes em modo watch |
| `npm run test:coverage` | Executa testes com relatório de cobertura |

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

As URLs permanecem em português independentemente do idioma selecionado; apenas os textos da interface mudam. O título da aba é atualizado dinamicamente conforme a rota e o idioma (`Layout` + `meta.pageTitles`).

## Estrutura do projeto

```
portfolio/
├── public/
│   ├── favicon.svg
│   ├── icons.svg
│   └── _redirects          # fallback SPA para Netlify
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
│   ├── types/              # locale.ts, portfolio.ts, theme.ts, ui.ts
│   ├── context/            # ThemeContext, LocaleContext
│   ├── components/
│   │   ├── ui/             # Button, SectionTitle
│   │   ├── About/
│   │   ├── Contact/
│   │   ├── Experience/
│   │   ├── Footer/
│   │   ├── Header/
│   │   ├── Hero/
│   │   ├── LanguageToggle/
│   │   ├── Projects/
│   │   ├── Skills/
│   │   ├── ThemeToggle/
│   │   └── Timeline/
│   ├── pages/              # entrada de cada rota
│   ├── layouts/            # header, footer, shell da aplicação
│   ├── hooks/              # useIntersectionObserver
│   ├── test/
│   │   ├── setup.ts        # mocks globais (IntersectionObserver, matchMedia)
│   │   └── test-utils.tsx  # renderWithProviders()
│   ├── styles/             # globals.css, variables.css
│   ├── App.tsx             # rotas e providers
│   └── main.tsx            # ponto de entrada React
├── index.html              # SEO, tema/locale inline (evita flash)
├── vite.config.ts          # alias @/, config Vitest
├── eslint.config.js
├── tsconfig.json
└── package.json
```

Os arquivos `*.test.{ts,tsx}` ficam junto ao código que testam (componentes, contextos, hooks, páginas e i18n).

### Conteúdo por idioma

Cada pasta em `src/i18n/locales/{pt-BR|en}/` contém:

| Arquivo | Conteúdo |
|---------|----------|
| `index.ts` | Navegação, hero, meta, textos de UI, about, contact, footer, common |
| `experience.ts` | Experiência profissional, projetos, métricas, diferenciais |
| `skills.ts` | Categorias de tecnologias |
| `timeline.ts` | Linha do tempo da carreira |
| `personalProjects.ts` | Projetos pessoais |

O `index.ts` de cada locale importa os demais arquivos e monta o objeto `Translation` validado com `satisfies Translation`.

## Guia de edição

| Quero alterar… | Onde editar |
|----------------|-------------|
| Menu, hero, botões, meta (PT) | `src/i18n/locales/pt-BR/index.ts` |
| Menu, hero, botões, meta (EN) | `src/i18n/locales/en/index.ts` |
| Textos compartilhados da UI (PT/EN) | `common` em cada `index.ts` |
| Experiência e projetos (PT) | `src/i18n/locales/pt-BR/experience.ts` |
| Experiência e projetos (EN) | `src/i18n/locales/en/experience.ts` |
| Skills / timeline / projetos pessoais | `src/i18n/locales/{pt-BR\|en}/` |
| E-mail, LinkedIn, GitHub | `src/content/shared/contact.ts` |
| Foto de perfil | `src/assets/profile.png` |
| Meta tags e SEO estático | `index.html` |
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
- Script inline em `index.html` aplica `lang` no `<html>` antes do React carregar
- Cada arquivo de locale é validado em compile time com `satisfies Translation`

## Tema

- Modos: **claro** e **escuro**
- Preferência salva em `localStorage` (chave `theme`)
- Na primeira visita, segue `prefers-color-scheme` do sistema operacional
- Script inline em `index.html` aplica `data-theme` antes do React carregar (sem flash)

## Testes

A configuração de testes fica em `vite.config.ts` (ambiente **jsdom**, setup em `src/test/setup.ts`).

```bash
npm run test           # execução única
npm run test:watch     # modo interativo
npm run test:coverage  # relatório de cobertura
```

Para renderizar componentes com roteador, tema e locale nos testes, use `renderWithProviders` de `src/test/test-utils.tsx`:

```tsx
import { renderWithProviders } from '@/test/test-utils'

renderWithProviders(<Header />, { route: '/sobre', locale: 'en' })
```

O setup global inclui mocks de `IntersectionObserver`, `matchMedia` e `window.scrollTo`. Use `triggerAllIntersections()` (exportado de `setup.ts`) para simular elementos entrando na viewport.

A cobertura exige **100%** em lines, functions, branches e statements (exceto arquivos de locale, tipos, `main.tsx` e utilitários de teste).

## Deploy

Após `npm run build`, publique o conteúdo da pasta `dist/` em qualquer hospedagem de site estático:

- Vercel, Netlify, GitHub Pages, Cloudflare Pages, Azure Static Web Apps, etc.

Para SPAs com React Router, configure o servidor para redirecionar rotas desconhecidas para `index.html` (fallback), evitando 404 ao acessar `/sobre` ou `/experiencia` diretamente.

O projeto já inclui `public/_redirects` para Netlify:

```
/*    /index.html   200
```

Em outras plataformas, configure o equivalente (ex.: `_redirects` no Cloudflare Pages, `vercel.json` rewrites na Vercel).

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
6. Adicionar testes co-localizados (`*.test.tsx`)

### Adicionar ou alterar testes

1. Colocar o arquivo `*.test.{ts,tsx}` ao lado do módulo testado
2. Usar `renderWithProviders` quando o componente depende de contexto ou rota
3. Rodar `npm run test:coverage` para validar os thresholds de cobertura

## Licença

Projeto pessoal — Samuel Costa. Uso e distribuição conforme definido pelo autor do repositório.