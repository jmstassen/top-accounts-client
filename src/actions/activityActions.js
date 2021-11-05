import { ADD_NEW_ACTIVITY, EDIT_ACTIVITY, DELETE_ACTIVITY } from "./types";

export const createAccount = (accountData) => dispatch => {
  console.log(accountData)
  fetch("http://localhost:3000/accounts", {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(accountData)
  })
    .then(res => res.json())
    .then(account => dispatch({
      type: NEW_ACCOUNT,
      payload: account
    })
  );
};