import '@/styles/globals.css'
import '@/styles/custom.css'
import '@/styles/responsive.css'
import { ProductProvider } from './utils/getProduct'
import { CartProvider } from './utils/cartHandler'
export default function App({ Component, pageProps }) {
  return(
    <ProductProvider>
        <Component {...pageProps} />
    </ProductProvider>
  )
  
  
}
