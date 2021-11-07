import React, { Component } from 'react';
import { connect } from 'react-redux';

class AccountName extends Component {

//   componentDidUpdate(nextProps) {
//     if (nextProps.newAccount) {
//       this.props.accounts.unshift(nextProps.newAccount)
//     }
//   }

  render() {
    return (
      <div>
        AccountName
      </div>
    )
  }
}

const mapStateToProps = state => ({
   current_account: state.current_account
})

export default connect(mapStateToProps, null)(AccountName)