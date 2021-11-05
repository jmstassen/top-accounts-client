import { ADD_NEW_ACTIVITY, EDIT_ACTIVITY, DELETE_ACTIVITY } from '../actions/types';
import cuid from 'cuid';
export const cuidFn = cuid;

const initialState = {
  activities: [],
  current_summary: {},
  active_objectives: []
}

// export default function accountReducer(state = initialState, action) {
//   switch (action.type) {
//     case FETCH_ACCOUNTS:
//       const current_account = action.payload[0].id
//       return {
//         ...state,
//         accounts: action.payload,
//         current_account: current_account
//       };
//     case NEW_ACCOUNT:
//       console.log(action)
//       const account = { account_name: action.payload.account_name, activities: [], people: [], id: cuidFn() }
//       return {
//         ...state,
//         item: account
//       }
//     default:
//       return state;
//   }
// };