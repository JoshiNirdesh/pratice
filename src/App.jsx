import React, { useContext } from "react";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Category from "./pages/Category";
import ProductDetails from "./components/ProductDetails";
import AllProduct from "./pages/AllProduct";
import Cart from "./pages/Cart";
import { AppContext } from "./context/AppContext";
import Login from "./components/Login";

const App = () => {
  const {showUserLogin}=useContext(AppContext)
  return (
    <div className="mr-15 ml-15">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/categories/:category" element={<Category />}></Route>
        <Route path="/product/:id" element={<ProductDetails />}></Route>
        <Route path="/product" element={<AllProduct />}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
      </Routes>
              {showUserLogin ? <Login/>:""}

    </div>
  );
};

export default App;
