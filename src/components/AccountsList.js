import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchAccounts } from '../actions/accountActions'



class AccountsList extends Component {
  componentDidMount() {
    this.props.fetchAccounts();
  }

  componentDidUpdate(nextProps) {
    if (nextProps.new_account) {
      this.props.accounts.unshift(nextProps.new_account)
    }
  }

  accountsList = () => {
    return this.props.accounts.map(account =>
      <li key={account.id}>{account.account_name}</li>
    )
  }

  render() {
    console.log(this.props)
    return (
      <div>
        {this.accountsList()}
      </div>
    )
  }
}

AccountsList.propTypes = {
  fetchAccounts: PropTypes.func.isRequired,
  accounts: PropTypes.array.isRequired,
  new_account: PropTypes.object
}

const mapStateToProps = state => ({
   accounts: state.accounts.accounts,
   new_account: state.accounts.new_account
})

export default connect(mapStateToProps, { fetchAccounts })(AccountsList)