import React from 'react'
import { connect } from 'react-redux'
import { deleteActivity } from '../actions/activityActions'

const Activities = (props) => {

   const handleDelete = (activity) => {
    props.deleteActivity(activity.id, activity.account_id)
   }

    return (
        <div>
          {props.activities && props.activities.map(activity => 
        <div key={activity.id}>
          <p>{activity.activity_date} - {activity.activity_type} : {activity.activity_name} <button onClick={() => handleDelete(activity)}>delete</button></p>
        </div>
      )}
        </div>
    )
}

export default connect(null, { deleteActivity })(Activities)