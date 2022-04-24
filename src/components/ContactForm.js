import React, { useState } from "react";
import RecaptchaRegular from "./recaptcha.jsx";

const ContactForm = () => {
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
  return (
    <form className="contactForm" onSubmit={handleSubmit}>
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
      <RecaptchaRegular ref={formStatus} />
    </form>
  );
};

export default ContactForm;
