import axios from 'axios';
import { GET_USERS } from '../types/userTypes';

export const getUsers = () => async (dispatch) => {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/users'
  );
  dispatch({
    type: GET_USERS,
    payload: response.data,
  });
};
