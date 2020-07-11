import axios from 'axios';
import {
  GET_HOMEWORKS,
  LOADING,
  ERROR,
  CHANGE_USER_ID,
  CHANGE_TITLE,
  HOMEWORK_ADDED,
  UPDATE,
  CLEAN,
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
export const edit = (editHomework) => async (dispatch) => {
  dispatch({
    type: LOADING,
  });
  try {
    const response = await axios.put(
      `https://jsonplaceholder.typicode.com/todos/${editHomework.id}`,
      editHomework
    );
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

export const changeCheck = (user_id, tar_id) => (dispatch, getState) => {
  const { homeworks } = getState().homeworksReducer;
  const selected = homeworks[user_id][tar_id];
  const update = {
    ...homeworks,
  };
  update[user_id] = {
    ...homeworks[user_id],
  };
  update[user_id][tar_id] = {
    ...homeworks[user_id][tar_id],
    completed: !selected.completed,
  };
  dispatch({
    type: UPDATE,
    payload: update,
  });
};

export const remove = (tar_id) => async (dispatch, getState) => {
  dispatch({
    type: LOADING,
  });
  try {
    const response = await axios.put(
      `https://jsonplaceholder.typicode.com/todos/${tar_id}`
    );

    dispatch({
      type: GET_HOMEWORKS,
      payload: {},
    });
  } catch (err) {
    dispatch({
      type: ERROR,
      payload: 'servicio no disponible',
    });
  }
};
export const clean = () => (dispatch) => {
  dispatch({
    type: CLEAN,
  });
};
