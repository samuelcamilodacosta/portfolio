import { useEffect, useRef, useState, type RefObject } from 'react'

const DEFAULT_OPTIONS: IntersectionObserverInit = {
  threshold: 0.1,
  rootMargin: '0px 0px -40px 0px',
}

/**
 * Detects when an element enters the viewport and keeps it visible afterward.
 *
 * @returns A ref to attach to the target element and whether it has been seen.
 */
export function useIntersectionObserver<T extends HTMLElement = HTMLElement>(): [
  RefObject<T | null>,
  boolean,
] {
  const ref = useRef<T | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
        observer.unobserve(element)
      }
    }, DEFAULT_OPTIONS)

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return [ref, isVisible]
}
