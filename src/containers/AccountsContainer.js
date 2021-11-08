import React, { Component } from "react";
import { connect } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import AccountInput from "../components/AccountInput";
import AccountsList from "../components/AccountsList";
import { fetchAccounts } from "../actions/accountActions";
import AccountContainer from "./AccountContainer";

class AccountsContainer extends Component {
  componentDidMount() {
    this.props.fetchAccounts()
  }
  
  render() {
    return (
      <div>
        <h3>My Top Accounts</h3>
        <AccountsList accounts={this.props.accounts}/>
        <br></br>
        <AccountInput />
        <Routes>
          <Route path='/accounts/:id' render={(routerProps) => <AccountContainer {...routerProps} accounts={this.props.accounts}/>}/>
        </Routes>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    accounts: state.accountReducer.accounts
  }
}

export default connect(mapStateToProps, {fetchAccounts})(AccountsContainer)