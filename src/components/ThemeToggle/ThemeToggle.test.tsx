import userEvent from '@testing-library/user-event'
import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import ThemeToggle from './ThemeToggle'
import { renderWithProviders } from '@/test/test-utils'

describe('ThemeToggle', () => {
  it('toggles theme on click', async () => {
    localStorage.setItem('theme', 'dark')
    const user = userEvent.setup()
    renderWithProviders(<ThemeToggle />)

    const toggle = screen.getByRole('button')
    await user.click(toggle)

    expect(localStorage.getItem('theme')).toBe('light')
    expect(document.documentElement.getAttribute('data-theme')).toBe('light')
  })
})
