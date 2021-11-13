import React, { useEffect } from "react";
import { connect } from 'react-redux';
import ActivitiesContainer from "./ActivitiesContainer";
import { fetchAccounts } from "../actions/accountActions";
import SummaryContainer from "./SummaryContainer";
import { useParams } from 'react-router-dom'

function AccountContainer(props) {
 
  const { fetchAccounts } = props

  useEffect(()=>{
    fetchAccounts();
  }, [fetchAccounts]);
  
  const { id } = useParams();
  
  const account = props.accounts.filter(account => account.id === parseInt(id))[0]

  return (
    <div className="account-container">
      <div className="summary-container">
        <SummaryContainer account={account}/>
      </div>
      <div className="activity-container">
        <ActivitiesContainer account={account}/>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    accounts: state.accountReducer.accounts
  }
}

export default connect(mapStateToProps, {fetchAccounts})(AccountContainer)