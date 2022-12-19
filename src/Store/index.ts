import { configureStore, Action, ThunkAction } from "@reduxjs/toolkit";
import rootReducer from "./Slices";
// import ROUTES from 'Routers/Constants/Routes'

// import storage from 'redux-persist/lib/storage'
// import {
//   persistStore,
//   persistReducer,
// } from 'redux-persist'

// const persistConfig = {
//   key: 'root',
//   version: 1,
//   storage,
//   blacklist: ['ui'],
// }

const store = configureStore({
  reducer: rootReducer,
  // reducer: persistReducer(persistConfig, rootReducer),   // config apply persistReducer keep value change redux in localstorage
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      // serializableCheck: {
      //   ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      // },
      serializableCheck: false,
    });
  },
  devTools: process.env.NODE_ENV !== "production",
});

// export const persistor = persistStore(store)

export type RootStateType = ReturnType<typeof rootReducer>;
export type AppDispatchType = typeof store.dispatch;
export type AppThunkType<ReturnType = void> = ThunkAction<
  ReturnType,
  RootStateType,
  unknown,
  Action<string>
>;

export default store;
