import React, { Component } from "react";
import { Link } from "react-router-dom";
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
                    <Link className="mainOpt" to="/realtors">
                      Realtors
                    </Link>
                  </li>
                  <li>
                    <Link className="mainOpt" to="/contractors">
                      Contractors
                    </Link>
                  </li>
                  <li>
                    <Link className="mainOpt" to="/tradesmen">
                      Tradesmen
                    </Link>
                  </li>
                  <li>
                    <Link className="mainOpt" to="/lenders">
                      Lenders
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="6u">
              <h2>We Want Your Feedback</h2>
              <h3>
                {" "}
                <Link className="mainOpt" to="/contact">
                  Contact Us
                </Link>
              </h3>
              <p>
                This project is a developed by investors, for investors to make
                due-diligence easy, fast and simple. If you have features to
                recommend, bugs to report or compliments to give, please reach
                out to{" "}
                <a href="mailto:bp@rqpcreative.com">bp@rqpcreative.com</a>
              </p>
              <div className="icons">
                <a className="iconLink" href="https://www.google.com">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a className="iconLink" href="https://www.google.com">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a className="iconLink" href="https://www.google.com">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
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
