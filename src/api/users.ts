import { User } from '../types/User'
import { axios } from './axios'

export const userTokenAPI = async (token: string) => {
  return await axios.get(`/users/`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}

export const getUserData = async () => {
  return (await axios.get('/users/self')) as User
}
