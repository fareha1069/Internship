import { createSlice } from '@reduxjs/toolkit'
// import { ToastContainer, toast } from "react-toastify";
import {toast} from 'react-hot-toast'
const initialState = {
  products : [],
}

export const shoppingSlice = createSlice({
  name: 'shoppingCart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      
      if(action.payload.qty < 1)
      {
        toast("Please Select a quantity to continue.")
      }
      else{
          let ind = state.products.findIndex( p => p.id === action.payload.id)
          //if product already exit
          if(ind != -1)
          {
            state.products[ind].qty += action.payload.qty
          }
          else{
            state.products.push(action.payload)
            // console.log("i am here")
          }
          toast.success("Product added to Cart")
      }
      
    },
    removeFromCart: (state , action) => {
      let ind = state.products.findIndex( p => p.id === action.payload)
      if(ind != -1)
          state.products.splice(ind,1);
    },
    //update when item is checkedout
    updateCart: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart, incrementByAmount } = shoppingSlice.actions

export default shoppingSlice.reducer