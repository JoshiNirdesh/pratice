import React, { useState } from "react";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import {  dummyProducts } from "../assets/greencart_assets/assets";

const Product = () => {
  const { id } = useParams();
  console.log(id);
  const filterProducts = dummyProducts.find((item) => item._id === id);
  const [thumbnail,setThumbnail]=useState(filterProducts.image[0])

  return (
    <div>
      <Navbar />
      <div className="mt-20 ml-20">
        <div className="flex gap-1 ">
          <p>Home /</p>
          <p> {filterProducts.category} / </p>
          <p> {filterProducts.name}</p>
        </div>
        <div className="mt-10">
          <div className="flex gap-10">
          <div>
            {filterProducts.image.map((img, index) => (
              <img src={img} alt="" key={index} className="w-30 border border-gray-300 mb-3 mt-2 cursor-pointer" onClick={()=>setThumbnail(img)} />
            ))}
          </div>
          <img src={thumbnail} alt="" className="border border-gray-300" />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Product;
