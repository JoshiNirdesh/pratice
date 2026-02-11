import axios from 'axios';
import React from 'react'

const Home = () => {
    const user = JSON.parse(localStorage.getItem("user")).user.username; 
    console.log(user)

    const getTask = async( req,res)=>{
      const res = axios.get

    } 
  return (
    <div>
      This is {user}

    </div>
  )
}

export default Home
