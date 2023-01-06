import React from 'react'
import SideBar from '../components/SideBar'
import InfoWeather from '../components/InfoWeather'

import '../App.css'

const Home = () => {
    return (
    <div className='text-center p'>
        <div className='row'>
        <div className="col-lg-4 col-md-12 p-0 text-white">
            <SideBar />
        </div>
        <div className='col-lg-8 col-md-12 p-0'>
            <InfoWeather />
        </div>
        </div>        
    </div >
  )
}

export default Home;