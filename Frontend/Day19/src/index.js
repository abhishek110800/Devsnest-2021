import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import reportWebVitals from './reportWebVitals';



ReactDOM.render(
  <>
  <p>There are 4 counter component instances that each manage their own state.</p>
    <App />
    <App />
    <App />
    <App />
    </>,
    document.getElementById('root')
    );

    reportWebVitals();
