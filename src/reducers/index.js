import { combineReducers } from 'redux';
import accounts from './accounts';
// import activities from './activities';

const rootReducer = combineReducers({
  accounts,
  // activities
});

export default rootReducer