import React, { Component } from 'react';
import Person from './Person/Person'
import './App.css';

class App extends Component {
  state = {
    persons: [
      {name: 'Max', age: 28},
      {name: 'Manu', age: 29},
      {name: "Stephanie", age: 26}
    ]
  } 

  switchNameHandler = () => {
    //console.log('Was clicked!');
    // DONT DO THIS: this.state.persons[0].name = "Emmet Alfred"
    this.setState({ persons: [
                    {name: 'Maximus Desimus Meridimus', age: 28},
                    {name: 'Manu', age: 29},
                  {name: "Stephanie", age: 27}
    ]})
  }

  render() {

    return (
        <div className="App">
          <h2>Hi, I'm a React Element</h2>
          <button onClick={this.switchNameHandler}>Switch Name</button>
          <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
          <Person name={this.state.persons[1].name} age={this.state.persons[1].age}> Height: 6ft</Person>
          <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
        </div> 
        
      ); 
    //return React.createElement('div', {className: "App"}, React.createElement('h1', null, "I'm learning React"))
  }
}

export default App;
