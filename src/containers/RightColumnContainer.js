import React, { Component } from "react";
import { connect } from "react-redux";
import AccountInput from "../components/AccountInput";
import AccountsList from "../components/AccountsList";

class RightColumnContainer extends Component {

  render() {
    return (
      <div>
        <p>My Top Accounts</p>
        <AccountsList />
        <AccountInput />
      </div>
    )
  }
}

const mapStateToProps = state => ({
   accounts: state.accounts,
   new_account: state.accounts.new_account
})

export default connect(mapStateToProps, null)(RightColumnContainer)