import userEvent from '@testing-library/user-event'
import { act, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Experience from './Experience'
import { renderWithProviders } from '@/test/test-utils'
import { triggerAllIntersections } from '@/test/setup'
import { locales } from '@/i18n'

describe('Experience', () => {
  it('renders company info', () => {
    renderWithProviders(<Experience />)
    act(() => triggerAllIntersections())

    const { experience } = locales['pt-BR']
    expect(screen.getByText(experience.companyInfo.name)).toBeInTheDocument()
    expect(screen.getByText(experience.companyInfo.description)).toBeInTheDocument()
  })

  it('expands and collapses project details', async () => {
    const user = userEvent.setup()
    renderWithProviders(<Experience />)

    const { experience, common } = locales['pt-BR']
    const project = experience.projects[0]
    const projectCard = screen.getByRole('heading', { name: project.name }).closest('article')!

    expect(within(projectCard).queryByText(common.technologies)).not.toBeInTheDocument()

    const expandButton = within(projectCard).getByRole('button', { name: common.showDetails })
    await user.click(expandButton)

    expect(within(projectCard).getByText(common.technologies)).toBeInTheDocument()
    expect(expandButton).toHaveAttribute('aria-expanded', 'true')

    await user.click(within(projectCard).getByRole('button', { name: common.showLess }))
    expect(within(projectCard).queryByText(common.technologies)).not.toBeInTheDocument()
  })

  it('shows overflow tag when project has more than three technologies', () => {
    renderWithProviders(<Experience />)

    const project = locales['pt-BR'].experience.projects.find((item) => item.id === 'granado')
    expect(project).toBeDefined()

    const projectCard = screen.getByRole('heading', { name: project!.name }).closest('article')!
    expect(within(projectCard).getByText('+2')).toBeInTheDocument()
  })
})
