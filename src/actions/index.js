import { ACTIONS_NAMES } from '../constants';

export const getAll = () => async dispatch => {
  try {
    const fetchData = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await fetchData.json();
    dispatch({
      type: ACTIONS_NAMES.getUsers,
      payload: data,
    }) 
  } catch (error) {
    console.log('error:', error.message);
  }
};