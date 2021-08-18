import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import './common.scss';
import Routes from './Router';

// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);

