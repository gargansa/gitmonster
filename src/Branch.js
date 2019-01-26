import React, { Component } from 'react';
import './App.css';

class Branch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      x: this.props.x,
      y: this.props.y,
      width: 100,
      height: 50
    }
  }
  

  componentDidMount(){
    if (this.props.name==='master'){
      console.log('master')
      this.props.updateBranchLocation(this.state.x)
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.x !== this.state.x) {
      this.setState({ x: nextProps.x })
    }
    if (nextProps.y !== this.state.y) {
      this.setState({ y: nextProps.y })
    }

  }

  render() {
    var branchStyle = {
      border: '1px dotted blue',
      position: 'absolute',
      width: `${this.state.width}px`,
      height: `${this.state.height}px`,
      transform: `translate(${this.state.x - this.state.width / 2}px,${this.state.y - this.state.height / 2}px)`,
    }
    return (
      <div style={branchStyle}>
        <p>{this.props.name}</p>
        <button onClick={() => this.props.updateBranchLocation(this.state.x)} >Click{this.state.x}</button>
      </div>
    );
  }
}

export default Branch;