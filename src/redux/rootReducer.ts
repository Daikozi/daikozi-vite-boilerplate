import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { combineReducers } from '@reduxjs/toolkit'

import counter from './slices/counter'

const rootReducer = combineReducers({
  counter,
})

export type RootState = ReturnType<typeof rootReducer>

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector

export default rootReducer
