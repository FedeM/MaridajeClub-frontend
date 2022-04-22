import { Toaster } from 'react-hot-toast'
import { CartContextProvider } from '../context/cartContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <CartContextProvider>
      <Toaster/>
      <Component {...pageProps} />
    </CartContextProvider>
  )
}

export default MyApp
