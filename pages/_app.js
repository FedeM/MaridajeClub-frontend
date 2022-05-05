import { Toaster } from 'react-hot-toast'
import { AuthContextProvider } from '../context/AuthContext'
import { CartContextProvider } from '../context/CartContext'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import '../styles/globals.css'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={darkTheme}>
      <AuthContextProvider>
        <CartContextProvider>
          <Toaster/>
          <Component {...pageProps} />
        </CartContextProvider>
      </AuthContextProvider>
    </ThemeProvider>
  )
}

export default MyApp
