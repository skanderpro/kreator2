import { useEffect } from 'react'

export function useOutsideClick(elementRef, handler, attached = true) {
  useEffect(() => {
    if (!elementRef) return

    const hendleClick = (e) => {
      if (!elementRef.current) return
      if (!elementRef.current.contains(e.target)) {
        handler()
      }
    }

    document.addEventListener('click', hendleClick)
    return () => {
      document.removeEventListener('click', hendleClick)
    }
  }, [elementRef, handler, attached])
}
