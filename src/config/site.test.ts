import { describe, expect, it } from 'vitest'
import { BASE_PATH, toBrowserPath } from './site'

describe('site config', () => {
  it('uses /portfolio as base path', () => {
    expect(BASE_PATH).toBe('/portfolio')
  })

  it('builds browser paths for routes', () => {
    expect(toBrowserPath('/')).toBe('/portfolio')
    expect(toBrowserPath('/sobre')).toBe('/portfolio/sobre')
    expect(toBrowserPath('contato')).toBe('/portfolio/contato')
  })
})
