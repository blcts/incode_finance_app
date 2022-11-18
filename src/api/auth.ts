import { AuthToken } from '../types/AuthToken'
import { NewUser } from '../types/User'
import { axios } from './axios'

export const login = (
  username: string,
  password: string
): Promise<AuthToken> => {
  return axios.post('/auth/login', {
    username,
    password,
  })
}

export const refresh = (refreshToken: string) => {
  return axios.post('/auth/refresh', {
    refreshToken,
  })
}

export const register = (newUser: NewUser) => {
  return axios.post<NewUser | number>('/auth/register', {
    username: newUser.username,
    password: newUser.password,
    displayName: newUser.displayName,
  })
}

export const logout = () => {
  return axios.get(`/auth/logout`)
}

export const changePassword = (oldPassword: string, newPassword: string) => {
  return axios.patch(`/auth/changePassword`, {
    oldPassword,
    newPassword,
  })
}
