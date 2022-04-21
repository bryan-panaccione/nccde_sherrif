import React, { Component } from "react";

class ContentLeft extends Component {
  state = {};
  render() {
    return (
      <div className="row">
        <div className="8u contentLeft">{this.props.children[0]}</div>
        <div className="4u descriptionRight">{this.props.children[1]}</div>
      </div>
    );
  }
}

export default ContentLeft;
