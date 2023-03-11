import { API_URL } from '@/config/config';
import { gql, GraphQLClient } from 'graphql-request'


const addToCart = async ( id, qty ) => {
  const client = new GraphQLClient( API_URL )
  const query = gql`{
      product(id: "${id}"){
    data{
      id
      attributes{
        name
        countInStock
        price
        brand
        image{
          data{
            attributes{
              url
            }
          }
        }
        category{
          data{
            id
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

  if ( response ) {
    const cartItem = {
      id: response.product.data.id,
      name: response.product.data.attributes.name,
      price: response.product.data.attributes.price,
      brand: response.product.data.attributes.brand,
      category: response.product.data.attributes.category.data.attributes.name,
      image: response.product.data.attributes.image.data.attributes.url,
      qty: qty
    }
    return cartItem
  }
}

const cartService = {
  addToCart
}

export default cartService