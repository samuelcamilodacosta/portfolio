import { act, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Contact from './Contact'
import { renderWithProviders } from '@/test/test-utils'
import { triggerAllIntersections } from '@/test/setup'
import { contactInfo } from '@/content/shared/contact'
import { locales } from '@/i18n'

describe('Contact', () => {
  it('renders contact links with shared URLs', () => {
    renderWithProviders(<Contact />)
    act(() => triggerAllIntersections())

    const { contact } = locales['pt-BR']
    expect(screen.getByRole('heading', { name: contact.title })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: new RegExp(contact.links.email, 'i') })).toHaveAttribute(
      'href',
      `mailto:${contactInfo.email}`,
    )
    expect(screen.getByRole('link', { name: new RegExp(contact.links.github, 'i') })).toHaveAttribute(
      'href',
      contactInfo.github,
    )
  })
})
