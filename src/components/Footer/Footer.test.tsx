import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Footer from './Footer'
import { renderWithProviders } from '@/test/test-utils'
import { locales } from '@/i18n'

describe('Footer', () => {
  it('renders copyright and localized tagline', () => {
    renderWithProviders(<Footer />)

    expect(screen.getByText(/© 2026 Samuel Costa/)).toBeInTheDocument()
    expect(screen.getByText(locales['pt-BR'].footer.tagline)).toBeInTheDocument()
  })
})
