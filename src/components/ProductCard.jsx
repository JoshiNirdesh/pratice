import React, { useState } from "react";

import { Link } from "react-router-dom";
Link;
const ProductCard = ({ product }) => {
  const [count, setCount] = useState(0);

  return (
    <div className="mt-8">
      <Link to={`/product/${product._id}`}>
        <div className="border w-60 px-6 py-4 mt-5rounded border-gray-400/10 outline-none shadow-lg">
          <img src={product.image[0]} alt="" className="cursor-pointer" />
          <div>
            <p className="text-gray-400 font-medium">{product.name}</p>
            <p className="text-gray-400">{product.category}</p>
          </div>
          <div className="flex items-center justify-between mt-3">
            <div className="text-lg flex items-center gap-1 font-medium">
              <p className="text-green-500">${product.offerPrice}</p>
              <p className="text-sm line-through"> ${product.price}</p>
            </div>
            {count == 0 ? (
              <button
                className="border px-2 bg-green-500 text-white rounded cursor-pointer text-sm"
                onClick={() => setCount((prevCount) => prevCount + 1)}
              >
                Add To Cart
              </button>
            ) : (
              <div className="flex px-2 gap-3 border bg-green-500 outline-none rounded border-green-500 text-white cursor-pointer">
                <p onClick={() => setCount((prevCount) => prevCount - 1)}>-</p>
                <p className="gap-5">{count}</p>
                <p onClick={() => setCount((prevCount) => prevCount + 1)}> +</p>
              </div>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
