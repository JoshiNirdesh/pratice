import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Link } from "react-router-dom";

const Categories = () => {
  const { category } = useContext(AppContext);
  return (
    <div className="mt-10">
      <div>
        <p className="text-xl font-medium"> Categories</p>
        <div className="flex items-center justify-between text-center mt-10">
          {category.map((item, index) => (
            <div
              key={index}
              className="hover:pointer p-5 rounded cursor-pointer"
              style={{ backgroundColor: item.bgColor }}
            >
              <Link to={`/categories/${item.path}`}>
                <img src={item.image} alt="" className="w-35" />
                <p>{item.text}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
