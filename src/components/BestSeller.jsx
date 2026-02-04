import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import ProductCard from "./ProductCard";


const BestSeller = () => {
  const { products } = useContext(AppContext);

  return (
    <div className="mt-15">
      <p className="text-xl font-medium">Best Seller</p>
      <div className="grid grid-cols-5">
        {products
          .filter((item) => item.inStock)
          .slice(0, 5)
          .map((item, index) => (
            <ProductCard product={item} key={index}/>
          ))}
      </div>
    </div>
  );
};

export default BestSeller;
