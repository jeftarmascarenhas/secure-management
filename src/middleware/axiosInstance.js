import axios from 'axios'

const axiosConfig = {
  baseURL: 'https://dev.people.com.ai/mobile/',
}

const requestInterceptor = config => config
const responseInterceptor = response => response
const requestErrors = error => Promise.reject(error)
const responseErrors = (error) => {
  console.error(error.response.data)
  console.error(error.response.status)
  return Promise.reject(error)
}

const axiosInstance = axios.create(axiosConfig)

axiosInstance.interceptors.request.use(requestInterceptor, requestErrors)
axiosInstance.interceptors.response.use(responseInterceptor, responseErrors)

export default axiosInstance
