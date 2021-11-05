import './App.css';
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAccounts } from "./actions/accountActions";
import AccountsList from './components/AccountsList';
import AccountInput from './components/AccountInput';
import SummaryContainer from './containers/SummaryContainer';

class App extends Component {
  componentDidMount() {
    console.log(this.props);
    this.props.fetchAccounts();
  }

  render() {
    return (
      <div className="app">
        <div className="container-card">
          <SummaryContainer account={this.props.current_account} />
        </div>
        <div className="container-card">
          <h1>Objectives Container</h1>
        </div>
        <div className="right-column-card">
          <h1>My Top Accounts</h1>
          <AccountsList accounts={this.props.accounts} />
          <AccountInput />
        </div>
        <div className="activity-container">
          <h1>Activities Container</h1>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    accounts: state.accounts
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAccounts: () => dispatch(fetchAccounts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);