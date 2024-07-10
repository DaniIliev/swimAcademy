import { useState } from 'react'
import Home from './components/home/Home'
import Module from './components/module/Module'
import { Route, Routes } from "react-router-dom"
import Dobrudzha from './components/dobrudzha2021/Dobrudzha'
import NavBar from './components/navBar/NavBar'

function App() {
  return (
    <>
    <NavBar /> 
    <Routes>
      <Route path='/' element={<Dobrudzha/>}/>
      <Route path='/summerCamp' element={<Home/>}/>
      <Route path='/modules' element={<Module/>} />
    </Routes>
    </>
  )
}
export default App
