import { Toaster } from 'react-hot-toast'
import { AuthContextProvider } from '../context/AuthContext'
import { CartContextProvider } from '../context/CartContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <CartContextProvider>
        <Toaster/>
        <Component {...pageProps} />
      </CartContextProvider>
    </AuthContextProvider>
  )
}

export default MyApp
