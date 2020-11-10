import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

const rootEl = document.getElementById('root');

//event handler
rootEl.onclick = (evt) => {
  console.log ('handler: clicked');
  console.log (evt);
};

//event listener
rootEl.addEventListener('click', evt => {
  console.log('listener: clicked');
  console.log(evt);
})
