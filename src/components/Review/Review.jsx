import React from 'react'

function Review() {
  return (
    <div className='bg-gradient-to-r from-[#632EE3]  to-[#9F62F2] flex flex-col text-center py-15 text-white '>
        <h1 className='text-4xl font-bold  pb-5'>Trusted by Millions, Built for You</h1>

        <div className="cont flex justify-around items-center ">
             <div className="download">
            <p className='text-[.8rem] text-gray-300'>Total Downloads</p>
            <p className='text-5xl font-bold py-2'>29.6M</p>
            <p className='text-[.8rem] text-gray-300'>21% more than last month</p>
        </div>
        <div className="review  ">
            <p className='text-[.8rem] text-gray-300'>Total Reviews</p>
            <p className='text-5xl font-bold py-2'>906K</p>
            <p className='text-[.8rem] text-gray-300'>46% more than last month</p>
        </div>
        <div className="app">
            <p className='text-[.8rem] text-gray-300'>Active Apps</p>
            <p className='text-5xl font-bold py-2'>132+</p>
            <p className='text-[.8rem] text-gray-300'>31 more will Launch</p>
        </div>
        


        </div>
       
      
    </div>
  )
}

export default Review
