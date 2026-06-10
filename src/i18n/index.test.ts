import { describe, expect, it } from 'vitest'
import { getLocaleData, locales } from './index'

describe('i18n', () => {
  it('exposes both locales', () => {
    expect(Object.keys(locales)).toEqual(['pt-BR', 'en'])
  })

  it('returns Portuguese data for pt-BR', () => {
    const data = getLocaleData('pt-BR')
    expect(data.hero.eyebrow).toBeTruthy()
    expect(data.nav.length).toBeGreaterThan(0)
  })

  it('returns English data for en', () => {
    const data = getLocaleData('en')
    expect(data.hero.eyebrow).toBeTruthy()
    expect(data.nav.length).toBeGreaterThan(0)
  })

  it('falls back to Portuguese for unknown locale codes at runtime', () => {
    const data = getLocaleData('invalid' as 'pt-BR')
    expect(data).toBe(locales['pt-BR'])
  })
})
