import { useEffect, useRef } from 'react'

const thirtySeconds = 30 * 1000
const twoMinutes = 2 * 60 * 1000

const useFetchInterval = (
  callback: () => void,
  callbackInterval = thirtySeconds,
  callbackTimeout = twoMinutes
) => {
  const fetchTimout = useRef<any>()
  const fetchInterval = useRef<any>()

  const fetchLoop = () => {
    callback()
    fetchInterval.current = setInterval(callback, callbackInterval)
  }
  const handleBlurEvent = (e: FocusEvent) => {
    fetchTimout.current = setTimeout(() => {
      clearInterval(fetchInterval.current)
    }, callbackTimeout)
  }
  const handleFocusEvent = (e: FocusEvent) => {
    clearTimeout(fetchTimout.current)
    fetchLoop()
  }

  useEffect(() => {
    fetchLoop()
    window.addEventListener('blur', handleBlurEvent)
    window.addEventListener('focus', handleFocusEvent)
    return () => {
      window.removeEventListener('blur', handleBlurEvent)
      window.removeEventListener('focus', handleFocusEvent)
      clearInterval(fetchInterval.current)
      clearTimeout(fetchTimout.current)
    }
  }, [])
}

export default useFetchInterval
