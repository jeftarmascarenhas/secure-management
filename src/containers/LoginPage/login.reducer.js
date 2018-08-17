import { AUTHENTICATED, UNAUTHENTICATED } from './login.types'
import { login } from '../../constants/initialState'

export default (state = login, action) => {
  switch (action.type) {
    case AUTHENTICATED:
      return { ...state, isAuthenticated: true }
    case UNAUTHENTICATED:
      return { ...state, isAuthenticated: false }
    default:
      return state
  }
}
