import userEvent from '@testing-library/user-event'
import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import LanguageToggle from './LanguageToggle'
import { renderWithProviders } from '@/test/test-utils'

describe('LanguageToggle', () => {
  it('switches to English when EN is clicked', async () => {
    const user = userEvent.setup()
    renderWithProviders(<LanguageToggle />)

    const enButton = screen.getByRole('button', { name: 'EN' })
    await user.click(enButton)

    expect(enButton).toHaveAttribute('aria-pressed', 'true')
    expect(localStorage.getItem('locale')).toBe('en')
    expect(document.documentElement.lang).toBe('en')
  })

  it('switches back to Portuguese when PT is clicked', async () => {
    localStorage.setItem('locale', 'en')
    const user = userEvent.setup()
    renderWithProviders(<LanguageToggle />)

    const ptButton = screen.getByRole('button', { name: 'PT' })
    await user.click(ptButton)

    expect(ptButton).toHaveAttribute('aria-pressed', 'true')
    expect(localStorage.getItem('locale')).toBe('pt-BR')
    expect(document.documentElement.lang).toBe('pt-BR')
  })
})
