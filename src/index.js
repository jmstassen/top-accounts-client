import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import rootReducer from './reducers/index';
import AccountsContainer from './containers/AccountsContainer';
import AccountContainer from './containers/AccountContainer';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import App from './App';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
    <Provider store={store}>
      <Router>
        <App />
        <nav>
          <Link to="/">Home</Link> | <Link to="/accounts/1">Accounts</Link>
        </nav>
        
        <Routes>
          <Route path="/" element={ <div className="accounts-container"><AccountsContainer /></div>} />
          <Route path="accounts" element={<div className="app">
            <div className="account-container">
              <AccountContainer />
            </div>
            <div className="accounts-container">
              <AccountsContainer />
            </div>
          </div>}> 
          <Route path='/accounts/:id' element={ () => <div className="account-container">
            <AccountContainer />
          </div>} />
          </Route>
        </Routes>
      </Router>
    </Provider>,
  document.getElementById('root')
);
