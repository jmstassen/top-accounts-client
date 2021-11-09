import { ADD_ACTIVITY } from "./types";

export const addActivity = (data) => {
  return (dispatch) => {
    fetch("http://localhost:3000/api/v1/activities", {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(account => dispatch({
      type: ADD_ACTIVITY,
      payload: account
    })) 
  }
}