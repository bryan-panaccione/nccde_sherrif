import React, { Component } from "react";
import Dashcard from "./dashcard";

class PropertyView extends Component {
  state = {};
  render() {
    return (
      <Dashcard>
        <div>
          <div>
            <p>Address</p>
          </div>
          <p>Thrhhc hhgij vfgjhd chjjvfhjj gdghbgghbgj bbjjjgffgh bbhgh</p>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/vyqgux63omn-2692%3A3314?alt=media&token=ca9d2a64-a827-4b99-bcd1-9369e09cf79f"
            alt="Not Found"
            className="rating"
          />
          <div className="button flex-row-vcenter-hcenter">
            <p className="txt-817">Add to cart</p>
          </div>
        </div>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/vyqgux63omn-2848%3A3122?alt=media&token=10b85431-755e-43f8-81b9-919acebc4e8e"
          alt="Not Found"
          className="productimage"
        />
      </Dashcard>
    );
  }
}

export default PropertyView;
