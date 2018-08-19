import axios from 'axios'
import HttpStatus from 'http-status'
import store from '../store'
import { UNAUTHORIZED } from '../containers/LoginPage/login.types'

const axiosConfig = {
  baseURL: 'https://dev.people.com.ai/mobile/',
}

const { token } = localStorage

const requestInterceptor = config => config
const responseInterceptor = response => response
const requestErrors = error => Promise.reject(error)
const responseErrors = (error) => {
  if (error.response.status === HttpStatus.UNAUTHORIZED || error.response.status === 400) {
    store().dispatch({ type: UNAUTHORIZED })
    delete localStorage.token
  }
  return Promise.reject(error)
}

const axiosInstance = axios.create(axiosConfig)

axiosInstance.interceptors.request.use(requestInterceptor, requestErrors)
axiosInstance.interceptors.response.use(responseInterceptor, responseErrors)

if (token) {
  axiosInstance.defaults.headers.common['authorization'] = token
}

export default axiosInstance
