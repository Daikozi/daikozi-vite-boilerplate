import { FC, useEffect } from 'react'
import { Provider } from 'react-redux'
import { AnyAction } from '@reduxjs/toolkit'
import { PartialStoryFn } from '@storybook/csf'
import { Parameters, ReactRenderer } from '@storybook/react'

import { RootState } from '@Redux/rootReducer'
import { createMyStore, useAppDispatch } from '@Redux/store'

type ReduxDecoratorProps = {
  parameters: Parameters & { store?: Partial<RootState> }
}

const ActionDispatcher: FC<{ reduxActions: AnyAction[] }> = ({ reduxActions = [] }) => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    reduxActions.forEach(dispatch)
  }, [dispatch, reduxActions])

  return null
}

export const reduxDecorator = <Args,>(
  StoryFn: PartialStoryFn<ReactRenderer, Args>,
  { parameters: { store, reduxActions } }: ReduxDecoratorProps
): JSX.Element => (
  <Provider store={createMyStore(store)}>
    <ActionDispatcher reduxActions={reduxActions as AnyAction[]} />
    <StoryFn />
  </Provider>
)
