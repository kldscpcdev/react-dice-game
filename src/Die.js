import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  render() {
    return (
      <div>
        <div>
          <i className={`fas ${this.props.diceIcon} Die-dice`}></i>
        </div>
      </div>
    );
  }
}

export default Die;
