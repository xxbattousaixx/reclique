import React from 'react';
import App from './Home.js'
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
ReactDOM.render(
  <BrowserRouter>
      <App />
  </BrowserRouter>
  , document.getElementById('root')
);