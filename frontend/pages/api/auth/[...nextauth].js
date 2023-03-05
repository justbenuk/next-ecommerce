import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

// data
import { gql, GraphQLClient } from 'graphql-request'
import { API_URL } from '@/config/config'

export const authOptions = {
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: 'Credentials',
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: { label: "email", type: "email", placeholder: "jsmith" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        // You need to provide your own logic here that takes the credentials
        // submitted and returns either a object representing a user or value
        // that is false/null if the credentials are invalid.
        // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
        // You can also use the `req` object to obtain additional parameters
        // (i.e., the request IP address)
        const client = new GraphQLClient(API_URL)

        const mutation = gql`
      mutation{
      login(input: {identifier:"${credentials.email}", password:"${credentials.password}"}){
      jwt
      user{
      username
      email
      }
      }
      }
      `
        const response = await client.request(mutation)

        return response
      }
    })
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    sigIn: '/auth/login'
  },
  callbacks: {
    async redirect({ url, baseUrl }) {
      // Allows relative callback URLs
      if (url.startsWith("/")) return `${baseUrl}${url}`
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return url
      return baseUrl
    },
    async session({ session, token }) {
      session.user = token.user.login;
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
  },
}
export default NextAuth(authOptions)
