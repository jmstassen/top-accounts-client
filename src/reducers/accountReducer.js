import { FETCH_ACCOUNTS, NEW_ACCOUNT } from '../actions/types';
import cuid from 'cuid';
export const cuidFn = cuid;

const initialState = {
  items: [],
  item: {}
}

export default function accountReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ACCOUNTS:
      return {
        ...state,
        items: action.payload
      };
    case NEW_ACCOUNT:
      console.log(action)
      const account = { account_name: action.payload.account_name, activities: [], people: [], id: cuidFn() }
      return {
        ...state,
        item: account
      }
    default:
      return state;
  }
};
