import React from "react";

const Navbar = () => {
  return (
    <div className="mt-5">  
      <div className="flex items-center justify-between">
        <p>Logo</p>
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
