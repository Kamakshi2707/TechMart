 // src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css'; // Import your CSS file
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to measure performance, reportWebVitals can send results
// to the analytics endpoint, Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
