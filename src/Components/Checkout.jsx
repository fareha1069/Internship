import React, { useState } from 'react';

export default function Checkout() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Basic Tee', color: 'Black', size: 'Large', price: 32, qty: 1, image: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-01.jpg' },
    { id: 2, name: 'Basic Tee', color: 'Sienna', size: 'Large', price: 32, qty: 1, image: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-02.jpg' }
  ]);

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);
  const shipping = 5;
  const taxes = 5.52;
  const total = subtotal + shipping + taxes;

  const handleQtyChange = (id, qty) => {
    setCartItems((prev) => prev.map((item) => item.id === id ? { ...item, qty: parseInt(qty) } : item));
  };

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 grid grid-cols-1 rounded-3xl bg-gray-50 lg:grid-cols-3 gap-8 mb-8">
      {/* Contact & Shipping Info */}
      <div className="lg:col-span-2 space-y-6 p-15">
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
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-start mb-4">
            <img src={item.image} alt={item.name} className="w-20 h-20 rounded-md object-cover" />
            <div className="ml-4 flex-1">
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-sm text-gray-500">{item.color} - {item.size}</p>
              <p className="mt-1 font-semibold">${item.price.toFixed(2)}</p>
            </div>
            <div className="flex flex-col items-end space-y-1">
              <button onClick={() => removeItem(item.id)} className="text-gray-400 hover:text-red-500">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <select
                value={item.qty}
                onChange={(e) => handleQtyChange(item.id, e.target.value)}
                className="border rounded-md px-2 py-1"
              >
                {[1, 2, 3, 4, 5].map((num) => (
                  <option key={num} value={num}>{num}</option>
                ))}
              </select>
            </div>
          </div>
        ))}

        <div className="border-t pt-4 space-y-2">
          <div className="flex justify-between text-sm">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Shipping</span>
            <span>${shipping.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Taxes</span>
            <span>${taxes.toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-semibold pt-2 border-t">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <button className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700">
            Confirm order
          </button>
        </div>
      </div>
    </div>
  );
}