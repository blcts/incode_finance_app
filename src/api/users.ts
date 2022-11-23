import { axios } from './axios'

export const userTokenAPI = async (token: string) => {
  return await axios.get(`/users/`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}
