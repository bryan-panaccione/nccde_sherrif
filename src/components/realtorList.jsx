import React, { Component } from "react";
import * as FAKE_AGENTS from "../fakeRealtors";
import ContactFormSpecial from "./ContactFormSpecial";

class RealtorList extends Component {
  state = {
    agentList: FAKE_AGENTS.getagents(),
  };

  showForm = (e) => {
    const selectedAgent =
      e.target.parentNode.parentNode.parentNode.parentNode.parentNode;
    selectedAgent.children[0].className = "notHidden";
  };

  render() {
    return (
      <div>
        {this.state.agentList.map((item, key) => {
          return (
            <div key={key} className="10u card-primary">
              <ContactFormSpecial agent={item.agentName}>
                {" "}
                <div> {item.agentEmail}</div>{" "}
              </ContactFormSpecial>
              <div className="cardGuts">
                <div className="referralCover">
                  <img
                    src={item.coverPhoto}
                    alt="coverImage"
                    className="refCover"
                  />
                </div>
                <div className="referralWords">
                  <img
                    src={item.profilePhoto}
                    alt="profileImage"
                    className="refProfile"
                  />
                  <div className="referralWordsOnly">
                    <h2 className="agentTitle">
                      {item.agentName}{" "}
                      <button
                        className="contactReferralButton"
                        onClick={this.showForm}
                      >
                        Connect
                      </button>
                    </h2>
                    <p>{item.broker}</p>
                    <p>
                      {item.expertise} | Years of Experience: {item.yoe}
                    </p>
                    <p>{item.about}</p>
                    <div className="realtorIconsContainer">
                      <img
                        src="../img/tempProfiles/fairHousingRealtor.svg"
                        alt="realtor logos"
                        className="realtorIcons"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default RealtorList;
