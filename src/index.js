import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import rootReducer from './reducers/index';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import App from './App';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
    <Provider store={store}>
      <Router>
      <nav>
          <Link to="/">Home</Link> | <Link to="/accounts">Accounts</Link>
        </nav>
        <div className="app">
          <App />
          </div>
      </Router>
    </Provider>,
  document.getElementById('root')
);
