import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div>
      <div className="border inline-block p-5 w-60 rounded-lg shadow border-gray-300">
        <img
          src={product.image}
          alt=""
          className="h-40 object-contain mx-auto max-h-full"
        />
        <h2 className="flex-wrap mt-3 font-semibold line-clamp-2">
          {product.title}
        </h2>
        <p className="mt-2 text-green-500 font-semibold">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
