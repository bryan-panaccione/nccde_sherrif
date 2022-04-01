import React, { Component } from "react";
import Dashcard from "./dashcard";

class ExportCard extends Component {
  state = {};
  render() {
    return (
      <Dashcard>
        <div>
          Export Collection: <button>Go</button>
        </div>
      </Dashcard>
    );
  }
}

export default ExportCard;
