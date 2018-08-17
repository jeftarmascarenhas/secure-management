import { AUTHENTICATED, LOGOUT, UNAUTHENTICATED } from './login.types'
import coreApi from '../../api/coreApi'

export const loginAuth = (email, password) => async (dispatch) => {
  try {
    const { data, status } = await coreApi.postLogin(email, password)
    console.log(data, status)
    dispatch({ type: AUTHENTICATED })
    localStorage.user = JSON.stringify(data)
  } catch (error) {
    console.error(error)
    delete localStorage.user
    dispatch({ type: UNAUTHENTICATED })
  }
}

export const logout = () => dispatch => new Promise((resolve) => {
  dispatch({
    type: LOGOUT,
  })
  delete localStorage.user
  resolve()
})
