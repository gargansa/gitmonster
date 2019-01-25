import React, { Component } from 'react';
import './App.css';
import Character from './Character.js';
import Branch from './Branch.js';

class App extends Component {
  state = {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  }
  constructor() {
    super()
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
    console.log("in app componentdidmount")
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ x: Math.floor(window.innerWidth / 2), y: Math.floor(window.innerHeight * 0.8), width: window.innerWidth, height: window.innerHeight });
  }


  render() {
    var appStyle = {
      position: 'relative',
    }
    return (
      <div className="App" 
      style={appStyle}
      >
        <Character />
        <Branch x={this.state.x-100} y={this.state.y} z={0} />
        <Branch x={this.state.x+100} y={this.state.y} z={1} />
      </div>
    );
  }
}

export default App;
