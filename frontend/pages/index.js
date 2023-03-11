import MainLayout from '@/layouts/MainLayout'

// components
import ProductsList from '@/components/Products/ProductsList'
import Slider from '@/components/Slider/Slider'

// data
import { API_URL } from '@/config/config'
import { gql, GraphQLClient } from 'graphql-request'

export default function Home( { products } ) {


  return (
    <MainLayout title='E-Commerce Store'>
      <Slider products={ products } />
      <ProductsList products={ products } />
    </MainLayout>
  )
}

export async function getServerSideProps() {
  const client = new GraphQLClient( API_URL )
  const query = gql`{
        products{
    data{
      id
      attributes{
        name
        slug
        image{
          data{
            attributes{
              url
            }
          }
        }
        description
        price
        countInStock
        brand
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
  }`

  const response = await client.request( query )

  return {
    props: { products: response.products }
  }
}
