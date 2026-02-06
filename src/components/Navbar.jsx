import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import App from "../App";

const Navbar = () => {
  const{searchQuery,setSearchQuery,setShowUserLogin}=useContext(AppContext);
  const{getCartCount}=useContext(AppContext)
  const navigate = useNavigate()
  return (
    <div className="mt-5">  
      <div className="flex items-center justify-between">
        <Link to="/">Logo</Link>
        <ul className="list-none flex gap-20 cursor-pointer"> 
          <Link to="/"><li>Home</li></Link>
          <Link to="/product"><li>Product</li></Link>

        </ul>
        <div className="relative"> 
        <Link to="/cart">Cart</Link>
        <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-xs absolute -top-2 -right-4 text-white">{getCartCount()}</div>
        </div>
        <input type="text" className="border p-2 border-gray-300 rounded-lg" placeholder="Search" onChange={(e)=>setSearchQuery(e.target.value)} value={searchQuery} onClick={()=>navigate('/product')}/>
        <button className="bg-green-500 px-5 py-2 border rounded-lg outline-none text-white hover:bg-green-400 cursor-pointer" onClick={()=>setShowUserLogin(true)}>Login</button>
      </div>
    </div>
  );
};

export default Navbar;
