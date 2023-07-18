import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import HelmetProvider from './helmet/HelmetProvider.jsx'
import {RouterProvider} from 'react-router-dom'
import {router} from './router/router.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router}>
      </RouterProvider>
    </HelmetProvider>
  </React.StrictMode>,
)