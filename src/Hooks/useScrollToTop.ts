import { useEffect } from 'react'

const useScrollToTop = (condition?: boolean) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [condition])
}

export default useScrollToTop
