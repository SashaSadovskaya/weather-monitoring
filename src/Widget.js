import React from "react";
import './CityInfo.css'


const Widget =  ({city, temp, message}) => {

  return (
    <div>
      {city &&
      <div className="cityInfo-container">
        <span>{message}</span>
        <h4 className='city-title'>Город: {city.city}</h4>
        <span>Температура: {temp} °C</span>
      </div>
      }
    </div>
  );
};

export default Widget;
