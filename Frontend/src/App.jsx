import React from 'react'
import Navbar from './Component/Navbar'
import Home from './Component/Home'
import About from './Component/About'
import {Routes,Route} from 'react-router-dom'
import Project from './Component/Project'
import Admin from './Pages/Admin'
import FormScene from './Pages/FormScene'

const App = () => {
  return (
    <div className='bg-black  w-screen h-screen '>
       <Home/>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/about" element={<About/>} />
        <Route path="/project" element={<Project/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/Admine" element={<Admin/>} />
      </Routes>
    </div>
  )
}

export default App
