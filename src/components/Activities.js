import React from 'react'

const Activities = (props) => {

  

    return (
        <div>
          {props.activities.map(activity => 
        <div key={activity.id}>
          <p>{activity.activity_date} - {activity.activity_type} : {activity.activity_name}</p>
        </div>
      )}
        </div>
    )
}

export default Activities