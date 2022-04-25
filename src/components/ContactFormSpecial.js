import React, { useState } from "react";
import { faSquareXmark } from "@fortawesome/free-solid-svg-icons/faSquareXmark";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContactFormSpecial = (props) => {
  const [status, setStatus] = useState("Submit");
  const [formStatus, disableForm] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target;
    const endpoint =
      "https://b57ez6wej9.execute-api.us-east-1.amazonaws.com/default/sendContactEmail";
    // We use JSON.stringify here so the data can be sent as a string via HTTP
    const body = JSON.stringify({
      senderName: name.value,
      senderEmail: email.value,
      message: message.value,
    });
    const requestOptions = {
      method: "POST",
      body,
    };

    fetch(endpoint, requestOptions)
      .then((results) => results.json())
      .then((data) => {
        disableForm("disabled");
        setStatus("Thank You!");
        name.value = "";
        email.value = "";
        message.value = "";
        console.log(data);
      })
      .catch((error) => {
        console.log("error in the request");
      });
  };
  const exitForm = (e) => {
    let exitSelection = e.target.parentNode.parentNode.parentNode.parentNode;
    exitSelection.className = "hiddenForm";
  };

  return (
    <div className="hiddenForm">
      <div className="lightBox">
        <form className="contactForm altColor" onSubmit={handleSubmit}>
          <div className="headerContactReferral">
            <FontAwesomeIcon
              className="closeFormReferral"
              icon={faSquareXmark}
              onClick={exitForm}
            />
            <label className="secretEmail">{props.children}</label>
          </div>

          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" required />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" required />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea id="message" required />
          </div>
          <button disabled={formStatus} type="submit">
            {status}
          </button>
          <div>{props.agent}</div>
        </form>
      </div>
    </div>
  );
};

export default ContactFormSpecial;
