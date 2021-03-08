import React from "react";
import './CityInfo.css'

const CityInfo =  ({city, temp, humidity, pressure, windForce, windDirection, time, setId}) => {

  const deleteCity = () => {
    localStorage.removeItem(city.city);
    setId(Math.round(Math.random()*100000));
  };

  const updateCity = () => {
    console.log('updating')
  };

  return (
    <div>
      {city &&
      <div className="cityInfo-container">
        <h3 className='city-title'>Город: {city.city}</h3>
        <div className="info-container">
          <span>Температура: {temp} °C</span>
          <span>Влажность: {humidity} %</span>
          <span>Атмосферное давление: {pressure}</span>
          <span>Сила и направление ветра: {windForce} м/c {windDirection}</span>
          <span>Последнее обновление: {time}</span>
        </div>
        <div>
          <button onClick={()=> deleteCity()} className='button button-delete'>Удалить</button>
          <button onClick={()=> updateCity()}  className='button button-update'>Обновить</button>
        </div>
      </div>
      }
    </div>
  );
};

export default CityInfo;
