import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
// components
import ProductLayout from '@/layouts/ProductLayout'
import LikeList from '@/components/Products/LikeList'

// data
import { API_URL } from '@/config/config'
import { gql, GraphQLClient } from 'graphql-request'

export default function ProductSingle( { product, categories } ) {

  const [ catProducts, setCatProducts ] = useState()

  useEffect( () => {
    if ( product.attributes.category.data ) {
      const catName = product.attributes.category.data.attributes.name
      const getCat = categories.filter( ( category ) => category.attributes.name === catName )
      setCatProducts( getCat[ 0 ].attributes.products )
    }

  }, [] )

  console.log( catProducts )

  return (
    <ProductLayout title={ product.attributes.name }>
      <div className='flex flex-row justify-end mb-10'>
        <Link href='/' className='bg-gray-800 py-3 px-12 rounded text-white text-sm font-bold shadow-xl'>Go Back</Link>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-5 gap-8'>
        <div className='col-span-1 shadow-xl'>
          <div className='border rounded'>
            <div className='border-b px-2 py-4'>Product Image</div>
            { product.attributes.image.data && <Image src={ `http://0.0.0.0:1337${product.attributes.image.data.attributes.url}` } alt={ product.attributes.name } width={ 300 } height={ 300 } style={ { padding: '20px 20px', margin: '0 auto' } } /> }
          </div>
        </div>
        <div className='lg:col-span-3 shadow-xl'>
          <div className='border rounded h-full'>
            <div className='border-b px-2 py-4'>Product Details</div>
            <div className='p-6'>
              <p className='text-xl font-bold'>{ product.attributes.name }</p>
              <p className='py-2'>{ product.attributes.description }</p>
              <p className='py-4'>
                Place holder for reviews

              </p>
            </div>
          </div>
        </div>
        <div className='col-span-1 shadow-xl'>
          <div className='border rounded h-full'>
            <div className='border-b px-2 py-4'>Purchase</div>
            <div className='p-6'>
              <div className='flex flex-row justify-between items-center'>
                <p>Count In Stock:</p>
                <p className='font-bold text-xl'>{ product.attributes.countInStock }</p>
              </div>
              <div className='flex flex-row justify-between items-center'>
                <p>Price:</p>
                <p className='font-bold text-xl'>£{ product.attributes.price }</p>
              </div>
              <div className='flex flex-col gap-4 mt-8'>
                <button className='bg-yellow-500 py-4 rounded'>Buy It Now</button>
                <button className='bg-green-500 py-4 rounded'>Add To Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div >
      { catProducts && <LikeList otherProducts={ catProducts.data.slice( 0, 4 ) } /> }
    </ProductLayout >
  )
}

export async function getServerSideProps( { query: { slug } } ) {

  const client = new GraphQLClient( API_URL )

  const query = gql`{
      products(filters: {slug: {eq:"${slug}"}}){
    data{
      id
      attributes{
        name
        image{
          data{
            attributes{
              url
            }
          }
        }
        price
        countInStock
        brand
        description
        category{
          data{
            attributes{
              name
            }
          }
        }
      }
    }
  }
   categories{
    data{
      attributes{
        name
        products{
          data{
            attributes{
              name
              slug
              price
              image{
                data{
                  attributes{
                    url
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  }`

  const response = await client.request( query )
  return {
    props: { product: response.products.data[ 0 ], categories: response.categories.data }
  }
}