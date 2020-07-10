import { GET_USERS, LOADING, ERROR } from '../types/userTypes';

const INITIALSTATE = {
  publications: [],
  loading: false,
  error: '',
};

export default (state = INITIALSTATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
