import React, { Component } from "react";

class PriceCard extends Component {
  state = {};
  render() {
    return (
      <div className="8u card-primary">
        <div className="cardGuts priceContainer">{this.props.children}</div>
      </div>
    );
  }
}

export default PriceCard;
