import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import HelmetProvider, {CustomHelmet} from './helmet/HelmetProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <CustomHelmet/>
      <p className="text-red-600">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</p>
    </HelmetProvider>
  </React.StrictMode>,
)