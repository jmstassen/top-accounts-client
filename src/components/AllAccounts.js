import React, { Component } from 'react';
import AccountsList from './AccountsList';
import AccountInput from './AccountInput';
import { connect } from 'react-redux';
import { fetchAccounts } from "../actions/accountActions";


class AllAccounts extends Component {

  componentDidMount() {
    this.props.fetchAccounts()
  }

  render () {
    return (
      <div className="accounts-container">
        <AccountsList accounts={this.props.accounts}/>
        <br></br>
        <AccountInput />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    accounts: state.accountReducer.accounts
  }
}
  
export default connect(mapStateToProps, {fetchAccounts})(AllAccounts)