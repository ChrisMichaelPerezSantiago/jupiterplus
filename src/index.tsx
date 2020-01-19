import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './components/app/app';
import * as serviceWorker from './serviceWorker';
import store from './store';
import { StoreProvider } from 'easy-peasy';

ReactDOM.render(
  <Router>
    <StoreProvider store={store}>
      <App />
    </StoreProvider>
  </Router>, 
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
