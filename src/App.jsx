import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Main from './pages/Main'
import Login from './components/Login'

const App = () => {
  return (
    <div>

    <Routes>
      <Route path='/' element={<Main/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
    </Routes>
    </div>
  )
}

export default App
