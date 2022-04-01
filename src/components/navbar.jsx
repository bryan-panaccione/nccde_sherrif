import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, fa3, faBell } from "@fortawesome/free-solid-svg-icons";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav>
        <div className="navLogo">
          <Link to="/">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/p3kwjkyx75-2166%3A2676?alt=media&token=907a9044-2503-4778-b808-c1b8eb15f2f1"
              alt="Not Found"
            />
          </Link>
        </div>
        <ul id="nav" className="headNavList">
          <li>
            <Link className="mainOpt" to="/home">
              Home
            </Link>
          </li>
          <li>
            <Link className="mainOpt" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="mainOpt" to="/contact">
              Contact
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
