import { NEW_REGISTER, REGISTER_ERROR } from './register.types'
import { AUTHENTICATED } from '../LoginPage/login.types'
import coreApi from '../../api/coreApi'

export const newRegister = (email, name, password) => async (dispatch) => {
  try {
    const { data } = await coreApi.postRegister(email, name, password)
    dispatch({ type: NEW_REGISTER })
    dispatch({ type: AUTHENTICATED })
    localStorage.token = data.token
  } catch (error) {
    delete localStorage.token
    dispatch({ type: REGISTER_ERROR, payload: error.response.data })
  }
}
