import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {
  BrowserRouter as Router
} from 'react-router-dom';
import logger from 'redux-logger'
import reduxThunk from 'redux-thunk';

import App from './components/app';
import reducers from './reducers';

const store = applyMiddleware(logger, reduxThunk)(createStore);

ReactDOM.render(
  <Provider store={store(reducers)}>
    <Router>
      <App />
    </Router>
  </Provider>
  , document.getElementById('root'));
