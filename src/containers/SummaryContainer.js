import React, { Component } from "react";
import { connect } from "react-redux";
import AccountName from "../components/AccountName";

class SummaryContainer extends Component {

  render() {
    return (
      <div>
        <AccountName />
      </div>
    ) 
  }
}

const mapStateToProps = state => ({
   current_account: state.current_account
})

export default connect(mapStateToProps, null)(SummaryContainer)