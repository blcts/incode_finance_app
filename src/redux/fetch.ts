import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './store'

interface InitState {
  token: string
  refreshToken: string
  username: string
}

const initState: InitState = {
  token: '',
  refreshToken: '',
  username: '',
}

export const userSlice = createSlice({
  name: 'user',
  initialState: initState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload
    },
    setRefreshToken: (state, action: PayloadAction<string>) => {
      state.refreshToken = action.payload
    },
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload
    },
  },
})

export const { setToken, setRefreshToken, setUsername } = userSlice.actions

export const userReducer = userSlice.reducer

export const getToken = (state: RootState) => state.user.token
export const getRefreshToken = (state: RootState) => state.user.refreshToken
export const getUsername = (state: RootState) => state.user.username
