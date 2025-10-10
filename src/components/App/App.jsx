import React, { Suspense } from 'react'
import Card from '../Card/Card'
import { Link } from 'react-router'

function App({data}) {
    
    
  return (
    <div className='flex flex-col justify-center items-center p-10 w-full '>

        <h1 className='text-4xl font-bold text-[#001931]'>Trending Apps</h1>
        <p className=' pt-3 pb-7 text-gray-400'>Explore All Trending Apps on the Market developed by us</p>


        <div className="appsection grid md:grid-cols-4 grid-cols-1 gap-4">
            <Suspense fallback={<p>Loadding....</p>}>

            {
                data.slice(0,8).map((singleCard)=> <Card key={singleCard.id} singleCard={singleCard} ></Card>)
            }
           

            </Suspense>

          

           

           

        </div>

          <div className="button flex justify-center w-full items-center pt-7 ">

            <Link to={'/AllApps'}>
            <button className="btn bg-gradient-to-br from-[#632EE3] to-[#9F62F2]"> 
                      Show All
                    </button>
            
            </Link>
                 


            </div>

      
    </div>
  )
}

export default App
