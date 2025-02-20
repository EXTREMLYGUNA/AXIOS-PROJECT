/* eslint-disable no-unused-vars */
import React from 'react'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import AppRoutes from './components/utils/AppRoutes' 


function App() {
  const router = new createBrowserRouter(AppRoutes)
  return <>
  <RouterProvider router={router} />
  
  </>
}

export default App
