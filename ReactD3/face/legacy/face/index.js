import React from 'react';
import ReactDOM from 'react-dom';
import { range } from 'd3';
import { Face } from './components/Face';
import './styles.css';

const width = 166;
const height = 166;

const array = range(15);

// React Component
const App = () =>
  array.map(() => (
    <Face
      width={width}
      height={height}
      centerX={width / 2}
      centerY={height / 2}
      strokeWidth={8 + Math.random() * 5}
      exeOffsetX={25 + Math.random() * 9}
      eyeOffsetY={25 + Math.random() * 9}
      eyeRadius={5 + Math.random() * 10}
      mouthWidth={7 + Math.random() * 9}
      mouthRadius={30 + Math.random() * 15}
    />
  ));

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
