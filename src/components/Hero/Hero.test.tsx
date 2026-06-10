import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Hero from './Hero'
import { toBrowserPath } from '@/config/site'
import { renderWithProviders } from '@/test/test-utils'
import { locales } from '@/i18n'

describe('Hero', () => {
  it('renders hero content from the active locale', () => {
    renderWithProviders(<Hero />)

    const { hero } = locales['pt-BR']
    expect(screen.getByText(hero.eyebrow)).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1, name: /Samuel Costa/i })).toBeInTheDocument()
    expect(screen.getByText(hero.techStack.title)).toBeInTheDocument()
    expect(screen.getByText(hero.education.title)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: hero.ctaExperience })).toHaveAttribute(
      'href',
      toBrowserPath('/experiencia'),
    )
    expect(screen.getByRole('link', { name: hero.ctaProjects })).toHaveAttribute(
      'href',
      toBrowserPath('/projetos'),
    )
    expect(screen.getByText(hero.education.items[0].institution!)).toBeInTheDocument()
    expect(screen.getByText(hero.education.items[1].degree)).toBeInTheDocument()
  })
})
