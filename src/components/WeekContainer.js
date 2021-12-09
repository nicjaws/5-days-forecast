import React, { Component } from 'react'
import DayCard from './DayCard'

var moment = require('moment');

class WeekContainer extends Component {

    state = {
        dailyData: [],
        fullData: [],
        degreeType: "celsius"
      }
    
      updateForecastDegree = event => {
        this.setState({
          degreeType: event.target.value
        }, () => console.log(this.state))
      }
      

    componentDidMount = () => {
        const weatherURL =
        `https://api.openweathermap.org/data/2.5/forecast?q=London&units=metric&appid=${process.env.REACT_APP_API_KEY}`
    
        fetch(weatherURL)
        .then(res => res.json())
        .then(data => {
          // Día de hoy y los siguientes 4 días
          let weekData = [];
          for (let i = 0; i < 5; i++) {
            weekData[i] = data.list.filter((reading) => reading.dt_txt.includes(moment().add(i,'days').format("YYYY-MM-DD")));

          }
          console.log(weekData)

          
            // weekData para cada i, obtener min y max de todas las muestras
            // mostrar en frontend min y max obtenido de todas las muestras de cada día


          {/* const max = parseFloat(Math.max(...weekData.temp_max));
          console.log(max);
          const min = parseFloat(Math.min(...weekData[0]));
          console.log(min);
          */}




          const dailyData = data.list.filter((reading) => reading.dt_txt.includes("15:00:00"))
          this.setState({
            dailyData: dailyData
           
          }, () => console.log(this.state))
        })
      }
    
      formatDayCards = () => {
        return this.state.dailyData.map((reading, index) => <DayCard reading={reading} key={index} />)
      }
    
      render() {
        return (
          <div className="container">
          <h1 className="display-1 jumbotron">5 Days Forecast</h1>
          <h5 className="display-5 text-muted">LONDON, UK</h5>
          <h6>Updated {moment().format('HH:mm')}</h6>
            <div className="row justify-content-center">
    
              {this.formatDayCards()}
    
            </div>
          </div>
        )
      }
}


export default WeekContainer;

