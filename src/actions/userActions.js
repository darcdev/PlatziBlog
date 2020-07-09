import axios from 'axios';

export const traerTodos = () => async (dispatch) => {
  const respuesta = await axios.get(
    'https://jsonplaceholder.typicode.com/users'
  );

  dispatch({
    type: 'TRAER_USUARIOS',
    payload: respuesta.data,
  });
};
