import { FETCH_ACCOUNTS, NEW_ACCOUNT } from '../actions/types';

export default function accountReducer(state = {accounts: [], current_account:{}}, action) {
  switch(action.type) {
    case FETCH_ACCOUNTS:
      return {accounts: action.payload, current_account: action.payload[0]}
    default:
      return state
  }
};
