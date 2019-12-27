import React, { Component } from 'react';
import Person from './Person/Person'
import './App.css';

class App extends Component {
  render() {

    return (
        <div className="App">
          <h2>Hi, I'm a React Element</h2>
          <Person name="Max" age="28"/>
          <Person name="Manu" age="35"> </Person>
          <Person />
        </div> 
        
      ); 
    //return React.createElement('div', {className: "App"}, React.createElement('h1', null, "I'm learning React"))
  }
}

export default App;
