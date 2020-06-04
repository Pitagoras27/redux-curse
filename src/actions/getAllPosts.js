import axios from 'axios';

import { ACTIONS_NAMES } from '../constants';

export const getPostForUser = key => async (dispatch, getState) => {
  const { getPostForUser, errorMessage } = ACTIONS_NAMES;
  const { posts } = getState().postsReducer;
  const { usuarios } = getState().usariosReducer;
  const userId = usuarios[key];
  try {
    const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId['id']}`)
    const accumPosts = [...posts, data];
    dispatch({
      type: getPostForUser,
      payload: accumPosts,
    })
  } catch (error) {
    dispatch({
      type: errorMessage,
      payload: error.message,
    });
  }
}
