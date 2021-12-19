import React from "react";
import Lottie from "react-lottie-player";
import error from "../assets/animations/404.json";
import "../assets/css/error.css";
const Error = () => {
  return (
    <div className="main">
    <div className="anim-ctn">
      <Lottie animationData={error} play style={{ width: '100%', height: '100%' }} />
    </div>
    <h2>Page not found</h2>
    </div>
  );
};
export default Error;
