import React, { Component } from "react";

class Dashcard extends Component {
  state = {};
  render() {
    return <div className="5u card-primary">{this.props.children}</div>;
  }
}

export default Dashcard;
