import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type InitialState = { value: AuthState }

type AuthState = {
  isAuth: Boolean
  username: string
  uid: string
}
export const initialState = {
  value: {
    isAuth: false,
    username: '',
    uid: '',
  } as AuthState,
} as InitialState

export const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (username, password) => {},
  },
})
