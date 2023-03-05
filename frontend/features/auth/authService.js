import { API_URL } from "@/config/config";
import { gql, GraphQLClient } from 'graphql-request'

const register = async () => {
  //logic goes here
}

const login = async (userData) => {

  const { email, password } = userData
  const client = new GraphQLClient(API_URL)
  console.log(userData)
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
  const response = await client.request(mutation)

  if (response.login) {
    sessionStorage.setItem('currentUser', JSON.stringify(response.login))
  }

  return response.login
}

const logout = () => {
  //logic goes here
}

const authService = {
  register,
  logout,
  login
}

export default authService
