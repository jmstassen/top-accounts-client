import React, { Component } from "react";
import { connect } from 'react-redux';
import ObjectivesContainer from "./ObjectivesContainer";
import ActivitiesContainer from "./ActivitiesContainer";
import { fetchAccounts } from "../actions/accountActions";
import SummaryContainer from "./SummaryContainer";

class AccountContainer extends Component {
  componentDidMount() {
    this.props.fetchAccounts()
  }
  
  render() {
    return (
      <>
        <div className="summary-container">
          <SummaryContainer />
        </div>
        <div className="objectives-container">
          <ObjectivesContainer />
        </div>
        <div className="activity-container">
          <ActivitiesContainer />
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

export default connect(mapStateToProps, {fetchAccounts})(AccountContainer)