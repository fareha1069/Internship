import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { addToCart } from '../slices/shoppingSlice';
import { useState } from 'react';

export default function ProductDetail() {
  const location = useLocation();
  const product = location.state || {};
  const dispatch = useDispatch();
  const [qty , setQty] = useState(0);

  if (!product) {
    return <div className="text-center text-gray-500 mt-10">No product data available.</div>;
  }

  function handleAddToCart()
  {
    console.log("hello")
    dispatch(addToCart(product))
  }

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="w-full">
          <img
            src={product.imageSrc}
            alt={product.name}
            className="w-full h-auto object-cover rounded-lg shadow-md lg:h-[80%]"
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
          <p className="text-xl text-gray-700 mb-6">{product.price}</p>
          <p className="text-gray-600 mb-6">{product.description}</p>
            {/* <p className="text-gray-600 mb-6">{product.color}</p> */}
          <button
          onClick={handleAddToCart}
          style={{cursor:'pointer'}}
          className="w-fit bg-[#2E3A48] text-white px-6 py-3 rounded-md hover:bg-[#1e2a35] transition duration-300">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
