import React from 'react'

// compoents
import LikeItem from './LikeItem'

export default function LikeList( { otherProducts } ) {
  return (
    <div className='mt-10'>
      <div className='my-6'>
        <p className='uppercase font-bold'>You May Also Like</p>
        <p className='text-sm'>Below are some of the popular products from the same Category</p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        { otherProducts.map( ( item ) => (
          <LikeItem item={ item.attributes } key={ item.id } />
        ) ) }
      </div>
    </div>
  )
}
