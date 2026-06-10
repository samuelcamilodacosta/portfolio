import { act, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import About from './About'
import { renderWithProviders } from '@/test/test-utils'
import { triggerAllIntersections } from '@/test/setup'
import { locales } from '@/i18n'

describe('About', () => {
  it('renders about section content', () => {
    renderWithProviders(<About />)
    act(() => triggerAllIntersections())

    const { about } = locales['pt-BR']
    expect(screen.getByRole('heading', { name: about.title })).toBeInTheDocument()
    expect(screen.getByText(about.paragraphs[0])).toBeInTheDocument()
    expect(screen.getByText(about.highlights[0].label)).toBeInTheDocument()
  })
})
