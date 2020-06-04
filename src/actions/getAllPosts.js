import axios from 'axios';

import { ACTIONS_NAMES } from '../constants';

export const getAllPost = () => async dispatch => {
  const { loading, getPosts, errorMessage } = ACTIONS_NAMES;
  dispatch({
    type: loading,
    payload: true,
  });
  try {
    const fetchData = await axios.get('https://jsonplaceholder.typicode.com/posts');
    dispatch({
      type: getPosts,
      payload: fetchData.data,
    });  
  } catch (error) {
    dispatch({
      type: errorMessage,
      payload: error.message,
    });
  }
}

export const getPostForUser = id => async dispatch => {
  const { getPostForUser, errorMessage } = ACTIONS_NAMES;
  try {
    const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
    dispatch({
      type: getPostForUser,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: errorMessage,
      payload: error.message,
    });
  }
}