import React, { Component } from 'react';
import './App.css';

class Branch extends Component {
  constructor(props){
    super(props)
    this.state={
      x:this.props.x,
      y:this.props.y,
      z:this.props.z
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.x !== this.state.x) {
      this.setState({ x: nextProps.x});
    }
    if (nextProps.y !== this.state.y){
      this.setState({ y: nextProps.y})
    }

  }

  render() {
    var branchStyle ={
      border: '1px dotted blue',
      position:'absolute',
      transform: `translate(${this.state.x}px,${this.state.y}px) rotate(90deg)` ,
      transformOrigin: `50px 50px`,
      zIndex: this.state.z
  }
    return (
      <div style={branchStyle}>
     <p>branch {this.state.x} {this.state.y}</p>
      </div>
    );
  }
}

export default Branch;