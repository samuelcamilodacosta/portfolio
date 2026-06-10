import { render, screen, act, renderHook } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { useIntersectionObserver } from './useIntersectionObserver'
import { mockIntersectionObserverInstances } from '@/test/setup'

function TestTarget() {
  const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>()

  return <div ref={ref} data-testid="target" data-visible={String(isVisible)} />
}

describe('useIntersectionObserver', () => {
  it('starts hidden and becomes visible when intersecting', () => {
    render(<TestTarget />)

    expect(screen.getByTestId('target')).toHaveAttribute('data-visible', 'false')

    const observer = mockIntersectionObserverInstances[0]
    expect(observer).toBeDefined()

    act(() => {
      observer.triggerIntersect(true)
    })

    expect(screen.getByTestId('target')).toHaveAttribute('data-visible', 'true')
  })

  it('stays hidden when intersection is false', () => {
    render(<TestTarget />)

    const observer = mockIntersectionObserverInstances[0]

    act(() => {
      observer.triggerIntersect(false)
    })

    expect(screen.getByTestId('target')).toHaveAttribute('data-visible', 'false')
  })

  it('does nothing when ref is not attached to an element', () => {
    const { result } = renderHook(() => useIntersectionObserver<HTMLDivElement>())

    expect(result.current[1]).toBe(false)
    expect(mockIntersectionObserverInstances).toHaveLength(0)
  })
})
