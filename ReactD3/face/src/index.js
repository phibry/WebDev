import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { csv } from 'd3';
import './styles.css';
import { message } from './Message';

const csvUrl =
  'https://gist.githubusercontent.com/phibry/92ea033037a1e5470302a2978269bc05/raw/CSSNamedColors.csv';

// React Component
const App = () => {
  // State
  const [data, setdata] = useState(null);

  useEffect(() => {
    csv(csvUrl).then(setdata);
  }, []);
  // empty array as dependencies for running the fetch one time

  return <pre>{data ? message(data) : 'Loading...'}</pre>;
};
const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
