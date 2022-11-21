import Axios from 'axios'

export const axios = Axios.create({
  baseURL: 'https://incode-backend-dev.herokuapp.com',
})

axios.interceptors.response.use(
  function (response) {
    return response.data
  },
  function (error) {
    return Promise.reject(error)
  }
)
