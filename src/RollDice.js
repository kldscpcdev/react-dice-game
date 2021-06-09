import React, { Component } from "react";
import Die from "./Die";
import "./RollDice.css";

class RollDice extends Component {
  constructor(props) {
    super(props);
    this.setState({
      diceOne: `${diceFaceOne}`,
      diceTwo: `${diceFaceTwo}`,
    });
  }

  render() {
    return (
      <div>
        <Die />
        <Die />
        <button className="RollDice-button">ROLL 🎲</button>
      </div>
    );
  }
}

export default RollDice;
