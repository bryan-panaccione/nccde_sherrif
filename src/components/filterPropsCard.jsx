import React, { Component } from "react";
import Dashcard from "./dashcard";

class FilterCard extends Component {
  state = {
    value: 3,
  };
  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };
  render() {
    return (
      <Dashcard>
        <div class="filterSelectors">
          <div class="filterPair">
            <label for="status">Status</label>

            <select name="status" id="statusInput">
              <option value="400" selected="selected"></option>
              <option value="cat">Scheduled</option>
              <option value="dog">Stayed-Attorney</option>
              <option value="reptile">Other</option>
            </select>
          </div>
          <div class="filterPair">
            <label for="zipcode">Zip Code (5 digit)</label>
            <input type="postal-code" name="zipcode" />
          </div>
          <div class="filterPair">
            <label for="type">Type</label>

            <select name="type" id="typeDrop">
              <option value="400" selected="selected"></option>
              <option value="true">MTG</option>
              <option value="false">TAX</option>
              <option value="false">JUDG</option>
            </select>
          </div>
          <div class="slidecontainer filterPair">
            <label for="principal">Principal</label>

            <input
              type="range"
              id="weight"
              min="0"
              value={this.state.value}
              max="5000000"
              onChange={this.handleChange}
              step="10000"
            />
            <div className="princeValue">
              <div>$</div> <div>{this.state.value}</div>
            </div>
          </div>
        </div>
      </Dashcard>
    );
  }
}

export default FilterCard;
