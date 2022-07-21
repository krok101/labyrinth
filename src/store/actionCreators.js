import { SET_FIELD_SIZE, SET_COUNT_STEPS } from './actions'

export const setFieldSize = (payload) => ({
  type: SET_FIELD_SIZE,
  payload
})

export const setCountSteps = (payload) => ({
  type: SET_COUNT_STEPS,
  payload
})
