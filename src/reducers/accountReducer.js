import { FETCH_ACCOUNTS, ADD_ACCOUNT } from '../actions/types';

export default function accountReducer(state = {accounts: [], current_account:{}}, action) {
  switch(action.type) {
    case FETCH_ACCOUNTS:
      return {accounts: action.payload, current_account: action.payload[0]}
    case ADD_ACCOUNT:
      return {...state, accounts: [...state.accounts, action.payload]}
    default:
      return state
  }
};
