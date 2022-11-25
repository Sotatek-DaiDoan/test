import {
  // configureStore,
  // Action,
  // ThunkAction,
  combineReducers,
} from '@reduxjs/toolkit'

import exampleSliceReducer from './ExampleSlice'

export default combineReducers({
  example: exampleSliceReducer,
})
