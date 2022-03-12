import React from 'react';
import ReactDOM from 'react-dom';
import MainContext from "./context/MainContext";
import App from './App';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <MainContext>
      <App />
    </MainContext>
  </React.StrictMode>,
  document.getElementById('root')
);

