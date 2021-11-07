import { FETCH_ACCOUNTS, NEW_ACCOUNT, CHANGE_CURRENT_ACCOUNT, EDIT_ACCOUNT_NAME, DELETE_ACCOUNT } from "./types";

export const fetchAccounts = () => dispatch => {
  fetch("http://localhost:3000/api/v1/accounts")
    .then(res => res.json())
    .then(data => dispatch({
      type: FETCH_ACCOUNTS,
      payload: data
    })
  );
};

export const createAccount = (accountData) => dispatch => {
  fetch("http://localhost:3000/api/v1/accounts", {
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