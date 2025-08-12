import { RouterProvider } from "react-router-dom"
import CartProvider from "./Cartproveider/Cartcontext"
import Authprovider from "./Providers/Authprovider"
import router from "./Routes/Router"



function App() {
  

  return (
   <Authprovider>
    <CartProvider>
      <RouterProvider router={router}></RouterProvider>
    </CartProvider>
   </Authprovider>
  )
}

export default App
