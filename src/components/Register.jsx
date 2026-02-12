import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const [name,setName]=useState("");
    const [password,setPassword]=useState("");
    const [email,setEmail]=useState("");
    const navigate = useNavigate();

    const handleClick = async()=>{
     try {
           const data  = {name,email,password};
        const res = await axios.post("http://localhost:4000/api/register",data);
        console.log(res.data.message)
        navigate("/login")
     } catch (error) {
        console.log("register api error ")
     }
    }
  return (
    <div>
       <div>
         <label htmlFor="">Name</label><br />
      <input type="text" placeholder='enter name' className='border' value={name} onChange={(e)=>setName(e.target.value)}/><br />
      <label htmlFor="">Email</label><br />
      <input type="email" placeholder='enter email' className='border' value={email} onChange={(e)=>setEmail(e.target.value)}/><br />
      <label htmlFor="">password</label><br />
      <input type="password" placeholder='enter password' className='border' value={password} onChange={(e)=>setPassword(e.target.value)} /><br />
      <button className='border cursor-pointer' onClick={handleClick}>Submit</button>
      <Link to="/login">Login</Link>
    </div>
    </div>
  )
}

export default Register
