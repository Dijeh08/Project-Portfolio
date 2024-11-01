import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import MainPage from './pages/MainPage.jsx';
import ErrorPage from './pages/error-page.jsx'
import Authentication from './pages/authenticationPage.jsx';
import Registration from './pages/registrationPage.jsx';
import { GoogleOAuthProvider } from '@react-oauth/google';
import './index.css';

// Resend_API_KEY = re_iXbmc2fK_GsXx6vzzMSk6yzyHpvM2CsYu
const router = createBrowserRouter([
  {
    path: '/',
    element: <Authentication />,
    errorElement: <ErrorPage />
  },
  {
    path: '/user',
    element: <MainPage />,
    errorElement: <ErrorPage />
  },
  {
    path: '/registrationPage',
    element: <Registration />,
    errorElement: <ErrorPage />
  },
]);
console.log(import.meta.env)
createRoot(document.getElementById('root')).render(
  
  <Authentication />
  // <GoogleOAuthProvider clientId= {import.meta.env.VITE_SECRET_CLIENT_ID}>
    
  //   <RouterProvider router={router}/>
    
  //   </GoogleOAuthProvider>,
)
