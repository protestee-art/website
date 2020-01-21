import 'babel-polyfill'
import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import Root from './Root';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';

ReactDOM.render(
  <Root>
    <App />
  </Root>,
  document.getElementById('root')
);
