import axiosInstance from '../middleware/axiosInstance'

export default {
  postRegister(email, name, password) {
    return axiosInstance.post('api/v2/register', { email, name, password })
  },
  postLogin(email, password) {
    return axiosInstance.post('api/v2/login', { email, password })
  },
  getLogoSite(sitename) {
    return axiosInstance.get(`api/v2/logo/${sitename}`, {
      responseType: 'arraybuffer',
    })
  },
}
