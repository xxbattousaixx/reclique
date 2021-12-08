import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App/>}> 
    </Route>
    </Routes>
  </Router>,
  document.getElementById('root')
);


