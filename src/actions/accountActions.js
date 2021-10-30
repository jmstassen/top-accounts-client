import { FETCH_ACCOUNTS, NEW_ACCOUNT } from "./types";

export const fetchAccounts = () => dispatch => {
  fetch("http://localhost:3000/accounts")
    .then(res => res.json())
    .then(accounts => dispatch({
      type: FETCH_ACCOUNTS,
      payload: accounts
    })
  );
};

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