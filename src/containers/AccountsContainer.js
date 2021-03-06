import React, { Component } from "react";
import { connect } from 'react-redux';
import AccountInput from "../components/AccountInput";
import AccountsList from "../components/AccountsList";
import { fetchAccounts } from "../actions/accountActions";

class AccountsContainer extends Component {
  componentDidMount() {
    this.props.fetchAccounts()
  }
  
  render() {
    return (
      <>
      <div className="accounts-container">
        <h3>My Top Accounts</h3>
        <AccountsList accounts={this.props.accounts}/>
        <br></br>
        <AccountInput />
      </div>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    accounts: state.accountReducer.accounts
  }
}

export default connect(mapStateToProps, {fetchAccounts})(AccountsContainer)