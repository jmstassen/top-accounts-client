import './App.css';
import React, { Component } from "react";
import { connect } from "react-redux";
import AccountsContainer from './containers/AccountsContainer';
import AccountContainer from './containers/AccountContainer';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import AllAccounts from './components/AllAccounts';
// import AccountLanding from './components/Account Landing';

class App extends Component {
  render() {
    return (     
        <>
        <Routes>
          <Route path="/" element={ <Home /> }/>
          <Route path="accounts" element={ <AllAccounts /> }/>
          <Route path="/accounts/:id" element={ <AccountContainer /> }/>
        </Routes>
        </>
    );
  }
}

export default connect( )(App);