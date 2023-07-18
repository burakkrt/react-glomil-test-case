import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import HelmetProvider from './helmet/HelmetProvider.jsx'
import {RouterProvider} from 'react-router-dom'
import router from './router/router.jsx'
import {Provider} from 'react-redux'
import {store} from './stores'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <Provider store={store}>
        <RouterProvider router={router}/>
      </Provider>
    </HelmetProvider>
  </React.StrictMode>,
)