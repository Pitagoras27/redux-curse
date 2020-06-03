import axios from 'axios';
import { ACTIONS_NAMES } from '../constants';

export const getAll = () => async dispatch => {
  const { loading, getUsers, errorMessage } = ACTIONS_NAMES;
  dispatch({
    type: loading,
    payload: true,
  })
  try {
    const fetchData = await axios('https://jsonplaceholder.typicode.com/userss');
    dispatch({
      type: getUsers,
      payload: fetchData.data,
    }) 
  } catch (error) {
    dispatch({
      type: errorMessage,
      payload: error.message,
    })
  }
};