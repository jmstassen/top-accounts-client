import { FETCH_ACCOUNTS, NEW_ACCOUNT } from '../actions/types';
import cuid from 'cuid';
export const cuidFn = cuid;

const initialState = {
  accounts: [],
  current_account: {}
}

export default function accountReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ACCOUNTS:
      const current_account = action.payload[0]
      return {
        ...state,
        accounts: action.payload,
        current_account: current_account
      };
    case NEW_ACCOUNT:
      const account = { account_name: action.payload.account_name, activities: [], people: [], id: cuidFn() }
      return {
        ...state,
        new_account: account
      }
    default:
      return state;
  }
};
