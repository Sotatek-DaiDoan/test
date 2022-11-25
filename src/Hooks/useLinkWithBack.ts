import { useLocation } from 'react-router-dom'

const useLinkWithBack = (nextPath: string) => {
  const location = useLocation()
  return { pathname: nextPath, state: { prevPath: location.pathname } }
}

export default useLinkWithBack
