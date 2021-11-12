import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editActivity } from '../actions/activityActions'
import { Link } from 'react-router-dom'

class ActivityEdit extends Component {
  state = {activity_name: `${this.props && this.props.activity.activity_name}`, activity_type: `${this.props.activity.activity_type}`, activity_date: `${this.props.activity.activity_date}`}

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.editActivity(this.state, this.props.account.id, this.props.activity.id)
  }

  render() {
    return (
      <div>
        <Link to={`/accounts/${this.props.account.id}`}>back to account</Link>
        <br></br>
        <br></br>
        <h3>Edit activity:</h3>
        <br></br>
        <form onSubmit={this.handleSubmit}>
            <label>Date: </label><input
            type="date"
            value={this.state.activity_date}
            name="activity_date"
            onChange={this.handleChange}
            /><br></br><br></br>
          <label>Type: </label><select
            value={this.state.activity_type}
            name="activity_type"
            onChange={this.handleChange}>
                <option>email</option>
                <option>meeting</option>
                <option>event</option>
                <option>document</option>
                <option>financial</option>
                <option>summary</option>
                <option>objective</option>
                </select><br></br><br></br>
                <label>Description: </label><input
            type="text"
            size="50"
            value={this.state.activity_name}
            name="activity_name"
            onChange={this.handleChange}
            /><br></br><br></br>
          <input type="submit" value="update activity"/>
        </form>
      </div>
    )
  }
}

export default connect(null, { editActivity })(ActivityEdit)