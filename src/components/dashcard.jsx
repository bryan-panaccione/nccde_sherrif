import React, { Component } from "react";

class Dashcard extends Component {
  state = {};
  render() {
    return (
      <div className="5u card-primary">
        <div className="cardGuts">{this.props.children}</div>
      </div>
    );
  }
}

export default Dashcard;
