import axios from 'axios';
import { GET_PUBLICATIONS } from '../types/publicationTypes';

export const getPublications = () => async (dispatch) => {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/posts'
  );
  dispatch({
    type: GET_PUBLICATIONS,
    payload: response.data,
  });
};
