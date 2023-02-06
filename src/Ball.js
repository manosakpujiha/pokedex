import React from 'react'
import { useState, useEffect } from "react";
import logo from './images/logotwo.png'

function Ball() {
    const [angle, setAngle] = useState(0);
    useEffect(() => {
      const intervalId = setInterval(() => {
        setAngle(angle => (angle + 10) % 360);
      }, 100);
      return () => clearInterval(intervalId);
    }, []);
  return (
    <div>
        <img
            width='150px' 
            height='150px'
            src={logo}
            alt="rotating image"
            style={{ transform: `rotate(${angle}deg)` }}
      />
      </div>
  )
}
export default Ball
