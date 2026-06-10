import { act, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Skills from './Skills'
import { renderWithProviders } from '@/test/test-utils'
import { triggerAllIntersections } from '@/test/setup'
import { locales } from '@/i18n'

describe('Skills', () => {
  it('renders skill categories', () => {
    renderWithProviders(<Skills />)
    act(() => triggerAllIntersections())

    const { skills } = locales['pt-BR']
    expect(screen.getByRole('heading', { name: skills.title })).toBeInTheDocument()

    for (const category of skills.categories) {
      expect(screen.getByText(category.title)).toBeInTheDocument()
    }
  })
})
