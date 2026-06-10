import { screen, act } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import SectionTitle from './SectionTitle'
import { renderWithProviders } from '@/test/test-utils'
import { mockIntersectionObserverInstances } from '@/test/setup'

describe('SectionTitle', () => {
  it('renders label, title and subtitle', () => {
    renderWithProviders(
      <SectionTitle label="About" title="Who I am" subtitle="A short intro" />,
    )

    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Who I am' })).toBeInTheDocument()
    expect(screen.getByText('A short intro')).toBeInTheDocument()
  })

  it('becomes visible after intersection', () => {
    renderWithProviders(<SectionTitle title="Skills" />)

    const observer = mockIntersectionObserverInstances[0]
    expect(observer).toBeDefined()

    act(() => {
      observer.triggerIntersect(true)
    })

    expect(screen.getByRole('heading', { name: 'Skills' })).toBeInTheDocument()
  })
})
