
import React, { Component } from 'react';
import './App.css';
import WeekContainer from './components/WeekContainer';

const refreshPage = ()=>{
  window.location.reload();
}


class App extends Component {

  render() {
    return (
      <div className="App">
        <WeekContainer />
        <br/>
        <button onClick={refreshPage}>Refresh</button>
      </div>
    );
  }
}

export default App;