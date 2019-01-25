import React, { Component } from 'react';
import './App.css';
import Character from './Character.js';
import Branch from './Branch.js';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Character />
      <Branch />
      </div>
    );
  }
}

export default App;
