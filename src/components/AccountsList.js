import React from 'react';
import { Link } from 'react-router-dom';

const AccountsList = (props) => {

  return (
    <div>
      {props.accounts.map(account => 
        <div key={account.id}>
          {<Link to={`/accounts/${account.id}`}>{account.account_name}</Link>}
        </div>
      )}
    </div>
  )
  
}

export default AccountsList