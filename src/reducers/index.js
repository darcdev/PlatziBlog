import { combineReducers } from 'redux';
import userReducer from './userReducer';
import publicationsReducer from './publicationsReducer';
export default combineReducers({
  userReducer,
  publicationsReducer,
});
