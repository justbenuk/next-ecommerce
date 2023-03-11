import React from 'react'
import Image from 'next/image'
export default function CartItem( { product } ) {
  console.log( product )
  return (
    <>
      <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white mx-auto">
        <div className='flex flex-row items-center justify-start'>
          <div className='rounded-full overflow-hidden border'>
            <Image src={ `http://0.0.0.0:1337${product.image}` } alt={ product.name } width={ 50 } height={ 50 } style={ { width: '30px', height: '30px' } } />
          </div>
        </div>
      </th>
      <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        { product.name }
      </th>
      <td class="px-6 py-4">
        { product.brand }
      </td>
      <td class="px-6 py-4">
        { product.category }
      </td>
      <td class="px-6 py-4">
        £ { product.price }
      </td>
      <td class="px-6 py-4">
        { product.qty }
      </td>
    </>
  )
}
