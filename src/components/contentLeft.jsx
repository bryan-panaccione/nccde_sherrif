import React, { Component } from "react";

class ContentLeft extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <div className="row infoSection">
          <div className="6u contentLeft">{this.props.children[0]}</div>
          <div className="6u descriptionRight">{this.props.children[1]}</div>
        </div>
      </div>
    );
  }
}

export default ContentLeft;
