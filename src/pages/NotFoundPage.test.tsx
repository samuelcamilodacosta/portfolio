import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import NotFoundPage from './NotFoundPage'
import { toBrowserPath } from '@/config/site'
import { renderWithProviders } from '@/test/test-utils'
import { locales } from '@/i18n'

describe('NotFoundPage', () => {
  it('renders 404 message and home link', () => {
    renderWithProviders(<NotFoundPage />, { route: '/rota-inexistente' })

    const { notFound } = locales['pt-BR']
    expect(screen.getByRole('heading', { name: '404' })).toBeInTheDocument()
    expect(screen.getByText(notFound.message)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: notFound.backHome })).toHaveAttribute(
      'href',
      toBrowserPath('/'),
    )
  })
})
