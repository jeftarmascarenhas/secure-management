import { combineReducers } from 'redux'
import login from '../containers/LoginPage/login.reducer'
import register from '../containers/RegisterPage/register.reducer'

const rootReducers = combineReducers({
  login,
  register,
})

export default rootReducers
