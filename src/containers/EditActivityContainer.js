import React, { useEffect } from "react";
import { connect } from 'react-redux';
import { fetchAccounts } from "../actions/accountActions";
import ActivityEdit from '../components/ActivityEdit';
import { useParams } from 'react-router-dom'

function EditActivityContainer(props) {
 
  useEffect(()=>{
    props.fetchAccounts();
  }, []);
  
  const { id, activity_id } = useParams();
  const account = props.accounts.filter(account => account.id == id)[0]
  const activity = account.activities.filter(activity => activity.id == activity_id)[0]

    return (
      <div className="account-container">
        <div className="summary-container">
          <ActivityEdit account={account} activity={activity}/>
        </div>
      </div>
    )
  }


const mapStateToProps = state => {
  return {
    accounts: state.accountReducer.accounts
  }
}

export default connect(mapStateToProps, {fetchAccounts})(EditActivityContainer)