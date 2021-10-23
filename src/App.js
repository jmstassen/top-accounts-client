import './App.css';
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAccounts } from "./actions/accountActions";
import AccountList from './components/AccountList';

class App extends Component {
  componentDidMount() {
    console.log(this.props);
    this.props.fetchAccounts();
  }

  handleLoading = () => {
    if (this.props.loading) {
      return <div>Loading...</div>
    } else {
      return <AccountList accounts={this.props.accounts} />
    }
  }

  render() {
    console.log(this.props.accounts);
    return (
      <div className="App">
        <h1>Top Accounts</h1>
          {this.handleLoading()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    accounts: state.accounts,
    loading: state.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAccounts: () => dispatch(fetchAccounts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);