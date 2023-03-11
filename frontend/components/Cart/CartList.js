import React from 'react'
import CartItem from './CartItem'

export default function CartList( { cartItems } ) {
  return (
    <div className='container mx-auto'>
      <div class="relative overflow-x-auto">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Product Image
              </th>
              <th scope="col" class="px-6 py-3">
                Product name
              </th>
              <th scope="col" class="px-6 py-3">
                Brand
              </th>
              <th scope="col" class="px-6 py-3">
                Category
              </th>
              <th scope="col" class="px-6 py-3">
                Price
              </th>
              <th scope="col" class="px-6 py-3">
                Quantity
              </th>
            </tr>
          </thead>
          <tbody>
            { cartItems.map( ( item ) => (
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={ item.id }>
                <CartItem product={ item } />
              </tr>
            ) ) }
          </tbody>
        </table>
      </div>
    </div>
  )
}
