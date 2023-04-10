import { RootState } from '@Redux/rootReducer'
import { CounterState } from '@Redux/slices/counter'

export const getCounterState = (state: RootState): CounterState => state.counter
