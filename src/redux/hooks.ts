import { useEffect, useState } from 'react'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { axios } from '../api/axios'
import { getRefreshToken } from './fetch'
import { AppDispatch, RootState } from './store'

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAuth = () => {
  const [token, setToken] = useState<string | null>(null)
  const refreshToken = useAppSelector(getRefreshToken)

  useEffect(() => {
    ;(async () => {
      if (!refreshToken) return

      const newToken = (await axios.post('/auth/refresh', {
        refreshToken,
      })) as string
      if (newToken) {
        setToken(newToken)
      }
    })()
  }, [refreshToken])

  return token
}
