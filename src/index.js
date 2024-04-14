import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Music from './Music';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Music />
  </React.StrictMode>
);


