import { act, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Projects from './Projects'
import { renderWithProviders } from '@/test/test-utils'
import { triggerAllIntersections } from '@/test/setup'
import { locales } from '@/i18n'

describe('Projects', () => {
  it('renders personal projects', () => {
    renderWithProviders(<Projects />)
    act(() => triggerAllIntersections())

    const { projects } = locales['pt-BR']
    expect(screen.getByRole('heading', { name: projects.title })).toBeInTheDocument()

    expect(screen.getAllByRole('article')).toHaveLength(projects.items.length)
    expect(screen.getAllByText(projects.items[0].name)).toHaveLength(projects.items.length)
  })
})
