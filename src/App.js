import './App.css';
import React, { Component } from "react";
import { connect } from "react-redux";
import AccountsContainer from './containers/AccountsContainer';
import AccountContainer from './containers/AccountContainer';
import { Routes, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="app">
        {/* <div className="account-container">
          <AccountContainer />
        </div>
        <div className="accounts-container">
          <AccountsContainer />
        </div> */}
      </div>
    );
  }
}

export default connect( )(App);