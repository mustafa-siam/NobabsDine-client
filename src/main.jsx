import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Router.jsx'
import Authprovider from './Providers/Authprovider.jsx'
import CartProvider from './Cartproveider/Cartcontext.jsx'

createRoot(document.getElementById('root')).render(
  <Authprovider>
    <CartProvider>
 <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
    </CartProvider>
    </Authprovider>
)
