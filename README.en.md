[Português](./README.md) | **English**

# Portfolio — Samuel Costa

Personal professional showcase site built with **React**, **TypeScript**, and **Vite**. Displays experience, technologies, projects, and contact options, with support for **Portuguese (BR)** and **English**.

## Features

- Pages: Home, About, Technologies, Experience, Projects, and Contact
- **PT | EN** language toggle (preference saved in the browser)
- Light and dark theme (respects system preference on first visit)
- Responsive layout with mobile menu and scroll-triggered entrance animations
- Expandable experience cards (deliverables, results, highlights)
- Lazy-loaded routes for better performance
- SEO: meta tags, Open Graph, Twitter Cards, and JSON-LD in `index.html`
- TypeScript with type checking on build
- Test suite with **Vitest** and **Testing Library** (minimum 100% coverage)

## Stack

| Layer | Technology |
|-------|------------|
| UI | React 19 |
| Language | TypeScript 6 |
| Build | Vite 8 |
| Routing | React Router 7 |
| Styles | CSS Modules + global variables |
| Testing | Vitest 4 + Testing Library + jsdom |
| Lint | ESLint 10 (flat config) |

## Prerequisites

- [Node.js](https://nodejs.org/) **18+** (recommended: 20 LTS or newer)
- npm (included with Node.js)

## Getting started

### 1. Clone the repository

```bash
git clone https://github.com/samuelcamilodacosta/portfolio.git
cd portfolio
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run in development

```bash
npm run dev
```

Vite will display the local URL (usually `http://localhost:5173`). The page reloads automatically when you save changes.

### 4. Production build

```bash
npm run build
```

Generates the `dist/` folder with static files ready for deployment.

### 5. Preview the build

```bash
npm run preview
```

Serves the contents of `dist/` locally to validate the build before publishing.

## Available scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Development server with HMR |
| `npm run build` | Typecheck (`tsc -b`) + production build |
| `npm run typecheck` | TypeScript type checking |
| `npm run lint` | Static analysis with ESLint |
| `npm run preview` | Local preview of the production build |
| `npm run test` | Run the test suite once |
| `npm run test:watch` | Run tests in watch mode |
| `npm run test:coverage` | Run tests with coverage report |

## Routes

| Route | Page | Main content |
|-------|------|--------------|
| `/` | Home | Hero, stack, education, CTAs |
| `/sobre` | About | Biography + professional timeline |
| `/tecnologias` | Technologies | Skill categories |
| `/experiencia` | Experience | New Rizon, projects, metrics, differentiators |
| `/projetos` | Projects | Personal projects |
| `/contato` | Contact | Email, LinkedIn, GitHub |
| `*` | 404 | Page not found |

URLs stay in Portuguese regardless of the selected language; only UI text changes. The tab title is updated dynamically based on the route and language (`Layout` + `meta.pageTitles`).

## Project structure

```
portfolio/
├── public/
│   ├── favicon.svg
│   ├── icons.svg
│   └── _redirects          # SPA fallback for Netlify
├── src/
│   ├── assets/             # images (e.g. profile.png)
│   ├── content/
│   │   └── shared/         # data that does not vary by language
│   │       └── contact.ts  # email, LinkedIn, GitHub
│   ├── i18n/
│   │   ├── index.ts        # locale registry and getLocaleData()
│   │   └── locales/
│   │       ├── pt-BR/      # Portuguese text and content
│   │       └── en/         # English text and content
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
│   ├── pages/              # entry point for each route
│   ├── layouts/            # header, footer, app shell
│   ├── hooks/              # useIntersectionObserver
│   ├── test/
│   │   ├── setup.ts        # global mocks (IntersectionObserver, matchMedia)
│   │   └── test-utils.tsx  # renderWithProviders()
│   ├── styles/             # globals.css, variables.css
│   ├── App.tsx             # routes and providers
│   └── main.tsx            # React entry point
├── index.html              # SEO, inline theme/locale (prevents flash)
├── vite.config.ts          # @/ alias, Vitest config
├── eslint.config.js
├── tsconfig.json
└── package.json
```

`*.test.{ts,tsx}` files live next to the code they test (components, contexts, hooks, pages, and i18n).

### Content by language

Each folder in `src/i18n/locales/{pt-BR|en}/` contains:

| File | Content |
|------|---------|
| `index.ts` | Navigation, hero, meta, UI text, about, contact, footer, common |
| `experience.ts` | Professional experience, projects, metrics, differentiators |
| `skills.ts` | Technology categories |
| `timeline.ts` | Career timeline |
| `personalProjects.ts` | Personal projects |

Each locale's `index.ts` imports the other files and builds the `Translation` object validated with `satisfies Translation`.

## Editing guide

| I want to change… | Where to edit |
|-------------------|---------------|
| Menu, hero, buttons, meta (PT) | `src/i18n/locales/pt-BR/index.ts` |
| Menu, hero, buttons, meta (EN) | `src/i18n/locales/en/index.ts` |
| Shared UI strings (PT/EN) | `common` in each `index.ts` |
| Experience and projects (PT) | `src/i18n/locales/pt-BR/experience.ts` |
| Experience and projects (EN) | `src/i18n/locales/en/experience.ts` |
| Skills / timeline / personal projects | `src/i18n/locales/{pt-BR\|en}/` |
| Email, LinkedIn, GitHub | `src/content/shared/contact.ts` |
| Profile photo | `src/assets/profile.png` |
| Static meta tags and SEO | `index.html` |
| Section styling | `src/components/{Section}/*.module.css` |
| Color and theme variables | `src/styles/variables.css` |
| New route | `src/pages/`, `src/App.tsx`, and locale `meta.pageTitles` |
| Data contracts | `src/types/` |

### Alias imports

The project uses `@/` as a shortcut for `src/`:

```ts
import type { Translation } from '@/types/locale'
import { contactInfo } from '@/content/shared/contact'
```

Configured in `vite.config.ts` and `tsconfig.json`.

## Internationalization

- Default language: **pt-BR**
- Toggle via the **PT | EN** button in the header
- Preference persisted in `localStorage` (key: `locale`)
- Inline script in `index.html` sets `lang` on `<html>` before React loads
- Each locale file is validated at compile time with `satisfies Translation`

## Theme

- Modes: **light** and **dark**
- Preference saved in `localStorage` (key: `theme`)
- On first visit, follows the OS `prefers-color-scheme`
- Inline script in `index.html` applies `data-theme` before React loads (no flash)

## Testing

Test configuration lives in `vite.config.ts` (**jsdom** environment, setup in `src/test/setup.ts`).

```bash
npm run test           # single run
npm run test:watch     # interactive mode
npm run test:coverage  # coverage report
```

To render components with router, theme, and locale in tests, use `renderWithProviders` from `src/test/test-utils.tsx`:

```tsx
import { renderWithProviders } from '@/test/test-utils'

renderWithProviders(<Header />, { route: '/sobre', locale: 'en' })
```

The global setup includes mocks for `IntersectionObserver`, `matchMedia`, and `window.scrollTo`. Use `triggerAllIntersections()` (exported from `setup.ts`) to simulate elements entering the viewport.

Coverage requires **100%** for lines, functions, branches, and statements (excluding locale files, types, `main.tsx`, and test utilities).

## Deploy

After `npm run build`, publish the contents of the `dist/` folder on any static site host:

- Vercel, Netlify, GitHub Pages, Cloudflare Pages, Azure Static Web Apps, etc.

For SPAs with React Router, configure the server to redirect unknown routes to `index.html` (fallback), avoiding 404 when accessing `/sobre` or `/experiencia` directly.

The project already includes `public/_redirects` for Netlify:

```
/*    /index.html   200
```

On other platforms, configure the equivalent (e.g. `_redirects` on Cloudflare Pages, `vercel.json` rewrites on Vercel).

## Development

### Add a new language

1. Create folder `src/i18n/locales/{code}/` mirroring `pt-BR/` or `en/`
2. Register in `src/i18n/index.ts` and `src/types/locale.ts` (`LocaleCode`)
3. Update `LanguageToggle` and the locale script in `index.html` if needed

### Add a new section

1. Create component in `src/components/`
2. Create page in `src/pages/`
3. Register route in `src/App.tsx`
4. Add text in each locale's `index.ts` files
5. Add item to the `nav` array and `meta.pageTitles`
6. Add co-located tests (`*.test.tsx`)

### Add or update tests

1. Place the `*.test.{ts,tsx}` file next to the module under test
2. Use `renderWithProviders` when the component depends on context or routing
3. Run `npm run test:coverage` to validate coverage thresholds

## License

Personal project — Samuel Costa. Use and distribution as defined by the repository author.