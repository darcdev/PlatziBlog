import { GET_HOMEWORKS, LOADING, ERROR } from '../types/homeworksTypes';

const INITIALSTATE = {
  homeworks: [],
  loading: false,
  error: '',
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
    default:
      return state;
  }
};
