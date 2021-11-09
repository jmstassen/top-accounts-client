import React, { useEffect } from "react";
import { connect } from 'react-redux';
import ObjectivesContainer from "./ObjectivesContainer";
import ActivitiesContainer from "./ActivitiesContainer";
import { fetchAccounts } from "../actions/accountActions";
import SummaryContainer from "./SummaryContainer";
import { useParams } from 'react-router-dom'

function AccountContainer(props) {
 
  useEffect(()=>{
    props.fetchAccounts();
  },[])
  
  const { id } = useParams();
  const account = props.accounts[id - 1];

    return (
      <>
        <div className="summary-container">
          <SummaryContainer account={account}/>
        </div>
        <div className="objectives-container">
          <ObjectivesContainer account={account}/>
        </div>
        <div className="activity-container">
          <ActivitiesContainer account={account}/>
        </div>
      </>
    )
  }


const mapStateToProps = state => {
  return {
    accounts: state.accountReducer.accounts
  }
}

export default connect(mapStateToProps, {fetchAccounts})(AccountContainer)