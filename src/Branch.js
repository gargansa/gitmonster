import React, { Component } from 'react';
import './App.css';

class Branch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: this.props.name,
      x: this.props.x,
      y: this.props.y,
      width: 100,
      height: 50
    }
  }


  componentDidMount() {
    /// is there a better way to update when the state actually changes
    setTimeout(() => {
      if (this.props.name === 'master') {
        console.log(this.props.x)
        this.props.updateBranch(this.props.x, this.props.name)
      }
    }, 500);
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
    var cloudbranchStyle = {
      border: '1px solid pink',
      position: 'absolute',
      width: `${this.state.width}px`,
      height: `${this.state.height+50}px`,
      transform: `translate(${this.state.x - this.state.width / 2}px,${(this.state.y - this.state.height / 2) - 200}px)`,
    }
    var localbranchStyle = {
      border: '1px solid blue',
      position: 'absolute',
      width: `${this.state.width}px`,
      height: `${this.state.height}px`,
      transform: `translate(${this.state.x - this.state.width / 2}px,${this.state.y - this.state.height / 2}px)`,
    }
    return (
      <div>
        <div style={cloudbranchStyle}>
          <p>{this.state.name} Branch on github</p>
        </div>
        <div style={localbranchStyle}>
          <button onClick={() => this.props.updateBranch(this.state.x, this.state.name)} >git checkout <br/> {this.state.name}</button>
          <button onClick={() => {}} >git add .<br/></button>
          <button onClick={() => {}} >git commit -m""</button>
          <button onClick={() => {}} >git push</button>
          
          <button onClick={() => {}} >git merge</button>

        </div>
      </div>
    );
  }
}

export default Branch;