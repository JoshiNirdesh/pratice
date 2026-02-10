import React from 'react'

const Home = () => {
    const user = JSON.parse(localStorage.getItem("user")).user.username; 
    console.log(user)
  return (
    <div>
      This is {user}
    </div>
  )
}

export default Home
