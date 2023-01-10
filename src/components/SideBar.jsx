import React, {useEffect, useState} from 'react'
import axios from 'axios'
import imagen from '../images/LightCloud.png'




const SideBar = () => {

    const KEY = "f23bcfc28bed7378d35666f6fad9c6a4"
    const [cities, setCities] = useState("")
    const [datos, setDatos] = useState({})

    // const url = "http://openweathermap.org/img/wn/";
    // const iconUrl = url + datos.weather[0]?.icon + ".png";


    const datosClima = (city) =>{
        if(!city) return
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + KEY
        axios.get(apiUrl)
            .then((response) =>{
              console.log("response", response.data) 
              setDatos(response.data)
            })
            .catch((err) =>{
                console.log("err", err);
            })
    }

    const input = (e) =>{
        console.log(e.target.value)
        setCities(e.target.value)
    }

    const buscar = () => {
        datosClima(cities)
    }

    useEffect(() =>{
        datosClima("mexico")
    },[])


    return (
        <div className='h bg d-flex flex-column justify-content-around align-items-center'>
            <div className='d-flex justify-content-between text-white'>
                <input className='mx-3object text-center bg bg-secondary border-0 text-white' placeholder='Ciudad de México' value={cities} onChange={input}/>
                <button className='btn' type="button" onClick={buscar}><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-vinyl-fill" viewBox="0 0 16 16">
                    <path d="M8 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm0 3a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4 8a4 4 0 1 0 8 0 4 4 0 0 0-8 0z" />
                </svg></button>
            </div>
            <div className="d-flex flex-column justify-content-around align-items-center" style={{height: 400}}>
                
                    
                <img src={ imagen } alt=""/> 
                    
                
                <h2 className='font-grade'>{((datos?.main?.temp) - 273.15).toFixed(0)}<span className='grades'>°C</span></h2>
                <p className='weather'>{datos?.weather[0]?.main}</p>
                <p className='day'>Today . Fri, 5 Jun</p>
            </div>
            <div>
                <p className='place'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                    </svg>
                    <span>{datos?.name}</span> 
                </p>
            </div>

        </div>
    )
}

export default SideBar;