import React, { Component } from 'react';
import './App.css';

class Branch extends Component {
  constructor(props){
    super(props)
    this.state={
      x:this.props.x,
      y:this.props.x
    }
  }

  render() {
    var branchStyle ={
      backgroundColor:'blue',
      position:'absolute',
      transform: `translate(${this.state.x}px,${this.state.y}px)`,
  }
    return (
      <div>
        <div style={branchStyle}>branch</div>
      </div>
    );
  }
}

export default Branch;