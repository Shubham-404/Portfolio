// src/components/LoadingSpinner.js
import React from "react";
import "./styles/Loader.css"; // This is optional if you want to customize styles

const Loader = () => {
  return (
    <div className="loading-container">
      <div className="spinner"></div>
    </div>
  );
};

export default Loader;