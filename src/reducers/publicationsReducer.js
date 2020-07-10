import { GET_PUBLICATIONS, LOADING, ERROR } from '../types/publicationTypes';

const INITIALSTATE = {
  publications: [],
  loading: false,
  error: '',
};

export default (state = INITIALSTATE, action) => {
  switch (action.type) {
    case GET_PUBLICATIONS:
      return {
        ...state,
        publications: action.payload,
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
