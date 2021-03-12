import React from 'react';
import ReactDOM from 'react-dom';
import { arc } from 'd3';
// import './styles.css';

const width = 960;
const height = 500;
const centerX = width / 2;
const centerY = height / 2;
const strokeWidth = 10;
const exeOffsetX = 90;
const eyeOffsetY = 100;
const eyeRadius = 50;

const mouthWidth = 20;
const mouthRadius = 130;

// Create a SVG-Path
const mouthArc = arc()
  .innerRadius(mouthRadius)
  .outerRadius(mouthRadius + mouthWidth)
  .startAngle(Math.PI / 2)
  .endAngle((Math.PI * 3) / 2);

const App = () => (
  // Create a SVG
  // Scaleable Vector Graphics
  <svg width={width} height={height}>
    <g transform={`translate(${centerX}, ${centerY})`}>
      <circle
        // cx={centerX}
        // cy={centerY}
        r={centerY - strokeWidth / 2}
        fill="yellow"
        stroke="black"
        strokeWidth={strokeWidth}
      ></circle>

      <circle cx={-exeOffsetX} cy={-eyeOffsetY} r={eyeRadius}></circle>

      <circle cx={+exeOffsetX} cy={-eyeOffsetY} r={eyeRadius}></circle>
      <path d={mouthArc()} />
    </g>
  </svg>
);

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
