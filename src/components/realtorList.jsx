import React, { Component } from "react";
import * as FAKE_AGENTS from "../fakeRealtors";

class RealtorList extends Component {
  state = {
    agentList: FAKE_AGENTS.getagents(),
    img: "https://picsum.photos/400/200",
  };

  cardBody = {
    color: "black",
  };

  cardText = {
    display: "flex",
    marginBottom: 40,
    flexDirection: "column",
    alignItems: "flex-start",
  };

  cardInfo = {
    fontSize: 15,
  };

  cardBottom = {
    width: 100,
    fontSize: 15,
  };

  eraseCard = (e) => {
    const cardDel =
      e.target.parentNode.parentNode.parentNode.parentNode.parentNode;
    cardDel.remove();
    const cardTainer = document.querySelector(".row");
    const logo = document.querySelector(".App-logo");
    if (cardTainer.childElementCount === 2) {
      let lastTwoCard = document.querySelectorAll(".col");
      lastTwoCard.forEach((card) => card.classList.add("col2"));
    }
    if (cardTainer.childElementCount === 1) {
      const lastCard = document.querySelector(".col");
      lastCard.classList.remove("col2");
      lastCard.classList.add("col1");
    }
    if (cardTainer.childElementCount === 0) {
      //cardTainer.innerHTML = "<div>No agents remaining</div>";
      let hiddenCake = document.querySelector(".hiddenCake");
      hiddenCake.classList.remove("hiddenCake");
    }
  };

  selectCover = () => {};
  render() {
    return (
      <div>
        {this.state.agentList.map((item, key) => {
          return (
            <div key={key} className="10u card-primary">
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
                    <h2>
                      {item.agentName}{" "}
                      <button className="contactReferralButton">Contact</button>
                    </h2>
                    <p>{item.broker}</p>
                    <p>
                      {item.expertise} | Years of Experience: {item.yoe}
                    </p>
                    <p>{item.about}</p>
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
