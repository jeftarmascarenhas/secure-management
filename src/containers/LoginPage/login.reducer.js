import { AUTHENTICATED, UNAUTHORIZED, LOGOUT } from './login.types'
import { login } from '../../constants/initialState'

export default (state = login, action) => {
  switch (action.type) {
    case AUTHENTICATED:
      return { ...state, isAuthenticated: true }
    case UNAUTHORIZED:
      return { ...state, isAuthenticated: false, authError: action.payload }
    case LOGOUT:
      return { ...state, isAuthenticated: false }
    default:
      return state
  }
}
