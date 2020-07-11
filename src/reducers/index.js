import { combineReducers } from 'redux';
import userReducer from './userReducer';
import publicationsReducer from './publicationsReducer';
import homeworksReducer from './homeworksReducer';

export default combineReducers({
  userReducer,
  publicationsReducer,
  homeworksReducer,
});
