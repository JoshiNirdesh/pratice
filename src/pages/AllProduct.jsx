import React, { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { AppContext } from "../context/AppContext";
import ProductCard from "../components/ProductCard";

const AllProduct = () => {
  const { products, searchQuery } = useContext(AppContext);
  const [filterProducts,setFilterProducts]=useState([])

    useEffect(()=>{
        if(searchQuery.length>0){
            setFilterProducts(products.filter(product=>product.name.toLowerCase().includes(searchQuery.toLowerCase())))
        }
        else{
            setFilterProducts(products)
        }
       
    },[products,searchQuery])
    
  return (
    <div>
      <Navbar />
      <div className="mt-10">
        <div className="grid grid-cols-5">
          {filterProducts.map((product, index) => (
            <ProductCard product={product} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProduct;
