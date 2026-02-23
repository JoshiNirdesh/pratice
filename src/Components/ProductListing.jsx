import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const ProductListing = () => {
  const [products, setProducts] = useState([]);

  const fetchProduct = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    setProducts(data);
  };

  useEffect(() => {
    fetchProduct();
  }, []);
  return (
    <div className="grid grid-cols-5 px-12 py-10">
      {products.map((product, index) => (
        <ProductCard product={product} key={index} />
      ))}
    </div>
  );
};

export default ProductListing;
