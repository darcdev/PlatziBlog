import {
  GET_PUBLICATIONS,
  LOADING,
  ERROR,
  GET_BY_USER,
  COM_ERROR,
  COM_LOADING,
} from '../types/publicationTypes';

const INITIALSTATE = {
  publications: [],
  loading: false,
  error: '',
  comm_error: '',
  com_loading: '',
};

export default (state = INITIALSTATE, action) => {
  console.log(action.payload);

  switch (action.type) {
    case GET_PUBLICATIONS:
      return {
        ...state,
        publications: action.payload,
        loading: false,
        error: '',
      };
    case GET_BY_USER:
      return {
        ...state,
        publications: action.payload,
        loading: false,
        error: '',
      };
    case LOADING: {
      return { ...state, loading: true };
    }
    case COM_ERROR: {
      return { ...state, error: action.payload, loading: false };
    }
    case COM_LOADING: {
      return { ...state, loading: true };
    }
    case ERROR: {
      return { ...state, error: action.payload, loading: false };
    }
    default:
      return state;
  }
};
