import { createSelector } from '@reduxjs/toolkit'

import { getCounterState } from '.'

export const counter = createSelector(getCounterState, (_counter) => _counter.value)
