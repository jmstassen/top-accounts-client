import React from 'react';

const AccountName = (props) => {

  return (
    <div>
      <h2>{props.account && props.account.account_name}</h2>
    </div>
  )
}

export default AccountName