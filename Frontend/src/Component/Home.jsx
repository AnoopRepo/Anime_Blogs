import React from 'react'
import car1 from '../assets/car1.jpg'
import Navbar from './Navbar'

const Home = () => {
  return (
    <div className=' bg-transparent space-y-10'>
       
      <div className='w-full h-full flex justify-center items-center '>
        <img src={car1} alt="" />
      </div> 
    </div>
  )
}

export default Home
