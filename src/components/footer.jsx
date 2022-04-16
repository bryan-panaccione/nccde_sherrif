import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

class Footer extends Component {
  state = {};
  render() {
    return (
      <footer id="footer">
        <div className="container">
          <div className="row double">
            <div className="6u">
              <div className="8u">
                <h3>Local Connections</h3>
                <ul>
                  <li>
                    <a href="#">Realtors</a>
                  </li>
                  <li>
                    <a href="#">Contractors</a>
                  </li>
                  <li>
                    <a href="#">Tradesmen</a>
                  </li>
                  <li>
                    <a href="#">Lenders</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="6u">
              <h2>We Want Your Feedback</h2>
              <p>
                This project is a developed by investors, for investors to make
                due-diligence easy, fast and simple. If you have features to
                recommend, bugs to report or compliments to give, please reach
                out to{" "}
                <a href="mailto:bp@rqpcreative.com">bp@rqpcreative.com</a>
              </p>
              <div className="icons">
                <FontAwesomeIcon icon={faFacebook} />

                <FontAwesomeIcon icon={faLinkedin} />

                <FontAwesomeIcon icon={faGithub} />
              </div>
            </div>
            <ul className="copyright">
              <li>
                <p className="footerIconWP">
                  Designed, Developed and Copyrighted by RQP Creative
                </p>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
