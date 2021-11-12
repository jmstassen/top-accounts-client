import { ADD_ACTIVITY, DELETE_ACTIVITY, EDIT_ACTIVITY } from "./types";

export const addActivity = (activity, accountId) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/accounts/${accountId}/activities`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(activity)
    })
    .then(res => res.json())
    .then(account => dispatch({
      type: ADD_ACTIVITY,
      payload: account
    })) 
  }
}

export const deleteActivity = (activityId, accountId) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/accounts/${accountId}/activities/${activityId}`, {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(account => dispatch({
      type: DELETE_ACTIVITY,
      payload: account
    }))
  }
}

export const editActivity = (activity, accountId, activityId) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/accounts/${accountId}/activities/${activityId}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(activity)
    })
    .then(response => response.json())
    .then(account => dispatch({
      type: EDIT_ACTIVITY,
      payload: account
    }))
  }
}
  
