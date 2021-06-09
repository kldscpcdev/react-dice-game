import React, { Component } from "react";
import Die from "./Die";
import "./RollDice.css";

class RollDice extends Component {
  static defaultProps = {
    diceFaceClass: [
      "fas fa-dice-one", // array position 0
      "fas fa-dice-two",
      "fas fa-dice-three",
      "fas fa-dice-four",
      "fas fa-dice-five",
      "fas fa-dice-six",
    ],
  };
  constructor(props) {
    super(props);
    this.roll = this.roll.bind(this);
    // this.setState({
    //   diceOne: `${diceFaceOne}`,
    //   diceTwo: `${diceFaceTwo}`,
    // });
  }
  roll() {
    let rand = Math.floor(Math.random() * this.props.diceFaceClass.length);
    console.log(rand, this.props.diceFaceClass[rand]);
  }

  render() {
    return (
      <div>
        <Die />
        <Die />
        <button className="RollDice-button" onClick={this.roll}>
          ROLL 🎲
        </button>
      </div>
    );
  }
}

export default RollDice;
