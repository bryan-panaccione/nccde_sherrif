import React, { Component } from "react";

class Banner extends Component {
  state = {};
  render() {
    return (
      <div className="banner">
        <div className="bannerText">
          <h1 className="bannerTitle">LOREM IPSUM</h1>
          <div className="bannerPara">
            <div>Ut enim ad minim veniam quis nostrud</div>
          </div>
          <div>
            <button>Primary</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Banner;
