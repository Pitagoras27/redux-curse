import axios from 'axios';

import { ACTIONS_NAMES } from '../constants';

export const getPostForUser = key => async (dispatch, getState) => {
  const {
    getPostForUser,
    errorMessagePost,
    getUsers,
    loadingPost,
  } = ACTIONS_NAMES;

  const { posts } = getState().postsReducer;
  const { usuarios } = getState().usariosReducer;
  const userId = usuarios[key];

  dispatch({
    type: loadingPost,
    payload: true,
  })

  try {
    const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId['id']}`);
    const withComments = data.map(post => ({...post, comments: [], open: false }));

    const accumPosts = [...posts, withComments];
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
      type: errorMessagePost,
      payload: 'No se pudieron cargar las publicaciones, favor de intentar más tarde',
    });
  }
}


export const toogleComments = (indexPost, indexComment) => (dispatch, getState) => {
  const { posts } = getState().postsReducer;
  const { getPostForUser } = ACTIONS_NAMES;

  const selected = posts[0][indexComment];
  const updated = {
    ...selected,
    open: !selected.open,
  }
  const postUpdated = posts.slice(0);
  postUpdated[0] = [
    ...posts[0],
  ];
  postUpdated[0][indexComment] = updated;

  dispatch({
    type: getPostForUser,
    payload: postUpdated,
  });
}

export const getComments = (indexPost, indexComment) => async (dispatch, getState) => {
  const { getPostForUser } = ACTIONS_NAMES;
  const { posts } = getState().postsReducer;
  const selected = posts[0][indexComment];
  const { data } = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${selected.id}`);

  const setComments = {
    ...selected,
    comments: data,
  };
  
  const inmmutableClone = posts.slice(0);
  inmmutableClone[indexPost] = [
    ...posts[indexPost],
  ];

  inmmutableClone[0][indexComment] = setComments;

  dispatch({
    type: getPostForUser,
    payload: inmmutableClone,
  });
}