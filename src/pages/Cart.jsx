import React, { useState } from "react";
import Navbar from "../components/Navbar";

const Cart = () => {
    const [cartItems,setCartItems]=useState([])
    const addToCart = (itemId)=>{
        let cartData = {...cartItems};
        if(cartData[itemId]){
            cartData[itemId]+=1;
        }
        else{
            cartData[itemId]=1
        }
        setCartItems(cartData)
        console.log(cartData)
    }
    const getCartCount = ()=>{
        let totalCount  = 0;
        for(const items in cartItems){
            totalCount+=cartItems[items]
        }
        return totalCount
    } 
    const removeFromCart=(itemId)=>{
        let cartData = {...cartItems}
        if(cartData[itemId]){
            cartData[itemId]-=1
        }
        if(cartData[itemId]===0){
            delete cartData[itemId]
        }
        setCartItems(cartData)
    }
  return (
    <div>
      <Navbar />
      <div onClick={()=>addToCart(2)}>Add</div>
            <div onClick={()=>addToCart(3)}>Add</div>
                        <div onClick={()=>removeFromCart(3)}>Remove</div>

            <div>{getCartCount()}</div>

    </div>
  );
};

export default Cart;
