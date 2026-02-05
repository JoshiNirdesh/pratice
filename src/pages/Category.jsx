import React from "react";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import {  dummyProducts } from "../assets/greencart_assets/assets";
import ProductCard from "../components/ProductCard";

const Category = () => {
  const { category } = useParams();
  console.log(category);

  const filterProducts = dummyProducts.filter(
    (item) => item.category.toLowerCase() === category.toLowerCase(),
  );
  console.log(filterProducts);

  return (
    <div>
      <Navbar />
      <div className="mt-10">
        <p className="text-xl font-medium">{category}</p>
        <div className="mt-10 grid grid-cols-5">
            {filterProducts.map((item,index)=>(
                <ProductCard product={item} key={index}/>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
