import React, { useState, useCallback } from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

const width = 960;
const height = 500;
const circleRadius = 30;
const initialMousePosition = {
  x: width / 2,
  y: height / 2,
};

// React Component
const App = () => {
  // State
  const [mousePosition, setMousePosition] = useState(initialMousePosition);

  // more efficient with the useCallback hook
  const handleMouseMove = useCallback(
    (e) => {
      const { clientX, clientY } = e;
      setMousePosition({ x: clientX, y: clientY });
    },
    [setMousePosition]
  );

  return (
    <svg width={width} height={height} onMouseMove={handleMouseMove}>
      <circle cx={mousePosition.x} cy={mousePosition.y} r={circleRadius} />
    </svg>
  );
};
const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
