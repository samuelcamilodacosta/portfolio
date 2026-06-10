import { act, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Timeline from './Timeline'
import { renderWithProviders } from '@/test/test-utils'
import { triggerAllIntersections } from '@/test/setup'
import { locales } from '@/i18n'

describe('Timeline', () => {
  it('renders timeline events', () => {
    renderWithProviders(<Timeline />)
    act(() => triggerAllIntersections())

    const { timeline } = locales['pt-BR']
    expect(screen.getByRole('heading', { name: timeline.title })).toBeInTheDocument()

    for (const event of timeline.events) {
      expect(screen.getByText(event.title)).toBeInTheDocument()
    }
  })
})
