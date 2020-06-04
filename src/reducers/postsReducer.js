import { ACTIONS_NAMES } from '../constants';

const INITIAL_STATE = {
  posts: [],
  loading: false,
  errorMessage: '',
}

const users = (state = INITIAL_STATE, action) => {
  const { type } = action;
  const { getPosts } = ACTIONS_NAMES;
  switch(type) {
    case getPosts:
      return {
        ...state,
        posts: action.payload,
        loading: false,
      }
    default:
      return state;
  }
}

export default users;