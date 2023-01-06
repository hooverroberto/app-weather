import React from 'react'
import imagen from '../images/LightCloud.png'

const SideBar = () => {
    return (
        <div className='h d-flex flex-column align-items-center bg mb-5'>
            <div className='d-flex d-flex justify-content-between alto text-white'>
                <input className='mx-3 text-center bg bg-secondary border-0 text-white' placeholder='Ciudad de México' />
                <button className='btn'><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-vinyl-fill" viewBox="0 0 16 16">
                    <path d="M8 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm0 3a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4 8a4 4 0 1 0 8 0 4 4 0 0 0-8 0z" />
                </svg></button>
            </div>
            <img className='img' src={imagen} alt="" />
            <p className='grade'>15<span className='grades'>°C</span></p>
            <p className='weather'>Shower</p>
            <p className='day'>Today . Fri, 5 Jun</p>
            <div>
                <p className='place'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                    </svg>
                    Ciudad de México
                </p>
            </div>

        </div>
    )
}

export default SideBar;