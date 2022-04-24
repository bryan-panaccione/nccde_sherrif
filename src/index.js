import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import About from "./components/routes/about";
import Property_Page from "./components/routes/properties";
import Contact from "./components/routes/contact";
import Realtors from "./components/routes/realtors";
import Contractors from "./components/routes/contractors";
import Tradesmen from "./components/routes/tradesmen";
import Lenders from "./components/routes/lenders";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="account" element={<Property_Page />} />
      <Route path="properties" element={<Property_Page />} />
      <Route path="realtors" element={<Realtors />} />
      <Route path="contractors" element={<Contractors />} />
      <Route path="tradesmen" element={<Tradesmen />} />
      <Route path="lenders" element={<Lenders />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
