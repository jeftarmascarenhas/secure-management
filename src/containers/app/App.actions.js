import * as types from './App.types'

const getTextSuccess = text => ({
  type: types.GET_TEXT_SUCCESS,
  payload: text,
})

export const getText = (text = 'Your Text') => dispatch => setTimeout(() => dispatch(getTextSuccess(text)), 1500)
