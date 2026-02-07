
import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Cart = () => {
    const [cartArray,setCartArray]=useState([]);
    const {cartItems}=useContext(AppContext);

    const getCart = ()=>{
        
    }

  return (
    <div>
      
    </div>
  )
}

export default Cart
