import React from 'react';

const AccountName = (props) => {

// let account = props.accounts[props.match.params.id - 1]

  return (
    <div>
      <h3>{props.account.account_name}</h3>
    </div>
  )

}

export default AccountName