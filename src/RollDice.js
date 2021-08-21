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
      isRolling: false,
    };
  }
  roll() {
    //pick 2 new faces
    let randA = Math.floor(Math.random() * this.props.diceFaceClass.length);
    let randB = Math.floor(Math.random() * this.props.diceFaceClass.length);
    let diceFaceOne = this.props.diceFaceClass[randA];
    let diceFaceTwo = this.props.diceFaceClass[randB];

    // Set state with new rolls
    this.setState({
      faceOne: `${diceFaceOne}`,
      faceTwo: `${diceFaceTwo}`,
      isRolling: true,
    });

    // set rolling to false after 1 second
    setTimeout(() => {
      this.setState({ isRolling: false });
    }, 1000);
  }

  render() {
    return (
      <div>
        <div className="RollDice-dice-row">
          <Die diceIcon={this.state.faceOne} rolling={this.state.isRolling} />
          <Die diceIcon={this.state.faceTwo} rolling={this.state.isRolling} />
        </div>
        <div>
          <button
            className="RollDice-button"
            onClick={this.roll}
            disabled={this.state.isRolling}
          >
            {this.state.isRolling ? "ROLLING..." : "ROLL ME"}
          </button>
        </div>
      </div>
    );
  }
}

export default RollDice;
