import '@testing-library/jest-dom/vitest'
import { cleanup } from '@testing-library/react'
import { afterEach, beforeEach, vi } from 'vitest'

export class MockIntersectionObserver implements IntersectionObserver {
  readonly root: Element | Document | null = null
  readonly rootMargin: string = ''
  readonly scrollMargin: string = ''
  readonly thresholds: ReadonlyArray<number> = []
  private readonly callback: IntersectionObserverCallback
  private elements: Element[] = []

  constructor(callback: IntersectionObserverCallback, _options?: IntersectionObserverInit) {
    this.callback = callback
    mockIntersectionObserverInstances.push(this)
  }

  observe(element: Element): void {
    this.elements.push(element)
  }

  unobserve(element: Element): void {
    this.elements = this.elements.filter((el) => el !== element)
  }

  disconnect(): void {
    this.elements = []
  }

  takeRecords(): IntersectionObserverEntry[] {
    return []
  }

  triggerIntersect(isIntersecting = true): void {
    const entries = this.elements.map(
      (target) =>
        ({
          isIntersecting,
          target,
          intersectionRatio: isIntersecting ? 1 : 0,
          boundingClientRect: target.getBoundingClientRect(),
          intersectionRect: target.getBoundingClientRect(),
          rootBounds: null,
          time: Date.now(),
        }) as IntersectionObserverEntry,
    )

    if (entries.length > 0) {
      this.callback(entries, this)
    }
  }
}

export const mockIntersectionObserverInstances: MockIntersectionObserver[] = []

export function triggerAllIntersections(isIntersecting = true): void {
  for (const observer of mockIntersectionObserverInstances) {
    observer.triggerIntersect(isIntersecting)
  }
}

beforeEach(() => {
  mockIntersectionObserverInstances.length = 0
  vi.stubGlobal('IntersectionObserver', MockIntersectionObserver)
  window.scrollTo = vi.fn()

  vi.stubGlobal(
    'matchMedia',
    vi.fn((query: string) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  )
})

afterEach(() => {
  cleanup()
  localStorage.clear()
  document.documentElement.removeAttribute('data-theme')
  document.documentElement.style.colorScheme = ''
  document.documentElement.removeAttribute('lang')
  document.body.style.overflow = ''
  vi.unstubAllGlobals()
})
