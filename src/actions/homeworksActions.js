import axios from 'axios';
import {
  GET_HOMEWORKS,
  LOADING,
  ERROR,
  CHANGE_USER_ID,
  CHANGE_TITLE,
  HOMEWORK_ADDED,
} from '../types/homeworksTypes';

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
      return (homeworks[homework.userId] = {
        ...homeworks[homework.userId],
        [homework.id]: {
          ...homework,
        },
      });
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

export const changeUserId = (number) => (dispatch) => {
  dispatch({
    type: CHANGE_USER_ID,
    payload: number,
  });
};

export const changeTitle = (title) => (dispatch) => {
  dispatch({
    type: CHANGE_TITLE,
    payload: title,
  });
};
export const addHomework = (newHomework) => async (dispatch) => {
  dispatch({
    type: LOADING,
  });
  try {
    const response = await axios.post(
      'https://jsonplaceholder.typicode.com/todos',
      newHomework
    );
    console.log(response);
    dispatch({
      type: HOMEWORK_ADDED,
    });
  } catch (err) {
    dispatch({
      type: ERROR,
      payload: 'lo sentimos no se pudo agregar la tarea',
    });
  }
};
