import * as types from './App.types'
import * as initialState from '../../constants/initialState'

export default (state = initialState.GET_TEXT, action) => {
  switch (action.type) {
    case types.GET_TEXT_SUCCESS:
      return action.payload
    default:
      return state
  }
}
