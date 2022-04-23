import React, { useState } from "react";

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
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
        console.log(data);
      })
      .catch((error) => {
        document.getElementById("result-text").innerText =
          "An unkown error occured.";
      });
  };
  return (
    <form onSubmit={handleSubmit}>
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
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
