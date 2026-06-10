import { renderHook, act } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { ThemeProvider, useTheme } from './ThemeContext'
import type { ReactNode } from 'react'

function wrapper({ children }: { children: ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>
}

function createMatchMedia(matches = false) {
  let changeHandler: (() => void) | undefined

  const media = {
    matches,
    media: '(prefers-color-scheme: light)',
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn((_event: string, handler: () => void) => {
      changeHandler = handler
    }),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
    triggerChange: (nextMatches: boolean) => {
      media.matches = nextMatches
      changeHandler?.()
    },
  }

  return media
}

describe('ThemeContext', () => {
  it('applies stored theme on mount', () => {
    localStorage.setItem('theme', 'light')
    const { result } = renderHook(() => useTheme(), { wrapper })

    expect(result.current.theme).toBe('light')
    expect(result.current.isDark).toBe(false)
    expect(document.documentElement.getAttribute('data-theme')).toBe('light')
  })

  it('toggles theme from dark to light', () => {
    localStorage.setItem('theme', 'dark')
    const { result } = renderHook(() => useTheme(), { wrapper })

    act(() => {
      result.current.toggleTheme()
    })

    expect(result.current.theme).toBe('light')
    expect(localStorage.getItem('theme')).toBe('light')
    expect(document.documentElement.getAttribute('data-theme')).toBe('light')
  })

  it('toggles theme from light to dark', () => {
    localStorage.setItem('theme', 'light')
    const { result } = renderHook(() => useTheme(), { wrapper })

    act(() => {
      result.current.toggleTheme()
    })

    expect(result.current.theme).toBe('dark')
    expect(localStorage.getItem('theme')).toBe('dark')
  })

  it('follows light system preference when no stored theme exists', () => {
    const media = createMatchMedia(true)
    vi.stubGlobal('matchMedia', vi.fn(() => media))

    const { result } = renderHook(() => useTheme(), { wrapper })
    expect(result.current.theme).toBe('light')
  })

  it('follows dark system preference when no stored theme exists', () => {
    const media = createMatchMedia(false)
    vi.stubGlobal('matchMedia', vi.fn(() => media))

    const { result } = renderHook(() => useTheme(), { wrapper })
    expect(result.current.theme).toBe('dark')
  })

  it('updates theme to light when system preference changes without stored theme', () => {
    const media = createMatchMedia(false)
    vi.stubGlobal('matchMedia', vi.fn(() => media))

    const { result } = renderHook(() => useTheme(), { wrapper })
    expect(result.current.theme).toBe('dark')

    act(() => {
      localStorage.removeItem('theme')
      media.triggerChange(true)
    })

    expect(result.current.theme).toBe('light')
  })

  it('updates theme to dark when system preference changes without stored theme', () => {
    const media = createMatchMedia(true)
    vi.stubGlobal('matchMedia', vi.fn(() => media))

    const { result } = renderHook(() => useTheme(), { wrapper })
    expect(result.current.theme).toBe('light')

    act(() => {
      localStorage.removeItem('theme')
      media.triggerChange(false)
    })

    expect(result.current.theme).toBe('dark')
  })

  it('keeps stored theme when system preference changes', () => {
    const media = createMatchMedia(false)
    vi.stubGlobal('matchMedia', vi.fn(() => media))
    localStorage.setItem('theme', 'dark')

    const { result } = renderHook(() => useTheme(), { wrapper })

    act(() => {
      media.triggerChange(true)
    })

    expect(result.current.theme).toBe('dark')
  })

  it('ignores invalid theme in localStorage', () => {
    localStorage.setItem('theme', 'invalid')
    const media = createMatchMedia(true)
    vi.stubGlobal('matchMedia', vi.fn(() => media))

    const { result } = renderHook(() => useTheme(), { wrapper })
    expect(result.current.theme).toBe('light')
  })

  it('throws when useTheme is used outside provider', () => {
    expect(() => renderHook(() => useTheme())).toThrow(
      'useTheme must be used within ThemeProvider',
    )
  })
})
