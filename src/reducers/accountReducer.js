import { FETCH_ACCOUNTS, ADD_ACCOUNT , ADD_ACTIVITY, DELETE_ACTIVITY } from '../actions/types';

export default function accountReducer(state = {accounts: []}, action) {
  switch(action.type) {
    case FETCH_ACCOUNTS:
      return {accounts: action.payload}
    case ADD_ACCOUNT:
      return {...state, accounts: [...state.accounts, action.payload]}
    case ADD_ACTIVITY:
      let accounts = state.accounts.map(account => {
        if (account.id === action.payload.id) {
          return action.payload
        } else {
          return account
        }
      })
      return {...state, accounts: accounts}
    case DELETE_ACTIVITY:
      let accountsDel = state.accounts.map(account => {
        if (account.id === action.payload.id) {
          return action.payload
        } else {
          return account
        }
      })
      return {...state, accounts: accountsDel}
    default:
      return state
  }
};
