import React, { useContext, useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
Link;
const ProductCard = ({ product }) => {
  const [count, setCount] = useState(0);
  const {addToCart,removeFromCart,cartItems}=useContext(AppContext)
  const navigate = useNavigate()

  return (
    <div className="mt-8">
        <div className="border w-60 px-6 py-4 mt-5rounded border-gray-400/10 outline-none shadow-lg">
          <img src={product.image[0]} alt="" className="cursor-pointer" onClick={()=>navigate(`/product/${product._id}`)} />
          <div>
            <p className="text-gray-400 font-medium">{product.name}</p>
            <p className="text-gray-400">{product.category}</p>
          </div>
          <div className="flex items-center justify-between mt-3">
            <div className="text-lg flex items-center gap-1 font-medium">
              <p className="text-green-500">${product.offerPrice}</p>
              <p className="text-sm line-through"> ${product.price}</p>
            </div>
            {!cartItems[product._id] ? (
              <button
                className="border px-2 bg-green-500 text-white rounded cursor-pointer text-sm"
                onClick={() =>addToCart(product._id)}
              >
                Add To Cart
              </button>
            ) : (
              <div className="flex px-2 gap-3 border bg-green-500 outline-none rounded border-green-500 text-white cursor-pointer">
                <p onClick={() => removeFromCart(product._id)}>-</p>
                <p className="gap-5">{cartItems[product._id]}</p>
                <p onClick={() => addToCart(product._id)}> +</p>
              </div>
            )}
          </div>
        </div>
    </div>
  );
};

export default ProductCard;
