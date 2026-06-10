import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import NotFoundPage from '../pages/NotFoundPage'
import { renderWithProviders } from '@/test/test-utils'
import { locales } from '@/i18n'

describe('Layout', () => {
  it('renders header, outlet content and footer on home', () => {
    renderWithProviders(
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<p>Page content</p>} />
        </Route>
      </Routes>,
      { route: '/' },
    )

    expect(screen.getByText('Samuel Costa')).toBeInTheDocument()
    expect(screen.getByText('Page content')).toBeInTheDocument()
    expect(screen.getByText(/© 2026 Samuel Costa/)).toBeInTheDocument()
    expect(document.title).toBe(locales['pt-BR'].meta.pageTitles['/'])
  })

  it('uses alternate main layout and page title on inner routes', () => {
    const { container: homeContainer } = renderWithProviders(
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<p>Home</p>} />
        </Route>
      </Routes>,
      { route: '/' },
    )

    const { container: aboutContainer } = renderWithProviders(
      <Routes>
        <Route element={<Layout />}>
          <Route path="sobre" element={<p>About</p>} />
        </Route>
      </Routes>,
      { route: '/sobre' },
    )

    const homeMain = homeContainer.querySelector('main')
    const aboutMain = aboutContainer.querySelector('main')

    expect(homeMain?.className).not.toBe(aboutMain?.className)
    expect(document.title).toBe(locales['pt-BR'].meta.pageTitles['/sobre'])
    expect(window.scrollTo).toHaveBeenCalledWith(0, 0)
  })

  it('sets not found title for unknown paths', () => {
    renderWithProviders(
      <Routes>
        <Route element={<Layout />}>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>,
      { route: '/rota-invalida' },
    )

    expect(document.title).toBe(locales['pt-BR'].meta.notFound)
  })
})
