import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Login = () => {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("password");

    const handleClick = async ()=>{
       try {
         const data = {email,password};
        const res = await axios.post("http://localhost:4000/api/login",data);
        localStorage.setItem("user",JSON.stringify(res.data))
       } catch (error) {
        console.log("login api");
       }
    }
    
  return (
    <div>
      <label htmlFor="">Email</label><br />
      <input type="email" placeholder='enter email' className='border' value={email} onChange={(e)=>setEmail(e.target.value)}/><br />
      <label htmlFor="">password</label><br />
      <input type="password" placeholder='enter password' className='border' value={password} onChange={(e)=>setPassword(e.target.value)} /><br />
      <button className='border cursor-pointer' onClick={handleClick}>Submit</button>
      <Link to="/register" className='border cursor-pointer'>Register</Link>
    </div>
  )
}

export default Login
