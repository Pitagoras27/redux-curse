import axios from 'axios';
import { ACTIONS_NAMES } from '../constants';

export const getAll = () => async dispatch => {
  try {
    const fetchData = await axios('https://jsonplaceholder.typicode.com/users');
    dispatch({
      type: ACTIONS_NAMES.getUsers,
      payload: fetchData.data,
    }) 
  } catch (error) {
    console.log('error:', error.message);
  }
};