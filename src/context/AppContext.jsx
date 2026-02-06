import { createContext, useEffect, useState } from "react";
import { categories, dummyProducts } from "../assets/greencart_assets/assets";

export const AppContext = createContext();


export const AppProvider = ({children})=>{
    const [products,setProducts]=useState([]);
    const[category,setCategory]=useState([])
    const [searchQuery,setSearchQuery]=useState("")
    const [cartItems,setCartItems]=useState([]);
    const[showUserLogin,setShowUserLogin]=useState(false)

    useEffect(()=>{
        setProducts(dummyProducts)
    },[])
    useEffect(()=>{
        setCategory(categories)
    },[])

    const addToCart = (itemId)=>{
        let cartData = {...cartItems};
        if(cartData[itemId]){
            cartData[itemId]+=1;
        }
        else{
            cartData[itemId]=1
        }
        setCartItems(cartData)
    }
    const getCartCount = ()=>{
        let totalCount = 0;
        for (const items in cartItems){
            totalCount +=cartItems[items]
        }
        return totalCount
    }
    const removeFromCart = (itemId)=>{
        let cartData = {...cartItems}
        if(cartData[itemId]){
            cartData[itemId]-=1
        }
        if(cartData[itemId]==0){
            delete cartData[itemId]
        }
        setCartItems[cartData]
    }
    const values = {products,category,searchQuery,setSearchQuery,addToCart,getCartCount,removeFromCart,cartItems,showUserLogin,setShowUserLogin}
    return(
        <AppContext.Provider value={values}>
                {children}
        </AppContext.Provider>
    )
}

