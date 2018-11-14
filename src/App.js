import React, { Component } from "react";
import Demo from "./components/Demo";

import "./App.css";

class App extends Component {
  state = {
    numbers: [1, 2]
  };

  increaseNumbers = () => {
    const newNumbers = this.state.numbers.map(elt => elt + 1);
    this.setState({ numbers: newNumbers });
  };

  addNewNumberToState = () => {
    const newNumber = Math.floor(Math.random() * Math.floor(8)) + 1;
    this.setState({ numbers: [...this.state.numbers, newNumber] });
  };

  render() {
    return (
      <div className="App">
        <h1>Demo time !</h1>
        <span>Current state: {this.state.numbers.toString()}</span>
        <br />
        <Demo numbers={this.state.numbers} />
        <br />
        <button onClick={this.increaseNumbers}>INCREASE BY ONE ALL NUMBERS IN THE STATE</button>
        <br />
        <button onClick={this.addNewNumberToState}>
          ADD A NEW RANDOM NUMBER(1-9) TO THE STATE
        </button>
      </div>
    );
  }
}

export default App;
