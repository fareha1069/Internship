'use client'
import { useState, useContext, useEffect } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { useDispatch, useSelector } from 'react-redux'
import { CartContext } from '../App.jsx'
import { removeFromCart, updateCart } from '../slices/shoppingSlice.jsx'
import toast from 'react-hot-toast'

export default function Cart() {

  const { open, setOpen } = useContext(CartContext)
  const products = useSelector((state) => state.shoppingCart.products)
  const dispatch = useDispatch()
  const [qty , updateQty] = useState([])
  const [showForm, setShowForm] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState([])
  const [total , setTotal] = useState(0)
  function handleCheckout()
  {
    setOpen(false)
    setShowForm(true)
  }
  function initializeQuantity()
  {
   const initialQuantities = products.map((p) => p.qty);
   updateQty(initialQuantities)
  }
  function handleDecreaseQuantity(ind)
  {
    const temp = [...qty]
    temp[ind] = temp[ind] -1
    updateQty(temp)
    
    if (temp[ind] < 1) {
      dispatch(removeFromCart(products[ind].id));
      temp.splice(ind, 1);
      updateQty(temp);
    }
    else{
      updateQty(temp);
      dispatch(updateCart( {id :ind ,newQty:  qty[ind]}))
    }
  }
  function handleIncreaseQuantity(ind)
  {
    const temp = [...qty]
    temp[ind] = temp[ind] + 1
    updateQty(temp)
  }
  useEffect(() => {
    initializeQuantity()
  }, [products])
  
 
  function toggleSelection(id) {
    setSelectedProducts((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((pid) => pid !== id)
        : [...prevSelected, id]
    )
  }

  function handleDelete(id) {
    dispatch(removeFromCart(id))
    setSelectedProducts( (prev) => prev.filter( (pid) => pid!== id) )
    
  }
  useEffect(() => {

  console.log("Updated selectedProducts:", selectedProducts);
}, [selectedProducts]);

  function removeItem(id)
  {
    setSelectedProducts( (prev) => prev.filter((itemId) => itemId!== id))
  }
  function calculateTotal() {
    const temp = selectedItems.reduce((sum, item) => {
      const priceWithoutDollar = parseFloat(item.price.replace('$', ''));
      return sum + priceWithoutDollar;
    }, 0);
    
    setTotal(temp);
  }

  let selectedItems =[]
  selectedItems = products.filter((p) => selectedProducts.includes(p.id))
  const subtotal = selectedItems.reduce((sum, item) => sum + item.price * item.qty, 0)
  useEffect(() => {
    calculateTotal()
  
  }, [selectedItems])
  
  function handleOrder()
  {
    toast.success("Your order has been placed")
    setShowForm(false)
    for(let i =0 ;i<selectedProducts.length ;i++)
      dispatch(removeFromCart(selectedProducts[i]));
  }
  return (
    <div>
      <Dialog open={open} onClose={setOpen} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500/75 transition-opacity duration-500 ease-in-out data-closed:opacity-0"
        />
        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-[110%] md:max-w-full">
              <DialogPanel
                transition
                className="pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out data-closed:translate-x-full "
              >
                <div className="flex h-full flex-col overflow-y-auto bg-white shadow-xl">
                  <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                    <div className="flex items-start justify-between">
                      <DialogTitle className="text-lg font-medium text-gray-900">Shopping cart</DialogTitle>
                      <div className="ml-3 flex h-7 items-center">
                        <button
                          type="button"
                          onClick={() => setOpen(false)}
                          className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                        >
                          <span className="absolute -inset-0.5" />
                          <span className="sr-only">Close panel</span>
                          <XMarkIcon aria-hidden="true" className="size-6" />
                        </button>
                      </div>
                    </div>

                    <div className="mt-8">
                      <div className="flow-root">
                        <ul role="list" className="-my-6 divide-y divide-gray-200">
                          {products.map((product , index) => (
                            <li key={product.id} className="flex py-6 items-start">
                              {/* Checkbox */}
                              <input
                                type="checkbox"
                                checked={selectedProducts.includes(product.id)}
                                onChange={() => toggleSelection(product.id)}
                                className="mt-2 mr-4 h-5 w-5 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                              />

                              <div className="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
                                <img
                                  alt={product.imageAlt}
                                  src={product.imageSrc}
                                  className="size-full object-cover"
                                />
                              </div>

                              <div className="ml-4 flex flex-1 flex-col">
                                <div>
                                  <div className="flex justify-between text-base font-medium text-gray-900">
                                    <h3>{product.name}</h3>
                                    <p className="ml-1">{product.price}</p>
                                  </div>
                                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                                </div>
                                <div className="flex flex-1 items-end justify-between text-sm">
                                  <div className='flex flex-row gap-5 mb-5'>
                                    <label htmlFor="text" className='font-semibold mt-2'>Quantity</label>
                                      <button
                                      className=' rounded m-1 text-xl'
                                      style={{cursor : 'pointer'}}
                                      onClick={()=>handleDecreaseQuantity(index)}>
                                        -
                                      </button>
                                        <p className="text-gray-500 mt-2">{qty[index]}</p>
                                      <button
                                      className=' rounded m-1 text-xl'
                                      style={{cursor:'pointer'}}
                                      onClick={ () => handleIncreaseQuantity(index)}>
                                        +
                                      </button>
                                  </div>
                                  
                                  <div className="flex">
                                    <button
                                      onClick={() => handleDelete(product.id)}
                                      type="button"
                                      className="font-medium text-[#3b4a5a] hover:text-indigo-500"
                                    >
                                      Remove
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <p>Subtotal</p>
                      <p>${total.toFixed(2)}</p>
                    </div>
                    <p className="mt-0.5 text-sm text-gray-500">
                      Shipping and taxes calculated at checkout.
                    </p>
                    <div className="mt-6">
                      <button
                        disabled={selectedProducts.length === 0}
                        className={`flex w-full items-center justify-center rounded-md border border-transparent py-3 text-base font-medium text-white shadow-xs
                          ${
                            selectedProducts.length === 0
                              ? 'bg-gray-400 cursor-not-allowed'
                              : 'bg-[#3b4a5a] hover:bg-[#2c3743]'
                          }`}
                          onClick={handleCheckout}
                          style={{cursor : 'pointer'}}
                      >
                        Checkout
                      </button>
                    </div>
                    <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                      <p>
                        or{' '}
                        <button
                          type="button"
                          style={{cursor : 'pointer'}}
                          onClick={() => setOpen(false)}
                          className="font-medium text-[#3b4a5a] hover:text-indigo-500"
                        >
                          Continue Shopping
                          {/* <Link to = '/products'></Link> */}
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
              </DialogPanel>
            </div>
          </div>
        </div>
      </Dialog>

      {/* pop up form */}
      <div className="p-4 w-full">

     {showForm && (
  <div className="fixed inset-0 bg-black/40 flex items-center justify-center px-2 backdrop-blur-sm">
    <form onSubmit={handleOrder}>
    <div className="bg-white p-6 rounded shadow-md w-full max-w-4xl relative max-h-[90vh] overflow-y-auto">
      <button
        style={{ cursor: 'pointer' }}
        onClick={() => setShowForm(false)}
        className="absolute top-2 right-2 text-gray-500"
      >
        ✕
      </button>

      <div className="px-4 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Contact & Shipping Info */}
      <div className="lg:col-span-2 space-y-6 p-1 md:p-15">
        <div>
          <h2 className="text-xl font-semibold mb-4">Contact information</h2>
          <input required type="email" placeholder="Email address" className="w-full mb-2 border p-2 rounded-md bg-white" />
           <h2 className="text-xl font-semibold mb-4">Phone</h2>
          <input required type="tel" placeholder="Phone" className="w-full border p-2 rounded-md bg-white" />
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Shipping information</h2>
          <div className="grid grid-cols-2 gap-4">
            <input required type="text" placeholder="First name" className="border p-2 rounded-md bg-white" />
            <input type="text" placeholder="Last name" className="border p-2 rounded-md bg-white" />
          </div>
          <input type="text" placeholder="Company" className="w-full border p-2 mt-4 rounded-md bg-white" />
          <input type="text" placeholder="Address" className="w-full border p-2 mt-4 rounded-md bg-white" />
          <input type="text" placeholder="Apartment, suite, etc." className="w-full border p-2 mt-4 rounded-md" />
          <div className="grid grid-cols-2 gap-4 mt-4">
            <input type="text" placeholder="City" className="border p-2 rounded-md bg-white" />
            <input type="text" placeholder="Country" className="border p-2 rounded-md bg-white"  />
          </div>
        </div>
      </div>

      {/* Order Summary */}
      <div className="bg-white rounded-lg p-10 shadow-md">
        <h2 className="text-lg font-semibold mb-4">Order summary</h2>
     
        {selectedItems.map((item) => (
          <div key={item.id} className="flex items-start mb-4">
            <img src={item.imageSrc} alt={item.name} className="w-20 h-20 rounded-md object-cover" />
            <div className="ml-4 flex-1">
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-sm text-gray-500">{item.color} - {item.size}</p>
              <p className="mt-1 font-semibold">{item.price}</p>
            </div>
            <div className="flex flex-col items-end space-y-1">
              <button
              onClick={() => removeItem(item.id)} className="text-gray-400 hover:text-red-500"
              style={{cursor : 'pointer'}}
              >
                
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <p
                value={item.qty}
                // onChange={(e) => handleQtyChange(item.id, e.target.value)}
                // className="border rounded-md px-2 py-1"
              >
              
              </p>
            </div>
          </div>
        ))}

        <div className="border-t pt-4 space-y-2">
          <div className="flex justify-between text-sm">
            <span>Subtotal</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Shipping</span>
            <span>$0</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Taxes</span>
            <span>$0</span>
          </div>
          <div className="flex justify-between font-semibold pt-2 border-t">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
         <button
            disabled={selectedProducts.length === 0}
            style={{
              cursor: selectedProducts.length === 0 ? 'not-allowed' : 'pointer',
              opacity: selectedProducts.length === 0 ? 0.5 : 1
            }}
          className="mt-4 w-full bg-[#3b4a5a] text-white py-2 rounded-md hover:hover:bg-[#2c3743] disabled:bg-indigo-400"
          // onClick={handleOrder}
            >
          Confirm order
        </button>
        </div>
      </div>
    </div>
          </div>
        </form>
        </div>



      )}
    </div>
    </div>
  )
}
