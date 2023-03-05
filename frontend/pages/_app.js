import '@/styles/globals.css'

//auth
import { store } from '@/config/store'
import { Provider } from 'react-redux'

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
