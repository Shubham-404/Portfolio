import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css"; 

// Development-only console message
if (import.meta.env.DEV) {
  console.log("%cHello Dear Sneaky Developer.", "font-size: 4em; font-weight: bold; color: white;");
  console.log("%cGo ahead and scratch all you want!", "font-size: 2em; font-weight: bold; color: gray;");
}

ReactDOM.createRoot(document.getElementById("root")).render(
    <App />
);
