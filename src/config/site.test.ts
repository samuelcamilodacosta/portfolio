import { describe, expect, it } from 'vitest'
import { BASE_PATH, normalizeBasePath, toBrowserPath } from './site'

describe('site config', () => {
  it('uses domain root when VITE_BASE_PATH is not set', () => {
    expect(BASE_PATH).toBe('')
  })

  it('normalizes base path values', () => {
    expect(normalizeBasePath(undefined)).toBe('')
    expect(normalizeBasePath('/')).toBe('')
    expect(normalizeBasePath('/portfolio/')).toBe('/portfolio')
    expect(normalizeBasePath('portfolio')).toBe('/portfolio')
  })

  it('builds browser paths for routes at domain root', () => {
    expect(toBrowserPath('/')).toBe('/')
    expect(toBrowserPath('/sobre')).toBe('/sobre')
    expect(toBrowserPath('contato')).toBe('/contato')
  })
})
