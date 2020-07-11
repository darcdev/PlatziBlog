import axios from 'axios';
import {
  GET_PUBLICATIONS,
  GET_BY_USER,
  LOADING,
  ERROR,
  COM_LOADING,
  COM_ERROR,
  COM_UPDATE,
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
    dispatch({
      type: ERROR,
      payload: 'Ha ocurrido un error , intentelo de nuevo',
    });
  }
};

export const getPublicationsByUser = (key) => async (dispatch, getState) => {
  dispatch({
    type: LOADING,
  });
  const { users } = getState().userReducer;
  const { publications } = getState().publicationsReducer;

  const userId = users[key].id;

  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    );
    const newPublication = response.data.map((publication) => ({
      ...publication,
      comments: [],
      open: false,
    }));
    const updated_publications = [...publications, newPublication];
    dispatch({
      type: GET_BY_USER,
      payload: updated_publications,
    });
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
  } catch (err) {
    dispatch({
      type: ERROR,
      payload: 'publicacion no disponible',
    });
  }
};

export const openClose = (pub_key, com_key) => (dispatch, getState) => {
  const { publications } = getState().publicationsReducer;
  const select = publications[pub_key][com_key];

  const updated = {
    ...select,
    open: !select.open,
  };

  const update_publications = [...publications];
  update_publications[pub_key] = [...publications[pub_key]];
  update_publications[pub_key][com_key] = updated;

  dispatch({
    type: GET_BY_USER,
    payload: update_publications,
  });
};

export const getComments = (pub_key, com_key) => async (dispatch, getState) => {
  dispatch({
    type: COM_LOADING,
  });
  const { publications } = getState().publicationsReducer;
  const select = publications[pub_key][com_key];

  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/comments?postId=${select.id}`
    );
    const updated = {
      ...select,
      comments: response.data,
    };

    const update_publications = [...publications];
    update_publications[pub_key] = [...publications[pub_key]];
    update_publications[pub_key][com_key] = updated;

    dispatch({
      type: COM_UPDATE,
      payload: update_publications,
    });
  } catch (error) {
    dispatch({
      type: COM_ERROR,
      payload: 'No se pudieron obtener los comentarios de esta publicacion',
    });
  }
};
