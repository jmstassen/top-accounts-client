import React, { Component } from "react";
import { connect } from "react-redux";
import AccountName from "../components/AccountName";

class SummaryContainer extends Component {
  
  render() {
    return (
      <div>
        <AccountName account={this.props.current_account}/>
      </div>
    ) 
  }
}

const mapStateToProps = state => ({
   current_account: state.accountReducer.current_account
})


export default connect(mapStateToProps, null)(SummaryContainer)