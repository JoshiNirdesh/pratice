import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="mt-5">  
      <div className="flex items-center justify-between">
        <Link to="/">Logo</Link>
        <ul className="list-none flex gap-20 cursor-pointer"> 
          <li>Home</li>
          <li>Product</li>
        </ul>
        <button className="bg-green-500 px-5 py-2 border rounded-lg outline-none text-white hover:bg-green-400 cursor-pointer">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
