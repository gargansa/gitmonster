import React, { Component } from 'react';
import './App.css';
import Character from './Character.js';
import Branch from './Branch.js';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Character />
      <Branch x={100} y={100}/>
      </div>
    );
  }
}

export default App;
