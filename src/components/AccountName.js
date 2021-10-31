import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { fetchAccounts } from '../actions/accountActions'



class AccountName extends Component {

//   componentDidUpdate(nextProps) {
//     if (nextProps.newAccount) {
//       this.props.accounts.unshift(nextProps.newAccount)
//     }
//   }

  render() {
    return (
      <div>
        {this.props.item.account_name}
      </div>
    )
  }
}

// AccountsList.propTypes = {
// //   fetchAccounts: PropTypes.func.isRequired,
//   accounts: PropTypes.array.isRequired,
//   newAccount: PropTypes.object
// }

const mapStateToProps = state => ({
   item: state.accounts.item
})

export default connect(mapStateToProps, null)(AccountName)