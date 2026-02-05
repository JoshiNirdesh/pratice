import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="mt-5">  
      <div className="flex items-center justify-between">
        <Link to="/">Logo</Link>
        <ul className="list-none flex gap-20 cursor-pointer"> 
          <Link to="/"><li>Home</li></Link>
          <Link to="/product"><li>Product</li></Link>
        </ul>
        <input type="text" className="border p-2 border-gray-300 rounded-lg" placeholder="Search" />
        <button className="bg-green-500 px-5 py-2 border rounded-lg outline-none text-white hover:bg-green-400 cursor-pointer">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
