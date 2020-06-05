import { ACTIONS_NAMES } from '../constants';

const INITIAL_STATE = {
  posts: [],
  loadingPosts: false,
  errorMessagePost: '',
}

const users = (state = INITIAL_STATE, action) => {
  const { type } = action;
  const { loading, getPostForUser, errorMessage } = ACTIONS_NAMES;
  switch(type) {
    case loading:
      return {
        ...state,
        loadingPosts: action.payload,
        errorMessagePost: '',
      }
    case getPostForUser:
      return {
        ...state,
        posts: action.payload,
        loadingPosts: false,
        errorMessagePost: '',
      }
    case errorMessage:
      return {
        ...state,
        loadingPosts: false,
        errorMessagePost: action.payload,
      }
    default:
      return state;
  }
}

export default users;