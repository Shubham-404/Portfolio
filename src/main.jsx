import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";  // ✅ Import CSS here

console.log("%cHello Dear Sneaky Developer.", "font-size: 4em; font-weight: bold; color: white;");
console.log("%cGo ahead and scrach all you want!", "font-size: 2em; font-weight: bold; color: gray;");

ReactDOM.createRoot(document.getElementById("root")).render(
    <App />
);
