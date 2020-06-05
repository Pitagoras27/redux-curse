import axios from 'axios';

import { ACTIONS_NAMES } from '../constants';

export const getPostForUser = key => async (dispatch, getState) => {
  const {
    getPostForUser,
    errorMessage,
    getUsers,
    loading,
  } = ACTIONS_NAMES;

  const { posts } = getState().postsReducer;
  const { usuarios } = getState().usariosReducer;
  const userId = usuarios[key];

  dispatch({
    type: loading,
    payload: true,
  })

  try {
    const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId['id']}`)
    const accumPosts = [...posts, data];
    const postId = accumPosts.length -1;
    const updateUsers = usuarios.slice(0);

    updateUsers[key] = {
      ...usuarios[key],
      postId,
    };

    dispatch({
      type: getUsers,
      payload: updateUsers,
    });
    
    dispatch({
      type: getPostForUser,
      payload: accumPosts,
    });

  } catch (error) {
    dispatch({
      type: errorMessage,
      payload: 'Ha ocurrido un error, favor de intentar más tarde',
    });
  }
}
