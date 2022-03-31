import React, { Component } from "react";
import { Link } from "react-router-dom";

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
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/about">Account</Link>
          <li>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/p3kwjkyx75-1802%3A2459?alt=media&token=3ba2693c-f1a7-4fa5-acef-a37176979b20"
              alt="Not Found"
              className="icon navHeadIcon"
            />
          </li>
          <li>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/p3kwjkyx75-2342%3A3410?alt=media&token=b3052524-5dff-4f62-9bb5-95f5a657056e"
              alt="Not Found"
              className="image navHeadImage"
            />
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
