import { render, screen, waitFor } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from './App'
import { toBrowserPath } from '@/config/site'
import { locales } from '@/i18n'

const routes = [
  { path: '/', heading: { level: 1, name: /Samuel Costa/i } },
  { path: '/sobre', heading: { level: 1, name: locales['pt-BR'].about.title } },
  { path: '/tecnologias', heading: { level: 1, name: locales['pt-BR'].skills.title } },
  { path: '/experiencia', heading: { level: 1, name: locales['pt-BR'].experience.title } },
  { path: '/projetos', heading: { level: 1, name: locales['pt-BR'].projects.title } },
  { path: '/contato', heading: { level: 1, name: locales['pt-BR'].contact.title } },
] as const

describe('App', () => {
  it.each(routes)('renders $path route inside layout', async ({ path, heading }) => {
    window.history.pushState({}, '', toBrowserPath(path))
    render(<App />)

    await waitFor(() => {
      expect(screen.getByRole('heading', heading)).toBeInTheDocument()
    })
  })

  it('renders not found page for unknown routes', async () => {
    window.history.pushState({}, '', toBrowserPath('/pagina-desconhecida'))
    render(<App />)

    await waitFor(() => {
      expect(screen.getByRole('heading', { name: '404' })).toBeInTheDocument()
    })
  })
})
