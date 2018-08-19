import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'

class App extends Component {
  state = {
    persons: [
      {username: "Doggo"},
      {username: "Meow"},
      {username: "Cow"}
    ]
  };

  switchNameHandler = (NewName) => {
    console.log("was clicked")
    this.setState({
      persons:[
        {username: "Buttes"},
        {username: "Bork"},
        {username: NewName}
      ]
    })
  };

  nameChangeHandler = (event) =>{
    this.setState({
      persons: [
        {username: event.target.value},
        {username: event.target.value},
        {username: event.target.value},
      ]
    })
  };
  

  render() {
    return (
      <div className="App">
       <h1>Assignment 1</h1>
       <UserInput name={this.state.persons[0].username} changed={this.nameChangeHandler}/>

       <UserOutput username={this.state.persons[0].username}/>
       <UserOutput username={this.state.persons[1].username}/>
       <UserOutput username={this.state.persons[2].username} click={this.switchNameHandler.bind(this,'Baxter')}/>
       <UserOutput username="Lizard"/>
      </div>
    );
  }
}

export default App;
