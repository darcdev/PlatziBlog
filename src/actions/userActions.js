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
    console.log('Error:', err.message);
    dispatch({
      type: ERROR,
      payload: err.message,
    });
  }
};
