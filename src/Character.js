import React, { Component } from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIgloo, faUser } from '@fortawesome/free-solid-svg-icons'
library.add(faIgloo)
library.add(faUser)



class Character extends Component {

    state = {
        name: '',
        x: 0,
        y: 0,
        width: 0,
        height: 0,
    }
    constructor(props) {
        super(props)
        this.move = this.move.bind(this);
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.x !== this.state.x) {
          this.setState({ x: nextProps.x })
        }
        if (nextProps.name !== this.state.name){
            this.setState({name: nextProps.name})
        }
      }
    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        // x: Math.floor(window.innerWidth / 2), 
        this.setState({ y: Math.floor(window.innerHeight * 0.7), width: window.innerWidth, height: window.innerHeight });
    }

    move(amount, direction) {
        let current_x = this.state.x
        let current_y = this.state.y

        switch (direction) {
            case "left":
                current_x -= amount;
                break;
            case "right":
                current_x += amount;
                break;
            default:
                break;

        }
        this.setState({ x: current_x, y: current_y })
    }

    render() {
        var userStyle = {
            color: 'blue',
            position: 'absolute',
            transform: `translate(${this.state.x-50}px,${this.state.y-50}px)`,
        }
        return (
            <div className="Character">
                <div style={userStyle}>
                <p>We are in {this.state.name}</p>
                    <FontAwesomeIcon icon="user" />
                </div>
            </div>
        );
    }
}

export default Character;