import {
  GET_HOMEWORKS,
  LOADING,
  ERROR,
  CHANGE_USER_ID,
  CHANGE_TITLE,
} from '../types/homeworksTypes';

const INITIALSTATE = {
  homeworks: [],
  loading: false,
  error: '',
  user_id: '',
  title: '',
};

export default (state = INITIALSTATE, action) => {
  switch (action.type) {
    case GET_HOMEWORKS:
      return {
        ...state,
        homeworks: action.payload,
        loading: false,
        error: '',
      };
    case LOADING: {
      return { ...state, loading: true };
    }
    case ERROR: {
      return { ...state, error: action.payload, loading: false };
    }
    case CHANGE_USER_ID:
      return {
        ...state,
        user_id: action.payload,
      };
    case CHANGE_TITLE:
      return {
        ...state,
        title: action.payload,
      };
    default:
      return state;
  }
};
