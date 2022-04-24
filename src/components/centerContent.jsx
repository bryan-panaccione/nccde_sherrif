import React, { Component } from "react";

class ContentCenter extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="contentCenter" id={this.props.id}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default ContentCenter;
