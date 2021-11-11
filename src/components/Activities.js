import React from 'react'
import { connect } from 'react-redux'
import { deleteActivity } from '../actions/activityActions'

const Activities = (props) => {

   const handleDelete = (activity) => {
    props.deleteActivity(activity.id, activity.account_id)
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
          <td><button onClick={() => handleDelete(activity)}>delete</button></td>
        </tr>
      )}
        </table>
    )
}

export default connect(null, { deleteActivity })(Activities)