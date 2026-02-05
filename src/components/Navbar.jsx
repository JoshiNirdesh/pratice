import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const{searchQuery,setSearchQuery}=useContext(AppContext);
  const navigate = useNavigate()
  return (
    <div className="mt-5">  
      <div className="flex items-center justify-between">
        <Link to="/">Logo</Link>
        <ul className="list-none flex gap-20 cursor-pointer"> 
          <Link to="/"><li>Home</li></Link>
          <Link to="/product"><li>Product</li></Link>
        </ul>
        <input type="text" className="border p-2 border-gray-300 rounded-lg" placeholder="Search" onChange={(e)=>setSearchQuery(e.target.value)} value={searchQuery} onClick={()=>navigate('/product')}/>
        <button className="bg-green-500 px-5 py-2 border rounded-lg outline-none text-white hover:bg-green-400 cursor-pointer">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
