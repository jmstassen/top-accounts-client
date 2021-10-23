import React, { Component } from 'react';

class AccountList extends Component {
  
  accountList = () => {
    return this.props.accounts.map(account =>
      <h1>{account.account_name}</h1>
    )
  }

  render() {
    return (
      <div>
        {this.accountList()}
      </div>
    )
  }
}

export default AccountList