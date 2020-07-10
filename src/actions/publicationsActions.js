import axios from 'axios';
import { GET_PUBLICATIONS, LOADING, ERROR } from '../types/publicationTypes';

export const getPublications = () => async (dispatch) => {
  dispatch({
    type: LOADING,
  });
  try {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    );
    dispatch({
      type: GET_PUBLICATIONS,
      payload: response.data,
    });
  } catch (err) {
    console.log('Error:', err.message);
    dispatch({
      type: ERROR,
      payload: 'Ha ocurrido un error , intentelo de nuevo',
    });
  }
};

export const getPublicationsByUser = (key) => async (dispatch, getState) => {
  const { users } = getState().userReducer;
  const userId = users[key].id;

  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );
  dispatch({
    type: GET_PUBLICATIONS,
    payload: response.data,
  });
};
