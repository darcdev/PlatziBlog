import { GET_USERS, LOADING, ERROR } from '../types/userTypes';

const INITIALSTATE = {
  users: [],
  loading: false,
  error: false,
};

export default (state = INITIALSTATE, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case LOADING: {
      return { ...state, loading: true };
    }
    case ERROR: {
      return { ...state, error: action.payload, loading: false };
    }
    default:
      return state;
  }
};