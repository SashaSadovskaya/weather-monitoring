import React from "react";
import './CityInfo.css'

const CityInfo =  ({city, temp, humidity, pressure, windForce, windDirection}) => {
  console.log(temp);
  return (
    <div>
      {city &&
      <div className="cityInfo-container">

        <h3 className='city-title'>Город: {city}</h3>

        <div className="info-container">
          <span>Температура: {temp} °C</span>
          <span>Влажность: {humidity} %</span>
          <span>Атмосферное давление: {pressure}</span>
          <span>Сила и направление ветра: {windForce} м/c {windDirection}</span>
          <span>Последнее обновление: </span>
        </div>

        <div>
          <button className='button button-delete'>Удалить</button>
          <button className='button button-update'>Обновить</button>
        </div>
      </div>
      }
    </div>
  );
};

export default CityInfo;
