import { API_URL } from "@/config/config";
import { gql, GraphQLClient } from 'graphql-request'

const register = async ( userData ) => {
  const { name, email, password } = userData

  //set up the connection
  const client = new GraphQLClient( API_URL )

  const query = gql`
  {
  usersPermissionsUsers(filters: {email: {eq:"${email}"} }){
    data{
      attributes{
        email
      }
    }
  }
  }`

  //check if the user exists
  const userExits = await client.request( query )

  //if user
  if ( userExits.data ) {
    throw new Error( 'User Exists' )
  }

  //querys
  const mutation = gql`
  mutation{
    register(input: {username:"${name}", email:"${email}", password:"${password}"}){
      user{
        username
        email
      }
      jwt
    }
  }`


  //register the user
  const response = await client.request( mutation )

  if ( response.register ) {
    sessionStorage.setItem( 'currentUser', JSON.stringify( response.register ) )
  }

  return response.register
}

const login = async ( userData ) => {

  const { email, password } = userData
  const client = new GraphQLClient( API_URL )

  const mutation = gql`
  mutation{
  login(input: {identifier:"${email}", password:"${password}"}){
    jwt
    user{
      username
      role{
        description
        id
      }
      email
    }
  }
}
  `
  const response = await client.request( mutation )

  if ( response.login ) {
    sessionStorage.setItem( 'currentUser', JSON.stringify( response.login ) )
  }

  return response.login
}

const logout = () => sessionStorage.removeItem( 'currentUser' )

const authService = {
  register,
  logout,
  login
}

export default authService
