import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './store'

interface InitState {
  token: string
  username: string
}

const initState: InitState = {
  token: '',
  username: '',
}

export const userSlice = createSlice({
  name: 'user',
  initialState: initState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload
    },
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload
    },
  },
})

export const { setToken, setUsername } = userSlice.actions

export const userReducer = userSlice.reducer

export const getToken = (state: RootState) => state.user.token
export const getUsername = (state: RootState) => state.user.username
