import userEvent from '@testing-library/user-event'
import { fireEvent, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Header from './Header'
import { renderWithProviders } from '@/test/test-utils'
import { locales } from '@/i18n'

describe('Header', () => {
  it('renders logo and navigation links', () => {
    renderWithProviders(<Header />, { route: '/' })

    expect(screen.getByRole('link', { name: /Samuel Costa/i })).toBeInTheDocument()

    for (const item of locales['pt-BR'].nav) {
      expect(screen.getAllByRole('link', { name: item.label }).length).toBeGreaterThan(0)
    }
  })

  it('toggles mobile menu and closes it from overlay', async () => {
    const user = userEvent.setup()
    const { container } = renderWithProviders(<Header />, { route: '/' })

    const menuButton = container.querySelector(
      `button[aria-label="${locales['pt-BR'].header.openMenu}"]`,
    )
    expect(menuButton).not.toBeNull()

    await user.click(menuButton!)
    expect(menuButton).toHaveAttribute('aria-expanded', 'true')
    expect(document.body.style.overflow).toBe('hidden')

    await user.click(screen.getByTestId('header-overlay'))
    expect(menuButton).toHaveAttribute('aria-expanded', 'false')
    expect(document.body.style.overflow).toBe('')
  })

  it('closes the menu when a navigation link is clicked', async () => {
    const user = userEvent.setup()
    const { container } = renderWithProviders(<Header />, { route: '/' })

    const menuButton = container.querySelector(
      `button[aria-label="${locales['pt-BR'].header.openMenu}"]`,
    )!

    await user.click(menuButton)
    await user.click(screen.getAllByRole('link', { name: 'Sobre' })[0])

    expect(menuButton).toHaveAttribute('aria-expanded', 'false')
  })

  it('marks header as scrolled after window scroll', () => {
    const { container } = renderWithProviders(<Header />, { route: '/' })

    Object.defineProperty(window, 'scrollY', { value: 50, writable: true, configurable: true })
    fireEvent.scroll(window)

    expect(container.querySelector('header')?.className).toMatch(/scrolled/)
  })

  it('marks header as scrolled on non-home routes', () => {
    const { container } = renderWithProviders(<Header />, { route: '/sobre' })

    expect(container.querySelector('header')?.className).toMatch(/scrolled/)
  })
})
