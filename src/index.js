import React from 'react';
import { BrowserRouter} from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import 'bootstrap';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


//This function "root" is grabbing the ID root from the div within index.html and it is Rendering the
// components withn. (React.StrictMode, BrowserRouter, and App)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
