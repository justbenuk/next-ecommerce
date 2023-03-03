import React from 'react'
import Image from 'next/image'
export default function LikeItem( { item } ) {
  console.log( item )
  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 border'>
      <div className='lg:col-span-1'>
        <div className='p-4'>
          { item.image.data ? (
            <Image src={ `http://0.0.0.0:1337${item.image.data.attributes.url}` } alt='Item image' width={ 200 } height={ 200 } />
          ) : 'No Image Available' }
        </div>
      </div>
      <div className="lg:col-span-2">
        <div className='p-6'>
          <p>{ item.name }</p>
          <div className='flex flex-row items-end justify-end py-2'>
            <p className='font-bold'>£ { item.price }</p>
          </div>
        </div>
      </div>
    </div>
  )
}
