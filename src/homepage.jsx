import React, { useState } from 'react'
import "./homepage.css"
import { ReactDOM } from 'react'




const Homepage = () => {
  const [city, setCity] = useState("")

  const [weather, setweather] = useState([])
  const [flag, setflag] = useState(true)





  const clickHandler = () => {
   
    
   
   

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=28f2ba0a8bd96c69b2d4e2c58c855352`)
     .then(res=>res.json())
      .then( (res) => setweather(res))
      .catch(err => console.log(err))
      if(weather.cod !==200){
        setflag(false)
  
      }
      else{  setflag(true)}
    
     
   
    
    
  
    

  }




  return (
    <div className='weather'>

      <h2>Weather App</h2>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <input placeholder='Enter City Name' onChange={(e) => { setCity(e.target.value) }} />
        <button onClick={clickHandler}>city</button>

      </div>

   
  
        {flag ?  <div className='weather_details'>  
       <h4>Weather Details of City : {weather.name} </h4>
       <h4>Current Temperature :  {weather?.main?.temp}</h4>
       <h4>Temperature Range  :  {weather?.main?.temp_min}-{weather?.temp_max}</h4>
       <h4>Humidity :  {weather?.main?.humidity}</h4>
       <h4>Sea Level :{weather?.main?.sea_level}</h4>
       <h4>Ground Level :{weather?.main?.grnd_level}</h4>
     </div>: <div className='prompt'><p>enter a valid city name</p></div>}
  
    </div>

  )
}

export default Homepage