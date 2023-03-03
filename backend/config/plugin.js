module.exports = ({ env }) => ({
  seo: {
    enabled: true
  },
  graphql: {
    config: {
      endpoint: '/graphql',
      shadowCRUD: true,
      playgroundAlways: true,
      amountList: 100,
      apolloServer: {
        tracing: false
      }
    }
  }
})
