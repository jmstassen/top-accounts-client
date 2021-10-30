import './App.css';
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAccounts } from "./actions/accountActions";
import AccountsList from './components/AccountsList';
import AccountInput from './components/AccountInput';

class App extends Component {
  componentDidMount() {
    console.log(this.props);
    this.props.fetchAccounts();
  }

  render() {
    return (
      <div className="App">
        <AccountInput />
        <h1>Top Accounts</h1>
        <AccountsList accounts={this.props.accounts} />
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