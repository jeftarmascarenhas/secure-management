import { NEW_REGISTER, REGISTER_ERROR } from './register.types'
import { register } from '../../constants/initialState'

export default (state = register, action) => {
  switch (action.type) {
    case NEW_REGISTER:
      return { ...state, isRegisterOK: true }
    case REGISTER_ERROR:
      return { ...state, isRegisterOK: false, registerError: action.payload }
    default:
      return state
  }
}
