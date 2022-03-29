import React, { Component } from "react";

class ContentLeft extends Component {
  state = {};
  render() {
    return (
      <div className="8u card">
        <div>
          <div>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/p3kwjkyx75-2342%3A3410?alt=media&token=b3052524-5dff-4f62-9bb5-95f5a657056e"
              alt="Not Found"
              className="image"
            />
          </div>
        </div>

        <div>
          <h2>Graphic Design Service</h2>

          <div>
            <p>
              Interested in setting up a unit store, but having trouble finding
              a high quality, up to date unit logo?{" "}
            </p>
            <p>
              We offer a <strong>completely free</strong> service to redraw,
              improve resolution of logos, and even create logos from scratch!{" "}
              <a title="Contact Us" href="/pages/contact-us">
                Just contact us and tell us what you need.
              </a>
            </p>
            <p>
              <em>
                If you just want an updated or new logo and no unit store,
                contact us for pricing, we are happy to help!
              </em>
            </p>
          </div>

          <a>CREATE MY DESIGN!</a>
        </div>
      </div>
    );
  }
}

export default ContentLeft;
