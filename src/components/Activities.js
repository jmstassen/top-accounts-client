import React from 'react'
import { connect } from 'react-redux'
import { deleteActivity } from '../actions/activityActions'
import { Link } from 'react-router-dom'

const Activities = (props) => {

   const handleDelete = (activity) => {
    var result = window.confirm("Are you sure you want to delete this Activity?");
    if (result==true) {
    props.deleteActivity(activity.id, activity.account_id)
   }
  }

    return (
        <table>
          <tr>
            <th>Date</th>
            <th>Type</th>
            <th>Description</th>
            <th>Actions</th>
            </tr>
          {props.activities && props.activities.map(activity => 
        <tr key={activity.id}>
          <td>{activity.activity_date}</td>
          <td>{activity.activity_type}</td>
          <td>{activity.activity_name}</td>
          <td><button onClick={() => handleDelete(activity)}>delete</button> | 
          <Link to={`/accounts/${activity.account_id}/activities/${activity.id}/edit`}>edit</Link></td>
        </tr>
      )}
        </table>
    )
}

export default connect(null, { deleteActivity })(Activities)