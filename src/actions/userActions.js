import axios from 'axios';
import { GET_USERS, LOADING, ERROR } from '../types/userTypes';

export const getUsers = () => async (dispatch) => {
  dispatch({
    type: LOADING,
  });
  try {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/users'
    );
    dispatch({
      type: GET_USERS,
      payload: response.data,
    });
  } catch (err) {
    dispatch({
      type: ERROR,
      payload: 'Ha ocurrido un error , intentelo de nuevo',
    });
  }
};
