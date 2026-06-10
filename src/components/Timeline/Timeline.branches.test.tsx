import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

vi.mock('@/context/LocaleContext', () => ({
  useLocale: () => ({
    locale: 'pt-BR',
    setLocale: vi.fn(),
    toggleLocale: vi.fn(),
    t: {
      timeline: {
        label: 'Timeline',
        title: 'Career path',
        subtitle: 'Milestones',
        events: [
          {
            year: '2020',
            title: 'Highlights only',
            subtitle: 'Uses highlights branch',
            highlights: ['First highlight'],
            side: 'left',
          },
          {
            year: '2021',
            title: 'Activities only',
            subtitle: 'Uses activities branch',
            activities: ['First activity'],
            side: 'right',
          },
          {
            year: '2022',
            title: 'No items',
            subtitle: 'Uses empty fallback',
            side: 'left',
          },
        ],
      },
    },
  }),
}))

import Timeline from './Timeline'

describe('Timeline branches', () => {
  it('renders highlights, activities and empty fallback lists', () => {
    render(<Timeline />)

    expect(screen.getByText('First highlight')).toBeInTheDocument()
    expect(screen.getByText('First activity')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'No items' })).toBeInTheDocument()
  })
})
