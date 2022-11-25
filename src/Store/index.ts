import { configureStore, Action, ThunkAction } from '@reduxjs/toolkit'
// import ROUTES from 'Routers/Constants/Routes'
import rootReducer from './Slices'

const store = configureStore({
  reducer: rootReducer,
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      // serializableCheck: {
      //   ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      // },
      serializableCheck: false,
    })
  },
  devTools: process.env.NODE_ENV !== 'production',
})


export type RootStateType = ReturnType<typeof rootReducer>
export type AppDispatchType = typeof store.dispatch
export type AppThunkType<ReturnType = void> = ThunkAction<
  ReturnType,
  RootStateType,
  unknown,
  Action<string>
>

export default store
