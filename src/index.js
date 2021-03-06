import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App.js";
import "./styles/index.css";
import "tachyons";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
