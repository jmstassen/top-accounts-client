import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createAccount } from '../actions/accountActions'

class AccountInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      account_name: ''
    };

    this.onChange = this.handleOnChange.bind(this);
    this.onSubmit = this.handleOnSubmit.bind(this);
  }

  handleOnChange(event) {
    this.setState({
      account_name: event.target.value,
    });
  }

  handleOnSubmit(event) {
    event.preventDefault();

    const account = {
      ...this.state,
    }
    this.props.createAccount(account)
    this.setState({
      account_name: ''
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input
            type="text"
            value={this.state.account_name}
            onChange={(event) => this.handleOnChange(event)} />
          <input type="submit" />
        </form>
      </div>
    )
  }

}

AccountInput.propTypes = {
  createAccount: PropTypes.func.isRequired
};

export default connect(null, { createAccount })(AccountInput)