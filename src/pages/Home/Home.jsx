import React from 'react'
import Banner from '../../components/Banner/banner'
import Review from '../../components/Review/Review'
import App from '../../components/App/App'
import { useLoaderData } from 'react-router'

function Home() {
  const data =useLoaderData();

  return (
    <div className=''>
        <Banner></Banner>
        <Review></Review>
        <App data={data}></App>
        
      
    </div>
  )
}

export default Home
