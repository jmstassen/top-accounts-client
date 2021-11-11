import React from 'react';

const AccountName = (props) => {

  return (
    <div>
      <h3>{props.account && props.account.account_name}</h3>
    </div>
  )
}

export default AccountName