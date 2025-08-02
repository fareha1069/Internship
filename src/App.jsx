import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar.jsx'
import Products from './Components/Products.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Cart from './Components/Cart.jsx'
import Home from './Components/Home.jsx'

const router = createBrowserRouter(
  [
    {
      path:"/",
      element :
      <div>
        <Navbar/>
        <Home />
      </div>

    },

    {
      path:"/products",
      element :
      <div>
        <Navbar/>
        <Products />
      </div>
    },

    {
      path:"/cart",
      element :
      <div>
        <Navbar/>
        <Cart />
      </div>
    },
  ]
)
function App() {

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
