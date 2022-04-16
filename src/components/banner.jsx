import React, { Component } from "react";

class Banner extends Component {
  render() {
    return (
      <div className="banner" id={this.props.id}>
        <div className="bannerText">
          <h1 className="bannerTitle">{this.props.title}</h1>
          <div className="bannerPara">
            <div>{this.props.tagLine}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Banner;
