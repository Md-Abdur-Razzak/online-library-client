import React from 'react'
import ReactDOM from 'react-dom/client'
import { ToastContainer} from 'react-toastify';
import '@smastrom/react-rating/style.css'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { myRoute } from './components/Router/Route'
import AuthProvider from './components/Router/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={myRoute}></RouterProvider>
    </AuthProvider>
    <ToastContainer></ToastContainer>
  </React.StrictMode>,
)
