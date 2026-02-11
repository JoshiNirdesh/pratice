import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate();
  return (
    <div className='flex justify-between'>
      <Link to="/">Logo</Link>
      <button onClick={()=>navigate("/login")} className="cursor-pointer">Login </button>
    </div>
  )
}

export default Navbar
