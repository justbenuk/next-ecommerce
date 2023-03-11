import React from 'react'
import SingleLayout from '@/layouts/SingleLayout'
import { useSelector } from 'react-redux'

//components
import CartList from '@/components/Cart/CartList'

export default function Cart() {

  //get the state
  const cart = useSelector( ( state ) => state.cart )

  return (
    <SingleLayout title='Next Cart'>
      { cart.cartItems.length > 0 ? (
        <>
          <CartList cartItems={ cart.cartItems } />
        </>
      ) : (
        <p>You have nothing in your Cart</p>
      ) }
    </SingleLayout>
  )
}
