import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { AppDispatchType, RootStateType } from 'Store'

export { default as useWindowSize } from './useWindowSize'

export const useAppDispatch = () => useDispatch<AppDispatchType>()
export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector
