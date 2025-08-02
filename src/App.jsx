import { createContext, useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar.jsx'
import Products from './Components/Products.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Cart from './Components/Cart.jsx'
import Home from './Components/Home.jsx'
import Product from './Components/Product.jsx'

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
      path:"/product",
      element :
      <div>
        <Navbar/>
        <Product />
      </div>
    },
  ]
)

//create context for cart to provide global access to every page
const CartContext = createContext();

function App() {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <CartContext.Provider value={{open , setOpen}} >
         <RouterProvider router={router} />
          <Cart />
      </CartContext.Provider>
      
     
    </div>
  )
}

export default App
export {CartContext};