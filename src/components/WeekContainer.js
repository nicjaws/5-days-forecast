import React, { Component } from 'react'
import DayCard from './DayCard'

var moment = require('moment');

class WeekContainer extends Component {

    state = {
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
          const fullData = data.list.filter((reading) => reading.dt_txt.includes("18:00:00"))
          this.setState({
            
            fullData: fullData
          }, () => console.log(this.state))
        })
      }
    
      formatDayCards = () => {
        return this.state.fullData.map((reading, index) => <DayCard reading={reading} key={index} />)
      }
    
      render() {
        return (
          <div className="container">
          <h1 className="display-1 jumbotron">5 Days Forecast</h1>
          <h3 className="display-5 text-muted">LONDON, UK</h3>
          <h5>Updated {moment().format('h:mm a')}</h5>
          <br/>
            <div className="row justify-content-center">
    
              {this.formatDayCards()}
    
            </div>
          </div>
        )
      }
}


export default WeekContainer;

