import React, { useEffect } from "react";
import { connect } from 'react-redux';
import { fetchAccounts } from "../actions/accountActions";
import AccountEdit from '../components/AccountEdit';
import { useParams } from 'react-router-dom'

function EditAccountContainer(props) {
 
    const { fetchAccounts } = props

  useEffect(()=>{
    fetchAccounts();
  }, [fetchAccounts]);
  
  const { id } = useParams();
  const account = props.accounts.filter(account => account.id === parseInt(id))[0]

  return (
    <div className="account-container">
      <div className="summary-container">
        <AccountEdit account={account} />
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    accounts: state.accountReducer.accounts
  }
}

export default connect(mapStateToProps, {fetchAccounts})(EditAccountContainer)