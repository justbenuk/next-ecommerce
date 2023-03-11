import { createSlice, createAsyncThunk, createAction } from '@reduxjs/toolkit'
import authService from './authService'

const initialState = {
  user: typeof window !== 'undefined' && sessionStorage.getItem( "currentUser" )
    ? JSON.parse( sessionStorage.getItem( "currentUser" ) )
    : {},
  isLoading: false
}

export const login = createAsyncThunk(
  'auth/login',
  async ( user, thunkAPI ) => {
    try {
      return await authService.login( user )
    } catch ( error ) {
      return thunkAPI.rejectWithValue( error.message )
    }

  }
)

export const register = createAsyncThunk(
  'auth/register',
  async ( user, thunkAPI ) => {
    try {
      return await authService.register( user )
    } catch ( error ) {
      return thunkAPI.rejectWithValue( error.message )
    }

  }
)

export const logout = createAction( 'auth/logout', () => {
  authService.logout()
  return {}
} )

export const authSlice = createSlice( {
  name: 'auth',
  initialState,
  reducers: {
    logout: ( state ) => {
      state.user = null
    }
  },
  extraReducers: ( builder ) => {
    builder
      .addCase( login.pending, ( state ) => {
        state.isLoading = false
      } )
      .addCase( login.fulfilled, ( state, action ) => {
        state.user = action.payload
        state.isLoading = false
      } )
      .addCase( register.pending, ( state ) => {
        state.isLoading = false
      } )
      .addCase( register.fulfilled, ( state, action ) => {
        state.user = action.payload
        state.isLoading = false
      } )
  }
} )

export default authSlice.reducer
