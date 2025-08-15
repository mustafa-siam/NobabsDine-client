import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { HelmetProvider } from 'react-helmet-async';
import { RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import router from './Routes/Router.jsx';
import CartProvider from './Cartproveider/Cartcontext.jsx';
import Authprovider from './Providers/Authprovider.jsx';

createRoot(document.getElementById('root')).render(
   <StrictMode>
    <HelmetProvider>
      <Authprovider>    
          <RouterProvider router={router}></RouterProvider>
      </Authprovider>
    </HelmetProvider>
  </StrictMode>
);
