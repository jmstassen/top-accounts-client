import React, { Component } from "react";
import { connect } from "react-redux";
import AccountName from "../components/AccountName";

class SummaryContainer extends Component {

  render() {
    return <AccountName />
  }

}

const mapStateToProps = state => ({
   item: state.accounts.item
})

export default connect(mapStateToProps, null)(SummaryContainer)