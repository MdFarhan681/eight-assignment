import React from 'react'
import Navber from '../../components/Header/navber'
import Footer from '../../components/Footer/Footer'
import { Outlet } from 'react-router'

function Root() {
  return (
    <div className='w-full flex flex-col min-h-screen '>
       <Navber></Navber>
       <div className="outlet bg-[#F7F7F7] flex-1 py-10">
         <Outlet ></Outlet>

       </div>
       
        <Footer></Footer>
   
              
    </div>
  )
}

export default Root
