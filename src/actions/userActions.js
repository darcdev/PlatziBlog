import axios from 'axios';
import { GET_USERS } from '../types/userTypes';

export const getUsers = () => async (dispatch) => {
  try {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/userss'
    );
    dispatch({
      type: GET_USERS,
      payload: response.data,
    });
  } catch (err) {
    console.log('Error:', err.message);
  }
};
