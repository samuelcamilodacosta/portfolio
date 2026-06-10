import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import AboutPage from './AboutPage'
import SkillsPage from './SkillsPage'
import ExperiencePage from './ExperiencePage'
import ProjectsPage from './ProjectsPage'
import ContactPage from './ContactPage'
import { renderWithProviders } from '@/test/test-utils'
import { locales } from '@/i18n'

describe('pages', () => {
  it('renders AboutPage', () => {
    renderWithProviders(<AboutPage />)
    expect(screen.getByRole('heading', { name: locales['pt-BR'].about.title })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: locales['pt-BR'].timeline.title })).toBeInTheDocument()
  })

  it('renders SkillsPage', () => {
    renderWithProviders(<SkillsPage />)
    expect(screen.getByRole('heading', { name: locales['pt-BR'].skills.title })).toBeInTheDocument()
  })

  it('renders ExperiencePage', () => {
    renderWithProviders(<ExperiencePage />)
    expect(
      screen.getByRole('heading', { name: locales['pt-BR'].experience.title }),
    ).toBeInTheDocument()
  })

  it('renders ProjectsPage', () => {
    renderWithProviders(<ProjectsPage />)
    expect(screen.getByRole('heading', { name: locales['pt-BR'].projects.title })).toBeInTheDocument()
  })

  it('renders ContactPage', () => {
    renderWithProviders(<ContactPage />)
    expect(screen.getByRole('heading', { name: locales['pt-BR'].contact.title })).toBeInTheDocument()
  })
})
