import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addAccount } from '../actions/accountActions'

class AccountInput extends Component {
  state = {account_name: ''}

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.addAccount(this.state)
    
    this.setState({
      account_name: ''
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="account name"
            value={this.state.account_name}
            name="account_name"
            onChange={this.handleChange} />
          <input type="submit" value="add account"/>
        </form>
      </div>
    )
  }
}

export default connect(null, { addAccount })(AccountInput)