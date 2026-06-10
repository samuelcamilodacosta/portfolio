import userEvent from '@testing-library/user-event'
import { screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import Button from './Button'
import { toBrowserPath } from '@/config/site'
import { renderWithProviders } from '@/test/test-utils'

describe('Button', () => {
  it('renders a native button by default', async () => {
    const user = userEvent.setup()
    const onClick = vi.fn()

    renderWithProviders(<Button onClick={onClick}>Click me</Button>)

    const button = screen.getByRole('button', { name: 'Click me' })
    await user.click(button)
    expect(onClick).toHaveBeenCalledOnce()
  })

  it('renders a router link when to is provided', () => {
    renderWithProviders(<Button to="/experiencia">Experience</Button>)

    const link = screen.getByRole('link', { name: 'Experience' })
    expect(link).toHaveAttribute('href', toBrowserPath('/experiencia'))
  })

  it('renders an anchor when href is provided', () => {
    renderWithProviders(<Button href="https://example.com">External</Button>)

    const link = screen.getByRole('link', { name: 'External' })
    expect(link).toHaveAttribute('href', 'https://example.com')
  })
})
