import React, { Component } from "react";
import Die from "./Die";
import "./RollDice.css";

class RollDice extends Component {
  static defaultProps = {
    diceFaceClass: [
      "fa-dice-one", // array position 0
      "fa-dice-two",
      "fa-dice-three",
      "fa-dice-four",
      "fa-dice-five",
      "fa-dice-six",
    ],
  };
  constructor(props) {
    super(props);
    this.roll = this.roll.bind(this);
    this.state = {
      faceOne: `fa-dice-one`,
      faceTwo: `fa-dice-one`,
    };
  }
  roll() {
    let randA = Math.floor(Math.random() * this.props.diceFaceClass.length);
    let randB = Math.floor(Math.random() * this.props.diceFaceClass.length);
    let diceFaceOne = this.props.diceFaceClass[randA];
    let diceFaceTwo = this.props.diceFaceClass[randB];

    this.setState({
      faceOne: `${diceFaceOne}`,
      faceTwo: `${diceFaceTwo}`,
    });
  }

  render() {
    return (
      <div>
        <Die diceIcon={this.state.faceOne} />
        <Die diceIcon={this.state.faceTwo} />
        <button className="RollDice-button" onClick={this.roll}>
          ROLL 🎲
        </button>
      </div>
    );
  }
}

export default RollDice;
