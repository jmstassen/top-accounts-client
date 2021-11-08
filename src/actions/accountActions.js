import { FETCH_ACCOUNTS, ADD_ACCOUNT } from "./types";

export function fetchAccounts() {
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/accounts')
    .then(res => res.json())
    .then(accounts => dispatch({
      type: FETCH_ACCOUNTS,
      payload: accounts
    }))
    };
};

export const addAccount = (data) => {
  return (dispatch) => {
    fetch("http://localhost:3000/api/v1/accounts", {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(account => dispatch({
      type: ADD_ACCOUNT,
      payload: account
    })) 
  }
}
  