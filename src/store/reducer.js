import { SET_FIELD_SIZE, SET_COUNT_STEPS } from './actions'

const initialState = {
  countSteps: 10,
  fieldSize: [3, 3]
}

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_FIELD_SIZE: return { ...state, fieldSize: payload }
    case SET_COUNT_STEPS: return { ...state, countSteps: payload }
    default: return state
  }
}

export default rootReducer