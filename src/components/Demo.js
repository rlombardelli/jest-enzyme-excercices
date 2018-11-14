import React from "react";
import * as utils from "../utils";

class Demo extends React.Component {
  render() {
    return (
      <div style={{ marginTop: "1rem" }}>
        <div className="row">
          <span>Multiply: {utils.multiply(this.props.numbers)}</span>
        </div>
        <div className="row">
          <span>Sum: {utils.sum(this.props.numbers)}</span>
        </div>
        <br />
        {utils.multiply(this.props.numbers) > 9000 && (
          <div>
            <span>MULTIPLY OVER 9000 !!!</span>
            <br />
          </div>
        )}
        {utils.sum(this.props.numbers) < 500 && <span>SUM BELOW 500 :(</span>}
      </div>
    );
  }
}

export default Demo;
