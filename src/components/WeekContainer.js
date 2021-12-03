import React, { Component } from 'react'

class WeekContainer extends Component {

    state = {
        fullData: [],
        dailyData: []
      }
    

    componentDidMount = () => {
        const weatherURL =
        `http://api.openweathermap.org/data/2.5/forecast?lat=51.509865&lon=-0.118092&units=imperial&APPID=${process.env.API_KEY}`
    
        fetch(weatherURL)
        .then(res => res.json())
        .then(data => {
          const dailyData = data.list.filter(reading => reading.dt_txt.includes("18:00:00"))
          this.setState({
            fullData: data.list,
            dailyData: dailyData
          }, () => console.log(this.state))
        })
      }
    

    render() {
        return (
            <div>
                <h1>Hello world</h1>
            </div>
        )
    }
};

export default WeekContainer;

