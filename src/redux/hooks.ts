import { useEffect, useState } from 'react'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { axios } from '../api/axios'
import { getUserData } from '../api/users'
import { getRefreshToken, setFullname } from './fetch'
import { AppDispatch, RootState } from './store'
import { refresh } from '../api/auth'

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAuth = () => {
  const [token, setToken] = useState<string | null>(null)
  const refreshToken = useAppSelector(getRefreshToken)
  const dispatch = useDispatch()

  useEffect(() => {
    ;(async () => {
      if (!refreshToken) return

      const newToken = await refresh(refreshToken)

      if (!newToken) return
      setToken(newToken.accessToken)

      axios.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${newToken.accessToken}`
      const userData = await getUserData()

      dispatch(setFullname(userData.displayName))
    })()
  }, [dispatch, refreshToken])

  if (token) {
  }

  return token
}
