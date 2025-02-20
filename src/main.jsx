import React from 'react'
import ReactDom from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Toaster} from 'react-hot-toast'
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDom.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Toaster
  position='top-right'
  reverseOrder={false} />
  </React.StrictMode>,
)
