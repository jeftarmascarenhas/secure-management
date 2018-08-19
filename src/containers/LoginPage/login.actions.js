import { AUTHENTICATED, LOGOUT, UNAUTHORIZED } from './login.types'
import coreApi from '../../api/coreApi'

export const loginAuth = (email, password) => async (dispatch) => {
  try {
    const { data } = await coreApi.postLogin(email, password)
    dispatch({ type: AUTHENTICATED })
    localStorage.token = data.token
  } catch (error) {
    delete localStorage.token
    dispatch({ type: UNAUTHORIZED, payload: error.response.data })
  }
}

export const logout = () => (dispatch) => {
  dispatch({
    type: LOGOUT,
  })
  delete localStorage.token
}
