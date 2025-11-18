import React, { useEffect } from 'react'
import {Link} from 'react-router-dom'
import Home from './Home'
import About from './About'


const Navbar = () => {
    useEffect(()=>{
        const nav=document.querySelector(".navbar");
        const onScroll=()=>{
            
            if(window.scrollY>85){
                nav.classList.add("backdrop-blur-md");
            }else{
                nav.classList.remove("backdrop-blur-md");
            }
        }
        window.addEventListener("scroll",()=>{
            setTimeout(onScroll,-1000);
        });
        return () => window.removeEventListener("scroll", onScroll);
    },[])

  return (
   
        <div className='navbar fixed z-99 w-full bg-linear-to-r/longer from-red-300 to-sky-600 bg-clip-text text-transparent h-[10%] flex items-center justify-between p-10 '>
      <div className='logo flex items-center font-serif font-bold text-2xl'> 
        <div className="img"></div>
        <div className="name bg-gradiant"> Anoop Yadav </div>
      </div>
      <div className='flex justify-between space-x-4'>
       <div className='sm:flex  hidden  space-x-5 font-semibold text-2xl justify-around'> 
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/project">Project</Link>
        <input type="text" placeholder='Search here .....' className='bg-white py-1 px-3 outline-none focus:ring-2 focus:ring-emerald-500'/>
        </div>
        <div className='sm:hidden font-bold text-2xl '>
            <i className="ri-menu-3-line"></i>
        </div>
      </div>
    </div>
   
  )
}

export default Navbar
