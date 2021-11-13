import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editAccount } from '../actions/accountActions'
import { Link } from 'react-router-dom'

class AccountEdit extends Component {
  state = {account_name: `${this.props.account.account_name}`}

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.editAccount(this.state, this.props.account.id)
    
    window.alert("Account has been updated")
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Account name:</label><input
            type="text"
            value={this.state.account_name}
            name="account_name"
            onChange={this.handleChange} />
            <br></br>
            <br></br>
          <input type="submit" value="update account"/> | <Link to={`/accounts/`}>back to accounts</Link>
        </form>
      </div>
    )
  }
}

export default connect(null, { editAccount })(AccountEdit)