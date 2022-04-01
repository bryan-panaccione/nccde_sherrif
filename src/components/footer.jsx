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
              <div className="row collapse-at-2">
                <div className="8u">
                  <h3>Local Connections</h3>
                  <ul className="alt">
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
            </div>
            <div className="6u">
              <h2>Open to work</h2>
              <p>
                Software Engineer, Solutions Architect, Technical Project
                Manager
              </p>
              <ul className="icons">
                <li>
                  <FontAwesomeIcon icon={faFacebook} />
                </li>
                <li>
                  <FontAwesomeIcon icon={faLinkedin} />
                </li>
                <li>
                  <FontAwesomeIcon icon={faGithub} />
                </li>
              </ul>
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
      </footer>
    );
  }
}

export default Footer;
