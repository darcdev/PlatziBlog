import axios from 'axios';
import {
  GET_PUBLICATIONS,
  GET_BY_USER,
  LOADING,
  ERROR,
} from '../types/publicationTypes';

import { GET_USERS } from '../types/userTypes';

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
  const { publications } = getState().publicationsReducer;

  const userId = users[key].id;
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );
  const updated_publications = [...publications, response.data];
  const publications_key = updated_publications.length - 1;
  const updated_users = [...users];
  updated_users[key] = {
    ...users[key],
    publications_key,
  };
  dispatch({
    type: GET_USERS,
    payload: updated_users,
  });
  dispatch({
    type: GET_BY_USER,
    payload: updated_publications,
  });
};
