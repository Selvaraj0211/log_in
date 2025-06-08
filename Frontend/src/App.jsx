import { useState } from 'react'
import { BrowserRouter, Route, Routes }  from "react-router-dom"
import './App.css'
import Home from './pages/Home'
import Success from './pages/Success'
import Fail from'./pages/Fail'
import Signup from './pages/Signup'

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/success' element={<Success/>}/>
      <Route path='/fail' element={<Fail/>}/>
    </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default App
