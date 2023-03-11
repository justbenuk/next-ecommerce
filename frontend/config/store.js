import { configureStore } from '@reduxjs/toolkit'

//reducers
import authReducer from '@/features/auth/authSlice'
import cartReducer from '@/features/cart/cartSlice'

export const store = configureStore( {
  reducer: {
    // list reducers
    auth: authReducer,
    cart: cartReducer
  }
} )
