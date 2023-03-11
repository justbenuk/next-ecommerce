import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import cartService from './cartService'

const initialState = {
  cartItems: [],
  isLoading: false
}

export const addToCart = createAsyncThunk(
  'cart/addTocart',
  async ( id, thunkAPI ) => {
    try {
      return await cartService.addToCart( id )
    } catch ( error ) {
      return thunkAPI.rejectWithValue( error.message )
    }
  }
)

export const cartSlice = createSlice( {
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers: ( builder ) => {
    builder
      .addCase( addToCart.pending, ( state ) => {
        state.isLoading = false
      } )
      .addCase( addToCart.fulfilled, ( state, action ) => {

        //distructure the item
        const item = action.payload

        //check if item is in the cart
        const existItem = state.cartItems.find( ( x ) => x.id === item.id )

        if ( existItem ) {
          return {
            ...state,
            cartItems: state.cartItems.map( ( x ) =>
              x.id === existItem.id ? item : x
            ),
          }
        } else {
          return {
            ...state,
            cartItems: [ ...state.cartItems, item ],
          }
        }

      } )
  }
} )

export default cartSlice.reducer