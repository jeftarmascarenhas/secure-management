import axiosInstance from '../middleware/axiosInstance'

export default {
  postRegister() {
    return axiosInstance.post('api/v2/login')
  },
  postLogin(email, password) {
    return axiosInstance.post('api/v2/login', { email, password })
  },
  getLogoSite(sitename) {
    return axiosInstance.post('api/v2/login', { sitename })
  },
}
