import { useEffect, useRef } from 'react'

export const useResizeObserver = (
  ref: HTMLDivElement | null,
  callback: () => void,
) => {
  const observer = useRef<ResizeObserver | null>(null)

  useEffect(() => {
    if (ref) {
      observer.current = new ResizeObserver(callback)
      observer.current.observe(ref)

      return () => {
        if (observer.current) {
          observer.current.disconnect()
        }
      }
    }
  }, [callback, ref])
}
