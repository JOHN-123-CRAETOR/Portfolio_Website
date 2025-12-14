import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter  } from "react-router-dom";
import App from "./App"; // or Portfolio.jsx
import "bootstrap/dist/css/bootstrap.min.css";    // CSS first
import "bootstrap/dist/js/bootstrap.bundle.min.js"; //

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter >
      <App />
    </HashRouter >
  </React.StrictMode>
);
