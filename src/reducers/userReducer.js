import { GET_USERS } from '../types/userTypes';

const INITIALSTATE = {
  users: [],
};

export default (state = INITIALSTATE, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
      };
    default:
      return state;
  }
};
