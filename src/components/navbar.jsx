import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, fa3, faBell } from "@fortawesome/free-solid-svg-icons";

class Navbar extends Component {
  state = {};
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
            <Link to="/">
              <FontAwesomeIcon icon={faBell} className="navHeadIcon" />
            </Link>
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
