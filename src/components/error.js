import React from 'react';
import Lottie from "react-lottie-player";
import error from '../assets/animations/80698-404-error.json'
import './anim.css'
const Error = () => {
    return(
        <div className="animCtn">
      <Lottie
        animationData={error}
        play
        style={{ width: 300, height: 300}}
      />
    </div>
    )
}
export default Error;