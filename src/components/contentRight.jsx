import React, { Component } from "react";

class ContentRight extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <div className="row infoSection Right">
          <div className="6u imageRight">{this.props.children[1]}</div>
          <div className="6u descriptionLeft">{this.props.children[0]}</div>
        </div>
      </div>
    );
  }
}

export default ContentRight;
