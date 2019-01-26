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
    branch_location_x:0,
    branch_name:'',
  }
  constructor() {
    super()
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.updateBranch = this.updateBranch.bind(this);
    this.action = this.action.bind(this);
  }
  updateBranch(x,name) {
    this.setState({
      branch_location_x: x,
      branch_name: name
    })
  }
  action(thing,name){
    console.log(thing,name)
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
        <Character x={this.state.branch_location_x} name={this.state.branch_name}/>
        <Branch name={'newFeature'} x={this.state.center_x-200} y={this.state.center_y} updateBranch={this.updateBranch} action={this.action}/>
        <Branch name={'development'} x={this.state.center_x-100} y={this.state.center_y} updateBranch={this.updateBranch} action={this.action}/>
        <Branch name={'master'} x={this.state.center_x} y={this.state.center_y} updateBranch={this.updateBranch} action={this.action}/>
        <Branch name={'oldBackup'} x={this.state.center_x+100} y={this.state.center_y} updateBranch={this.updateBranch} action={this.action}/>
        <Branch name={'advertisement'} x={this.state.center_x+200} y={this.state.center_y} updateBranch={this.updateBranch} action={this.action}/>
      </div>
    );
  }
}

export default App;
