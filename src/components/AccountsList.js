import React from 'react';
import { Link } from 'react-router-dom';
import { deleteAccount } from '../actions/accountActions'
import { connect } from 'react-redux';

const AccountsList = (props) => {

  const handleDelete = (account) => {
    var result = window.confirm("Are you sure you want to delete this Account?");
    if (result==true) {
      props.deleteAccount(account.id);
   }
  }

  return (
    <div>
      {props.accounts.map(account => 
        <div key={account.id}>
            <p><Link to={`/accounts/${account.id}`}>{account.account_name}</Link> | <button onClick={() => handleDelete(account)}>delete</button></p>
        </div>
      )}
    </div>
  )
  
}

export default connect(null, { deleteAccount })(AccountsList)