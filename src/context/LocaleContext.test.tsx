import { renderHook, act } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { LocaleProvider, useLocale } from './LocaleContext'
import type { ReactNode } from 'react'

function wrapper({ children }: { children: ReactNode }) {
  return <LocaleProvider>{children}</LocaleProvider>
}

describe('LocaleContext', () => {
  it('defaults to pt-BR when storage is empty', () => {
    const { result } = renderHook(() => useLocale(), { wrapper })
    expect(result.current.locale).toBe('pt-BR')
    expect(result.current.t.hero.eyebrow).toBeTruthy()
  })

  it('restores locale from localStorage', () => {
    localStorage.setItem('locale', 'en')
    const { result } = renderHook(() => useLocale(), { wrapper })
    expect(result.current.locale).toBe('en')
  })

  it('ignores invalid locale in localStorage', () => {
    localStorage.setItem('locale', 'invalid')
    const { result } = renderHook(() => useLocale(), { wrapper })
    expect(result.current.locale).toBe('pt-BR')
  })

  it('ignores invalid locale passed to setLocale', () => {
    const { result } = renderHook(() => useLocale(), { wrapper })

    act(() => {
      result.current.setLocale('invalid' as 'pt-BR')
    })

    expect(result.current.locale).toBe('pt-BR')
  })

  it('persists locale changes to localStorage and document lang', () => {
    const { result } = renderHook(() => useLocale(), { wrapper })

    act(() => {
      result.current.setLocale('en')
    })

    expect(result.current.locale).toBe('en')
    expect(localStorage.getItem('locale')).toBe('en')
    expect(document.documentElement.lang).toBe('en')
  })

  it('toggles between pt-BR and en', () => {
    const { result } = renderHook(() => useLocale(), { wrapper })

    act(() => {
      result.current.toggleLocale()
    })
    expect(result.current.locale).toBe('en')

    act(() => {
      result.current.toggleLocale()
    })
    expect(result.current.locale).toBe('pt-BR')
  })

  it('throws when useLocale is used outside provider', () => {
    expect(() => renderHook(() => useLocale())).toThrow(
      'useLocale must be used within LocaleProvider',
    )
  })
})
