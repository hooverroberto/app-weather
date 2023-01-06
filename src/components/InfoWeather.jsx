import React from 'react'
import imagen from '../images/LightCloud.png'

const InfoWeather = () => {
    return (
        <div className='h'>            
            <div class="container d-flex flex-wrap text-center text-white">
                <div className='contenedor'>
                    <div class="row alineacion">                        
                        <div class="col-6 col-xl-2">
                            <div className='box'>
                                <p className='mt-3'>Tomorrow</p>
                                <img className='tomorrow' src={imagen} alt=""/>
                                <div className='d-flex justify-content-evenly mt-3'>
                                    <p className='max'>16 °C</p>
                                    <p className='min'>11 °C</p>
                                </div>
                            </div>
                        </div>  
                        <div class="col-6 col-xl-2">
                            <div className='box'>
                                <p className='mt-3'>Tomorrow</p>
                                <img className='tomorrow' src={imagen} alt="" />
                                <div className='d-flex justify-content-evenly mt-3'>
                                    <p className='max'>16 °C</p>
                                    <p className='min'>11 °C</p>
                                </div>
                            </div>
                        </div> 
                        <div class="col-6 col-xl-2">
                            <div className='box'>
                                <p className='mt-3'>Tomorrow</p>
                                <img className='tomorrow' src={imagen} alt=""/>
                                <div className='d-flex justify-content-evenly mt-3'>
                                    <p className='max'>16 °C</p>
                                    <p className='min'>11 °C</p>
                                </div>
                            </div>
                        </div>  
                        <div class="col-6 col-xl-2">
                            <div className='box'>
                                <p className='mt-3'>Tomorrow</p>
                                <img className='tomorrow' src={imagen} alt="" />
                                <div className='d-flex justify-content-evenly mt-3'>
                                    <p className='max'>16 °C</p>
                                    <p className='min'>11 °C</p>
                                </div>
                            </div>
                        </div>  
                        <div class="col-6 col-xl-2">
                            <div className='box'>
                                <p className='mt-3'>Tomorrow</p>
                                <img className='tomorrow' src={imagen} alt="" />
                                <div className='d-flex justify-content-evenly mt-3'>
                                    <p className='max'>16 °C</p>
                                    <p className='min'>11 °C</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-6">                           
                        </div>                       
                    </div>                    
                </div>
            </div>
            <div class="container d-flex flex-wrap text-center text-white">
                <p className='mt-4 fs-1'>Today’s Hightlights </p>
                <div className='contenedor alineacion'>
                    <div class="row">                        
                        <div class="col-12 col-xl-6">
                            <div className='box1'>
                                <p className='mt-3'>Wins Status</p>
                                <p className='millas'>7mph</p>
                                <div className='d-flex justify-content-evenly mt-3'>
                                    <p className='max'>Play</p>
                                    <p className='min'>WSW</p>
                                </div>
                            </div>
                        </div> 
                        <div class="col-12 col-xl-6">
                            <div className='box1'>
                                <p className='mt-3'>Wins Status</p>
                                <p className='millas'>7mph</p>
                                <div className='d-flex justify-content-evenly mt-3'>
                                    <p className='max'>Play</p>
                                    <p className='min'>WSW</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-xl-6">
                            <div className='box1'>
                                <p className='mt-3'>Wins Status</p>
                                <p className='millas'>7mph</p>
                                <div className='d-flex justify-content-evenly mt-3'>
                                    <p className='max'>Play</p>
                                    <p className='min'>WSW</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-xl-6">
                            <div className='box1'>
                                <p className='mt-3'>Wins Status</p>
                                <p className='millas'>7mph</p>
                                <div className='d-flex justify-content-evenly mt-3'>
                                    <p className='max'>Play</p>
                                    <p className='min'>WSW</p>
                                </div>
                            </div>
                        </div> 
                    </div>                    
                </div>
            </div>
        </div>
    )
}

export default InfoWeather;