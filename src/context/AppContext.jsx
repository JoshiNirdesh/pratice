import { createContext, useEffect, useState } from "react";
import { categories, dummyProducts } from "../assets/greencart_assets/assets";

export const AppContext = createContext();


export const AppProvider = ({children})=>{
    const [products,setProducts]=useState([]);
    const[category,setCategory]=useState([])
    const [searchQuery,setSearchQuery]=useState("")

    useEffect(()=>{
        setProducts(dummyProducts)
    },[])
    useEffect(()=>{
        setCategory(categories)
    },[])

    const values = {products,category,searchQuery,setSearchQuery}
    return(
        <AppContext.Provider value={values}>
                {children}
        </AppContext.Provider>
    )
}

