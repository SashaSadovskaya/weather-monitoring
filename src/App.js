import './App.css';
import Form from './Form'
import CityInfo from "./CityInfo";
import React, {useState} from 'react';
import {convertWindDir} from "./utilities";

function App() {
  const appID = '8e1eecd6fc68b8490908497ecf8ca301';

  const [cities, setCities] = useState([]);


  const gettingWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;


    const url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=en&appid=${appID}&units=metric`);
    const data = await url.json();
    console.log(data);
    if (city){
      localStorage.setItem(city,JSON.stringify({
        'city': city,
        'temp': Math.round(data.main.temp),
        'humidity': data.main.humidity,
        'pressure': data.main.pressure,
        'windForce': Math.round(data.wind.speed),
        'windDirection': convertWindDir(data.wind.deg),
        'time': new Date()
      }));
    }
    for (let key in localStorage) {
      if (!localStorage.hasOwnProperty(key)) {
        continue; // пропустит такие ключи, как "setItem", "getItem" и так далее
      }

      cities.push(
          JSON.parse(localStorage.getItem(key))
      );

    }
    setCities(cities);
    console.log(cities); // тут выводится массив объектов
  };

  console.log(cities); // тут выводится пустой массив
  return (
    <div className="App">
      <div>
        <Form weather={gettingWeather}/>
      </div>
      <div>
        {cities.map(city =>
        <CityInfo
                  city={city}
                  temp={city.temp}
                  pressure={city.pressure}
                  humidity={city.humidity}
                  windForce={city.windForce}
                  windDirection={city.windDirection}
        >
        </CityInfo>)}
      </div>
    </div>
  );
}

export default App;
