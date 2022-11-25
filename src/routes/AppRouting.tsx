import { useDispatch } from 'react-redux'
import { RouteObject, useRoutes } from 'react-router-dom'
import { axios } from '../api/axios'
import {
  getRefreshToken,
  getToken,
  setRefreshToken,
  setToken,
} from '../redux/fetch'
import { useAppSelector, useAuth } from '../redux/hooks'
import { authRouting } from './AuthRouting'
import { sidebarRouting } from './SidebarRouting'

export const AppRouting = () => {
  const routes: RouteObject[] = []
  const token = useAuth()

  if (token) {
    routes.push(...sidebarRouting)
  } else {
    routes.push(...authRouting)
  }

  const element = useRoutes(routes)

  return <>{element}</>
}
