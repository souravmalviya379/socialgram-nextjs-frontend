import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'

type UserCredentials = {
  username: string
  password: string
}

export const login = createAsyncThunk(
  'user/login',
  async (userCredentials: UserCredentials, thunkAPI) => {
    // console.log('userCredentials', userCredentials)
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
        userCredentials
      )
      return thunkAPI.fulfillWithValue(res.data)
    } catch (error: any) {
      // console.log('Error while login', error)
      return thunkAPI.rejectWithValue(error?.response?.data)
    }
  }
)

export const initialState = {
  loading: false,
  user: null,
  error: null,
  message: null,
  accessToken: null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(login.pending, (state, action) => {
        state.loading = true
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload?.user
        state.loading = false
        state.accessToken = action.payload.accessToken
      })
      .addCase(login.rejected, (state, action: any) => {
        console.log('action', action)
        state.error = action?.payload?.error
        state.message = action?.payload.message
      })
  },
})

export default userSlice.reducer
