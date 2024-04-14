import React, { useEffect, useRef } from "react";
import "./App.css";

function ProgressBar({ percentage, circleWidth }) {
  const radius = 80;
  const dashArray = radius * Math.PI * 2;
  const dashoffset = dashArray - (dashArray * percentage) / 100;
  const circleRef = useRef(null);

  useEffect(() => {
    if (circleRef.current) {
      circleRef.current.style.transition = "stroke-dashoffset 2s ease-in-out";
      circleRef.current.style.strokeDashoffset = dashoffset;
    }
  }, [percentage, dashoffset]);

  return (
    <div className="progress-bar">
      <svg
        width={circleWidth}
        height={circleWidth}
        viewBox={`0 0 ${circleWidth} ${circleWidth}`}
      >
        <defs>
          <linearGradient id="gradient">
            <stop offset="10%" stopColor="#12c2e9"></stop>
            <stop offset="50%" stopColor="#c471ed"></stop>
            <stop offset="100%" stopColor="#f64f59"></stop>
          </linearGradient>
        </defs>
        <circle
          className="circle-background"
          cx={circleWidth / 2}
          cy={circleWidth / 2}
          strokeWidth="15px"
          r={radius}
        ></circle>

        <circle
          ref={circleRef}
          className="circle-progress"
          cx={circleWidth / 2}
          cy={circleWidth / 2}
          strokeWidth="15px"
          r={radius}
          style={{
            strokeDasharray: dashArray,
          }}
          transform={`rotate(-90 ${circleWidth / 2} ${circleWidth / 2})`}
          stroke="url(#gradient)"
        ></circle>
        <text x="35%" y="55%" className="circle-text">
          {percentage}%
        </text>
      </svg>
    </div>
  );
}

export default ProgressBar;
