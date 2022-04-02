import React, { Component } from "react";
import Dashcard from "./dashcard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faCheck,
  faX,
} from "@fortawesome/free-solid-svg-icons";

class PropertyView extends Component {
  state = {
    currentPage: 1,
  };

  paginateUp = () => {
    this.setState({ currentPage: (this.state.currentPage += 1) });
  };

  paginateDown = () => {
    if (this.state.currentPage <= 1) return;
    this.setState({ currentPage: (this.state.currentPage -= 1) });
  };

  render() {
    return (
      <Dashcard>
        <div className="propinfo">
          <div>
            <div>
              <h3>Quick Facts</h3>
            </div>
            <div className="facts">
              <li>Address</li>
              <li>Status</li>
              <li>Principal</li>
            </div>
            <div>
              <p>Pro Rating: </p>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/vyqgux63omn-2692%3A3314?alt=media&token=ca9d2a64-a827-4b99-bcd1-9369e09cf79f"
                alt="Not Found"
                className="rating"
              />
            </div>
            <p>Thrhhc hhgij vfgjhd chjjvfhjj gdghbgghbgj bbjjjgffgh bbhgh</p>

            <div className="addOrNot">
              <div>
                <FontAwesomeIcon icon={faCheck} />
              </div>
              <div>
                <FontAwesomeIcon icon={faX} />
              </div>
            </div>
          </div>
          <div className="paginateControls">
            <div onClick={this.paginateDown}>
              <FontAwesomeIcon icon={faArrowLeft} />
            </div>
            {this.state.currentPage}
            <div onClick={this.paginateUp}>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </div>
        </div>
      </Dashcard>
    );
  }
}

export default PropertyView;
