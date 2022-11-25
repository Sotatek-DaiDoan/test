import { useEffect, useState } from 'react'
import { useWindowSize } from 'Hooks/index'

export const useElementRect = (ref: any) => {
  const [rectData, setRectData] = useState(
    ref?.current?.getBoundingClientRect()
  )
  const { width, height } = useWindowSize()

  useEffect(() => {
    if (!!ref?.current && width > 0 && height > 0) {
      setRectData(ref.current.getBoundingClientRect())
    }
  }, [width, height])

  return rectData
}
