import { useCallback } from 'react'

import { useTypedSelector } from '@Redux/rootReducer'
import { getCounterState } from '@Redux/selectors'
import { useAppDispatch } from '@Redux/store'

type UseCounterReturn = {
  count: number
  increment: () => void
  decrement: () => void
  incrementByAmount: (amount: number) => void
}

const useCounter = (): UseCounterReturn => {
  const dispatch = useAppDispatch()
  const { value: counter } = useTypedSelector(getCounterState)

  const increment = useCallback(() => {
    dispatch({ type: 'counter/increment' })
  }, [dispatch])

  const decrement = useCallback(() => {
    dispatch({ type: 'counter/decrement' })
  }, [dispatch])

  const incrementByAmount = useCallback(
    (amount: number) => {
      dispatch({ type: 'counter/incrementByAmount', payload: amount })
    },
    [dispatch]
  )

  return {
    count: counter,
    increment,
    decrement,
    incrementByAmount,
  }
}

export default useCounter
