import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addActivity } from '../actions/activityActions'

class ActivityInput extends Component {
  state = {activity_name: '', activity_type: '', activity_date: ''}

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.addActivity(this.state)
    
    this.setState({
      account_name: ''
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <input
            type="date"
            placeholder="activity date"
            value={this.state.activity_date}
            name="activity_date"
            onChange={this.handleChange} />
            <input
            type="text"
            placeholder="activity type"
            value={this.state.activity_type}
            name="activity_type"
            onChange={this.handleChange} />
          <input
            type="text"
            placeholder="activity name"
            value={this.state.activity_name}
            name="activity_name"
            onChange={this.handleChange} />
          <input type="submit" value="add account"/>
        </form>
      </div>
    )
  }
}

export default connect(null, { addActivity })(ActivityInput)

