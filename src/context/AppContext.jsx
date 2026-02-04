import { createContext, useEffect, useState } from "react";
import { categories, dummyProducts } from "../assets/greencart_assets/assets";

export const AppContext = createContext();


export const AppProvider = ({children})=>{
    const [products,setProducts]=useState([]);
    const[category,setCategory]=useState([])

    useEffect(()=>{
        setProducts(dummyProducts)
    },[])
    useEffect(()=>{
        setCategory(categories)
    },[])

    const values = {products,category}
    return(
        <AppContext.Provider value={values}>
                {children}
        </AppContext.Provider>
    )
}

