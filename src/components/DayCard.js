import React from 'react';


var moment = require('moment');

const DayCard = ({ reading, degreeType }) => {
  let newDate = new Date();
  const dailyData = reading.dt * 1000
  newDate.setTime(dailyData)

  const fahrenheit = Math.round(reading.main.temp)
  const celsius = Math.round((fahrenheit - 32) * 5/9)

  const imgURL = `owf owf-${reading.weather[0].id} owf-5x`

  return (
    <div className="col-sm-2">
      <div className="card">
        <h3 className="card-title">{moment(newDate).format('dddd')}</h3>
        <h5 className="text-muted"> {moment(newDate).format('MMMM Do')}</h5> 
        
        <i className={imgURL}></i>
        <h2>{degreeType === "celsius" ? celsius + "°C" : fahrenheit + "°C"}</h2>
        <div className="card-body">
          <p className="card-text">{reading.weather[0].description}</p>
          <p className="card-text">Humidity: {dailyData.humidity} %</p>
          <p className="card-text">Max. Temp: {dailyData.temp_max} ºC</p> {/* list.main.temp_max ?? */}
          <p className="card-text">Max. Temp: {dailyData.temp_min} ºC</p> {/* list.main.temp_min ?? */}
        </div>
      </div>
    </div>
  )
}

export default DayCard;