import { User } from '../types/User'

type RemoveUserAction = { type: 'user/REMOVE' }

type SetUserAction = {
  type: 'user/SET'
  payload: User
}

const removeUser = (): RemoveUserAction => ({
  type: 'user/REMOVE',
})

const setUser = (user: User): SetUserAction => ({
  type: 'user/SET',
  payload: user,
})

export const actions = { setUser, removeUser }

type State = User | null
type Action = SetUserAction | RemoveUserAction

const userReducer = (state: State = null, action: Action): State => {
  switch (action.type) {
    case 'user/REMOVE':
      return null

    case 'user/SET':
      return action.payload

    default:
      return state
  }
}

export default userReducer
