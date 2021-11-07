import { combineReducers } from 'redux';
import accountReducer from './accountReducer';
// import activities from './activities';

const rootReducer = combineReducers({
  accountReducer,
  // activities
});

export default rootReducer