import { describe, expect, it } from 'vitest'
import { contactInfo } from './contact'

describe('contactInfo', () => {
  it('exposes valid contact URLs and email', () => {
    expect(contactInfo.email).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
    expect(contactInfo.linkedin).toMatch(/^https:\/\/linkedin\.com\//)
    expect(contactInfo.github).toMatch(/^https:\/\/github\.com\//)
  })
})
