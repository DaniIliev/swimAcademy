import { useState } from 'react'
import Home from './components/home/Home'
import Module from './components/module/Module'
import { Route, Routes } from "react-router-dom"
function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/modules' element={<Module/>} />
    </Routes>
  )
}
export default App
