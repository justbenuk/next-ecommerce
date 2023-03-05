import { configureStore } from '@reduxjs/toolkit'

//reducers
import authReducer from '@/features/auth/authSlice'

export const store = configureStore({
  reducer: {
    // list reducers
    auth: authReducer
  }
})
