import React, { Component } from 'react';
import './App.css';
import Character from './Character.js';
import Branch from './Branch.js';

class App extends Component {
  state = {
    center_x: 0,
    center_y: 0,
    width: 0,
    height: 0,
    branch_location_x:0
  }
  constructor() {
    super()
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.updateBranchLocation = this.updateBranchLocation.bind(this);
  }
  updateBranchLocation(newX) {
    this.setState({branch_location_x: newX})
  }
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ center_x: Math.floor(window.innerWidth / 2), center_y: Math.floor(window.innerHeight * 0.8), width: window.innerWidth, height: window.innerHeight });
  }

  render() {
    var appStyle = {
      position: 'relative',
    }
    return (
      <div className="App" 
      style={appStyle}
      >
        <Character x={this.state.branch_location_x}/>
        <Branch name={'feature'} x={this.state.center_x-200} y={this.state.center_y} updateBranchLocation={this.updateBranchLocation}/>
        <Branch name={'development'} x={this.state.center_x-100} y={this.state.center_y} updateBranchLocation={this.updateBranchLocation}/>
        <Branch name={'master'} x={this.state.center_x} y={this.state.center_y} updateBranchLocation={this.updateBranchLocation}/>
        <Branch name={'backup'} x={this.state.center_x+100} y={this.state.center_y} updateBranchLocation={this.updateBranchLocation}/>
        <Branch name={'test'} x={this.state.center_x+200} y={this.state.center_y} updateBranchLocation={this.updateBranchLocation}/>
      </div>
    );
  }
}

export default App;
