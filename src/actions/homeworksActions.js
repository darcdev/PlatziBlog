import axios from 'axios';
import { GET_HOMEWORKS, LOADING, ERROR } from '../types/homeworksTypes';

export const getHomeworks = () => async (dispatch) => {
  dispatch({
    type: LOADING,
  });
  try {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/todos'
    );
    const homeworks = {};

    response.data.map((homework) => {
      homeworks[homework.userId] = {
        ...homeworks[homework.userId],
        [homework.id]: {
          ...homework,
        },
      };
    });

    dispatch({
      type: GET_HOMEWORKS,
      payload: homeworks,
    });
  } catch (err) {
    console.log('Error:', err.message);
    dispatch({
      type: ERROR,
      payload: 'Ha ocurrido un error , intentelo de nuevo',
    });
  }
};
