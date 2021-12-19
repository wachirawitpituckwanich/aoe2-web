import React from "react";
import Lottie from "react-lottie-player";
import cube from "../assets/animations/87474-duo-cubes-loader-2.json";
import "../assets/css/anim.css";
const Animation = () => {
  return (
    <div className="anim-ctn">
      <Lottie
        loop
        animationData={cube}
        play
        style={{ width: 300, height: 300, float: "center" }}
      />
    </div>
  );
};
export default Animation;
