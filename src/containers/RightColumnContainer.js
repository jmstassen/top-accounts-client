import React, { Component } from "react";
import { connect } from "react-redux";
import AccountsList from "../components/AccountsList";

class RightColumnContainer extends Component {

  render() {
    return <AccountsList />
  }
}

const mapStateToProps = state => ({
   accounts: state.accounts
})

export default connect(mapStateToProps, null)(SummaryContainer)