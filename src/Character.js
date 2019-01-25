import React, { Component } from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIgloo, faUser } from '@fortawesome/free-solid-svg-icons'
library.add(faIgloo)
library.add(faUser)



class Character extends Component {

    state = {
        x: 0,
        y: 0,
        width: 0,
        height: 0,
    }
    constructor() {
        super()
        this.move = this.move.bind(this)
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ x: Math.floor(window.innerWidth / 2), y: Math.floor(window.innerHeight * 0.7), width: window.innerWidth, height: window.innerHeight });
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
            case "up":
                current_y -= amount;
                break;
            case "down":
                current_y += amount;
                break;
        }
        this.setState({ x: current_x, y: current_y })
    }
    
    render() {
        var userStyle ={
            color:'blue',
            position:'absolute',
            transform: `translate(${this.state.x}px,${this.state.y}px)`,
        }
        return (
            <div className="Character">
                <div style={userStyle}>
                    <FontAwesomeIcon icon="user" />
                </div>
                <button onClick={() => this.move(20, "left")}>Left</button>
                <button onClick={() => this.move(20, "right")}>Right</button>
                <button onClick={() => this.move(20, "up")}>Up</button>
                <button onClick={() => this.move(20, "down")}>Down</button>
                <div>Current Location X: {this.state.x}</div>
                <div>Current Location Y: {this.state.y}</div>
                <div></div>
            </div>
        );
    }
}

export default Character;