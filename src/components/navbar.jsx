import React, { Component, createElement } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  fa3,
  faBell,
  faFaceGrin,
} from "@fortawesome/free-solid-svg-icons";

class Navbar extends Component {
  state = {
    testData: ["dkdkj", "ldjfa;lk", "kjhdaf"],
    alertReadStatus: false,
    hasAlert: null,
    dropDownState: "hidden",
  };

  markRead = () => {
    this.setState({ alertReadStatus: true });
  };

  markUnRead = () => {
    this.setState({ alertReadStatus: false });
  };

  checkAlert = () => {
    if (this.state.dropDownState === "hidden") {
      this.setState({ dropDownState: "dropdownMenu" });
      this.markRead();
    }
    if (this.state.dropDownState === "dropdownMenu") {
      this.setState({ dropDownState: "hidden" });
    }
  };
  render() {
    return (
      <nav id={this.props.id}>
        <div className="navLogo">
          <Link to="/">
            <img className="iconLeft" src="/img/siteIcon.svg" alt="Not Found" />
          </Link>
        </div>
        <ul id="nav" className="headNavList">
          <li>
            <Link className="mainOpt" to="/properties">
              Properties
            </Link>
          </li>
          <li>
            <Link className="mainOpt" to="/contact">
              Help
            </Link>
          </li>
          <li>
            <Link className="mainOpt" to="/about">
              Account
            </Link>
          </li>

          <li>
            <FontAwesomeIcon
              icon={
                this.state.alertReadStatus && this.state.testData.length > 0
                  ? faCoffee
                  : faBell
              }
              onClick={this.checkAlert}
              className="navHeadIcon"
            />
            <div className={this.state.dropDownState}>
              {this.state.testData.map((alerts, key) => {
                return (
                  <div className="alertItem" key={key}>
                    {alerts}
                    <hr className="dropDownHR"></hr>
                  </div>
                );
              })}
            </div>
          </li>
          <li>
            <Link to="/">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/p3kwjkyx75-2342%3A3410?alt=media&token=b3052524-5dff-4f62-9bb5-95f5a657056e"
                alt="Not Found"
                className="image navHeadImage"
              />
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
