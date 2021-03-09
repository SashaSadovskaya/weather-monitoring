import './App.css';
import Form from './Form'
import CityInfo from "./CityInfo";
import React, {useState} from 'react';
import {convertTime, convertWindDir} from "./utilities";
import CitySearch from "./CitySearch";


function App() {
  const appID = '8e1eecd6fc68b8490908497ecf8ca301';
  const cities = [];
  const [id, setId] = useState(0);


  const gettingWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=en&appid=${appID}&units=metric`);
    const data = await url.json();
    if (city){
      localStorage.setItem(city,JSON.stringify({
        'city': city,
        'temp': Math.round(data.main.temp),
        'humidity': data.main.humidity,
        'pressure': data.main.pressure,
        'windForce': Math.round(data.wind.speed),
        'windDirection': convertWindDir(data.wind.deg),
        'time': convertTime(new Date()),
        'id': id,
      }));
    setId(Math.round(Math.random()*100000));

    }
  };

  for (let key in localStorage) {
    if (!localStorage.hasOwnProperty(key)) {
      continue;
    }

    cities.push(
      JSON.parse(localStorage.getItem(key))
    );
  }

  return (
    <div className="App">
      <div>
        <Form weather={gettingWeather}/>
      </div>

      <div className='cities-container'>
        {cities.map((city, i) =>
        <CityInfo
                  key ={i}
                  city={city}
                  temp={city.temp}
                  pressure={city.pressure}
                  humidity={city.humidity}
                  windForce={city.windForce}
                  windDirection={city.windDirection}
                  time={city.time}
                  setId={setId}
        />
        )}
      </div>
      <CitySearch weather={gettingWeather}/>
    </div>
  );
}

export default App;
