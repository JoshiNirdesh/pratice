import React from 'react'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Category from './pages/Category'
import ProductDetails from './components/ProductDetails'

const App = () => {
  return (
    
    <div className='mr-15 ml-15'>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/categories/:category' element={<Category/>}></Route>
        <Route path='/product/:id' element={<ProductDetails/>}></Route>
      </Routes>
    </div>
  )
}

export default App
