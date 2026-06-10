import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { locales } from '@/i18n'

vi.mock('@/context/LocaleContext', () => ({
  useLocale: () => ({
    locale: 'pt-BR',
    setLocale: vi.fn(),
    toggleLocale: vi.fn(),
    t: {
      ...locales['pt-BR'],
      projects: {
        ...locales['pt-BR'].projects,
        items: [
          {
            name: 'Active Project',
            description: 'Project with external links',
            technologies: ['React'],
            github: 'https://github.com/example/repo',
            demo: 'https://example.com/demo',
            differentials: ['Open source'],
            placeholder: false,
          },
        ],
      },
    },
  }),
}))

import Projects from './Projects'

describe('Projects links', () => {
  it('renders active github and demo links', () => {
    render(<Projects />)

    const githubLink = screen.getByRole('link', { name: locales['pt-BR'].common.github })
    const demoLink = screen.getByRole('link', { name: locales['pt-BR'].common.demo })

    expect(githubLink).toHaveAttribute('href', 'https://github.com/example/repo')
    expect(demoLink).toHaveAttribute('href', 'https://example.com/demo')
  })
})
